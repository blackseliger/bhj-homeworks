let textArea = document.getElementById(`editor`);
let button = document.querySelector(`.button`);


document.addEventListener(`DOMContentLoaded`, e => {
    if (localStorage.text){
        textArea.value = localStorage.text;
    };
})

window.addEventListener(`beforeunload`, e => {
    localStorage.setItem(`text`, textArea.value)
});

button.addEventListener(`click`, e => {
    textArea.value = ``
    localStorage.removeItem(`text`);
})

