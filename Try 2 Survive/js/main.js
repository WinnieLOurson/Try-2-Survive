// global variables
const width = window.innerWidth * window.devicePixelRatio;
const height = window.innerHeight * window.devicePixelRatio;

var game = new Phaser.Game(width, height, Phaser.CANVAS, 'game');
var score = 0;

var button1, button2, button3, button4;
var buttonA, buttonB, buttonC, buttonD;

var reussite = 0, ordre = 0;

// c'est les conditions pour passer aux autres niveaux
const goToLevel2 = 2;
const goToLevel3 = 3;

game.state.add('Level1', Level1);
game.state.start('Level1');


// ===
// TOUTES LES FONCTIONS BORDELIQUES ICI

function nb_aleatoire(min,max){

	var nb = min + (max-min+1)*Math.random();
	return Math.floor(nb);
}

function requete(ordre) {
    alert("pressez le bouton numéro" + ordre);
}

function actReussite () {
    if (reussite > 0){
        alert ("oui");
        ordre = nb_aleatoire(1, 4);
        requete(ordre);
        reussite = 0;
    }
}



function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick1 () {
    if (ordre == 1) {
        alert ("bien joué");
        score = score+1;
        reussite = 1;
        alert (score);
        actReussite(reussite);
    } else {
        alert ("bah non");
        reussite = 0;
    }
}

function actionOnClick2 () {
    if (ordre == 2) {
        alert ("bien joué"); 
        score = score+1;
        reussite = 1;
        alert (score);
        actReussite(reussite);
    } else {
        alert ("bah non");
        reussite = 0;
    }
}

function actionOnClick3 () {
    if (ordre == 3) {
        alert ("bien joué"); 
        score = score+1;
        reussite = 1;
        alert (score);
        actReussite(reussite);
    } else {
        alert ("bah non");
        reussite = 0;
    }
}

function actionOnClick4 () {
    if (ordre == 4) {
        alert ("bien joué"); 
        score = score+1;
        reussite = 1;
        alert (score);
        actReussite(reussite);
    } else {
        alert ("bah non");
        reussite = 0;
    }
    
}