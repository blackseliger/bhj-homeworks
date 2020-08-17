let modalCloseTimes = document.querySelector(`.modal__close_times`);
let modal = document.querySelector(`.modal`);



document.addEventListener(`DOMContentLoaded`, e => {
    console.log(document.cookie); // тоже ничего не показывает
})


modalCloseTimes.addEventListener(`click`, e => {
    element = e.currentTarget;
    modal.classList.remove(`modal_active`);
    console.log(modal.outerHTML);
    console.log(modal);
    document.cookie =`test1=CheckTest`;
    document.cookie = `modalView=` + encodeURIComponent(modal.outerHTML);
    alert(document.cookie); // ничего не показывает
})


