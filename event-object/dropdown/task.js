let dropdown = [...document.querySelectorAll(".dropdown__value")];
let dropdown_items = [...document.querySelectorAll(".dropdown__item")];




function openList(e){
    e = e || window.event; // нужно прописывать эту проверку всегда?
    let findList = e.currentTarget.closest(".dropdown").querySelector("ul");

    if (findList.classList.contains("dropdown__list_active")){
        findList.classList.remove("dropdown__list_active");
    }  else  {
        findList.classList.add("dropdown__list_active");
    };
}

function closeList(e){
    e.preventDefault();
    
    let closeList = e.currentTarget.closest('.dropdown').querySelector("ul");
    closeList.classList.remove("dropdown__list_active");
    
    let closeListValue = e.target.closest(`.dropdown`).querySelector(`div`);
    closeListValue.textContent = e.target.textContent
    
}

dropdown.forEach( function (button){
    button.addEventListener(`click`, openList);
})

dropdown_items.forEach( function(item){
    item.addEventListener(`click`, closeList)
})