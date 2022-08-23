import cardsData from "./data/mythicCards/blue/index2.js";


const ancientGods = document.querySelector('.ancient-gods');
const difficultyContainer = document.querySelector('.difficulty-container');
const lastCard = document.querySelector('.last-card');

// lastCard.style.backgroundImage = "url('../assets/MythicCards/blue/blue1.png')";
lastCard.style.backgroundImage = `url(${cardsData[0].cardFace})`;


const ancientToggleClass = (event) => {
    let target = event.target;

    if (target.classList.contains('ancient-item')) {
        target.classList.toggle('active');
        console.log('переключил');
        console.log(`индес элемента = ${ancientGods.indexOf()}`)
        if (target.classList.contains('active')) {
            console.log(`содержит актив`);
            ancientSelection(target);
        }
    }
}

const ancientSelection = (target) => {

}

ancientGods.onclick = function (event) {
    ancientToggleClass(event);
}


const difficultySelection = (event) => {
    let target = event.target;

    if (target.classList.contains('difficulty')) {
        target.classList.toggle('active');
        console.log(`сложность выбрана`)
        if (target.textContent === 'Very easy') {
            console.log('очень лёгкая')
        } else if (target.textContent === 'Easy') {
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
difficultyContainer.onclick = function (event) {
    difficultySelection(event);
}
