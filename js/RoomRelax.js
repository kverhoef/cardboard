RoomRelax.prototype = Object.create(THREE.Object3D.prototype);
RoomRelax.prototype.constructor = RoomRelax;

function RoomRelax(scene){
	THREE.Object3D.call(this);
	var roomRelax = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Banken.jpg');
	
	this.textLights = new TextLights(scene, {});
	
	
	this.navigationArrowToArrival = new NavigationArrow(scene, {
		degree: 75,
		verticalOffset: 0,
		onFocus: function(){
			// remove the room
			roomRelax.remove();
			// Start a new room
			new RoomArrival(scene);
			scene.rotation.y += 800;
		}
	});
	
	this.navigationArrowToBack = new NavigationArrow(scene, {
		degree: 290,
		verticalOffset: -5,
		onFocus: function(){
			// remove the room
				roomRelax.remove();
				// Start a new room
				new RoomBack(scene);
				scene.rotation.y -= 750;
		}
	});
	
	this.navigationArrowToSales = new NavigationArrow(scene, {
		degree: 268,
		verticalOffset: -5,
		onFocus: function(){
			// remove the room
				roomRelax.remove();
				// Start a new room
				new RoomSales(scene);
		}
	});
	
	// parts
	if (!scene.hasPart(5)){
	
		THREE.ImageUtils.loadTexture('images/part5_.png', undefined, function(texture){
			roomRelax.part5 = new DetailImage(scene, texture, {
				scale: 120,
				degree: 180,
				verticalDegree: -45,
				radius: 5 * SCALE,
				onFocus: function(){
					this.remove();	
					scene.addPart(5);
					scene.checkAllParts();
				}
			});
		});
	}
	
	
	THREE.ImageUtils.loadTexture('images/luminis1.png', undefined, function(texture){
		roomRelax.luminis1 = roomRelax.detail = new DetailImage(scene, texture, {
			scale: 100,
			degree: 0,
			verticalDegree: 0,
			radius: 5 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis2.png', undefined, function(texture){
		roomRelax.luminis2 = roomRelax.detail = new DetailImage(scene, texture, {
			scale: 100,
			degree: 60,
			verticalDegree: 0,
			radius: 5 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis3.png', undefined, function(texture){
		roomRelax.luminis3 = roomRelax.detail = new DetailImage(scene, texture, {
			scale: 100,
			degree: 120,
			verticalDegree: 0,
			radius: 5 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis4.png', undefined, function(texture){
		roomRelax.luminis4 = roomRelax.detail = new DetailImage(scene, texture, {
			scale: 100,
			degree: 180,
			verticalDegree: 0,
			radius: 5 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis5.png', undefined, function(texture){
		roomRelax.luminis5 = roomRelax.detail = new DetailImage(scene, texture, {
			scale: 100,
			degree: 240,
			verticalDegree: 0,
			radius: 5 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/luminis6.png', undefined, function(texture){
		roomRelax.luminis6 = roomRelax.detail = new DetailImage(scene, texture, {
			scale: 100,
			degree: 300,
			verticalDegree: 0,
			radius: 5 * SCALE
		});
	});
	
	scene.updatables.push(function(){
		
		var orbitTheta = cardboard.theta;
		if (roomRelax.luminis1 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			roomRelax.luminis1.args.degree = roomRelax.luminis1.degree + -degrees;
			roomRelax.luminis1.updatePosition();
		}
		if (roomRelax.luminis2 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			roomRelax.luminis2.args.degree = roomRelax.luminis2.degree + -degrees;
			roomRelax.luminis2.updatePosition();
		}
		if (roomRelax.luminis3 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			roomRelax.luminis3.args.degree = roomRelax.luminis3.degree + -degrees;
			roomRelax.luminis3.updatePosition();
		}
		if (roomRelax.luminis4 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			roomRelax.luminis4.args.degree = roomRelax.luminis4.degree + -degrees;
			roomRelax.luminis4.updatePosition();
		}
		if (roomRelax.luminis5 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			roomRelax.luminis5.args.degree = roomRelax.luminis5.degree + -degrees;
			roomRelax.luminis5.updatePosition();
		}
		if (roomRelax.luminis6 != undefined){
			// reverse theta to degree
			var degrees = (orbitTheta * 180/Math.PI) + 180;
			roomRelax.luminis6.args.degree = roomRelax.luminis6.degree + -degrees;
			roomRelax.luminis6.updatePosition();
		}
		
	});
	
	this.remove = function(){
		this.photoSphere.remove();
		
		this.luminis1.remove();
		this.luminis2.remove();
		this.luminis3.remove();
		this.luminis4.remove();
		this.luminis5.remove();
		this.luminis6.remove();
		
		this.navigationArrowToArrival.remove();
		this.navigationArrowToBack.remove();	
		this.navigationArrowToSales.remove();

		this.textLights.remove();
		
		// part
		if (this.part5 != undefined){
			this.part5.remove();
		}
		
		// remove self
		scene.removeRoom(this);
		
	}
	
}