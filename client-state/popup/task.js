let modalCloseTimes = document.querySelector(`.modal__close_times`);
let modal = document.querySelector(`.modal`);

document.addEventListener(`DOMContentLoaded`, e => {
    if (document.cookie.includes(`modalView`)){
        modal.classList.remove(`modal_active`);
    };
})


modalCloseTimes.addEventListener(`click`, e => {
    modal.classList.remove(`modal_active`);
    let modalClass = modal.getAttribute(`class`);
    if (modal.classList.contains(`modal_active`) === false){
        document.cookie = `modalView=` + encodeURIComponent(modalClass);
    };
})


