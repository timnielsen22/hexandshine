async function sendData(data) {
    try {
        const response = await fetch("/api/save-appointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        });

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        const result = await response.json();

        console.log("Success:", result);

    } catch (error) {
        console.error("Request failed:", error);
    }
}

function getContactMessage() {
    const email = document.getElementById("conPageEmail").value;
    const text = document.getElementById("conTextArea").value;
    
    document.getElementById("confirmButton").disabled = true;

    const message = {
        "email": email,
        "msg": text,
        "type": "contact-msg"
    };

    sendData(message);
}

function getOtherMessage() {
    const email = document.getElementById("otherPageEmail").value;
    const text = document.getElementById("otherTextArea").value;
    
    document.getElementById("confirmButton").disabled = true;

    const message = {
        "email": email,
        "msg": text,
        "type": "Other Service Message"
    }

    sendData(message);
}
