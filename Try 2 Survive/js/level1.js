var Level1 = {
		
	preload: function () {
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
	},
	
	create: function () {
		ordre = nb_aleatoire(1, 4);
		requete(ordre);
		
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
	},

	update: function () {
		
		console.log("score -> " + score);
		
		button2.angle += 5;
		
		if (score >= goToLevel2) {
			console.log("ON PASSE AU NIVEAU 2!!! :o");
			
			game.state.add('Level2', Level2);
			game.state.start('Level2');
		}
	},
};