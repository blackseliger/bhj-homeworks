let h1 = document.querySelector(`h1`);
let loader = document.querySelector(`.loader`);
let items = document.getElementById(`items`);


h1.addEventListener(`click`, e => {
    element = e.currentTarget;
    let item = [...document.querySelectorAll(`.item`)]
    if (item.length > 0){
       item.forEach(element => {
           element.remove();
       })
    };

    if (loader.classList.contains(`loader_active`) === false){
        loader.classList.add(`loader_active`);
    };
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com/`, true);
    xhr.addEventListener(`readystatechange`, () => {
        if (xhr.readyState === 4 && xhr.status === 200){
            loader.classList.remove(`loader_active`);
            let data = JSON.parse(xhr.responseText);

            for (let prop in data.response.Valute){
                function index(nameIndex) {
                    let indexKeys = keysValute.findIndex( key => {
                          return key === nameIndex;
                      });
                      return indexKeys;
                  };
                
                let keysValute = Object.keys(data.response.Valute[prop])
                let valueValute = Object.values(data.response.Valute[prop])

                let charcodeInd = index(`CharCode`);
                let valueInd = index(`Value`);
                let charcode = valueValute[charcodeInd];
                let value = valueValute[valueInd];
                items.insertAdjacentHTML(`beforeEnd`, `<div class="item">
                <div class="item__code">
                    ${charcode}
                </div>
                <div class="item__value">
                    ${value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`)
            }
        };
    });

    xhr.send();
})