let modal_main = document.getElementById("modal_main");

let btn_danger = document.querySelector(".btn_danger");
let modal_success = document.getElementById("modal_success");
let btn_success = document.querySelector(".btn_success");
let modal_close = [...document.querySelectorAll(".modal__close_times")];






btn_danger.onclick = () => {
    modal_main.classList.remove("modal_active");
    modal_success.classList.add("modal_active");
}

btn_success.onclick = () => {
    return false;
}

modal_close.forEach(function(x) {
        x.onclick = function() {
        this.closest(".modal").classList.remove("modal_active")           
    }
});







