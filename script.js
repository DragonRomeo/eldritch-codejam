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
    sortedDeck.forEach((elem, i) => { //дописать в условие && sortedDeck[i].color === 'green'
        if (sortedDeck[i].difficulty === 'easy' && sortedDeck[i].color === 'green' && greenCounter < numberGreenCards) {
            sortedArray.push(elem);
            greenCounter++;
        }
    })

    sortedDeck.forEach((elem, i) => {
        if (sortedDeck[i].difficulty === 'normal' && sortedDeck[i].color === 'green' && greenCounter < numberGreenCards) {
            sortedArray.push(elem);
            greenCounter++;
        }
    })
    // console.log(`greenCounter = ${greenCounter}`);

    sortedDeck.forEach((elem, i) => {
        if (sortedDeck[i].difficulty === 'easy' && sortedDeck[i].color === 'brown' && brownCounter < numberBrownCards) {
            sortedArray.push(elem);
            brownCounter++;
        }
    })

    sortedDeck.forEach((elem, i) => { //Если каунтер выше ещё не заполнен, то он добьёт оставшиеся карты нормальными
        if (sortedDeck[i].difficulty === 'normal' && sortedDeck[i].color === 'brown' && brownCounter < numberBrownCards) {
            sortedArray.push(elem);
            brownCounter++;
        }
    })
    // console.log(`brownCounter =${brownCounter}`);

    sortedDeck.forEach((elem, i) => {
        if (sortedDeck[i].difficulty === 'easy' && sortedDeck[i].color === 'blue' && blueCounter < numberBlueCards) { //0 < 2
            sortedArray.push(elem);
            blueCounter++;
        }
    })
    // console.log(`blueCounter =${blueCounter}`);

    console.log(sortedArray)
    createColorsDeck(sortedArray)

}



const createColorsDeck = (array) => {
    const greenDeck = []
    const brownDeck = []
    const blueDeck = []

    array.forEach((elem, i) => {
        if (array[i].color === 'green') {
            greenDeck.push(elem)
        }
    })

    array.forEach((elem, i) => {
        if (array[i].color === 'brown') {
            brownDeck.push(elem)
        }
    })

    array.forEach((elem, i) => {
        if (array[i].color === 'blue') {
            blueDeck.push(elem)
        }
    })

    console.log(greenDeck)
    console.log(brownDeck)
    console.log(blueDeck)
    //Передаем в функцию 3 колоды и ещё раз сортируем их (перемешиваем)
    createMiniDecks(sortingDeck(greenDeck), sortingDeck(brownDeck), sortingDeck(blueDeck))
}


const createMiniDecks = (greenDeck, brownDeck, blueDeck) => {
    const firstStageDeck = [];
    let counterGreen = 0; //счетчик не должен превышать значение ancientsData[index].${first/second/third}Stage.greenCards
    let counterBlue = 0;
    let counterBrown = 0;

    greenDeck.forEach((elem, i) => {
        if (counterGreen < ancientsData[ancientIndex].firstStage.greenCards) {
            firstStageDeck.push(elem);
            counterGreen++;
        }
    })

    brownDeck.forEach((elem, i) => {
        if (counterBrown < ancientsData[ancientIndex].firstStage.brownCards) {
            firstStageDeck.push(elem);
            counterBrown++;
        }
    })

    blueDeck.forEach((elem, i) => {
        if (counterBlue < ancientsData[ancientIndex].firstStage.blueCards) {
            firstStageDeck.push(elem);
            counterBlue++;
        }
    })
    console.log(firstStageDeck)
}

