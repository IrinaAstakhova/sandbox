const containerDice = document.querySelector('.container-dice');
const infoWinner = document.querySelector('.title-dice');
const btnAction = document.querySelector('.btn-action');
const generateRandomNumber = () => Math.ceil(Math.random() * 6);

btnAction.addEventListener('click', () => {
    renderResultDice();
});

const renderResultDice = () => {
    const player1 = generateRandomNumber();
    const player2 = generateRandomNumber();

    containerDice.innerHTML = "";

    containerDice.insertAdjacentHTML('afterbegin', 
        `
            <svg class="dice dice-red">
            <use href="dice.svg#dice-${player1}-icon"></use>
            </svg>
            <svg class="dice dice-blue">
            <use href="dice.svg#dice-${player2}-icon"></use>
            </svg>
            `
    );


if (player1 === player2) {
    infoWinner.textContent = "Победила дружба!"
    infoWinner.style.color = "#fff";
} else if (player1 > player2) {
    infoWinner.textContent = "Победил Игрок 1"
    infoWinner.style.color = "#dda46a";
} else { 
    infoWinner.textContent = "Победил Игрок 2"
    infoWinner.style.color = "#6add9c";
}
}

renderResultDice();

