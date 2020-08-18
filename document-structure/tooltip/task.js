let has_tooltip = [...document.querySelectorAll(`.has-tooltip`)];
let tooltip = document.querySelector(`.tooltip`);


has_tooltip.forEach(el => {
  el.addEventListener(`click`, e => {
    e.preventDefault();
    element = e.currentTarget;
    let left = element.getBoundingClientRect().left;
    let top = element.getBoundingClientRect().bottom;
    let title = element.getAttribute(`title`);
    
    if (tooltip.classList.contains(`tooltip_active`) && tooltip.innerText === title){
      tooltip.classList.remove(`tooltip_active`);
    } else {
      tooltip.classList.add(`tooltip_active`);
    } 
    
    tooltip.innerText = `${title}`;
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    // tooltip.dataset.position = `${top}px`;
    // tooltip.dataset.position = `right`; 
    // console.log(tooltip.dataset.position.top); undefined 
    // console.log(tooltip.dataset.top);  undefined
    //  Не до конца понимаю, как работать с атрибутом data-position...
  })
})