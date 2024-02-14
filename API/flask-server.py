from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Route for API call from homepage
@app.route("/")
def index():
    with open("samples/simple_bundle.json") as file:
        data: json = json.load(file)

    return data

if __name__ == "__main__":
    app.run(debug=True)