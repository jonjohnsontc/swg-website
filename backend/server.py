import os

from flask import Flask
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_restful import Api, Resource, fields
from flask_sqlalchemy import SQLAlchemy

from dotenv import load_dotenv
load_dotenv()

PG_PASSWORD = os.getenv("POSTGRES_PASSWORD")

# https://flask.palletsprojects.com/en/1.1.x/patterns/singlepageapplications/
app = Flask(__name__, static_folder="frontend/resources/public", static_url_path="/app")
@app.route("/heartbeat")
def heartbeat():
    return {"status": "healthy"}

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")

# app config
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:password@localhost:5432/postgres'.replace("password", PG_PASSWORD)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

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


# Schema for API
# TODO: Separate into another file

class NeighborsSchema(ma.SQLAlchemySchema):
    class Meta:
        fields = ("wid", "top_match_1", "top_match_2", "top_match_3", "top_match_4", "top_match_5")
        model = Neighbors


class WritersSchema(ma.SQLAlchemySchema):
    class Meta:
        fields = ("wid", "writer_name", "ipi")
        model = Writers

neighbors_schema = NeighborsSchema()
writers_schema = WritersSchema()
writers_schema_many = WritersSchema(many=True)

# Methods to retrieve from API (aka views)
# TODO: Separate into another file
class RetreiveNeighbors(Resource):
    # TODO: Most of this GET could be abstracted into another func
    def get(self, wid):
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
    def get(self, writers_name):
        term = "%{}%".format(writers_name.upper())
        neighbors = Neighbors.query.with_entities(Neighbors.wid).all()
        just_ids = [i[0] for i in neighbors]
        results = Writers.query.filter(Writers.writer_name.like(term)).filter(Writers.wid.in_(just_ids)).limit(50).all()
        return writers_schema_many.dump(results)


class RetrieveWriterByWID(Resource):
    def get(self, wid):
        writers = Writers.query.get_or_404(wid)
        return writers_schema.dump(writers)


api.add_resource(RetreiveNeighbors, "/neighbors/<int:wid>")
api.add_resource(RetrieveWritersByName, "/writers/name_search/<string:writers_name>")
api.add_resource(RetrieveWriterByWID, "/writers/wid/<int:wid>")

if __name__ == "__main__":
   app.run(debug=True, host="0.0.0.0")