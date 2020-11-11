import os

from flask import Flask
from flask_marshmallow import Marshmallow
from flask_restful import Api, Resource, fields
from flask_sqlalchemy import SQLAlchemy

from dotenv import load_dotenv
load_dotenv()

PG_PASSWORD = os.getenv("POSTGRES_PASSWORD")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:password@localhost:5432/postgres'.replace("password", PG_PASSWORD)

# Surpressing Track Modifications warning
# Either config can be more robust or
# this is fine
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
api = Api(app)
ma = Marshmallow(app)

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

class NeighborsSchema(ma.Schema):
    class Meta:
        fields = ("wid", "top_match_1", "top_match_2", "top_match_3", "top_match_4", "top_match_5")
        model = Neighbors


class WritersSchema(ma.Schema):
    class Meta:
        fields = ("wid", "writer_name", "ipi")
        model = Writers

neighbors_schema = NeighborsSchema()
writers_schema = WritersSchema()
writers_schema_many = WritersSchema(many=True)

# Methods to retrieve from API
# TODO: Separate into another file

class RetreiveNeighbors(Resource):
    def get(self, wid):
        neighbors = Neighbors.query.get_or_404(wid)
        return neighbors_schema.dump(neighbors)


class RetrieveWritersByName(Resource):
    def get(self, writers_name):
        results = Writers.query.filter(Writers.writer_name.like(f"%{writers_name}%")).limit(50).all()
        return writers_schema_many.dump(results)


class RetrieveWriterByWID(Resource):
    def get(self, wid):
        writers = Writers.query.get_or_404(wid)
        return writers_schema.dump(writers)


api.add_resource(RetreiveNeighbors, "/neighbors/<int:wid>")
api.add_resource(RetrieveWritersByName, "/writers/name_search/<string:writers_name>")
api.add_resource(RetrieveWriterByWID, "/writers/wid/<int:wid>")

if __name__ == "__main__":
   app.run(debug=True)