import os
import logging
from typing import Optional, Union

from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_restful import Api, Resource, fields
from flask_sqlalchemy import SQLAlchemy

from dotenv import load_dotenv
load_dotenv()

PG_PASSWORD = os.getenv("POSTGRES_PASSWORD")

app = Flask(__name__, static_folder="frontend/resources/public")

# Surpressing Track Modifications warning
# Either config can be more robust or
# this is fine
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:password@localhost:5432/postgres'.replace("password", PG_PASSWORD)

db = SQLAlchemy(app)
api = Api(app)
ma = Marshmallow(app)
CORS(app)

class Neighbors(db.Model):
    wid = db.Column(db.Integer, primary_key=True)
    top_match_1 = db.Column(db.Integer)
    top_match_1_count = db.Column(db.Integer)
    top_match_2 = db.Column(db.Integer)
    top_match_2_count = db.Column(db.Integer)
    top_match_3 = db.Column(db.Integer)
    top_match_3_count = db.Column(db.Integer)
    top_match_4 = db.Column(db.Integer)
    top_match_4_count = db.Column(db.Integer)
    top_match_5 = db.Column(db.Integer)
    top_match_5_count = db.Column(db.Integer)
    top_match_6 = db.Column(db.Integer)
    top_match_6_count = db.Column(db.Integer)
    top_match_7 = db.Column(db.Integer)
    top_match_7_count = db.Column(db.Integer)
    top_match_8 = db.Column(db.Integer)
    top_match_8_count = db.Column(db.Integer)
    top_match_9 = db.Column(db.Integer)
    top_match_9_count = db.Column(db.Integer)
    top_match_10 = db.Column(db.Integer)
    top_match_10_count = db.Column(db.Integer)

    def __repr__(self):
        return f"<Neighbors result for {self.wid}>"


class Writers(db.Model):
    wid = db.Column(db.Integer, primary_key=True)
    writer_name = db.Column(db.String(50))
    ipi = db.Column(db.Integer)
    pro = db.Column(db.String(14))


    def __repr__(self):
        return f"<Writer name: {self.writer_name}, IPI: {self.ipi}>"

    def __str__(self):
        return f"{self.writer_name.capitalize()}"


class WriterStats(db.Model):
    wid = db.Column(db.Integer, primary_key=True)
    mode_key = db.Column(db.Integer)
    mode_time_signature = db.Column(db.Integer)
    mean_tempo = db.Column(db.Float)
    
    def __repr__(self):
        return f"<Summary Stats for: {self.wid}>"

    def __str__(self):
        return f"""{self.wid}, Mode Key: {self.mode_key}, Mode Time Signature: {self.mode_time_signature},
                Mean Tempo: {self.mean_tempo}"""


# Schema for API
# TODO: Separate into another file

class NeighborsSchema(ma.SQLAlchemySchema):
    class Meta:
        fields = ("wid", "top_match_1", "top_match_2", 
        "top_match_3", "top_match_4", "top_match_5")
        model = Neighbors


class WritersSchema(ma.SQLAlchemySchema):
    class Meta:
        fields = ("wid", "writer_name", "ipi")
        model = Writers


class WriterStatsSchema(ma.SQLAlchemySchema):
    class Meta:
        fields = ("wid", "mode_key", "mean_tempo")
        model = WriterStats

neighbors_schema = NeighborsSchema()
writers_schema = WritersSchema()
writers_schema_many = WritersSchema(many=True)
writer_stats_schema = WritersSchema()

# Methods to retrieve from API (aka views)
# TODO: Separate into another file
class RetreiveNeighbors(Resource):
    # TODO: Most of this GET could be abstracted into another func
    def get(self, wid: int):
        """Retrieves the top 5 nearest neighbors for a given writer, 
        and returns their name, rank, wid, and ipi in a JSON array.
        The values are sorted by rank. 
        
        e.g.,
        
        curl -X GET ".../neighbors/273"
        
        [
            {
                "ipi": "247688226",
                "writer_name": "LORENZO IRVING DOMINGO",
                "wid": 3684,
                "rank": 1
            },
            {
                "ipi": "228477545",
                "writer_name": "ROONEY MARK ",
                "wid": 9222,
                "rank": 2
            },
            (etc, etc...)
        ]
        """
        neighbors = Neighbors.query.get_or_404(wid)
        initial = neighbors_schema.dump(neighbors)
        neighbor_records = {}
        for name in initial:
            if "top_match" in name:
                neighbor_records[name] = initial[name]
        names_ids = Writers.query.filter(Writers.wid.in_([neighbor_records[i] for i in neighbor_records]))
        results_to_send_back = writers_schema_many.dump(names_ids)
        for record in results_to_send_back:
            for rank in neighbor_records:
                if neighbor_records[rank] == record["wid"]:
                    record["rank"] = int(rank[-1])             
        return sorted(results_to_send_back, key=lambda x: x["rank"])


