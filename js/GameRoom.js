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
	
	this.score = 0;
	
	this.textbox = new Textbox(scene, {
		text: "Author: Kevin Verhoef",
		radius: 3 * SCALE,
		degree: 270,
		verticalDegree: 0,
		size: 1.5,
		color: 0xFFFFFF,
		bevelEnabled: false,
		receiveShadow: false,
		material: new THREE.MeshBasicMaterial({ color: 0x000000, shading: THREE.SmoothShading } ),
		height: 0.01
	});
	
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
		room.score = 0;
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
	/*
	
	
	var ambient	= new THREE.AmbientLight( 0x404040  );
	//ambient.intensity = 0.5;
	scene.add( ambient );
	*/
	/*
	var light2	= new THREE.DirectionalLight( 0x4444cc, 2 );
	light2.position.set( 0, 0, 0 ).normalize();
	light2.castShadow = true;
	light2.shadowDarkness = 0.5;
	light2.shadowCameraVisible	= true;
	scene.add( light2 );
	
	*/
	
	var spotLight	= new THREE.SpotLight( 0xffffff );
	spotLight.position.set( 0, 0, 50 * -1 );
	spotLight.target.position.set( 0, 0, 10 );
	spotLight.shadowCameraNear	= 0.01;		
	spotLight.castShadow		= true;
	spotLight.shadowDarkness	= 1;
//	spotLight.shadowCameraVisible	= true;

	// spotLight.shadowMapWidth	= 1024;
	 //spotLight.shadowMapHeight	= 1024;
	scene.add( spotLight );	
	
	/*
	var spotLight	= new THREE.SpotLight( 0xffffff );
	spotLight.position.set( 0, 0, 10 );
	spotLight.target.position.set( 0, 0, 50 * -1 );
	spotLight.shadowCameraNear	= 0.01;		
	spotLight.castShadow		= true;
	spotLight.shadowDarkness	= 1;
	spotLight.shadowCameraVisible	= true;
// console.dir(spotLight)
	// spotLight.shadowMapWidth	= 1024;
	 //spotLight.shadowMapHeight	= 1024;
	scene.add( spotLight );	
	
	var spotLight	= new THREE.SpotLight( 0xffffff );
	spotLight.position.set( 0, 15, 0 );
	spotLight.target.position.set( 0, -15, 0 );
	spotLight.shadowCameraNear	= 0.01;		
	spotLight.castShadow		= true;
	spotLight.shadowDarkness	= 1;
	spotLight.shadowCameraVisible	= true;
	spotLight.intensity = 0.1;
	scene.add( spotLight );	
	
	var spotLight2	= new THREE.SpotLight( 0xffffff );
	spotLight2.position.set( 0, 15, -30 );
	spotLight2.target.position.set( 0, -15, -60 );
	spotLight2.shadowCameraNear	= 0.01;		
	spotLight2.castShadow		= true;
	spotLight2.shadowDarkness	= 1;
	spotLight2.shadowCameraVisible	= true;
	spotLight2.intensity = 0.1;
	scene.add( spotLight2 );	
	*/

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

