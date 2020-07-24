let menu_link = [...document.querySelectorAll(".menu__link")];
let menu_sub = [...document.querySelectorAll(".menu_sub")]

menu_link.forEach(function (element) {
        element.onclick = function(){

        if (element.closest("li").querySelector("ul").classList.contains("menu_active")){
            element.closest("li").querySelector("ul").classList.remove("menu_active");
        } 
            else if (element.closest("li").querySelector("ul")){
                menu_sub.forEach(function (element) {
                element.classList.remove("menu_active");
        })
                this.closest("li").querySelector("ul").classList.add("menu_active");
        }
                return false;
        }
})

