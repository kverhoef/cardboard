Room7.prototype = Object.create(THREE.Object3D.prototype);
Room7.prototype.constructor = Room6;

function Room7(scene){
	THREE.Object3D.call(this);
	var room = this;
	
	// parts
	this.textLights = new TextLights(scene, {

	});
	
	var words = [
		"Authentic",
		"Business",
		"Challenging",
		"Craftmanship",
		"Customers",
		"Co-workers",
		"Collaboration",
		"Conversing worlds",
		"Creativity",
		"Different",
		"Direction",
		"Design",
		
		"Emotion",
		"Empathy",
		"Expert",
		"Future",
		"Inspiration",
		"Identity",
		"Internet",
		"Interprise",
		"International",
		"Knowledge",
		"Luminis",
		"Network",
		"Open Innovation",
		"Open Companies",
		"Opportunity",
		"Passion",
		"People",
		"Potential",
		"Product",
		"Reputation",
		"Research",
		"Risk",
		"The cloud",
		"The human factor",
		"Technology",
		"Together",
		"Venture",
		
	]
	
	for (var i =0; i<38;i++){
		/*
		THREE.ImageUtils.loadTexture('images/luminis.png', undefined, function(texture){
		
			var scale = Math.floor(Math.random() * 40) + 40;
			room.luminis1 = room.detail = new DetailImage(scene, texture, {
				scale: scale,
				degree: Math.random() * 360,
				verticalDegree: Math.random() * 360,
				radius: ((Math.random() * 30) + 1) * SCALE
			});
		});
		*/
		var scale = Math.floor(Math.random() * 40) + 40;
		this.textbox = new Textbox(scene, {
		
			text: words[i],
			scale: scale,
			degree: Math.random() * 360,
			verticalDegree: -55 + (Math.random() * 100),
			radius: ((Math.random() * 10) + 10) * SCALE,
			color: 0xFFFFFF * Math.random()
		});
	}
	
	this.photoSphere = new PhotoSphere(scene, 'images/small.jpg', {   });

	this.remove = function(){
		this.photoSphere.remove();

		// remove self
		scene.removeRoom(this);
		
		
		
	}
	
}