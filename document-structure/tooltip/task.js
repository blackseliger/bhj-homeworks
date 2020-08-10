let has_tooltip = [...document.querySelectorAll(`.has-tooltip`)];


has_tooltip.forEach( el => {
  el.addEventListener(`click`, (e) => {
    e.preventDefault();
    element = e.target;
    const left = element.getBoundingClientRect().left;
    const top = element.getBoundingClientRect().bottom;
    let checkTootlip = document.querySelector(`.tooltip`);
    if (checkTootlip) {
      if (checkTootlip.classList.contains(`tooltip_active`)){
        checkTootlip.classList.remove(`tooltip_active`);
      } else {
        checkTootlip.classList.add(`tooltip_active`);
      }

      checkTootlip.style.left = `${left}px`
      checkTootlip.style.top = `${top}px`
      checkTootlip.textContent = element.getAttribute(`title`);
    } else {
        element.insertAdjacentHTML(`afterEnd`, `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px">
    ${element.getAttribute(`title`)}
  </div>`)
    };
  })
})


// проблема, что приходится нажимать дважды на другую подсказку, чтоб убралась подсказка у прошлой и только теперь добавилась у актуальной, нажатой.
// Нужно как то сделать, чтоб все происходило по нажатию одной раза. Спросить про это.
// Подсказки гуляют по тексту, если скролить. Спросить что делать 

