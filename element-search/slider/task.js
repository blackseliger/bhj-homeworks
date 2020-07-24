let slider_arrow = [...document.querySelectorAll(".slider__arrow")];
let slider_item = [...document.querySelectorAll(".slider__item")];
let slider_dots = [...document.querySelectorAll(".slider__dot")]

let number = 0;

let deactivateArrow = function(){    
   let index = slider_item.findIndex( (item) => {
        return item.classList.contains("slider__item_active");
    })
    slider_item[index].classList.remove("slider__item_active");
    slider_item[number].classList.add("slider__item_active");
};
    
slider_arrow.forEach( function(element){
    element.onclick = function(){
        if (element.classList.contains("slider__arrow_next")){
            if (number < slider_item.length){
                deactivateArrow();   
                    number++
            }else if (number = slider_item.length){
                number = 0;
            };
        };

        if (element.classList.contains("slider__arrow_prev")){
            if (number >= 0){
                deactivateArrow();
                number--;
            }else if (number < 0){
                number = slider_item.length;
                number--;
            }; 
            };
        };
    });

// доп задание

slider_dots.forEach( function (element){
     element.onclick = function(){ 
            let dotIndex = slider_dots.findIndex( (dot) => {
                return dot.classList.contains("slider__dot_active");
            });
                if (dotIndex >= 0){
                    slider_dots[dotIndex].classList.remove("slider__dot_active");
                    slider_item[dotIndex].classList.remove("slider__item_active");
            };
            
            element.classList.add("slider__dot_active");
            let slideIndex = slider_dots.findIndex( (slide) => {
                return slide.classList.contains("slider__dot_active");
            })
            slider_item[slideIndex].classList.add("slider__item_active");
        }
})


