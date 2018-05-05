var Level1 = {
		
	preload: function () {
		game.load.image('button 1.1', 'img/lvl 1/1.jpg');
		game.load.image('button 1.2', 'img/lvl 1/2.jpg');
		game.load.image('button 1.3', 'img/lvl 1/3.jpg');
		game.load.image('button 1.4', 'img/lvl 1/4.jpg');
		game.load.image('button 2.1', 'img/smiley.jpg');
		game.load.image('button 2.2', 'img/smiley.jpg');
		game.load.image('button 2.3', 'img/smiley.jpg');
		game.load.image('button 2.4', 'img/smiley.jpg');
		game.load.image('button 3.1', 'img/coeur.jpg');
		game.load.image('button 3.2', 'img/coeur.jpg');
		game.load.image('button 3.3', 'img/coeur.jpg');
		game.load.image('button 3.4', 'img/coeur.jpg');
		game.load.image('background', 'img/herbe verte.jpg');
		game.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
	},
	
	create: function () {
		ordre = nb_aleatoire(1, 4);
		requete(ordre);
		
		game.add.tileSprite(0, 0, 800, 600, 'background');

		//  Standard button (also used as our pointer tracker)
		button1 = game.add.button(100, 100, 'button 1.1', actionOnClick1, this, 2, 1, 0);
		button1.angle = 24;
		button1.anchor.setTo(0.5, 0.5);


		//  Rotated button
		button2 = game.add.button(100, 500, 'button 1.2', actionOnClick3, this, 2, 1, 0);
		button2.angle = 24;
		button2.anchor.setTo(0.5, 0.5);

		//  Standard button (also used as our pointer tracker)
		button3 = game.add.button(500, 100, 'button 1.3' , actionOnClick2, this, 2, 1, 0);
		button3.angle = 24;
		button3.anchor.setTo(0.5, 0.5);

		//  Standard button (also used as our pointer tracker)
		button4 = game.add.button(500, 500, 'button 1.4' , actionOnClick4, this, 2, 1, 0);
		button4.angle = 24;
		button4.anchor.setTo(0.5, 0.5);

		bmpText = game.add.bitmapText(500, 300, 'carrier_command', + ordre,34);
    	bmpText.inputEnabled = true;
		bmpText.input.enableDrag();

		lifeText = game.add.bitmapText(10, 200, 'carrier_command', 'ta vie',34);
    	lifeText.inputEnabled = true;
		lifeText.input.enableDrag();
	
		scoreText = game.add.bitmapText(200, 500, 'carrier_command', "score = " + score, 34);
    	scoreText.inputEnabled = true;
		scoreText.input.enableDrag();
	},

	update: function () {
		
		console.log("score -> " + score);		
		
		lifeText.setText("life = " + life);
		scoreText.setText("score = " + score); 

		button1.angle += 5;
		button2.angle += 5;
		button3.angle += 5;
		button4.angle += 5;
		
		if (score >= goToLevel2) {
			console.log("ON PASSE AU NIVEAU 2!!! :o");
			
			game.state.add('Level2', Level2);
			game.state.start('Level2');
		}
	},
};