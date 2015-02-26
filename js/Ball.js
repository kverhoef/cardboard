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
	
	var ballSpeed = 0.1;
	
	this.resetStartPosition = function(){
		root.ballDirX = 1;
		root.ballDirY = 1;
		root.ballDirZ = -1;
		root.ballSpeed = 0.1;
	}
	
	this.resetStartPosition();
	
	scene.updatables.push(function(){
		
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
		var newPosX = root.ball.position.x + (root.ballDirX * root.ballSpeed);
		var newPosZ = root.ball.position.z + (root.ballDirZ * root.ballSpeed);
		var newPosY = root.ball.position.y + (root.ballDirY * root.ballSpeed);
		
		var halfBoxHeight = (args.boxHeight / 2);
		var halfBoxWidth = (args.boxWidth / 2);
		var halfBoxDepth = (args.boxDepth / 2)
		
		// Keep in bounding box
		if (newPosX < (halfBoxWidth * -1)) {
			newPosX = (halfBoxWidth * -1);
			root.ballDirX = -root.ballDirX;
		}
		else if (newPosX > halfBoxWidth) {
			newPosX = halfBoxWidth;
			root.ballDirX = -root.ballDirX;
		}
		
		if (newPosZ < (halfBoxDepth * -1) + args.depthOffset) {
			newPosZ = (halfBoxDepth * -1) + args.depthOffset;
			root.ballDirZ = -root.ballDirZ;
		}
		else if (newPosZ > halfBoxDepth + args.depthOffset) {
			newPosZ = halfBoxDepth + args.depthOffset;
			root.ballDirZ = -root.ballDirZ;
		}
		
		if (newPosY < (halfBoxHeight * -1)) {
			newPosY = (halfBoxHeight * -1);
			root.ballDirY = -root.ballDirY;
		}
		else if (newPosY > halfBoxHeight) {
			newPosY = halfBoxHeight;
			root.ballDirY = -root.ballDirY;
		}
		
		root.ball.position.x = newPosX;
		root.ball.position.z = newPosZ;
		root.ball.position.y = newPosY;
		
	});
	
}
