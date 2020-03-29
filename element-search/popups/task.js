/* <a href="#" class="btn btn_danger modal__close show-success">Сделать хорошо</a> */
const modal_main = document.getElementById("modal_main");
const modal_success = document.getElementById("modal_success");
const btn_danger = document.getElementsByClassName("btn_danger");
const btn_success = document.getElementsByClassName("btn_success");
const modal = document.getElementsByClassName("modal");
const modal__close_times = document.getElementsByClassName("modal__close_times");

    // alert(btn_danger);  выявил что выводится масивоподобный объект. 
    // следовательно на него не действуют методы onclick
    // следовательно требуется перевести в массив
    
    let btn_dangerArr = btn_danger.item(0); 
    let btn_successArr = btn_success.item(0);
    let modal__close_timesArr = modal__close_times.item(0);
    let modal__close_timesArr1 = modal__close_times.item(1);

        // let modal__close_timesArr = Array.from(modal__close_times);
    
    let modalArr = modal.item(0);
    
    btn_dangerArr.onclick = function(){
    modal_main.className = "modal modal_close";
    modal_success.className = "modal modal_active";
}

    btn_successArr.onclick = function(){
    return false;
}

    modal__close_timesArr.onclick = function(){
    alert("проверка 1");
    modal_main.className = "modal modal_close";
    
}

    modal__close_timesArr1.onclick = function(){
    alert("проверка 2");
    modal_success.className = "modal modal_close"; 
}

// Здравствуйте! Пожалуйста скажите, какой метод нужно использовать, чтоб "крестик" элемент с классом 
// <div class="modal__close modal__close_times">&times;</div> можно было засунуть в одну функцию onclick?
// Сейчас написано две одинаковые функции  modal__close_timesArr.onclick и modal__close_timesArr1.onclick
// основная причина, как понимаю, это вывод обращение к псевдомассиву через метод item(0) и item(1);
// Как сделать чтоб сразу ко всем элементам можно было обратиться? 