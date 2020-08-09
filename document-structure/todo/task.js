let tasks_input = document.querySelector(`.tasks__input`);
let taslsList = document.querySelector(`.tasks__list`);

tasks_input.addEventListener(`change`, (e) => { 
    e.preventDefault();
    element = e.target;

    console.log(`its work`);
    taslsList.insertAdjacentHTML(`beforeEnd`, `<div class="task">
    <div class="task__title">
      ${e.target.innerText}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div> `)
});

