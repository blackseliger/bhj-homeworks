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

menuLinkArr2.onclick = function(){
   if (menu_subArr.closest('.menu__item')) {
       alert('Прошло');
      menu_subArr.classList.add("menu_active"); 
   }
    // alert('прошло')
   return false;
    }


