let has_tooltip = [...document.querySelectorAll(`.has-tooltip`)];

has_tooltip.forEach( el => {
    el.addEventListener(`click`, (e) => {
    e.preventDefault();
    element = e.target;
    console.log(element.dataset.title)
    console.log(element.outerHTML);
    console.log(typeof element.outerHTML)
    console.log(element.innerHTML);
    console.log(element.innerText);
    console.log(element.outerText);
    console.log(e)
    })
})