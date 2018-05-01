var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create,update : update });

function preload() {

    game.load.image('button 1.1', 'img/smiley.jpg');
    game.load.image('button 1.2', 'img/smiley.jpg');
    game.load.image('button 1.3', 'img/smiley.jpg');
    game.load.image('button 1.4', 'img/smiley.jpg');
    game.load.image('button 2.1', 'img/smiley.jpg');
    game.load.image('button 2.2', 'img/smiley.jpg');
    game.load.image('button 2.3', 'img/smiley.jpg');
    game.load.image('button 2.4', 'img/smiley.jpg');
    game.load.image('button 3.1', 'img/coeur.jpg');
    game.load.image('button 3.2', 'img/coeur.jpg');
    game.load.image('button 3.3', 'img/coeur.jpg');
    game.load.image('button 3.4', 'img/coeur.jpg');

}

function nb_aleatoire(min,max){

     var nb = min + (max-min+1)*Math.random();

     return Math.floor(nb);
}

var button1;
var button2;
var button3;
var button4;

var buttonA;
var buttonB;
var buttonC;
var buttonD;

var score = 0;
var reussite = 0;
var level = 0

function requete (ordre){
    
    alert("pressez le bouton numéro" + ordre);

}

var ordre = nb_aleatoire(1, 4);
requete(ordre);

function actReussite () {
    if (reussite > 0){
        alert ("oui");
        ordre = nb_aleatoire(1, 4);
        requete(ordre);
        reussite = 0;
    }
}

function update () {
    
    button2.angle += 5;
    
}

function create() {
    if (score >= 20){
            //  Standard button (also used as our pointer tracker)
    button1 = game.add.button(100, 100, 'button 1.1', actionOnClick1, this, 2, 1, 0);
    button1.anchor.setTo(0.5, 0.5);


    //  Rotated button
    button2 = game.add.button(100, 500, 'button 1.2', actionOnClick3, this, 2, 1, 0);
    button2.angle = 24;
    button2.anchor.setTo(0.5, 0.5);

    //  Standard button (also used as our pointer tracker)
    button3 = game.add.button(500, 100, 'button 1.3' , actionOnClick2, this, 2, 1, 0);
    button3.anchor.setTo(0.5, 0.5);

    //  Standard button (also used as our pointer tracker)
    button4 = game.add.button(500, 500, 'button 1.4' , actionOnClick4, this, 2, 1, 0);
    button4.anchor.setTo(0.5, 0.5);
} else if (score >= 10){
    //  Standard button (also used as our pointer tracker)
button1 = game.add.button(100, 100, 'button 2.1', actionOnClick1, this, 2, 1, 0);
button1.anchor.setTo(0.5, 0.5);

//  Rotated button
button2 = game.add.button(100, 500, 'button 2.2', actionOnClick3, this, 2, 1, 0);
button2.angle = 24;
button2.anchor.setTo(0.5, 0.5);

//  Standard button (also used as our pointer tracker)
button3 = game.add.button(500, 100, 'button 2.3' , actionOnClick2, this, 2, 1, 0);
button3.anchor.setTo(0.5, 0.5);

//  Standard button (also used as our pointer tracker)
button4 = game.add.button(500, 500, 'button 2.4' , actionOnClick4, this, 2, 1, 0);
button4.anchor.setTo(0.5, 0.5);
}
            else (score >= 0) 
                   //  Standard button (also used as our pointer tracker)
    button1 = game.add.button(100, 100, 'button 3.1', actionOnClick1, this, 2, 1, 0);
    button1.anchor.setTo(0.5, 0.5);


    //  Rotated button
    button2 = game.add.button(100, 500, 'button 3.2', actionOnClick3, this, 2, 1, 0);
    button2.angle = 24;
    button2.anchor.setTo(0.5, 0.5);

    //  Standard button (also used as our pointer tracker)
    button3 = game.add.button(500, 100, 'button 3.3' , actionOnClick2, this, 2, 1, 0);
    button3.anchor.setTo(0.5, 0.5);

    //  Standard button (also used as our pointer tracker)
    button4 = game.add.button(500, 500, 'button 3.4' , actionOnClick4, this, 2, 1, 0);
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