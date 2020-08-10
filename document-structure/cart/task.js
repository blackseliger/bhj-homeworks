let productQuantityControl = [...document.querySelectorAll(`.product__quantity-control`)];
let productAdd = [...document.querySelectorAll(`.product__add`)];
let cartProducts = document.querySelector(`.cart__products`);




productQuantityControl.forEach( e => {
    e.addEventListener(`click`, e => {
        let element = e.currentTarget;
        let productQuantityValue = element.closest(`.product__quantity-controls`).querySelector(`.product__quantity-value`);
        
        if (element.innerText.includes(`+`)){
            productQuantityValue.innerText++;
        } else {
            if (productQuantityValue.innerText > -1) {
            productQuantityValue.innerText--;
            };
        }
    })
})


productAdd.forEach( e => {
    e.addEventListener(`click`, e => {
        let element = e.currentTarget;
        let cloneProduct = element.closest(`.product`);
        let cloneProductImg = element.closest(`.product`).querySelector(`.product__image`).cloneNode(false);
        let cloneProductValue = element.closest(`.product`).querySelector(`.product__quantity-value`).cloneNode(false);
        console.log(cloneProductValue.innerText);
        if (cloneProduct){
            cartProducts.appendChild(cloneProduct);
            cartProducts.appendChild(cloneProductImg);
            cartProducts.appendChild(cloneProductValue);
        } else {
            console.log(`work`);
        }
    })
})



