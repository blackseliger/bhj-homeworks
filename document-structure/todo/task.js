let tasks_input = document.querySelector(`.tasks__input`);
let tasksList = document.querySelector(`.tasks__list`);
let tasksControl = document.querySelector(`.tasks__control`);
// let task_remove = [...document.querySelectorAll(`task__remove`)];

let tasks_remove = [];
let counter = 0;

tasksControl.addEventListener(`submit`, e => {
  e.preventDefault(); // предотвратить перезагрузку страницы
  element = e.target;
  
  if (!(tasks_input.value === ``)){
  tasksList.insertAdjacentHTML(`beforeEnd`, `<div class="task">
  <div class="task__title">
    ${tasks_input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div> `)

    let task_remove = [...document.querySelectorAll(`.task__remove`)];
    task_remove = task_remove[counter]
    counter++;
    return tasks_remove.push(task_remove);
  };

    element.reset();
})

for (let i = 0; i < tasks_remove.length; i++){
  tasks_remove[i].addEventListener(`click`, e => {
      e.preventDefault();
      console.log(`its work`);
  })
}

tasks_remove.forEach( element => {
  element.addEventListener(`click`, e => {
    e.preventDefault();
    console.log(`its wotk`);
  })
})


// task_remove.forEach( element => {
//   element.addEventListener(`click`, e => {
//     e.preventDefault();
//     console.log(`its work`)
//     element = e.currentTarget;
//     let removeEl = element.closest(`.task`);
//     console.log(removeEl);
//   })
// })


