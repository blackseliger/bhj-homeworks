let fontSize = [...document.querySelectorAll(`.font-size`)];
let textcolor = [...document.querySelector(`.book__control_color`).querySelectorAll(`.color`)];
let backgroundColor = [...document.querySelector(`.book__control_background`).querySelectorAll(`.color`)];
let book = document.querySelector(`.book`);


let isBig = () => {
    if (book.classList.contains("book_fs-big")){
        book.classList.remove("book_fs-big");
    };
}

let isSmall = () => {
    if (book.classList.contains("book_fs-small")){
        book.classList.remove("book_fs-small");
    };
}



let changeSize = (e) => {
    e.preventDefault();
    let currentElement = e.currentTarget;
    let activatedFS = currentElement.closest(".book__control").querySelector(`.font-size_active`);
    
    if (activatedFS){
        activatedFS.classList.remove("font-size_active")
    };
    
    currentElement.classList.add(`font-size_active`)
    if (currentElement.classList.contains(`font-size_small`)){
        isBig();
        book.classList.add("book_fs-small");
    } else if (currentElement.classList.contains("font-size_big")){
        isSmall();
        book.classList.add("book_fs-big");
    } else if (!currentElement.matches(`.font-size_big`) && !currentElement.matches(`.font-size_small`)) {
        isBig();
        isSmall();
    };

};

fontSize.forEach( element => {
    element.addEventListener(`click`, changeSize);
})

// доп. CT - colorText

let defualtTC = () => {
    if (book.classList.contains("book_color-gray")){
        book.classList.remove("book_color-gray");
    } else if (book.classList.contains ("book_color-whitesmoke")){
        book.classList.remove("book_color-whitesmoke");
    };
};



let changeColor = (e) => {
    e.preventDefault();
    let currentElement = e.currentTarget;
    let activatedCT = currentElement.closest(".book__control_color").querySelector(`.color_active`);

    if (activatedCT){
        activatedCT.classList.remove("color_active");
    };

    currentElement.classList.add(`color_active`);
    if (currentElement.dataset.color){
        defualtTC();
        book.classList.add(`book_color-${currentElement.dataset.color}`);
    } else {
        defualtTC();
    }

}

textcolor.forEach( element => {
    element.addEventListener(`click`, changeColor);
})

//  доп фон CB - colorBackground

defaultCB = () => {
    if (book.classList.contains("book_bg-gray")){
        book.classList.remove("book_bg-gray");
    } else if (book.classList.contains("book_bg-black")){
        book.classList.remove("book_bg-black");
    };
};

let changeBackGroundColor = (e) =>{
    e.preventDefault();
    let currentElement = e.currentTarget;
    let activatedCB = currentElement.closest(`.book__control_background`).querySelector(`.color_active`); 

    if (activatedCB) {
        activatedCB.classList.remove("color_active");
    };

    currentElement.classList.add(`color_active`);
    console.log(currentElement.dataset.color);
    if (currentElement.dataset.color){
        defaultCB();
        book.classList.add(`book_bg-${currentElement.dataset.color}`);
    } else {
        defaultCB();
    };
};

backgroundColor.forEach( element => {
    element.addEventListener(`click`, changeBackGroundColor);
})