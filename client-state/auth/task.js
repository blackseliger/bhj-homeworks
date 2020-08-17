let formId = document.getElementById(`signin__form`);
let user_id = document.getElementById(`user_id`);


document.addEventListener(`DOMContentLoaded`, e => {
    if (localStorage.user){
        user_id.innerText = localStorage.user;
        user_id.closest(`.welcome`).classList.add(`welcome_active`);
    }
})




formId.addEventListener(`submit`, e => {
    e.preventDefault();
    formData = new FormData(formId);
    let xhr = new XMLHttpRequest();
    xhr.open(`POST`, `https://netology-slow-rest.herokuapp.com/auth.php`)
    xhr.addEventListener(`readystatechange`, e => {
        if (xhr.readyState === 4 && xhr.status === 200){
            let answer = JSON.parse(xhr.responseText);
            answer = Object.values(answer);
            if (answer[0] === false){
                alert(`Неверный логин/пароль`);
            } else {
                user_id.innerText = answer[1];
                user_id.closest(`.welcome`).classList.add(`welcome_active`);
                localStorage.setItem(`user`, `${answer[1]}`);
            }
        }
    })

    xhr.send(formData);
})