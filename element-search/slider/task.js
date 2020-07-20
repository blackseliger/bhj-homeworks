let slider_arrow = [...document.querySelectorAll(".slider__arrow")];
let slider_item = [...document.querySelectorAll(".slider__item")];
let slider_dots = [...document.querySelectorAll(".slider__dot")]

let number = 0;

let deactivateArrow = function(){
    slider_item.forEach((element) => {
        if (element.classList.contains("slider__item_active")){
            element.classList.remove("slider__item_active")
        }
    })
        slider_item[number].classList.add("slider__item_active")  
}


slider_arrow.forEach( function(element){
    element.onclick = function(){
        if (element.classList.contains("slider__arrow_next")){
            if (number < slider_item.length - 1){
                deactivateArrow();   
                    number++
            }   else if (number >= slider_item.length - 1){
                number = 0;
            }
        }

        if (element.classList.contains("slider__arrow_prev")){
           if (number > 0){
               deactivateArrow();
               number--
           }    else if ( number <= 0){
                number = slider_item.length - 1;
           }
        }
    }
})

// доп задание

slider_dots.forEach( function (element){
     
        element.onclick = function(){ 
            slider_dots.forEach (function (element){ 
                
            if (element.classList.contains("slider__dot_active")){
                element.classList.remove("slider__dot_active");
            }
        });  
            element.classList.add("slider__dot_active");
        }
})

