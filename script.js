import cardsData from "./data/mythicCards/blue/index2.js";


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
}

difficultyContainer.onclick = function(event) {
    let target = event.target;

    if( target.classList.contains('difficulty')) {
        target.classList.toggle('active');
        console.log(`сложность выбрана`)
        if(target.textContent === 'Very easy') {
            console.log('очень лёгкая')
                    } else if (target.textContent === 'Easy'){
            console.log('лёгкая')
        } else if (target.textContent === 'Medium') {
            console.log('средняя')
        } else if (target.textContent === 'Hard') {
            console.log('тяжелая')
        } else if (target.textContent === 'Very hard') {
            console.log('очень тяжелая')
        }
    }
}