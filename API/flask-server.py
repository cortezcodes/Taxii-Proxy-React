from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

json_files= ["samples/simple_bundle.json", "samples/campaign_bundle.json"]

# Route for API call from homepage
@app.route("/")
def index():
    bundle_objects = []
    for json_file in json_files:
        with open(json_file, "r") as file:
            bundle_objects.append(json.load(file))

    return bundle_objects


if __name__ == "__main__":
    app.run(debug=True)