var Level2 = {
	
	preload: function () {
		game.load.image('button 1.1', 'img/lvl 1/1.png');
	game.load.image('button 1.2', 'img/lvl 1/2.png');
	game.load.image('button 1.3', 'img/lvl 1/3.png');
	game.load.image('button 1.4', 'img/lvl 1/4.png');
	game.load.image('button 2.1', 'img/lvl 2/1.png');
	game.load.image('button 2.2', 'img/lvl 2/2.png');
	game.load.image('button 2.3', 'img/lvl 2/3.png');
	game.load.image('button 2.4', 'img/lvl 2/4.png');
	game.load.image('button 3.1', 'img/lvl 3/1.png');
	game.load.image('button 3.2', 'img/lvl 3/2.png');
	game.load.image('button 3.3', 'img/lvl 3/3.png');
	game.load.image('button 3.4', 'img/lvl 3/4.png');
	game.load.image('background 1', 'img/wallpaper 1.bmp');
	game.load.image('background 2', 'img/wallpaper 2.bmp');
	game.load.image('background 3', 'img/wallpaper 3.bmp');
	game.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');

	},
	
	create: function () {
		game.add.tileSprite(0, 0, width, height, 'background 2');

		//  Rotated button
		button1 = game.add.button(170, 100, 'button 2.1', actionOnClick1, this, 2, 1, 0);
		button1.scale.setTo(2, 2);
		button4.angle = 24;
		button1.anchor.setTo(0.5, 0.5);

		//  Rotated button
		button2 = game.add.button(570, 100, 'button 2.2', actionOnClick2, this, 2, 1, 0);
		button2.scale.setTo(2, 2);
		button2.angle = 24;
		button2.anchor.setTo(0.5, 0.5);

		//  Rotated button
		button3 = game.add.button(170, 500, 'button 2.3' , actionOnClick3, this, 2, 1, 0);
		button3.scale.setTo(2, 2);
		button3.angle = 24;
		button3.anchor.setTo(0.5, 0.5);

		//  Rotated button
		button4 = game.add.button(570, 500, 'button 2.4' , actionOnClick4, this, 2, 1, 0);
		button4.scale.setTo(2, 2);
		button4.angle = 24;
		button4.anchor.setTo(0.5, 0.5);

		bmpText = game.add.bitmapText(100, 800, 'carrier_command', + ordre,34);
    	bmpText.inputEnabled = true;
		bmpText.input.enableDrag();

		lifeText = game.add.bitmapText(850, 100, 'carrier_command', 'ta vie',34);
    	lifeText.inputEnabled = true;
		lifeText.input.enableDrag();
	
		scoreText = game.add.bitmapText(850, 300, 'carrier_command', "score = " + score, 34);
    	scoreText.inputEnabled = true;
		scoreText.input.enableDrag();
		
		ordre = nb_aleatoire(1, 4);
		requete(ordre);
	},

	update: function () {
		
		lifeText.setText("life = " + life);
		scoreText.setText("score = " + score); 

		button1.angle += 5;
		button2.angle += 5;
		button3.angle += 5;
		button4.angle += 5;
		
		if (score >= goToLevel3) {
			level++;
			console.log("ON PASSE AU NIVEAU 3!!! :o");
			
			game.state.add('Level3', Level3);
			game.state.start('Level3');
		}
	},
};


