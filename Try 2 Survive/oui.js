var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create,update : update });

function preload() {

    game.load.image('button', 'img/smiley.jpg');

}

function nb_aleatoire(min,max){

     var nb = min + (max-min+1)*Math.random();

     return Math.floor(nb);
}

var button1;
var button2;
var button3;
var button4;

var score = 0;
var succes = 0;

function requete (ordre){
    
    alert("presser le bouton numéro" + ordre);

}

var ordre = nb_aleatoire(1, 4);
requete(ordre);

function update () {
    
    button2.angle += 5;
    
}

function create() {;

    //  Standard button (also used as our pointer tracker)
    button1 = game.add.button(100, 100, 'button', actionOnClick1, this, 2, 1, 0);
    button1.anchor.setTo(0.5, 0.5);


    //  Rotated button
    button2 = game.add.button(100, 500, 'button', actionOnClick3, this, 2, 1, 0);
    button2.angle = 24;
    button2.anchor.setTo(0.5, 0.5);

    //  Standard button (also used as our pointer tracker)
    button3 = game.add.button(500, 100, 'button', actionOnClick2, this, 2, 1, 0);
    button3.anchor.setTo(0.5, 0.5);

    //  Standard button (also used as our pointer tracker)
    button4 = game.add.button(500, 500, 'button', actionOnClick4, this, 2, 1, 0);
    button4.anchor.setTo(0.5, 0.5);
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
        succes = succes+1;
        alert (score);
    } else {
        alert ("bah non");
        succes = 0;
    }   
}

function actionOnClick2 () {
    if (ordre == 2) {
        alert ("bien joué"); 
        score = score+1;
        succes = succes+1;
        alert (score);
    } else {
        alert ("bah non");
        succes = 0;
    }
}

function actionOnClick3 () {
    if (ordre == 3) {
        alert ("bien joué"); 
        score = score+1;
        succes = succes+1;
        alert (score);
    } else {
        alert ("bah non");
        succes = 0;
    }
}

function actionOnClick4 () {
    if (ordre == 4) {
        alert ("bien joué"); 
        score = score+1;
        succes = succes+1;
        alert (score);
    } else {
        alert ("bah non");
        succes = 0;
    }
}

function actSucces () {
    if (succes > 0){
        alert ("oui");
        var ordre = nb_aleatoire(1, 4);
        requete(ordre);
    }
}



function render () {

}