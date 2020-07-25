let menu_link = [...document.querySelectorAll(".menu__link")];
let menu_sub = [...document.querySelectorAll(".menu_sub")]


let menuSubDeactivate = function(){
        let menuSubIndex = menu_sub.findIndex( function (element){
                return element.classList.contains("menu_active");
        })
        if (menuSubIndex >= 0){
        menu_sub[menuSubIndex].classList.remove("menu_active");
};
}


menu_link.forEach(function (element) {
        element.onclick = function(){
                let elementClass = element.closest("li").querySelector("ul");
                if (elementClass === null){
                        menuSubDeactivate();
                        console.log(`wotktrk`);
                        return false;
                } else if (elementClass){
                        console.log(elementClass);
                        if (elementClass.classList.contains("menu_active")){
                                elementClass.classList.remove("menu_active");
                        }

                        menuSubDeactivate();
                        elementClass.classList.add("menu_active");
                        return false;
                };
        };
});