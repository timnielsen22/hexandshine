from flask import Flask, request, jsonify, render_template, json, request

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

DATA_FILE = "data/appointments.json"

@app.route("/api/save-appointment", methods=["POST"])
def save_appointment():

    new_appointment = request.get_json()

    with open(DATA_FILE, "r") as file:
        appointments = json.load(file)

    appointments.append(new_appointment)

    with open(DATA_FILE, "w") as file:
        json.dump(appointments, file, indent=4)

    return jsonify({
        "success": True,
        "message": "Appointment saved"
    })

if __name__ == "__main__":
    app.run(debug=True)