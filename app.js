// Togloom dussan esehig hadgalah tolvin huvisagch  
var isNewGame;
// Toglogchin eeljig hadgalah huvisagch, 1 toglogchig 0, 2 dugar ig 1 gej temdegli
var activePlayer = 0;

//Toglogchin tsugluulsan onoog hadgalah 
var scores = [0, 0];

//Toglochin eeljinde tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;

//Shooni ali talaara buusnig hadgalah huvisagch heregtei, 1 - 6 gsen utgiig ene huvisagchind sanamsargvui ger uusgej ogno
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Shooni zurgiig uzuulekh element domos haih

var diceDom = window.document.querySelector('.dice');

// Togloomig ehluulne
initGame();

// Shineer ehlehed beltgeh
function initGame(){
    // Togloom ehelle gdg tolovt oruuln
    isNewGame = true;

    activePlayer = 0;
    
    //Toglogchin tsugluulsan onoog hadgalah 
    scores = [0, 0];
    
    //Toglochin eeljinde tsugluulj bga onoog hadgalah huvisagch
    roundScore = 0;
    
    // Program ehlehed beltgii
    
    window.document.getElementById('current-0').textContent = "0";
    window.document.getElementById('current-1').textContent = "0";
    window.document.getElementById('score-0').textContent = "0";
    window.document.getElementById('score-1').textContent = "0";

    // Toglogchdin nerig butsaj gargah
    document.getElementById('name-0').textContent = 'Payer 1';
    document.getElementById('name-1').textContent = 'Payer 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
    
    diceDom.style.display = "none ";
    
    }

// Shoog shideh eventListener
window.document.querySelector('.btn-roll').addEventListener('click', function () {

    if(isNewGame === true){

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
        switchToNextPlayer();

    }

    }else{
        alert('Game over !!! Go new game bro :D');
    }


   
});
// Hold towchni eventListener 
document.querySelector('.btn-hold').addEventListener('click', function () {
    
    if(isNewGame){
        // Ug toglogchin tsuglulsan eeljni onog global ono dr n nemj ogno
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Delgetsen drh onog oorcilno
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Toglogch hojson esehig shalgana (onoo 100+) 
    if (scores[activePlayer] >= 100) {
        // Togloomiig dussan tolovt oruuln 
        isNewGame = false;
        // Ylagch gsen textig nerni orond garganae
        document.getElementById('name-' + activePlayer).textContent = 'WINNER !!!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
    } else {
        //Toglogchin eeljig solino
        switchToNextPlayer();
    }
    }else{
        alert('Game over !!! Go new game bro :D');
    }

});

// En func n togloh eeljig daragin toglogch ru shiljulne
function switchToNextPlayer() {
    //Toglogchin eeljinde tsugluulsan onog 0 bolgno
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

    // toglogchin eeljing ngo toglogchru shiljuln
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Ulaan tsegiig shiljuuln
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");

    // Shoog tur alga bolgoh
    diceDom.style.display = "none ";
}

// Shine togloom ehluuleh
document.querySelector('.btn-new').addEventListener('click', initGame);













 // if (activePlayer === 0) {
        //     activePlayer = 1;
        //     else {
        //         activePlayer = 0;
        //     }
        // }


            // Ug toglogchin tsuglulsan eeljni onog global ono dr n nemj ogno
    // if (activePlayer === 0) {
    //     scores[0] = scores[0] + roundScore;

    // } else {
    //     scores[1] = scores[1] + roundScore;
    // }