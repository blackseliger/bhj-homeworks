(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
})();

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const status = document.getElementById("status");
status.onclick = function() {
    for ( let i = 0; i < 9; i++) {
      if (getHole(index).className.includes( `hole_has-mole` )) {
        dead.textContent++;
      } else {
        lost.textContent++;
        if ( lost.textContent >= 5) {
          alert ("Вы проиграли");
          break;
        } 
      } 
    }
    if (dead.textContent === 10) {
      alert("Вы выиграли");
    } 
}

