let chat_widget = document.querySelector(`.chat-widget`);
let chat_widget_input = document.querySelector(`.chat-widget__input`);
let messages = document.querySelector(`.chat-widget__messages`);
let chatWidgetContainer = document.querySelector(`.chat-widget__messages-container`);
let messageText = [document.querySelector(`.message__text`)];



let tick = 0;



function timeOclock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let clock = `${hours}:${minutes}:${seconds}`
    return clock
};

chat_widget.addEventListener(`click`, (e) => {
    let widget = e.currentTarget;
    widget.classList.add(`chat-widget_active`);
    let timerId = setTimeout( function counter() {
        tick++
        if (tick >= 30){
            let clock = timeOclock();
            messages.innerHTML += `<div class="message message_client">
            <div class="message__time">${clock}</div>
            <div class="message__text">Вы про нас не забыли? :( ) </div>
        </div>`
            scrollToLastMessage();
            tick = 0;
        } 
        timerId = setTimeout(counter, 1000)
    }, 1000);
    
});


let listAnswers = [
    `Хорошего дня`, `Каратин, мы банкроты`, `Мы закрыты`, `Вон отсюда`, `Где тут дрын какой нибудь`, `Лютик, ты где`
];
// список для рандомных ответов

let scrollToLastMessage = () => {
    chatWidgetContainer.scrollTo(0, 9999);
};




let onInput = (e) => {
    let text = e.target.value.trim();
    console.log(chat_widget_input.value.trim());
    if (!(text === ``)){
            let clock = timeOclock();
            messages.innerHTML += `<div class="message message_client">
            <div class="message__time">${clock}</div>
            <div class="message__text">${text}</div>
        </div>`
            tick = 0;
            scrollToLastMessage();
        let indexAnswer = Math.floor(Math.random() * ((listAnswers.length -1)+ 1));
            messages.innerHTML += `<div class="message">
            <div class="message__time">${clock}</div>
            <div class="message__text">${listAnswers[indexAnswer]}</div>
        </div>`
            scrollToLastMessage();
    };
};





chat_widget_input.addEventListener(`change`, onInput);


// проблема с пробелом в начале



