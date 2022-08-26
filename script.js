import cardsDataGreen from "./data/mythicCards/green/index2.js";
import cardsDataBrown from "./data/mythicCards/brown/index2.js";
import cardsDataBlue from "./data/mythicCards/blue/index2.js";
import ancientsData from "./data/ancients.js";


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

    ancientIndex = index;
    ancientLogger(index);
    numberOfColorCards(index);
}

const ancientLogger = (index) => {

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

    numberBrownCards = ancientsData[index].firstStage.brownCards + ancientsData[index].secondStage.brownCards + ancientsData[index].thirdStage.brownCards

    numberBlueCards = ancientsData[index].firstStage.blueCards + ancientsData[index].secondStage.blueCards + ancientsData[index].thirdStage.blueCards

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

    return commonDeck;
}


const shuffleDeck = (array) => {
    const newArray = array.slice(0);


    for (let i = (newArray.length - 1); i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }

    return newArray;
}
const commonDeck = createCommonDeck()
const sortedDeck = shuffleDeck(commonDeck);


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


    sortedDeck.forEach((elem, i) => {
        if (sortedDeck[i].difficulty === 'easy' && sortedDeck[i].color === 'blue' && blueCounter < numberBlueCards) { //0 < 2
            sortedArray.push(elem);
            blueCounter++;
        }
    })

    console.log(`Колода очень лёгкая сложность:`)
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

    //Передаем в функцию 3 колоды и ещё раз сортируем их (перемешиваем)
    console.log(`разбил колоды по 3м цветам`);
    setTimeout(createMiniDecks(shuffleDeck(greenDeck), shuffleDeck(brownDeck), shuffleDeck(blueDeck)), 2000)

}


const createMiniDecks = (greenDeck, brownDeck, blueDeck) => {
    const firstStageDeck = [];
    const secondStageDeck = [];
    const thirdStageDeck = [];

    let counterGreen = 0;
    let counterGreen2 = 0;
    let counterGreen3 = 0; //счетчик не должен превышать значение ancientsData[index].${first/second/third}Stage.greenCards

    let counterBrown = 0;
    let counterBrown2 = 0;
    let counterBrown3 = 0;

    let counterBlue = 0;
    let counterBlue2 = 0;
    let counterBlue3 = 0;
    console.log(`===================================`)

    greenDeck.forEach((elem, i) => {
        if (counterGreen < ancientsData[ancientIndex].firstStage.greenCards) {
            firstStageDeck.push(elem); //Возможно здесь можно было использовать метод .filter()? (Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.)
            counterGreen++;
        }
        if (counterGreen2 < ancientsData[ancientIndex].secondStage.greenCards) {
            secondStageDeck.push(elem);
            counterGreen2++;
        }
        if (counterGreen3 < ancientsData[ancientIndex].thirdStage.greenCards) {
            thirdStageDeck.push(elem);
            counterGreen3++;
        }
    }
    )

    brownDeck.forEach((elem, i) => {
        if (counterBrown < ancientsData[ancientIndex].firstStage.brownCards) {
            firstStageDeck.push(elem); //Возможно здесь можно было использовать метод .filter()? (Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.)
            counterBrown++;
        }
        if (counterBrown2 < ancientsData[ancientIndex].secondStage.brownCards) {
            secondStageDeck.push(elem);
            counterBrown2++;
        }
        if (counterBrown3 < ancientsData[ancientIndex].thirdStage.brownCards) {
            thirdStageDeck.push(elem);
            counterBrown3++;
        }
    }
    )


    blueDeck.forEach((elem, i) => {
        if (counterBlue < ancientsData[ancientIndex].firstStage.blueCards) {
            firstStageDeck.push(elem); //Возможно здесь можно было использовать метод .filter()? (Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.)
            counterBlue++;
        }

        if (counterBlue2 < ancientsData[ancientIndex].secondStage.blueCards) {
            secondStageDeck.push(elem);
            counterBlue2++;
        }

        if (counterBlue3 < ancientsData[ancientIndex].thirdStage.blueCards) {
            thirdStageDeck.push(elem);
            counterBlue3++;
        }
    }
    )

    console.log(`1я 2я и 3я колода по этапам:`)
    console.log(firstStageDeck)
    console.log(secondStageDeck)
    console.log(thirdStageDeck)

}

//Проблема в том, что forEach не очень хорошо работает, если в процессе убирать элементы из массива.