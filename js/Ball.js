Ball.prototype = Object.create(THREE.Object3D.prototype);
Ball.prototype.constructor = Ball;

function Ball(scene, args) {
	THREE.Object3D.call(this);

	var radius = 0.5,
	segments = 6,
	rings = 6;
	
	this.speed = 0.1;
 
	// create the sphere's material
	// var sphereMaterial = new THREE.MeshPhongMaterial({color: 0xD43001, shading: THREE.SmoothShading}); 
	var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xD43001}); 
	
	this.ball = new THREE.Mesh(
		new THREE.SphereGeometry(radius, segments, rings),
		sphereMaterial
	); 
	
	// Position
	this.ball.position.x = 0;
    this.ball.position.y = 0;
    this.ball.position.z = -8;
	
	scene.add(this.ball);
	
	var root = this;
	
	var collidableMeshList = args.collidableMeshList;
	
	var ballDirX = 1, ballDirY = 1, ballDirZ = 1, ballSpeed = 0.1;
	
	scene.updatables.push(function(){

		//root.ball.position.x += root.speed;
		
		//root.ball.position.y += ballDirY * ballSpeed; 
		
		
		// Collision detection
		/*
		var originPoint = root.ball.position.clone();
		for (var vertexIndex = 0; vertexIndex < root.ball.geometry.vertices.length; vertexIndex++)
		{		
			var localVertex = root.ball.geometry.vertices[vertexIndex].clone();
			var globalVertex = localVertex.applyMatrix4( root.ball.matrix );
			var directionVector = globalVertex.sub( root.ball.position );
			
			var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
			var collisionResults = ray.intersectObjects( collidableMeshList );
			if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) {
				console.log("Hit")
				ballDirX = -ballDirX;
			}
		}	
		*/
		var newPosX = root.ball.position.x + (ballDirX * ballSpeed);
		var newPosZ = root.ball.position.z + (ballDirZ * ballSpeed);
		var newPosY = root.ball.position.y + (ballDirY * ballSpeed);
		
		var halfBoxHeight = (args.boxHeight / 2);
		var halfBoxWidth = (args.boxWidth / 2);
		var halfBoxDepth = (args.boxDepth / 2)
		
		// Keep in bounding box
		if (newPosX < (halfBoxWidth * -1)) {
			newPosX = (halfBoxWidth * -1);
			ballDirX = -ballDirX;
		}
		else if (newPosX > halfBoxWidth) {
			newPosX = halfBoxWidth;
			ballDirX = -ballDirX;
		}
		
		if (newPosZ < (halfBoxDepth * -1) + args.depthOffset) {
			newPosZ = (halfBoxDepth * -1) + args.depthOffset;
			ballDirZ = -ballDirZ;
		}
		else if (newPosZ > halfBoxDepth + args.depthOffset) {
			newPosZ = halfBoxDepth + args.depthOffset;
			ballDirZ = -ballDirZ;
		}
		
		if (newPosY < (halfBoxHeight * -1)) {
			newPosY = (halfBoxHeight * -1);
			ballDirY = -ballDirY;
		}
		else if (newPosY > halfBoxHeight) {
			newPosY = halfBoxHeight;
			ballDirY = -ballDirY;
		}
		
		root.ball.position.x = newPosX;
		root.ball.position.z = newPosZ;
		root.ball.position.y = newPosY;
		
	});
	
}
