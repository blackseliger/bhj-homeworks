{/* <li class="menu__item">
            <a href="https://netology.ru/" class="menu__link">Главная</a>
        </li> */}


let menu__link = document.querySelectorAll(".menu__link");
let menu_sub = document.querySelectorAll(".menu_sub");
let menu__item = document.querySelectorAll(".menu__item");
// let menu__linkArr = Array.from(menu__link);
// let menu_subArr = Array.from(menu_sub);
let menu_subArr = menu_sub.item(0);
let menuLinkArr1 = menu__link.item(0);
let menuLinkArr2 = menu__link.item(1);
let menuLinkArr3 = menu__link.item(2);
let menuLinkArr4 = menu__link.item(3);

menuLinkArr3.onclick = function(){
   if (menu_subArr.closest("li")) {
       alert('Получилось');
      menu_subArr.classList.add("menu_active"); 
   };
alert('Получилось 2 вариант')
return false;
    }


// Здравствуйте! У меня возникла проблема с присвоением кнопок на вкладки
// с 12 до 15 строки выделил каждую переменную, под каждую кнопку: Главная, О компании, Услуги, Контакты. Позже понял что это неверно
// Думаю тут нужно пользоваться Array.from, но после того как пишу эту команду  9 и 10 строка
// я их не могу использовать с командой onclick. Пожалуйста, скажите на что обратить внимание
// Так же, при нажатии на кнопку, любую из вкладок, она должна либо открывать меню либо переходить по ссылке
// с 18 по 20 строку, пытался реализовать эту команду. Но работает так же неверно. 



