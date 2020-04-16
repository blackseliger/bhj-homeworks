

// (() => {
//   let playing = true,
//     activeHole = 1;

//   const stop = () => playing = true,
//     getHole = index => document.getElementById(`hole${index}`),
//     deactivateHole = index =>
//       getHole( index ).className = 'hole',
//     activateHole = index =>
//       getHole( index ).className = 'hole hole_has-mole',
//     next = () => setTimeout(() => {
//       if ( !playing ) {
//         return;
//       }
//       deactivateHole( activeHole );
//       activeHole = Math.floor( 1 + Math.random() * 9 );
//       activateHole( activeHole );
//       next();
//     }, 800 );

//   next();

//   let reset = function() {
//     lost.textContent = 0;
//     dead.textContent = 0;
//   }  


//   for ( let i = 1; i < 10; i++) {
//     const test = getHole(i);
//     test.onclick = function(){
//         if (test.className.includes( `hole_has-mole`)){
//             dead.textContent++;
//             alert('ПОПАЛ');
//         } else {
//             lost.textContent++;
//             if (lost.textContent > 5) {
//                 alert("Вы проиграли");
//                reset();
//             }
//         } 
//     }
//         if (dead.textContent === 10) {
//             alert("Вы выиграли")
//             reset();
            
//         }
//     }

// })();






