let chat_widget = document.querySelector(`.chat-widget`);
let chat_widget_input = document.querySelector(`.chat-widget__input`);
let messages = document.querySelector(`.chat-widget__messages`);




chat_widget.addEventListener(`click`, (e) => {
    let widget = e.currentTarget;
    widget.classList.add(`chat-widget_active`);
});


let listAnswers = [
    `Хорошего дня`, `Каратин, мы банкроты`, `Мы закрыты`, `Вон отсюда`, `Где тут дрын какой нибудь`, `Лютик, ты где`
];
// список для рандомных ответов





let onInput = (e) => {
    let text = e.target.value.trim();
    console.log(chat_widget_input.value.trim());
    if (!(text === null)){
        let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            let seconds = new Date().getSeconds();
            let clock = `${hours}:${minutes}:${seconds}`
            messages.innerHTML += `<div class="message message_client">
            <div class="message__time">${clock}</div>
            <div class="message__text">${text}</div>
        </div>`
        let indexAnswer = Math.floor(Math.random() * ((listAnswers.length -1)+ 1));
            messages.innerHTML += `<div class="message">
            <div class="message__time">${clock}</div>
            <div class="message__text">${listAnswers[indexAnswer]}</div>
        </div>`
    };
};





chat_widget_input.addEventListener(`change`, onInput);


// проблема с пробелом в начале



