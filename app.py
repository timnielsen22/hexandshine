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

@app.route("/services/landscaping")
def landscaping_page():
    return render_template("landscaping.html")

@app.route("/services/teamclean")
def teamclean_page():
    return render_template("teamclean.html")

@app.route("/services/other")
def other_page():
    return render_template("other.html")

@app.route("/nav/contact")
def contact_page():
    return render_template("contact.html")

@ app.route("/services/toys")
def toys_page():
    return render_template("toys.html")

if __name__ == "__main__":
    app.run(debug=True)