


// const menu_sub = Array.from(document.querySelectorAll("li.menu__item > ul"));
// // воспользовались >  нахождения ul menu menu sub. 
// const menu_link = Array.from(document.querySelectorAll("li.menu__item > a"));
// // аналогично с ссылкой работаем

// menu_link[1].onclick = function(){
//     menu_sub[1].className = "menu menu_sub menu active";
//     menu_sub[2].className = "menu menu_sub"
//     return false;
// }


const menuSub = Array.from(document.querySelectorAll('li.menu__item > ul'));
const menuItems = Array.from(document.querySelectorAll('li.menu__item > a'));

let closedMenu = function(){
    for ( let i = 0; i< menuSub.length; i++) {
        menuSub[i].classList.remove("menu_active");
    }
}


// for ( let i = 0; i < menuItems.length; i++){   
//         if (menuItems[menuItems.length] || menuItems[menuItems.length - menuItems.length]) {
//             menuItems[menuItems.length - 1].onclick = function() {
//                 console.log("Провека 3");
//                 // closedMenu();
//                 return false;
//             }
//             menuItems[menuItems.length - menuItems.length].onclick = function(){
//                 console.log("Проверка 1");
//                 // closedMenu();
//                 return false;
//             }
        
//         } 

//             menuItems[i].onclick = function(){
//             console.log('Провека 2')
//             // menuSub[i].className = "menu menu_sub menu_active";
//             return false;
//         }
// }

    for ( let i = 0; i < menuItems.length; i++){
        menuItems[i].onclick = function(){
            if (this.closest("li").querySelector("ul")){
                this.closest('li').querySelector("ul").classList.add("menu_active"); 
                return false;
            }
            console.log('fff')
            return false;
        }
    }







    // menuItems[1].onclick = function() {
// 	menuSub[0].className = "menu menu_sub menu_active";
// 	menuSub[1].className = "menu menu_sub";
// 	return false;
// }
// menuItems[5].onclick = function() {
// 	menuSub[1].className = "menu menu_sub menu_active";
// 	menuSub[0].className = "menu menu_sub";
// 	return false;
// }

