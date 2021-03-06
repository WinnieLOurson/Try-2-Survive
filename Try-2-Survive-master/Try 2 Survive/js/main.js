// global variables
const width = window.innerWidth * window.devicePixelRatio;
const height = window.innerHeight * window.devicePixelRatio;


var game = new Phaser.Game(width, height, Phaser.CANVAS, 'game');
var score = 0;
var life = 5; 

var button1, button2, button3, button4;
var buttonA, buttonB, buttonC, buttonD;

var reussite = 0, ordre = 0, textOrdre = "", succes = 0;

// c'est les conditions pour passer aux autres niveaux
var level = 1;
const goToLevel2 = 5;
const goToLevel3 = 10;

game.state.add('Level1', Level1);
game.state.start('Level1');

// l'affichage 
var bmpText;
var lifeText;
var scoreText;

// ===
// TOUTES LES FONCTIONS BORDELIQUES ICI

function nb_aleatoire(min,max){

	var nb = min + (max-min+1)*Math.random();
	return Math.floor(nb);
}


// on pourrait remplacer cette fonction requete(ordre) directement par updateTextOrdre();
// mais grosse flemme de modifier tout le code
function requete(ordre) {
	updateTextOrdre();
}

function actReussite () {
    if (reussite > 0){
        ordre = nb_aleatoire(1, 4);		

        requete(ordre);
        reussite = 0;    
            
    }
}

function updateTextOrdre() {
	if (level == 1) {
		if (ordre == 1) 
			textOrdre = "concombre";
		else if (ordre == 2) 
			textOrdre = "boule sur patte";
		else if (ordre == 3) 
			textOrdre = "il te volait ton gouter";
		else if (ordre == 4) 
			textOrdre = "super pour se gratter l'oreil";
	}
	else if (level == 2) {
		if (ordre == 1) 
			textOrdre = "tchoutchou";
		else if (ordre == 2) 
			textOrdre = "je tombe!";
		else if (ordre == 3) 
			textOrdre = "mousaillon";
		else if (ordre == 4) 
			textOrdre = "blessure au pied";
    }
    else if (level == 3) {
		if (ordre == 1) 
			textOrdre = "feru";
		else if (ordre == 2) 
			textOrdre = "urus";
		else if (ordre == 3) 
			textOrdre = "tburizas";
		else if (ordre == 4) 
			textOrdre = "jera";
	}
	
	bmpText.setText(textOrdre);
}

function actionOnClick1 (buttonId) {
    if (ordre == 1) {
        score = score+1;
        reussite = 1;
        succes++;
        if (succes == 3){
            life++;
            succes = 0;
        }
        actReussite(reussite);
    } else {
        life--;
        reussite = 0;
        succes = 0;
    }
}

function actionOnClick2 () {
    if (ordre == 2) { 
        score = score+1;
        reussite = 1;
        succes++;
        if (succes == 3){
            life++;
            succes = 0;
        }
        actReussite(reussite);
    } else {
        life--;
        reussite = 0;
        succes = 0;
    }
}

function actionOnClick3 () {
    if (ordre == 3) {
        score = score+1;
        reussite = 1;
        succes++;
        if (succes == 3){
            life++;
            succes = 0;
        }
        actReussite(reussite);
    } else {
        life--;
        reussite = 0;
        succes = 0;
    }
}

function actionOnClick4 () {
    if (ordre == 4) {
        score = score+1;
        reussite = 1;
        succes++;
        if (succes == 3){
            life++;
            succes = 0;
        }
        actReussite(reussite);
    } else {
        life--;
        reussite = 0;
        succes = 0;
    }
    
}