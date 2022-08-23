const ancientGods = document.querySelector('.ancient-gods');

ancientGods.onclick = function (event) {
    let target = event.target;

    if (target.classList.contains('ancient-item')) {
        target.classList.toggle('active');
        console.log('переключил');
    }

    // console.log(target);
}