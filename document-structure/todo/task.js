let tasks_input = document.querySelector(`.tasks__input`);
let tasksList = document.querySelector(`.tasks__list`);
let tasksControl = document.querySelector(`.tasks__control`);
// let task_remove = [...document.querySelectorAll(`task__remove`)];

let tasks_remove = [];
let counter = 0;

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
  let element = e.currentTarget;
  let elementX = e.clientX
  let elementY = e.clientY
  let taskRemove = [...element.querySelectorAll(`.task__remove`)];
  counter = 0;
  taskRemove.forEach( taskR => {
    let left = taskR.getBoundingClientRect().left
    let bottom = taskR.getBoundingClientRect().bottom;
    if ((elementX > left) && (elementY < bottom) && counter < 1){
      taskR.closest(`.task`).remove();
      counter++
    } 
  })
});

// Выглядит слишком коряво, спросить есть ли лучше способ сделать задание
