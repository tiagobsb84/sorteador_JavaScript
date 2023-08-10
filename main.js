const buttonRaffle = document.querySelector(".button-raffle");

function sortear() {
const min = Math.ceil(document.querySelector(".first-value").value);
const max = Math.floor(document.querySelector(".second-value").value);

const textResult = document.querySelector(".title-content");

let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

textResult.innerHTML = `O número sorteado foi:  ${randomValue}`;
}

buttonRaffle.addEventListener("click", sortear);