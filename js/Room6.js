Room6.prototype = Object.create(THREE.Object3D.prototype);
Room6.prototype.constructor = Room6;

function Room6(scene){
	THREE.Object3D.call(this);
	var room = this;
	
	// parts
	
	THREE.ImageUtils.loadTexture('images/luminis1.png', undefined, function(texture){
		room.luminis1 = room.detail = new DetailImage(scene, texture, {
			scale: 40,
			degree: 0,
			verticalDegree: 0,
			radius: 10 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis2.png', undefined, function(texture){
		room.luminis2 = room.detail = new DetailImage(scene, texture, {
			scale: 40,
			degree: 60,
			verticalDegree: 0,
			radius: 10 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis3.png', undefined, function(texture){
		room.luminis3 = room.detail = new DetailImage(scene, texture, {
			scale: 40,
			degree: 120,
			verticalDegree: 0,
			radius: 10 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis4.png', undefined, function(texture){
		room.luminis4 = room.detail = new DetailImage(scene, texture, {
			scale: 40,
			degree: 180,
			verticalDegree: 0,
			radius: 10 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis5.png', undefined, function(texture){
		room.luminis5 = room.detail = new DetailImage(scene, texture, {
			scale: 40,
			degree: 240,
			verticalDegree: 0,
			radius: 10 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis6.png', undefined, function(texture){
		room.luminis6 = room.detail = new DetailImage(scene, texture, {
			scale: 40,
			degree: 300,
			verticalDegree: 0,
			radius: 10 * SCALE
		});
	});
	
	scene.updatables.push(function(){
		var orbitTheta = cardboard.orbitControls.theta;
		if (room.luminis1 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			room.luminis1.args.degree = room.luminis1.degree + -degrees;
			room.luminis1.updatePosition();
		}
		if (room.luminis2 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			room.luminis2.args.degree = room.luminis2.degree + -degrees;
			room.luminis2.updatePosition();
		}
		if (room.luminis3 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			room.luminis3.args.degree = room.luminis3.degree + -degrees;
			room.luminis3.updatePosition();
		}
		if (room.luminis4 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			room.luminis4.args.degree = room.luminis4.degree + -degrees;
			room.luminis4.updatePosition();
		}
		if (room.luminis5 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			room.luminis5.args.degree = room.luminis5.degree + -degrees;
			room.luminis5.updatePosition();
		}
		if (room.luminis6 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			room.luminis6.args.degree = room.luminis6.degree + -degrees;
			room.luminis6.updatePosition();
		}
	});
	
	
	this.photoSphere = new PhotoSphere(scene, 'images/small.jpg', {   });

	this.remove = function(){
		this.photoSphere.remove();

		// remove self
		scene.removeRoom(this);
		
		
		
	}
	
}