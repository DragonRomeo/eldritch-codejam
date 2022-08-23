const ancientGods = document.querySelector('.ancient-gods');
const difficultyContainer = document.querySelector('.difficulty-container');
console.log(difficultyContainer);

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