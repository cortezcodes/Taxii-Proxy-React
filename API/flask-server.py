from flask import Flask
import json

app = Flask(__name__)

# Route for API call from homepage
@app.route("/")
def index():
    with open("samples/simple_bundle.json") as file:
        data: json = json.load(file)

    return data

if __name__ == "__main__":
    app.run(debug=True)