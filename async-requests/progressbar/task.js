let progress = document.getElementById(`progress`)
let form = document.getElementById(`form`)


form.addEventListener(`submit`, e => {
    e.preventDefault();
    let formdata = new FormData(form); // зачем я это сделал?
    let xhr = new XMLHttpRequest();
    xhr.open(`POST`, `https://netology-slow-rest.herokuapp.com/upload.php`, true)
    xhr.addEventListener(`readystatechange`, () => {
        if (xhr.readyState === 0){
            progress.value = (xhr.readyState / 4).toFixed(0);
            console.log(xhr.statusText);
        } else if (xhr.readyState === 1){
            progress.value = (xhr.readyState / 4).toFixed(0);
            console.log(xhr.statusText);

        } else if (xhr.readyState === 2){
            progress.value = (xhr.readyState / 4).toFixed(0);
                        console.log(xhr.statusText);

        } else if (xhr.readyState === 3 && xhr.status === 200){
            progress.value = (xhr.readyState / 4).toFixed(0);
                        console.log(xhr.statusText);

        }
    })

    xhr.send(formdata);
})



