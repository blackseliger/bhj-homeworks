let pollAnswer = [...document.querySelectorAll(`.poll__answer`)];
let pollTitle = document.querySelector(`.poll__title`);
let pollAnswers = document.querySelector(`.poll__answer`);

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
                pollTitle.innerText = titleValue;

                console.log(`${answersValue.length}, ${pollAnswer.length} `)

                if (answersValue.length > pollAnswer.length){
                    let difference = answersValue.length - pollAnswer.length
                    for (let i = 0; i < difference; i++){
                        let pollAnswerCopy = pollAnswer[0].cloneNode(true); 
                        pollAnswers.appendChild(pollAnswerCopy);
                    }
                }   else if (answersValue.length < pollAnswer.length){
                    let diff = pollAnswer.length - answersValue.length;
                    console.log(diff);
                    for (let i = pollAnswer.length - 1; i = answersValue.length; i--){
                        pollAnswer[i].remove();
                    };
                }
                    for (let i = 0; i < pollAnswer.length; i++){
                        pollAnswer[i].innerText = answersValue[i];
                    };
            } else {
                console.log(xhr.readyState);
            }
        })
        xhr.send(element);
    })
})