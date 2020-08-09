let interestCheck = [...document.querySelectorAll(`.interest__check`)];




interestCheck.forEach( interest => {
    interest.addEventListener(`change`, e => {
        let listCheck = e.currentTarget.closest(`.interest`).querySelector(`.interests_active`);
        if (!(listCheck === null)){
            let listInterests = [...listCheck.querySelectorAll(`.interest__check`)];
            let bool = e.currentTarget.checked === false ? false : true; 
            listInterests.forEach( e => {
                e.checked = bool;
        })  
        } else {
            let checklist2lvl = [...e.currentTarget.closest(`.interests_active`).querySelectorAll(`.interest__check`)];
            let check2LVL = checklist2lvl.every( interest => interest.checked === true);
            let listInterests1lvl = e.currentTarget.closest(`.interests_active`).closest(`.interest`).querySelector(`.interest__check`);
            check2LVL === true ? listInterests1lvl.checked = true : listInterests1lvl.checked = false;
        };
        // else {
        //     let mainCheck = e.currentTarget.closest(`.interests_active`).closest(`.interest`).querySelector(`.interest__check`);
        //     return e.currentTarget.checked === true ? mainCheck.checked = true : mainCheck.checked = false;
        // }
    })
})

