// Toglogchin eeljig hadgalah huvisagch, 1 toglogchig 0, 2 dugar ig 1 gej temdegli
var activePlayer = 0;

//Toglogchin tsugluulsan onoog hadgalah 
var scores = [0, 0];

//Toglochin eeljinde tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;

//Shooni ali talaara buusnig hadgalah huvisagch heregtei, 1 - 6 gsen utgiig ene huvisagchind sanamsargvui ger uusgej ogno
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Program ehlehed beltgii

window.document.getElementById('current-0').textContent = "0";
window.document.getElementById('current-1').textContent = "0";
window.document.getElementById('score-0').textContent = "0";
window.document.getElementById('score-1').textContent = "0";

var diceDom = window.document.querySelector('.dice');
diceDom.style.display = "none ";

// Shoog shideh eventListener
window.document.querySelector('.btn-roll').addEventListener('click', function () {

    // 1 -6 hurtelh sanmsargui 1 toog gargaj awna
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Shooni zurgig web dr garganaa 
    diceDom.style.display = "block";
    // Buusan sonamsargui toond ghargalzah shoni zurgig web dr gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";

    // Toglogchin eeljin onoog oorchilno/Busan too 1 es ylgaatai bl idwehtei toglogchin eeljin onog nemn
    if (diceNumber !== 1) {
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        // 1 s ylgatai to buulaa, busan toog toglogchid nemn
    } else {
        // 1 buusan tul toglogchin eeljig ene hesegt solj ogn

        // Ene toglogchin eeljinde tsuglulsan onog 0 bolgno
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;

        // toglogchin eeljing ngo toglogchru shiljuln

        // Herev idvehtei toglogch ni 0 baival idwehtei toglogchig 1 bolgo
        // Ugui bl idwehtei toglogch n 1 bwal idwehtei toglogchig 0 bolgo
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        // Ulaan tsegiig shiljuuln
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");

        // Shoog tur alga bolgoh
        diceDom.style.display = "none ";

        // if (activePlayer === 0) {
        //     activePlayer = 1;
        //     else {
        //         activePlayer = 0;
        //     }
        // }

    }
});
