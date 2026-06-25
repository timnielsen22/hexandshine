from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/services/cleaning")
def service_one():
    return render_template("cleaning.html")

@app.route("/nav/about")
def about_page():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)