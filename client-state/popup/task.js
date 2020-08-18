let modalCloseTimes = document.querySelector(`.modal__close_times`);
let modal = document.querySelector(`.modal`);

const getCookie = (name) => {
    const value = "; " + document.cookie;  // Что делает эта строка? Функция вся взята из конспекта лекции
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
    }
}

document.addEventListener(`DOMContentLoaded`, e => {
    let checkClass = getCookie(`modalView`);
    if (checkClass.includes(`modal_active`) === false){
        modal.classList.remove(`modal_active`);
    }
})


modalCloseTimes.addEventListener(`click`, e => {
    modal.classList.remove(`modal_active`);
    let modalClass = modal.getAttribute(`class`);
    if (modal.classList.contains(`modal_active`) === false){
        document.cookie = `modalView=` + encodeURIComponent(modalClass);
    };
})


