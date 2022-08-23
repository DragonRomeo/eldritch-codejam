import cardsData from "./data/mythicCards/blue/index2.js";


console.log(cardsData[0].cardFace);


const ancientGods = document.querySelector('.ancient-gods');
const difficultyContainer = document.querySelector('.difficulty-container');
const lastCard = document.querySelector('.last-card');

// lastCard.style.backgroundImage = "url('../assets/MythicCards/blue/blue1.png')";
lastCard.style.backgroundImage = `url(${cardsData[0].cardFace})`;

ancientGods.onclick = function (event) {
    let target = event.target;

    if (target.classList.contains('ancient-item')) {
        target.classList.toggle('active');
        console.log('переключил');
    }

    // console.log(target);
}

difficultyContainer.onclick = function(event) {
    let target = event.target;

    if( target.classList.contains('difficulty')) {
        target.classList.toggle('active');
        console.log(`сложность выбрана`)
    }
}