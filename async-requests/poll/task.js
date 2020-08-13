let pollAnswer = [...document.querySelectorAll(`.poll__answer`)];
let pollTitle = document.querySelector(`.poll__title`);
let pollAnswers = document.querySelector(`.poll__answers`);


pollAnswer.forEach(element => {
    element.addEventListener(`click`, e => {
        let element = e.currentTarget;
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com/poll.php`, true);
        xhr.addEventListener(`readystatechange`, () => {
            if (xhr.readyState === 4 && xhr.status === 200){
                let data = JSON.parse(xhr.responseText);
                // alert(`Спасибо, ваш голос засчитан`)
                
                let arrDataKeys = Object.keys(data.data);
                let arrDataValues = Object.values(data.data);
                
                let index = function(indexName){
                    let findIndex = arrDataKeys.findIndex( element => {
                        return element ===  indexName 
                    });
                        return findIndex;
                }
                let titleValue = arrDataValues[index(`title`)];
                let answersValue = arrDataValues[index(`answers`)];
                console.log(answersValue);
                pollTitle.innerText = titleValue;
                let checkActualArrPollAnswer = document.querySelectorAll(`.poll__answer`)

                if (answersValue.length > checkActualArrPollAnswer.length){
                    console.log(`${answersValue.length} > ${checkActualArrPollAnswer.length}`);
                    let difference = answersValue.length -  checkActualArrPollAnswer.length;
                    console.log(difference);
                    let clonePollAnswer = document.createElement(`button`);
                    clonePollAnswer.classList.add(`poll__answer`);
                    
                    for (let i = 0; i < difference; i++){
                        // pollAnswers.appendChild(clonePollAnswer);
                        pollAnswers.insertAdjacentHTML(`beforeend`, `<button class="poll__answer">
                        Кто тут?
                      </button>`)
                        console.log(checkActualArrPollAnswer.length); //добавил элемент, но длина массива не изменилась
                    }
                }   else if (answersValue.length < checkActualArrPollAnswer.length){
                    console.log(`${answersValue.length} < ${checkActualArrPollAnswer.length}`);
                    for (let i = answersValue.length; i < checkActualArrPollAnswer.length; i++){
                        checkActualArrPollAnswer.item(i).remove();
                        console.log(checkActualArrPollAnswer.length); 
                    } // тоже не изменяется длина массива. Самурай в поту, мысли роят в голове, не может понять сложную механику Джаваскрипта
                };   
                    for (let i = 0; i < checkActualArrPollAnswer.length; i++){
                        checkActualArrPollAnswer[i].innerText = answersValue[i];
                    };
            } else {
                console.log(xhr.readyState);
            }
        })
        xhr.send();
    })
})