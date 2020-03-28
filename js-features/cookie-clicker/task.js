// Всего кликов <span id="clicker__counter">0</span>

    const clicker__counter = document.getElementById("clicker__counter");
    const cookie = document.getElementById("cookie");
    cookie.onclick = function() {
        clicker__counter.textContent ++;   // почему если написать cliker__counter.textContent += 1; В консоли будет выводиться при кликах "0111111"?
        if (clicker__counter.textContent % 2 == 0) {
            cookie.width = 200;
            cookie.heigth = 200;
        } else {
            cookie.width = 100;
            cookie.heigth = 100;
        }
    }  


 