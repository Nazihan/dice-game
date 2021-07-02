// Toglogchin eeljig hadgalah huvisagch, 1 toglogchig 0, 2 dugar ig 1 gej temdegli
var activePlayer = 1;

//Toglogchin tsugluulsan onoog hadgalah 
var scores = [0, 0];

//Toglochin eeljinde tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;

//Shooni ali talaara buusnig hadgalah huvisagch heregtei, 1 - 6 gsen utgiig ene huvisagchind sanamsargvui ger uusgej ogno
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector('#score-0').textContent = dice;

// document.querySelector('#score-1').innerHTML = "<em>Hello!<em>";

// Program ehlehed beltgii
window.document.querySelector('#current-0').textContent = "0";
window.document.querySelector('#current-1').textContent = "0";
window.document.querySelector('#score-0').textContent = "0";
window.document.querySelector('#score-1').textContent = "0";
window.document.querySelector('.dice').style.display = "none ";



console.log('Шоо : ' + dice);