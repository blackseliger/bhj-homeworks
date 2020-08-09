let rotator_case = [...document.querySelectorAll(`.rotator__case`)];


let deactivatedAds = () => {
    let indexRotatorCase = rotator_case.findIndex( rotator => (
        rotator.classList.contains(`rotator__case_active`)
    ));

    if (indexRotatorCase > -1){
        rotator_case[indexRotatorCase].classList.remove(`rotator__case_active`);
    };
}

let activatedAds = () => {
    rotator_case[number].classList.add("rotator__case_active");
    // console.log(rotator_case[number].dataset.speed); // обращаюсь к скорости и цвету 
    // console.log(rotator_case[number].dataset.color);
    let color = rotator_case[number].dataset.color;
    rotator_case[number].style.color = `${color}`;
};


let number = 0;

let timer = () => {

    let timerId = setTimeout( function changeAds(){
        number++;
        if (number < rotator_case.length){
            deactivatedAds();
            activatedAds();
    } else if (number >= rotator_case.length){
            number = 0;
            deactivatedAds();
            activatedAds();
    };
        timerId = setTimeout(changeAds, rotator_case[number].dataset.speed)
    }, rotator_case[number].dataset.speed);
    // setTimeout(changeAds, rotator_case[number].dataset.speed);   
    // назначил скорость, использовал рекурсию
    // рекурсия https://learn.javascript.ru/settimeout-setinterval
};

rotator_case.forEach( rotator => {
    rotator.addEventListener(`click`, timer);
})
