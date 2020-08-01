let fontSize = [...document.querySelectorAll(`.font-size`)];

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
    let book = currentElement.closest(`.book`);
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

