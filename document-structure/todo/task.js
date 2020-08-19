let tasks_input = document.querySelector(`.tasks__input`);
let tasksList = document.querySelector(`.tasks__list`);
let tasksControl = document.querySelector(`.tasks__control`);


tasksControl.addEventListener(`submit`, e => {
  e.preventDefault();
  let element = e.currentTarget;
  
  if (!(tasks_input.value === ``)){
  tasksList.insertAdjacentHTML(`beforeEnd`, `<div class="task">
  <div class="task__title">
    ${tasks_input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div> `)
    element.reset();
  };
})

tasksList.addEventListener(`click`, e => {
  let element = e.target;
  if (element.classList.contains(`task__remove`)){
    element.closest(`.task`).remove();
  }
});

