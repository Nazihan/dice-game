// Toglogchin eeljig hadgalah huvisagch, 1 toglogchig 0, 2 dugar ig 1 gej temdegli
var activePlayer = 1;

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

window.document.querySelector('.btn-roll').addEventListener('click', function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
});
