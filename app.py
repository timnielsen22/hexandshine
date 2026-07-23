from flask import Flask, request, jsonify, render_template
import resend
import os

app = Flask(__name__)

resend.api_key = os.environ.get("RESEND_API_KEY")

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

    scheduled = request.get_json()

    dates = ", ".join(scheduled["dates"])
    days = ", ".join(scheduled["days"])
    times = ", ".join(scheduled["times"])


    resend.Emails.send({
        "from": "onboarding@resend.dev",
        "to": "timnielsen22@yahoo.com",
        "subject": "New Cleaning Appointment Request",
        "html": f"""
            <h2>New Cleaning Appointment</h2>

            <p><strong>Customer Email:</strong> {scheduled["contact"]}</p>

            <p><strong>Service Type:</strong> {scheduled["type"]}</p>

            <p><strong>Dates:</strong> {dates}</p>

            <p><strong>Days:</strong> {days}</p>

            <p><strong>Times:</strong> {times}</p>

            <p><strong>Notes:</strong></p>
            <p>{scheduled["notes"]}</p>
        """
    })


    return jsonify({
        "success": True,
        "message": "Appointment request sent"
    })


if __name__ == "__main__":
    app.run(debug=True)