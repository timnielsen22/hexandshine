
const button1 = document.getElementById("service-one");
const button2 = document.getElementById("service-two");
const button3 = document.getElementById("service-three");
const button4 = document.getElementById("large-button1");
const button5 = document.getElementById("large-button2");

button1.addEventListener("click", function () {showCard1()});
button2.addEventListener("click", function () {showCard2()});
button3.addEventListener("click", function () {showCard3()});
button4.addEventListener("click", function () {showCard4()});


function showCard1() {

    const displayWindow = document.getElementById("card1");
    displayWindow.classList.toggle("hidden");

    const container = document.getElementById("service-container");
    container.classList.add("animate");

    container.innerHTML = `<div class = "service-article">
        <header class = "article-head">
            <h1 class = "service-title"> Standard Cleaning Service </h1>
            <button class = "exit-button" onclick = "closeCard()">X</button>
        </header>
        <article class = "article-text">
            <p class = "service-text">Hex and Shine's most popular and trusted service. Full scale cleaning, the way you want it done.</p>
            <ul class = "main-list">
                <li>dusting</li>
                <li>Sweeping</li>
                <li>Mopping</li>
                <li>vacuuming</li>
                <li>Degreasing</li>
                <li>Scum Removal</li>
                <li>Sanitizing</li>
            </ul>
            <h3 class = "price"> Rate: <span class = "bolded-price"> $15 Service Fee + $40 per hour </span>
        </article>
        <div class = "button-div">
            <button class = "schedule-btn1">Get Started</button>
        </div>
    </div>`;

}

function showCard2() {

    const displayWindow = document.getElementById("card1");
    displayWindow.classList.toggle("hidden");

    const container = document.getElementById("service-container");
    container.classList.add("animate");

    container.innerHTML = `<div class = "service-article">
        <header class = "article-head">
            <h1 class = "service-title"> Landscaping Service </h1>
            <button class = "exit-button" onclick = "closeCard()">X</button>
        </header>
        <article class = "article-text">
            <p class = "service-text">Hex and Shine's landscaping service, a professional detailed cleanup and maintenance of yard waste
            and debris combined with knowledgable plant maintenance and care as well as waste removal for a fee.</p>
            <ul class = "main-list">
                <li>Raking</li>
                <li>Sweeping</li>
                <li>Blowing</li>
                <li>Weed Maintenance</li>
                <li>Edging</li>
                <li>Trimming</li>
            </ul>
            <h3 class = "price"> Rate: <span class = "bolded-price"> $15 Service Fee + $40 per hour </span>
        </article>
        <div class = "button-div">
            <button class = "schedule-btn1">Get Started</button>
        </div>
    </div>`;

}

function showCard3() {

    const displayWindow = document.getElementById("card1");
    displayWindow.classList.toggle("hidden");

    const container = document.getElementById("service-container");
    container.classList.add("animate");

    container.innerHTML = `<div class = "service-article">
        <header class = "article-head">
            <h1 class = "service-title"> Toy Cleaning Service </h1>
            <button class = "exit-button" onclick = "closeCard()">X</button>
        </header>
        <article class = "article-text">
            <p class = "service-text">Hex and Shines newest service. Kids play and make messes and while we struggle with our children for
            clean rooms and clean houses we often lack the time for clean toys. That's where Hex and Shine's new toy cleaning service comes in.
            With an assured delivery and pickup system you can place your childrens toys in a bag or container and Hex and Shine will pick-up,
            clean, sanitize and drop off toys fresh and ready to put away or play. </p>
            <br>
            <p class = "service-text"> Plush toys and hard toys are accepted. Special notes will be added on drop off for any item with care 
            criteria beyond standard cleaning (such as items that require dry cleaning, are very fragile, or have aged to the point where standard
            cleaning may cause damage, these items may be rejected)</p>
            <ul class = "main-list">
                <li>Up to 3 bags (13 gallons ea) plush: <span class ="bolded-price">$120</span></li>
                <li>Up to 3 bags (13 gallons ea) non-plush: <span class ="bolded-price">$120</span></li>
                <li>Up to 3 bags (13 gallons ea) Mixed: <span class ="bolded-price">$150</span></li>
            </ul>
        </article>
        <div class = "button-div">
            <button class = "schedule-btn1">Get Started</button>
        </div>
    </div>`;

}

function showCard4() {

    const displayWindow = document.getElementById("card1");
    displayWindow.classList.toggle("hidden");

    const container = document.getElementById("service-container");
    container.classList.add("animate");

    container.innerHTML = `<div class = "service-article">
        <header class = "article-head">
            <h1 class = "service-title"> Standard Cleaning Service </h1>
            <button class = "exit-button" onclick = "closeCard()">X</button>
        </header>
        <article class = "article-text">
            <p class = "service-text">Hex and Shine's most popular and trusted service. Full scale cleaning, the way you want it done.</p>
            <ul class = "main-list">
                <li>dusting</li>
                <li>Sweeping</li>
                <li>Mopping</li>
                <li>vacuuming</li>
                <li>Degreasing</li>
                <li>Scum Removal</li>
                <li>Sanitizing</li>
            </ul>
            <h3 class = "price"> Rate: <span class = "bolded-price"> $15 Service Fee + $40 per hour </span>
        </article>
        <div class = "button-div">
            <button class = "schedule-btn1">Get Started</button>
        </div>
    </div>`;

}

function closeCard() {
    const displayWindow = document.getElementById("card1");
    displayWindow.classList.toggle("hidden");
}

const photos = [

    {
        before: "/static/images/coming-soon.jpg",
        after: "/static/images/under-construction.jpg",
        title: "Feature coming soon!",
        description: "Website still under development, stay tuned."
    },

    {
        before: "/static/images/coming-soon.jpg",
        after: "/static/images/under-construction.jpg",
        title: "Feature coming soon!",
        description: "Website still under development, stay tuned."
    }
    

];

const gallery = document.getElementById("gallery");

photos.forEach(photo => {

    const card = document.createElement("div");
    card.classList.add("photo-card");

    card.innerHTML = `<img src = ${photo.before} alt = ${photo.title}>
        <h3> ${photo.title} </h3>
        <p> ${photo.description} </p>
    `;

    gallery.appendChild(card);

});