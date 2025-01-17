const audio = document.getElementById('bigBanTheory');
const sectionTbBt = document.querySelector('.big-ban-theory');
const mute = document.querySelector('.mute');
const toggleAudio = () => {
    return audio.paused ? audio.play() : audio.pause();
};
const stopAudio = () => { return audio.pause()};

const containerImage = document.querySelector('.container-image');
const penny = document.querySelector('.image_one');
const lenny = document.querySelector('.image_two');
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
    const pennyImage = document.querySelector('.penny_image img');
    const lennyImage = document.querySelector('.lenny_image img');
    const shelyImage = document.querySelector('.sheldon')
    penny.innerHTML = "";
    lenny.innerHTML = "";

    penny.innerHTML =
        `<span class="player-1"><img src="./image/item-${player1}.png" alt="игрок 1"></span>`;

    lenny.innerHTML =
        `<span class="player-2"><img src="./image/item-${player2}.png" alt="игрок 1"></span>`;

    

    if (player1 === player2) {
        informWinner.textContent = "Победил Шелдон";
        containerWinner.textContent = "";
        pennyImage.classList.remove('winner');
        lennyImage.classList.remove('winner');
    } else if (player1 == "спок" && player2 == "камень") {
        informWinner.textContent = "Победила Пенни";
        containerWinner.textContent = "Спок испаряет камень";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
    } else if (player2 == "спок" && player1 == "камень") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Спок испаряет камень";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    } else if (player1 == "ящерица" && player2 == "спок") {
        informWinner.textContent = "Победила Пенни";
        containerWinner.textContent = "Ящерица убивает Спока";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
    } else if (player2 == "ящерица" && player1 == "спок") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Ящерица убивает Спока";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    } else if (player1 == "спок" && player2 == "ножницы") {
        informWinner.textContent = "Победила Пенни";
        containerWinner.textContent = "Спок ломает ножницы";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
    } else if (player2 == "спок" && player1 == "ножницы") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Спок ломает ножницы";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    } else if (player1 == "бумага" && player2 == "спок") {
        informWinner.textContent = "Победила Пенни";
        containerWinner.textContent = "Бумага подставляет  Спока";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
    } else if (player2 == "бумага" && player1 == "спок") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Бумага подставляет  Спока";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    }  else if (player1 == "камень" && player2 == "бумага") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Бумага накрывает камень";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    }  else if (player2 == "камень" && player1 == "бумага") {
        informWinner.textContent = "Победила Пенни";
        containerWinner.textContent = "Бумага накрывает камень";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
    } else if (player1 == "камень" && player2 == "ящерица") {
        informWinner.textContent = "Победила Пенни";
        containerWinner.textContent = "Камень убивает ящерицу";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
    }  else if (player2 == "камень" && player1 == "ящерица") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Камень убивает ящерицу";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    } else if (player1 == "камень" && player2 == "ножницы") {
        informWinner.textContent = "Победила Пенни";
        containerWinner.textContent = "Камень тупит ножницы";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
    }  else if (player2 == "камень" && player1 == "ножницы") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Камень тупит ножницы";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    }  else if (player1 == "ящерица" && player2 == "ножницы") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Ножницы убивают ящерицу";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    }  else if (player2 == "ящерица" && player1 == "ножницы") {
        informWinner.textContent = "Победила Пенни";
        containerWinner.textContent = "Ножницы убивают ящерицу";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
    } else if (player1 == "ящерица" && player2 == "бумага") {
        informWinner.textContent = "Победила Пенни";
        containerWinner.textContent = "Ящерица съедает бумагу";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
    }  else if (player2 == "ящерица" && player1 == "бумага") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Ящерица съедает бумагу";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    } else if (player1 == "ножницы" && player2 == "бумага") {
        informWinner.textContent = "Победила Пенни";
        pennyImage.classList.add('winner');
        lennyImage.classList.remove('winner');
        containerWinner.textContent = "Ножницы разрезают бумагу";
    }  else if (player2 == "ножницы" && player1 == "бумага") {
        informWinner.textContent = "Победил Леонард";
        containerWinner.textContent = "Ножницы разрезают бумагу";
        pennyImage.classList.remove('winner');
        lennyImage.classList.add('winner');
    }

    if (player1 === player2) {
        containerWinner.style.display = "none";
        shelyImage.innerHTML = `<img src="./image/sheli.png" alt="Sheldon">`;
    } else {
        containerWinner.style.display = "block";
        shelyImage.innerHTML = '';
    }
}


renderResultPlay();