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
            if (productQuantityValue.innerText > 1) {
            productQuantityValue.innerText--;
            };
        }
    })
})


productAdd.forEach( e => {
    e.addEventListener(`click`, e => {
        let element = e.currentTarget;
        let dataId = element.closest(`.product`).getAttribute(`data-id`);
        let value = Number(element.closest(`.product__quantity`).querySelector(`.product__quantity-value`).innerText);
        let img = element.closest(`.product`).querySelector(`.product__image`).getAttribute(`src`);
        
        
        
        let cartProduct = [...document.querySelectorAll(`.cart__product`)]
        if (!(cartProduct === null)){
            let cartProductIndex = cartProduct.findIndex( cart => {
                return cart.getAttribute(`data-id`) === dataId
            })

            if (cartProductIndex >= 0){
                let count = Number(cartProduct[cartProductIndex].querySelector(`.cart__product-count`).innerText);
                count = count + value;
                cartProduct[cartProductIndex].querySelector(`.cart__product-count`).innerText = count;
            } else if (cartProductIndex === -1){     
                let cartProductData = document.createElement(`div`);
                cartProductData.classList.add(`cart__product`);
                cartProductData.setAttribute(`data-id`, `${dataId}`);
                
                let cartProductCount = document.createElement(`div`);
                cartProductCount.classList.add(`cart__product-count`);
                cartProductCount.innerText = value;
                let cartProductImage = document.createElement(`img`);
                cartProductImage.classList.add(`cart__product-image`);
                cartProductImage.setAttribute(`src`, `${img}`);

                cartProducts.appendChild(cartProductData);
                cartProductData.appendChild(cartProductImage);
                cartProductData.appendChild(cartProductCount);
            }
        }
        
    

        
    })
})



