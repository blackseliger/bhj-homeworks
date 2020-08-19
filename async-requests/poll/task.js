
let pollTitle = document.querySelector(`.poll__title`);
let pollAnswers = document.querySelector(`.poll__answers`);


pollAnswers.addEventListener(`click`, e => {
        let element = e.target;
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com/poll.php`, true);
        xhr.addEventListener(`readystatechange`, () => {
            if (xhr.readyState === 4 && xhr.status === 200){
                let data = JSON.parse(xhr.responseText);
                alert(`Спасибо, ваш голос засчитан`)
                
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
                let pollAnswer = [...document.querySelectorAll(`.poll__answer`)];
                pollAnswer.forEach(element => {
                   return element.remove();
                });
                
                for (let i = 0; i < answersValue.length; i++ ){
                    let pollAnswerNew = document.createElement(`button`);
                    pollAnswerNew.classList.add(`poll__answer`);
                    pollAnswerNew.innerText = answersValue[i]
                    pollAnswers.appendChild(pollAnswerNew);
                }
            };
        })
        xhr.send();
    })
















 // if (answersValue.length > document.querySelectorAll('.poll__answer').length){
                //     console.log(`${answersValue.length} > ${document.querySelectorAll('.poll__answer').length}`);
                //     let difference = answersValue.length -  document.querySelectorAll('.poll__answer').length;
                //     let clonePollAnswer = document.createElement(`button`);
                //     clonePollAnswer.classList.add(`poll__answer`);
                    
                //     for (let i = 0; i < difference; i++){
                //         pollAnswers.insertAdjacentHTML(`beforeend`, `<button class="poll__answer">
                //         Кто тут?
                //       </button>`)
                //     }
                // }   else if (answersValue.length < document.querySelectorAll('.poll__answer').length){
                //     console.log(`${answersValue.length} < ${document.querySelectorAll('.poll__answer').length}`);
                //     for (let i = answersValue.length; i < document.querySelectorAll('.poll__answer').length; i++){
                //         document.querySelectorAll('.poll__answer').item(i).remove();
                //     }
                // };   
                //     for (let i = 0; i < document.querySelectorAll('.poll__answer').length; i++){
                //         document.querySelectorAll('.poll__answer')[i].innerText = answersValue[i];
                //     };





                // pollAnswer.forEach(element => {
                //     element.addEventListener(`click`, e => {
                //         let xhr = new XMLHttpRequest();
                //         xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com/poll.php`, true);
                //         xhr.addEventListener(`readystatechange`, () => {
                //             if (xhr.readyState === 4 && xhr.status === 200){
                //                 let data = JSON.parse(xhr.responseText);
                //                 // alert(`Спасибо, ваш голос засчитан`)
                                
                //                 let arrDataKeys = Object.keys(data.data);
                //                 let arrDataValues = Object.values(data.data);
                                
                //                 let index = function(indexName){
                //                     let findIndex = arrDataKeys.findIndex( element => {
                //                         return element ===  indexName 
                //                     });
                //                         return findIndex;
                //                 }
                //                 let titleValue = arrDataValues[index(`title`)];
                //                 let answersValue = arrDataValues[index(`answers`)];
                //                 pollTitle.innerText = titleValue;
                //                 [...document.querySelectorAll(`.poll__answer`)].forEach(element => {
                //                    return element.remove();
                //                 });
                                
                //                 for (let i = 0; i < answersValue.length; i++ ){
                //                     let pollAnswerNew = document.createElement(`button`);
                //                     pollAnswerNew.classList.add(`poll__answer`);
                //                     pollAnswerNew.innerText = answersValue[i]
                //                     pollAnswers.appendChild(pollAnswerNew);
                //                 }
                //                 console.log(pollAnswer)
                //                 console.log([...document.querySelectorAll(`.poll__answer`)]);
                               
                //             };
                //         })
                //         xhr.send();
                //     })
                // })