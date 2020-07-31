let reveal = [...document.querySelectorAll('.reveal')];

let openReveal = () => {
    reveal.forEach( revealElement => {
        
        let viewPortHeight = window.innerHeight;
        revealElementTop = revealElement.getBoundingClientRect().top;
        revealElementBottom = revealElement.getBoundingClientRect().bottom;
        revealElementHeight = revealElementBottom - revealElementTop;
        
        if (revealElementBottom < viewPortHeight && revealElementBottom >= revealElementHeight){
            revealElement.classList.add("reveal_active");
        } else {
            revealElement.classList.remove("reveal_active")
        }
    })
}




document.addEventListener(`scroll`, openReveal);