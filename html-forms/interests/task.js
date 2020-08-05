let interestCheck = [...document.querySelectorAll(`.interest__check`)];




interestCheck.forEach( interest => {
    interest.addEventListener(`change`, e => {
        
        let listCheck = e.currentTarget.closest(`.interest`).querySelector(`.interests_active`);
        console.log(!(listCheck === null))
        if (!(listCheck === null)){
            let listInterests = [...listCheck.querySelectorAll(`.interest__check`)];
            let bool = e.currentTarget.checked === false ? false : true; 
            listInterests.forEach( e => {
                e.checked = bool;
        })  
        } else {
            let mainCheck = e.currentTarget.closest(`.interests_active`).closest(`.interest`).querySelector(`.interest__check`);
            return e.currentTarget.checked === true ? mainCheck.checked = true : mainCheck.checked = false;
        }
    })
})

