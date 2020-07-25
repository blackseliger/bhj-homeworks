let slider_arrow = [...document.querySelectorAll(".slider__arrow")];
let slider_item = [...document.querySelectorAll(".slider__item")];
let slider_dots = [...document.querySelectorAll(".slider__dot")]

let number = 0;

let deactivateArrow = function(){    
   let index = slider_item.findIndex( (item) => {
        return item.classList.contains("slider__item_active");
    })
    
    slider_item[index].classList.remove("slider__item_active");
    if (slider_item[number]){
    slider_item[number].classList.add("slider__item_active");
    };
};
    
let deactivateSlide = () => {
    let slideIndex = slider_item.findIndex( function (slide){
        return slide.classList.contains("slider__item_active")
    })

    if (slider_item[slideIndex]){
        slider_item[slideIndex].classList.remove("slider__item_active");
        slider_dots[slideIndex].classList.remove("slider__dot_active");
    };


}

let activateSlide = () => {
    slider_item[number].classList.add("slider__item_active");
    slider_dots[number].classList.add("slider__dot_active");
}

let deactivateDot = function(){
    let dotIndex = slider_dots.findIndex( function (dot){
        return dot.classList.contains("slider__dot_active");
    });
    
    if (dotIndex >= 0){
        slider_dots[dotIndex].classList.remove("slider__dot_active");
    };
}

    slider_arrow.forEach( function (arrow){
        arrow.onclick = function(){
            if (arrow.classList.contains("slider__arrow_next")){
                number++
                if (number < slider_item.length){
                    deactivateSlide();
                    activateSlide();
            } else if (number = slider_item.length) {
                    number = 0;
                    deactivateSlide();
                    activateSlide();
                };
            } else if (arrow.classList.contains("slider__arrow_prev")){
                    number--
                    if (number < slider_item.length && number >= 0){
                        deactivateSlide();
                        activateSlide();
                    } else if (number === -1){
                        number = slider_item.length - 1;
                        deactivateSlide();
                        activateSlide();
                    }
            }   

        }
    })

// доп задание
slider_dots.forEach( function (dot){
    dot.onclick = function(){
        
        deactivateDot();
        deactivateSlide();
        
        dot.classList.add("slider__dot_active");
        let dotIndex = slider_dots.findIndex( function (dot){
            return dot.classList.contains("slider__dot_active");
        })
        slider_item[dotIndex].classList.add("slider__item_active");
        

    }
})

