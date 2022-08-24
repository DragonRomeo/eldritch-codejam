import cardsDataGreen from "./data/mythicCards/blue/index2.js";
import cardsDataBrown from "./data/mythicCards/brown/index2.js";
import cardsDataBlue from "./data/mythicCards/green/index2.js";
import ancientsData from "./data/ancients.js";

console.log(cardsDataGreen[0])
console.log(cardsDataBrown[0])
console.log(cardsDataBlue[0])


const ancientGods = document.querySelector('.ancient-gods');
const ancientItems = document.querySelectorAll('.ancient-item')
const ancientGodsArray = Array.from(ancientItems);
const difficultyContainer = document.querySelector('.difficulty-container');
const lastCard = document.querySelector('.last-card');

lastCard.style.backgroundImage = `url(${cardsDataBlue[0].cardFace})`;


const ancientToggleClass = (event) => {
    let target = event.target;

    if (target.classList.contains('ancient-item')) {
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
            ancientSelection(target);
        }
    }
}

const ancientSelection = (target) => {
    console.log(`indexOf =${ancientGodsArray.indexOf(target)}`);
    const dots = document.querySelectorAll('.dot');
    console.log(dots);
    let index = ancientGodsArray.indexOf(target);
    console.log(`ancientGodIndex = ${index}`);
    const stage1 = [ancientsData[index].firstStage.greenCards, ancientsData[index].firstStage.brownCards, ancientsData[index].firstStage.blueCards, ancientsData[index].secondStage.greenCards, ancientsData[index].secondStage.brownCards, ancientsData[index].secondStage.blueCards, ancientsData[index].thirdStage.greenCards, ancientsData[index].thirdStage.brownCards, ancientsData[index].thirdStage.blueCards,];
    console.log(stage1);
    dots.forEach((elem, i) => {
    })
    const getNameGods = [];
    const getStages = [];

    //Собираю инфу объектов
    ancientsData.forEach((elem => {
        getNameGods.push(elem.name)
    }))
    console.log(getNameGods);

    ancientsData.forEach((elem => {
        getStages.push(elem.firstStage)
    }))
    console.log(getStages);
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
