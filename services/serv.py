from flask import Flask
from flask_cors import CORS
from model import blogGenerator


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origin": "*"}})

# route define for api testing purpose
@app.route("/serv/v1")
def test():
    return {"success": True, "statusCode": 200}

@app.route("/serv/v1/blogs")
def blogs():
    res = blogGenerator()
    return {"success": True, "statusCode": 201, "data": res}

if __name__ == "__main__":
    app.run(debug=True)
    print("🤖 api is listening")