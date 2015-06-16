GameRoom.prototype = Object.create(THREE.Object3D.prototype);
GameRoom.prototype.constructor = GameRoom;

function GameRoom(scene){
	THREE.Object3D.call(this);
	var room = this;
	
	var boxHeight = 30;
	var boxWidth = 30;
	var boxDepth = 60;
	var depthOffset = -20;
	var batLine = -8;
	
	this.bestScore =  $.jStorage.get("bestScore", 0);
	this.score = 0;
	
	/*
	this.authorTextbox = new Textbox(scene, {
		text: "Author: Kevin Verhoef",
		radius: 3 * SCALE,
		degree: 270,
		verticalDegree: 0,
		size: 1.0,
		color: 0xFFFFFF,
		bevelEnabled: false,
		receiveShadow: false,
		material: new THREE.MeshBasicMaterial({ color: 0x000000, shading: THREE.SmoothShading } ),
		height: 0.01
	});
	*/
	this.showStartButton = function(){
	
		THREE.ImageUtils.loadTexture('images/start.png', undefined, function(texture){
			room.detail = new DetailImage(scene, texture, {
				scale : 40,
				degree: 90,
				verticalDegree: 0,
				radius: 3 * SCALE,
				onFocus: function(){
					this.remove();
					room.addBat();
					room.addBall();
				}
			});
		});
	}
	this.showStartButton();
	
	this.showBestscore = function(){
		if (room.bestScoreText){
			room.bestScoreText.remove();
		}
	
		room.bestScoreText = new Textbox(scene, {
			text: "Best score: " + room.bestScore,
			radius: 2.9 * SCALE,
			degree: 270,
			verticalDegree: 0,
			size: 1.5,
			color: 0xFFFFFF,
			bevelEnabled: false,
			receiveShadow: false,
			material: new THREE.MeshBasicMaterial({ color: 0x000000, shading: THREE.SmoothShading } ),
			height: 0.01
		});
		// Move it up a bit
		room.bestScoreText.textMesh.position.y += 3;
	}
	this.showBestscore();
	
	this.showScore = function(){
		if (room.scoreText){
			room.scoreText.remove();
		}
	
		room.scoreText = new Textbox(scene, {
			text: ""+room.score,
			radius: 4 * SCALE,
			degree: 90,
			size: 3,
			verticalDegree: 0,
			color: 0xFFFFFF,
			transparent: true,
			opacity: 0.6
		});
	}
	
	this.incrementScore = function() {
		room.score += 1;
		room.showScore();
	};
	
	this.resetScore = function() {
		// Remove allements
		room.ball.remove();
		room.bat.remove();
		this.showStartButton();
	
		if (room.score > room.bestScore){
			room.bestScore = room.score;
			$.jStorage.set("bestScore", room.bestScore);
		}
		room.score = 0;
		this.showBestscore();
		room.showScore();
		
	};
	this.showScore();
	
	
	var roomColor = 0xFFFFFF;
	
	// Geometry: floor

	var floor = new THREE.Mesh(
			new THREE.BoxGeometry(boxWidth, 1, boxDepth),
			new THREE.MeshPhongMaterial( { color: roomColor, overdraw: 0.5 })
	);
	floor.position.y = (boxHeight / 2) * -1;
	floor.position.z = depthOffset;
	floor.receiveShadow = true;
	scene.add(floor);
	
	// Geometry: ceiling
		
	var ceiling = new THREE.Mesh(
			new THREE.BoxGeometry(boxWidth, 1, boxDepth),
			new THREE.MeshPhongMaterial( { color: roomColor, overdraw: 0.5 })
	);
	ceiling.position.y = (boxHeight / 2);
	ceiling.position.z = depthOffset;
	ceiling.receiveShadow = true;
	scene.add(ceiling);
	
	// light
	
	var light = new THREE.PointLight(0xffffff);
    light.position.set(0,0,40 * -1);
    scene.add(light);
	light.intensity = 1;
	
	var spotLight	= new THREE.SpotLight( 0xffffff );
	spotLight.position.set( 0, 0, 50 * -1 );
	spotLight.target.position.set( 0, 0, 10 );
	spotLight.shadowCameraNear	= 0.01;		
	spotLight.castShadow		= true;
	spotLight.shadowDarkness	= 1;
	scene.add( spotLight );	

	var wallNorth = createWallLeft(boxHeight, boxDepth, boxWidth, depthOffset, roomColor);
	scene.add(wallNorth);
	var wallEast = createWallFront(boxHeight, boxDepth, boxWidth, depthOffset, roomColor);
	scene.add(wallEast);
	var wallWest = createWallBack(boxHeight, boxDepth, boxWidth, depthOffset, roomColor);
	scene.add(wallWest);
	var wallSouth = createWallRight(boxHeight, boxDepth, boxWidth, depthOffset, roomColor);
	scene.add(wallSouth);
	
	var batLength = 10;
	var batWidth = 10;
	
	this.addBat = function(){
	
		this.bat = new Bat(scene, {
			rectLength: batLength, 
			rectWidth: batWidth,
			boxHeight: boxHeight,
			boxWidth: boxWidth,
			boxDepth: boxDepth,
			depthOffset: depthOffset,
			batLine: batLine,
			color: 0xD43001
		});
	
	};
	
	this.addBall = function(){
		this.ball = new Ball(scene, {
			collidableMeshList: [wallNorth, wallEast, wallWest, wallSouth],
			bat: this.bat,
			boxHeight: boxHeight,
			boxWidth: boxWidth,
			boxDepth: boxDepth,
			depthOffset: depthOffset,
			batLine: batLine,
			batLength: batLength, 
			batWidth: batWidth,
			room: room
		});
	}
}

function createWallLeft(boxHeight, boxDepth, boxWidth, depthOffset, roomColor){
	var wall = new THREE.Mesh(
			new THREE.BoxGeometry(1, boxHeight, boxDepth),
			new THREE.MeshPhongMaterial( { color: roomColor, overdraw: 0.5 })
	);
	wall.position.x = ((boxWidth / 2) * -1);
	wall.position.z = depthOffset;
	wall.position.y = 0;
	wall.receiveShadow = true;
	return wall;
}

function createWallRight(boxHeight, boxDepth, boxWidth, depthOffset, roomColor){
		var wall = new THREE.Mesh(
			new THREE.BoxGeometry(1, boxHeight, boxDepth),
			new THREE.MeshPhongMaterial( { color: roomColor, overdraw: 0.5 })
	);
	wall.position.x = (boxWidth / 2);
	wall.position.z = depthOffset;
	wall.position.y = 0;
	wall.receiveShadow = true;
	return wall;
}

function createWallFront(boxHeight, boxDepth, boxWidth, depthOffset, roomColor){
	var wall = new THREE.Mesh(
			new THREE.BoxGeometry(boxWidth, boxHeight, 1),
			new THREE.MeshPhongMaterial( { color: roomColor, overdraw: 0.5 })
		
	);
	
	wall.position.x = 0;
	wall.position.z = ((boxDepth / 2) * -1) + depthOffset;
	wall.position.y = 0;
	wall.receiveShadow = true;
	return wall;
}

function createWallBack(boxHeight, boxDepth, boxWidth, depthOffset, roomColor){
		var wall = new THREE.Mesh(
			new THREE.BoxGeometry(boxWidth, boxHeight, 1),
			new THREE.MeshPhongMaterial( { color: 0x444444, overdraw: 0.5 })
	);
	wall.position.x = 0;
	wall.position.z = (boxDepth / 2) + depthOffset;
	wall.position.y = 0;
	wall.receiveShadow = true;

	return wall;
}

