const buttonRaffle = document.querySelector(".button-raffle");

function sortear() {
const min = Math.ceil(document.querySelector(".first-value").value);
const max = Math.floor(document.querySelector(".second-value").value);

let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

alert(randomValue)
}

buttonRaffle.addEventListener("click", sortear);