// Всего кликов <span id="clicker__counter">0</span>
const clicker__counter = document.getElementById("clicker__counter");
const reduceNumber = function(){
    clicker__counter.textContent -= 1;
    if ( clicker__counter.textContent < 0) {
        clearInterval(id);
        alert ("You win!");
    }
}

const id = setInterval(reduceNumber, 1000);
 