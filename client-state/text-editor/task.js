let textArea = document.getElementById(`editor`);



document.addEventListener(`DOMContentLoaded`, e => {
    textArea.value = localStorage.text;
})


textArea.addEventListener(`change`, e => {
    element = e.currentTarget;
    localStorage.setItem(`text`, `${element.value}`);
})