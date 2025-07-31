from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


USER_DB = {
    "user@example.com": "Password123!",
    "SnehaBhowmik@12": "Sneha@12",
    "TaniskaDas@40": "Taniska@40",
    "DeleenaRoy@30": "Deleena@30",
    "HimenduDebbarma@03": "Himendu@03",
    "SubhranilDey@20": "Subhranil@20"
}


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if USER_DB.get(username) == password:
        return jsonify(success=True)
    return jsonify(success=False)


if __name__ == "__main__":
    app.run(debug=True)
