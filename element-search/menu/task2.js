let menu_link = [...document.querySelectorAll(".menu__link")];
let menu_sub = [...document.querySelectorAll(".menu_sub")]





console.log(menu_sub);
menu_link.forEach(function (element) {
                    element.onclick = function(){
                            if (element.closest("li").querySelector("ul")){
                                menu_sub.forEach(function (element) {
                                    element.className = "menu menu_sub";
                                })
                                         this.closest("li").querySelector("ul").className = "menu menu_sub menu_active" 
                                                return false;
                        } 
                    }
})

