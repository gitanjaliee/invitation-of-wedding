const weddingDate = new Date("December 9, 2026 20:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = weddingDate - now;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (difference <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        return;
    }

    days.textContent = String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");

    hours.textContent = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");

    minutes.textContent = String(
        Math.floor((difference / (1000 * 60)) % 60)
    ).padStart(2, "0");

    seconds.textContent = String(
        Math.floor((difference / 1000) % 60)
    ).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ================================
// RSVP
// ================================

const rsvpButton = document.getElementById("rsvpButton");

if (rsvpButton) {

    rsvpButton.addEventListener("click", function () {

        const name = prompt("Please enter your name for RSVP:");

        if (name && name.trim() !== "") {

            alert(
                `Thank you, ${name.trim()}! ❤️\n\n` +
                "Your RSVP has been noted.\n" +
                "We can't wait to celebrate with you!"
            );

        }

    });

}


const eventCards = document.querySelectorAll(".event-card");

eventCards.forEach(function (card) {

    card.addEventListener("click", function () {

        eventCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

    });

});
