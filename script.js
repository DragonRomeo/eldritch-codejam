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

let ancientIndex;

const getAncientIndex = (target) => {
    const dots = document.querySelectorAll('.dot');
    let index = ancientGodsArray.indexOf(target);
    // console.log(`ancientGodIndex = ${index}`);
    ancientIndex = index;
    ancientLogger(index);
    numberOfColorCards(index);
}

const ancientLogger = (index) => {
    // let ancientDeck = '';
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
    // console.log(`число зеленых карт = ${numberGreenCards}`)
    numberBrownCards = ancientsData[index].firstStage.brownCards + ancientsData[index].secondStage.brownCards + ancientsData[index].thirdStage.brownCards
    // console.log(`число коричневых карт = ${numberBrownCards}`)
    numberBlueCards = ancientsData[index].firstStage.blueCards + ancientsData[index].secondStage.blueCards + ancientsData[index].thirdStage.blueCards
    // console.log(`число синих карт = ${numberBlueCards}`)
    // console.log(`ancientIndex = ${ancientIndex}`)
}

const createCommonDeck = () => {
    const commonDeck = [];
    cardsDataGreen.forEach((elem => {
        commonDeck.push(elem)
    }))

    cardsDataBrown.forEach((elem => {
        commonDeck.push(elem)
    }))

    cardsDataBlue.forEach((elem => {
        commonDeck.push(elem)
    }))

    console.log(commonDeck)
    return commonDeck;
}


const sortingDeck = (array) => {
    const newArray = array.slice(0);

    for (let i = (newArray.length - 1); i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    console.log(newArray)
    return newArray;
}
const commonDeck = createCommonDeck()
const sortedDeck = sortingDeck(commonDeck);


const difficultySelection = (event) => {
    let target = event.target;
    let difficulty;

    if (target.classList.contains('difficulty')) {
        target.classList.toggle('active');
        // console.log(`сложность выбрана`)
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

const sortedArray = []

const veryEasyDiff = () => {
    let greenCounter = 0;
    let brownCounter = 0;
    let blueCounter = 0;
    // let sortedArray = [];
    sortedDeck.forEach((elem, i) => {
        if (sortedDeck[i].difficulty === 'easy' && greenCounter < numberGreenCards) {
            sortedArray.push(elem);
            greenCounter++;
        }
    })

    sortedDeck.forEach((elem, i) => {
        if (sortedDeck[i].difficulty === 'normal' && greenCounter < numberGreenCards) {
            sortedArray.push(elem);
            greenCounter++;
        }
    })
    // console.log(`greenCounter = ${greenCounter}`);

    sortedDeck.forEach((elem, i) => {
        if (sortedDeck[i].difficulty === 'easy' && brownCounter < numberBrownCards) {
            sortedArray.push(elem);
            brownCounter++;
        }
    })

    sortedDeck.forEach((elem, i) => { //Если каунтер выше ещё не заполнен, то он добьёт оставшиеся карты нормальными
        if (sortedDeck[i].difficulty === 'normal' && brownCounter < numberBrownCards) {
            sortedArray.push(elem);
            brownCounter++;
        }
    })
    // console.log(`brownCounter =${brownCounter}`);

    sortedDeck.forEach((elem, i) => {
        if (sortedDeck[i].difficulty === 'easy' && blueCounter < numberBlueCards) { //0 < 2
            sortedArray.push(elem);
            blueCounter++;
        }
    })
    // console.log(`blueCounter =${blueCounter}`);

    console.log(sortedArray)
    // createMiniDecks(sortedArray)

}


const createMiniDecks = (sortedArray) => {
    const firstStageDeck = [];
    let counterGreen = 0;
    let counterBlueCards = 0;
    let counterBrownCards = 0;

    sortedArray.forEach((elem, i) => {
        if (sortedArray[i].color === 'green') {
            firstStageDeck.push(elem)
        }
    })
    console.log(firstStageDeck)
}

