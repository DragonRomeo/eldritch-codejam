import cardsDataGreen from "./data/mythicCards/green/index2.js";
import cardsDataBrown from "./data/mythicCards/brown/index2.js";
import cardsDataBlue from "./data/mythicCards/blue/index2.js";
import ancientsData from "./data/ancients.js";


const ancientGods = document.querySelector('.ancient-gods');
const ancientItems = document.querySelectorAll('.ancient-item')
const ancientGodsArray = Array.from(ancientItems);
const difficultyContainer = document.querySelector('.difficulty-container');
const lastCard = document.querySelector('.last-card');

// console.log(`сложность гринКард 0 =  ${cardsDataGreen[0].difficulty}`)
// console.log(cardsDataGreen[1].difficulty === 'easy')
// console.log(cardsDataGreen[2].difficulty)

lastCard.style.backgroundImage = `url(${cardsDataBlue[0].cardFace})`;


const ancientToggleClass = (event) => {
    let target = event.target;

    if (target.classList.contains('ancient-item')) {
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
            getAncientIndex(target);
        }
    }
}
ancientGods.onclick = function (event) {
    ancientToggleClass(event);
}

// let ancientIndex;

const getAncientIndex = (target) => {
    const dots = document.querySelectorAll('.dot');
    let index = ancientGodsArray.indexOf(target);
    console.log(`ancientGodIndex = ${index}`);
    // ancientIndex = index;
    ancientLogger(index);
    numberOfColorCards(index);
}

const ancientLogger = (index) => {
    let ancientDeck = '';
    if (index === 0) {
        console.log('Выбран Азатот')
    } else if (index === 1) {
        console.log(`Выбран Ктулху`)
    } else if (index === 2) {
        console.log(`Выбран Йог-Сотот`)
    } else if (index === 3) {
        console.log(`Выбран Шуб-ниггурат`)
    }
}
let numberGreenCards;
let numberBrownCards;
let numberBlueCards;

const numberOfColorCards = (index) => {
    numberGreenCards = ancientsData[index].firstStage.greenCards + ancientsData[index].secondStage.greenCards + ancientsData[index].thirdStage.greenCards;
    console.log(`число зеленых карт = ${numberGreenCards}`)
    numberBrownCards = ancientsData[index].firstStage.brownCards + ancientsData[index].secondStage.brownCards + ancientsData[index].thirdStage.brownCards
    console.log(`число зеленых карт = ${numberBrownCards}`)
    numberBlueCards = ancientsData[index].firstStage.blueCards + ancientsData[index].secondStage.blueCards + ancientsData[index].thirdStage.blueCards
    console.log(`число зеленых карт = ${numberBlueCards}`)
    // console.log(`ancientIndex = ${ancientIndex}`)
}


const difficultySelection = (event) => {
    let target = event.target;
    let difficulty;

    if (target.classList.contains('difficulty')) {
        target.classList.toggle('active');
        console.log(`сложность выбрана`)
        if (target.textContent === 'Very easy') {
            // console.log('очень лёгкая')
            console.log(`условия: из набора берутся все карты со снежинками, если карт не хватает то добираются обычные карты`)
            difficulty = 'very easy';
            veryEasyDiff()
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
    console.log(difficulty)
    return difficulty;
}
difficultyContainer.onclick = function (event) {
    difficultySelection(event);
}

const veryEasyDiff = () => {

    let sortedArray = [];
    cardsDataGreen.forEach((elem, i) => {
        if (cardsDataGreen[i].difficulty === 'easy') {
            sortedArray.push(elem)
        }
    })
    cardsDataBrown.forEach((elem, i) => {
        if (cardsDataBrown[i].difficulty === 'easy') {
            sortedArray.push(elem)
        }
    })
    cardsDataBlue.forEach((elem, i) => {
        if (cardsDataBlue[i].difficulty === 'easy') {
            sortedArray.push(elem)
        }
    })
    console.log(sortedArray)

    // sortedArray = cardsDataGreen.filter()
}
