let selectedDates = [];
let days = [];

document.addEventListener('DOMContentLoaded', function () {

    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: 'dayGridMonth',

        dateClick: function(info) {

            const date = info.dateStr;

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (date < today) {
                return;
            }

            if (!selectedDates.includes(date) && selectedDates.length >= 3) {
                alert("You can only select up to 3 days");
                return;
            }

            if (selectedDates.includes(date)) {
                selectedDates = selectedDates.filter(d => d !== date);
                info.dayEl.style.backgroundColor = '';
            } else {
                selectedDates.push(date);
                info.dayEl.style.backgroundColor = '#cce5ff';
            }
        },

        dayCellDidMount: function(info) {

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const cellDate = new Date(info.date);

            if (cellDate < today) {
                info.el.style.backgroundColor = "#ddd";
                info.el.style.color = "#888";
                info.el.style.cursor = "not-allowed";
            }
        }

    });

    calendar.render();

    document.getElementById("submitDays").addEventListener("click", function () {

        if (selectedDates.length < 1) {
            alert("Select at least 1 day");
            return;
        }

        clientEmail = document.getElementById("email").value;

        if(clientEmail === "") { 
            alert("Please enter your email address");
            return;
        }

        const timeModal = document.getElementById("timeModal");
        timeModal.classList.toggle("hidden");

        selectedDates.sort();

        days = selectedDates.map(date => 
            new Date(date + "T12:00:00").toLocaleDateString("en-US", {
                weekday: "long"
            })
        );

        weekendValues();
        fillCard();

    });

});

const cardInfo = {

    weekday: [
        'start',
        '2:45',
        '3:00',
        '3:30',
        '4:00',
        '4:30',
        '5:00',
        '6:00'
    ],

    weekend: [
        'start',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:20',
        '1:00',
        '1:30',
        '2:00',
        '2:30',
        '3:00',
        '3:30',
        '4:00',
        '4:30',
    ]

};

let selectOptions = [];

function weekendValues() {

    let trueValues = [];

    days.forEach(d => {

        if (d === "Saturday" || d === "Sunday") {
            trueValues.push(true);
        }
        else {
            trueValues.push(false);
        }

    });

    trueValues.forEach(day => {
        if(day === true){
            selectOptions.push(cardInfo.weekend);
        }
        else {
            selectOptions.push(cardInfo.weekday);
        }
    });
    
};

let clientEmail = null;



function fillCard() {

    const appointments = [

        {
            dateSelected: selectedDates[0],
            daySelected: days[0],
            selector: selectOptions[0]
        },

        {
            dateSelected: selectedDates[1],
            daySelected: days[1],
            selector: selectOptions[1]
        },

        {
            dateSelected: selectedDates[2],
            daySelected: days[2],
            selector: selectOptions[2]
        },

    ];

    const cards = [
        document.querySelector("#card1"),
        document.querySelector("#card2"),
        document.querySelector("#card3")
    ];

    let i = 0;

    while (i < 3) {

        const card = cards[i];

        card.children[0].textContent = appointments[i].dateSelected;
        card.children[2].textContent = appointments[i].daySelected; 
        
        appointments[i].selector.forEach(function (time) {

        const option = document.createElement("option");
        option.value = time;
        option.textContent = time;

        card.children[3].appendChild(option);

    });

        i++;

    }

};

async function getItems() {

    document.getElementById("confirmBookingBtn").disabled = true;

    const clientNotes = document.getElementById("notes").value;

    const appType = document.getElementById("serviceType").textContent;

    const appTimes = [
        document.getElementById("time1").value,
        document.getElementById("time2").value,
        document.getElementById("time3").value,
    ]

    const scheduled = {
        contact: clientEmail,
        type: appType,
        dates: selectedDates,
        days: days,
        times: appTimes,
        notes: clientNotes
    }

    try {

        const response = await fetch("/api/save-appointment", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(scheduled)

        })

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        
        else {
            document.getElementById("successPop").classList.toggle("hidden");
        }

    }

    catch (err) {
        console.error(err);
        document.querySelector("#successPop p").textContent = "Request failed, please try again.";
        document.getElementById("successPop").classList.toggle("hidden");
    }

}

function cancelSchedule() {
    
    const timeModal = document.getElementById("timeModal");
        timeModal.classList.toggle("hidden");

}

function returnCleaning() {
    window.location.href = "/services/cleaning";
}

function returnLandscape() {
    window.location.href = "/services/landscaping";
}

function returnTeamClean() {
    window.location.href = "/services/teamclean";
}