class RetrieveWritersByName(Resource):
    def get(self, writers_name: str):
        """Retrievs the 50 closest writers who's names are most similar
        to the writers_name passed through. The search exludes writers
        who are not indexed in the neighbors table (to ensure they have
        neighbor results)
        
        e.g.,
        
        [
            {
                "ipi": "240089393",
                "wid": 1940,
                "writer_name": "CARTER SHAWN C"
            },
            {
                "ipi": "240089589",
                "wid": 4692,
                "writer_name": "CARTER SHAWN  "
            }
        ]
        """
        term = "%{}%".format(writers_name.upper())
        neighbors = Neighbors.query.with_entities(Neighbors.wid).all()
        just_ids = [i[0] for i in neighbors]
        results = Writers.query.filter(Writers.writer_name.like(term)).filter(Writers.wid.in_(just_ids)).limit(50).all()
        return writers_schema_many.dump(results)


class RetrieveWriterByWID(Resource):
    def get(self, wid: int):
        """Retrieves the writer corresponding to the WID, along with
        a couple of summary stats.
        
        e.g.,

        {
            "writer_name": "SCRUGGS CHARLES ",
            "wid": 7,
            "ipi": "337570160",
            "mode_key": "10",
            "mean_tempo": 120.84
        }

        """
        if not isinstance(wid, int):
            raise TypeError("WID must be int")
        if not wid < 100000000:
            raise TypeError("WID is too large")

        sql_stmt = f"""
        SELECT writers.writer_name, writers.wid, writers.ipi,
            summary_stats.mode_key, to_char(summary_stats.mean_tempo, '999D99') as mean_tempo
        FROM writers
        JOIN summary_stats
            ON summary_stats.wid = writers.wid
        WHERE writers.wid = {wid};
        """
        writer = db.session.execute(sql_stmt)
        formatted_result = dict(zip(writer.keys(),[stat for stat in writer.next()]))

        return formatted_result


class Posts(Resource):
    def get(self, ids: Optional[Union[list[int], int]]=None):
        """Retrieves a post or posts from the db corresponding to the 
        id or ids passed. If no id is passed, all posts are retrieved.
        """
        if isinstance(ids, list):
            sql_stmt = f"""
            SELECT mkdown
            FROM posts
            WHERE id in {ids};"""
        elif isinstance(ids, int):
            sql_stmt = f"""
            SELECT mkdown
            FROM posts
            WHERE id = {ids};"""
        else:
            sql_stmt = f"""
            SELECT mkdown
            FROM posts;"""
        posts = db.session.execute(sql_stmt)
        result_listing = posts.all()
        result = self.format_results(result_listing)
        return result

    def format_results(self, results: list):
        posts = {}
        for idx, row in enumerate(results):
            posts[f"{idx}"] = row[0]
        return posts

api.add_resource(RetreiveNeighbors, "/neighbors/<int:wid>")
api.add_resource(RetrieveWritersByName, "/writers/name_search/<string:writers_name>")
api.add_resource(RetrieveWriterByWID, "/writers/wid/<int:wid>")
api.add_resource(Posts, "/posts/<int:ids>")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path: str):
    if path.endswith(".css") or path.endswith(".ico") or path.endswith(".css.map"):
        filename = path.split("/")[-1]
        logging.info(filename)
        return send_from_directory(app.static_folder, filename)
    elif path.endswith(".js"):
        return send_from_directory(app.static_folder, "js/compiled/app.js")
    elif path != "" and os.path.exists(app.static_folder + '/' + path):
        logging.info(app.static_folder, path)
        return send_from_directory(app.static_folder, path)
    else:
        logging.info(app.static_folder, 'index.html')
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
   app.run(debug=True)