from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

json_files= ["samples/simple_bundle.json", "samples/campaign_bundle.json"]

# Route for API call to retrieve current saved STIX objects
@app.route("/")
def index():
    bundle_objects = []
    for json_file in json_files:
        with open(json_file, "r") as file:
            bundle_objects.append(json.load(file))

    return bundle_objects

@app.route("/get/schema/list")
def getSchemaList():
    schemas = ["STIX 2.1", "STIX 2.0", "STIX 2.1 Extended"]
    return jsonify(schemas)

@app.route("/validate")
def validate():
    pass

if __name__ == "__main__":
    app.run(debug=True)