let cards = document.querySelectorAll("div");
let imgs = document.querySelectorAll("img");
let start = document.querySelector("#start");
let end = document.querySelector("#end");
let startCon = document.querySelector("#startCon");
let rightCounterP = document.querySelector("#rightCounter");
let wrongCounterP = document.querySelector("#wrongCounter");
let timer = document.querySelector("#timer");
let compareName = [];
let openedCard = [];
let rightCounter = 0;
let wrongCounter = 0;
let timerSec = 0;
document.addEventListener("DOMContentLoaded", () => {
    cards.forEach((card) => {
        card.style.order = `${Math.floor(Math.random() * 240)}`;
    });
});
start.addEventListener("click", () => {
    startCon.style.display = "none";
    setTimeout(() => {
        let timeCounter = setInterval(() => { timer.innerHTML = `<span>Time:</span> ${timerSec++} second`; }, 1000);
        setInterval(() => {
            if ([...cards].every(card => card.querySelector("img").classList.contains("clicked"))) {
                clearInterval(timeCounter);
            };
        }, 1000);
    }, 4000);
    setTimeout(() => {
        cards.forEach((card) => {
            card.classList.remove("back");
            card.querySelector("img").classList.remove("disappear");
        });
    }, 0);
    setTimeout(() => {
        cards.forEach((card) => {
            card.classList.add("back");
            card.querySelector("img").classList.add("disappear");
        });
    }, 5000);
});
cards.forEach((card) => {
    card.addEventListener("click", (e) => {
        const currentCard = e.currentTarget;
        const img = currentCard.querySelector("img");
        currentCard.classList.add("transform");
        currentCard.classList.remove("back");
        img.classList.add("clicked");
        img.classList.remove("disappear");
        compareName.push(img.alt);
        openedCard.push(currentCard);
        if (compareName.length === 2) {
            if (compareName[0] !== compareName[1]) {
                setTimeout(() => {
                    openedCard.forEach((e) => {
                        e.classList.remove("transform");
                        e.classList.add("back");
                        e.querySelector("img").classList.remove("clicked");
                        e.querySelector("img").classList.add("disappear");
                    });
                    compareName = [];
                    openedCard = [];
                }, 1000);
                wrongCounter++;
                wrongCounterP.innerHTML = `<span>Wrong Answers:</span> ${wrongCounter}`;
            } else {
                compareName = [];
                openedCard = [];
                rightCounter++;
                rightCounterP.innerHTML = `<span>Right Answers:</span> ${rightCounter}`;
                if (rightCounter == 12) {
                    endCon.classList.remove("disappear");;
                };
            };
        }
    });
});
end.addEventListener("click", () => {
    location.reload();
});