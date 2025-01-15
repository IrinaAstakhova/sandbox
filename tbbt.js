const containerImage = document.querySelector('.container-image');
const containerWinner = document.querySelector('.container-winner');
const informWinner = document.querySelector('.title-tbbt');
const btnActionPlay = document.querySelector('.btn-action-tbbt');
const arrayImage = ['ящерица', 'ножницы', 'бумага', 'спок', 'камень']
const generateArrayImage = () => {
    const randomIndex = Math.floor(Math.random() * arrayImage.length);
    const randomItem = arrayImage[randomIndex];
return randomItem;
};


btnActionPlay.addEventListener('click', () => {
    renderResultPlay();
});

const renderResultPlay = () => {
    const player1 = generateArrayImage();
    const player2 = generateArrayImage();

    containerImage.innerHTML = "";

    containerImage.insertAdjacentHTML('afterbegin', 
        `
        <span class="player-1"><img src="./image/item-${player1}.png" alt="игрок 1"></span>
        <span class="player-2"><img src="./image/item-${player2}.png" alt="игрок 2"></span>
            `
    );

    if (player1 === player2) {
        informWinner.textContent = "Победил Шелдон";
    } else if (player1 == "спок" && player2 == "камень") {
        informWinner.textContent = "Победил Игрок 1";
        containerWinner.textContent = "Спок испаряет камень";
    } else if (player2 == "спок" && player1 == "камень") {
        informWinner.textContent = "Победил Игрок 2";
        containerWinner.textContent = "Спок испаряет камень";
    } else if (player1 == "ящерица" && player2 == "спок") {
        informWinner.textContent = "Победил Игрок 1";
        containerWinner.textContent = "Ящерица убивает Спока";
    } else if (player2 == "ящерица" && player1 == "спок") {
        informWinner.textContent = "Победил Игрок 2";
        containerWinner.textContent = "Ящерица убивает Спока";
    } else if (player1 == "спок" && player2 == "ножницы") {
        informWinner.textContent = "Победил Игрок 1";
        containerWinner.textContent = "Спок ломает ножницы";
    } else if (player2 == "спок" && player1 == "ножницы") {
        informWinner.textContent = "Победил Игрок 2";
        containerWinner.textContent = "Спок ломает ножницы";
    } else if (player1 == "бумага" && player2 == "спок") {
        informWinner.textContent = "Победил Игрок 1";
        containerWinner.textContent = "Бумага подставляет  Спока";
    } else if (player2 == "бумага" && player1 == "спок") {
        informWinner.textContent = "Победил Игрок 2";
        containerWinner.textContent = "Бумага подставляет  Спока";
    }  else if (player1 == "камень" && player2 == "бумага") {
        informWinner.textContent = "Победил Игрок 2, бумага накрывает камень";
    }  else if (player2 == "камень" && player1 == "бумага") {
        informWinner.textContent = "Победил Игрок 1, бумага накрывает камень";
    } else if (player1 == "камень" && player2 == "ящерица") {
        informWinner.textContent = "Победил Игрок 1, камень убивает ящерицу";
    }  else if (player2 == "камень" && player1 == "ящерица") {
        informWinner.textContent = "Победил Игрок 2, камень убивает ящерицу";
    } else if (player1 == "камень" && player2 == "ножницы") {
        informWinner.textContent = "Победил Игрок 1, камень тупит ножницы";
    }  else if (player2 == "камень" && player1 == "ножницы") {
        informWinner.textContent = "Победил Игрок 2, камень тупит ножницы";
    }  else if (player1 == "ящерица" && player2 == "ножницы") {
        informWinner.textContent = "Победил Игрок 2, ножницы убивают ящерицу";
    }  else if (player2 == "ящерица" && player1 == "ножницы") {
        informWinner.textContent = "Победил Игрок 1, ножницы убивают ящерицу";
    } else if (player1 == "ящерица" && player2 == "бумага") {
        informWinner.textContent = "Победил Игрок 1, ящерица съедает бумагу";
    }  else if (player2 == "ящерица" && player1 == "бумага") {
        informWinner.textContent = "Победил Игрок 2, ящерица съедает бумагу";
    } else if (player1 == "ножницы" && player2 == "бумага") {
        informWinner.textContent = "Победил Игрок 1, ножницы разрезают бумагу";
    }  else if (player2 == "ножницы" && player1 == "бумага") {
        informWinner.textContent = "Победил Игрок 2, ножницы разрезают бумагу";
    }
}


renderResultPlay();