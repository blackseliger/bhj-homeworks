let slider_arrow = [...document.querySelectorAll(".slider__arrow")];
let slider_item = [...document.querySelectorAll(".slider__item")];
let slider_dots = [...document.querySelectorAll(".slider__dot")]

let number = 0;

    
let deactivateSlide = () => {   // проверяет на наличие активных слайдов и точек
    let slideIndex = slider_item.findIndex( slide => (
        slide.classList.contains("slider__item_active")
    ));

    if (slider_item[slideIndex]){
        slider_item[slideIndex].classList.remove("slider__item_active");
        slider_dots[slideIndex].classList.remove("slider__dot_active");
    };
}

let activateSlide = () => {  // активирует точку и слайд
    slider_item[number].classList.add("slider__item_active");
    slider_dots[number].classList.add("slider__dot_active");
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
        
        deactivateSlide(); // деактивирует точку и слайд которые активны
        
        dot.classList.add("slider__dot_active"); 
        let dotIndex = slider_dots.findIndex( dot => (
            dot.classList.contains("slider__dot_active")
        ));
        slider_item[dotIndex].classList.add("slider__item_active");
        number = dotIndex;  
        // cвязал номер слайда с номером точки. Раньше нумирация была только если стрелками слайды менять.

    }
});

