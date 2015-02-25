GameRoom.prototype = Object.create(THREE.Object3D.prototype);
GameRoom.prototype.constructor = GameRoom;

function GameRoom(scene){
	THREE.Object3D.call(this);
	var room = this;
	
	this.bat = new Bat(scene, {
		rectLength: 5, 
		rectWidth: 5
	})
	
	// Geometry: floor

	var floor = new THREE.Mesh(
			new THREE.BoxGeometry(30, 1, 30),
			new THREE.MeshPhongMaterial( { color: 0xFF69B4, overdraw: 0.5 })
	);
	floor.position.y = - 5
	floor.receiveShadow = false;
	scene.add(floor);
	
	// Geometry: ceiling
		
	var ceiling = new THREE.Mesh(
			new THREE.BoxGeometry(30, 1, 30),
			new THREE.MeshPhongMaterial( { color: 0xFF69B4, overdraw: 0.5 })
	);
	ceiling.position.y =  8
	ceiling.receiveShadow = false;
	scene.add(ceiling);
	

	var light = new THREE.PointLight(0xffffff);
    light.position.set(0,0,0);
    scene.add(light);
	light.intensity = 0.7;

	scene.add(createWallNorth());
	scene.add(createWallEast());
	scene.add(createWallWest());
	scene.add(createWallSouth());

}

function createWallNorth(){
	var wall = new THREE.Mesh(
			new THREE.BoxGeometry(1, 15, 30),
			new THREE.MeshPhongMaterial( { color: 0xFF69B4, overdraw: 0.5 })
	);
	wall.position.x = -15
	wall.position.z = 0
	wall.position.y = 0
	wall.receiveShadow = true;	
	
	return wall;
}

function createWallEast(){
	var wall = new THREE.Mesh(
			new THREE.BoxGeometry(30, 15, 1),
			new THREE.MeshPhongMaterial( { color: 0xFF69B4, overdraw: 0.5 })
		
	);
	
	wall.position.x = 0
	wall.position.z = -15
	wall.position.y = 0
	wall.receiveShadow = true;	
	
	return wall;
}

function createWallWest(){
		var wall = new THREE.Mesh(
			new THREE.BoxGeometry(30, 15, 1),
			new THREE.MeshPhongMaterial( { color: 0xFF69B4, overdraw: 0.5 })
	);
	wall.position.x = 0
	wall.position.z = 15
	wall.position.y = 0
	wall.receiveShadow = false;	
	
	return wall;
}

function createWallSouth(){
		var wall = new THREE.Mesh(
			new THREE.BoxGeometry(1, 15, 30),
			new THREE.MeshPhongMaterial( { color: 0xFF69B4, overdraw: 0.5 })
	);
	wall.position.x = 15
	wall.position.z = 0
	wall.position.y = 0
	wall.receiveShadow = false;	
	
	return wall;
}