var Level3 = {
		
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
		game.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
	},

	create: function () {
		ordre = nb_aleatoire(1, 4);
		requete(ordre);
		
		game.add.tileSprite(0, 0, 800, 600, 'background');

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

		bmpText = game.add.bitmapText(500, 100, 'carrier_command', + ordre,34);
    	bmpText.inputEnabled = true;
		bmpText.input.enableDrag();

		lifeText = game.add.bitmapText(10, 100, 'carrier_command', 'ta vie',34);
    	lifeText.inputEnabled = true;
		lifeText.input.enableDrag();
	
		scoreText = game.add.bitmapText(500, 500, 'carrier_command', "score = " + score, 34);
    	scoreText.inputEnabled = true;
		scoreText.input.enableDrag();

	},

	update: function () {
		lifeText.setText("life = " + life);
		scoreText.setText("score = " + score); 
		
		button2.angle += 5;
	}
};
