let interestCheck = [...document.querySelectorAll(`.interest__check`)];


// interestCheck.forEach( interest => {
//     interest.addEventListener(`change`, e => {
//         let listCheck = e.currentTarget.closest(`.interest`).querySelector(`.interests_active`);
//         if (!(listCheck === null)){
//             let listInterests = [...listCheck.querySelectorAll(`.interest__check`)];
//             let bool = e.currentTarget.checked === false ? false : true; 
//             listInterests.forEach( e => {
//                 e.checked = bool;
//         })  
//         } else {
//             let checklist2lvl = [...e.currentTarget.closest(`.interests_active`).querySelectorAll(`.interest__check`)];
//             let check2LVL = checklist2lvl.every( interest => interest.checked === true);
//             let listInterests1lvl = e.currentTarget.closest(`.interests_active`).closest(`.interest`).querySelector(`.interest__check`);
//             check2LVL === true ? listInterests1lvl.checked = true : listInterests1lvl.checked = false;
//         };
//     })
// })  основное верное

interestCheck.forEach( interest => {
    interest.addEventListener(`change`, e => {
        let listCheck = e.currentTarget.closest(`.interest`).querySelector(`.interests_active`);
        function recursion(list){
            if (list === null){ /// начинается с конца. Если списка под элементом нет
                let checklistUpperLvl =  e.currentTarget.closest(`.interests_active`).closest(`.interest`).querySelector(`.interest__check`)
                let checklist = [...e.currentTarget.closest(`.interests_active`).querySelectorAll(`.interest__check`)];
                let checkSome = checklist.some( interest => interest.checked === true);
                let checkEvery = checklist.every(interest => interest.checked === true);
                if (checkSome === true){
                    checklistUpperLvl.checked = false,
                    checklistUpperLvl.indeterminate = true
                } else if (checkEvery === true){
                    checklistUpperLvl.indeterminate = false,
                    checklistUpperLvl.checked = true;
                }
                
                return recursion(checklistUpperLvl);


            } else if (!(list === null)){ // если список под элементом есть
                checklistDownLvl =  [...list.querySelectorAll(`.interest__check`)];
                let bool = e.currentTarget.checked === false ? false : true; 
                return checklistDownLvl.forEach( interest => {
                    interest.checked = bool;
                })
            }
        } recursion(listCheck);
    })
})

