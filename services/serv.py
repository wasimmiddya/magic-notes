from flask import Flask, request
from flask_cors import CORS
from model import blogGenerator


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origin": "*"}})

# route define for api testing purpose
@app.route("/serv/v1")
def test():
    json = request.get_json()
    print(json)
    return {"success": True, "statusCode": 200}

# route define for generating blogs
@app.route("/serv/v1/blogs", methods=["POST"])
def blogs():
    req_body = request.get_json()
    response = blogGenerator(req_body["blogTopic"], req_body["blogStyle"], req_body["words"])
    print(response)
    return {"success": True, "statusCode": 201, "data": response}

if __name__ == "__main__":
    app.run(debug=True)
    print("🤖 api is listening")