let textArea = document.getElementById(`editor`);



document.addEventListener(`DOMContentLoaded`, e => {
    if (localStorage.text){
        textArea.value = localStorage.text;
    };
})

// window.addEventListener(`beforeunload`, e => {
//         textArea.value = localStorage.text;
//         e.returnValue = textArea.value;
//         return textArea.value = localStorage.text;
// })

// window.onbeforeunload = function(e){
//     textArea.value = localStorage.text;
//     e.returnValue = textArea.value;
//     return textArea.value;
// } 

textArea.addEventListener(`input`, e => {
    element = e.currentTarget;
    localStorage.setItem(`text`, `${element.value}`);
})



// url error https://recordit.co/iEy6d3n3fj
// Вылетает окошко с вопросом, и только. С 11 по 16, с 17 по 21. Одинаковые свойства
