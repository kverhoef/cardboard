Room4.prototype = Object.create(THREE.Object3D.prototype);
Room4.prototype.constructor = Room4;

function Room4(scene){
	THREE.Object3D.call(this);
	var room4 = this;
	
	this.textLights = new TextLights(scene, {
		
	});
	
	this.hotspotToRoom3 = new Hotspot(scene, {
		rectLength: 4, 
		rectWidth: 4, 
		degree: 270,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				room4.remove();
				// Start a new room
				var room = new Room3(scene);
				scene.add(room);
		}
	});
	
	this.hotspotToRoom5 = new Hotspot(scene, {
		rectLength: 4, 
		rectWidth: 4, 
		degree: 90,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				room4.remove();
				// Start a new room
				var room = new GameRoom(scene);
				scene.add(room);
		}
	});
	
	this.textbox = new Textbox(scene, {
		text: "We love technology",
		radius: 5 * SCALE,
		degree: 50,
		verticalDegree: 165,
		color: 0xeeeeee
	});
	
	this.textBoxes = [];
	
	this.smallText = function(text, verticalDegree){
		var textbox = new Textbox(scene, {
			text: text,
			radius: 5 * SCALE,
			degree: 50,
			verticalDegree: verticalDegree,
			color: 0xeeeeee,
			size: 1
		});
		this.textBoxes.push(textbox);
		return textbox;
	};
	
	this.smallText("We know that technology can make a difference in ", 176);
	this.smallText("business, society, and life in general. We seek relevance", 182);
	this.smallText("through embracing new information technology and using", 188);
	this.smallText("this to innovate for and with our customers. We are pioneers", 194);
	this.smallText("in open innovation. We proactively develop modular,", 200);
	this.smallText("reusable software components.", 206);
	
	this.photoSphere = new PhotoSphere(scene, 'images/small.jpg', {  depth: 110 });
	
	var sphere = new THREE.Mesh(
		new THREE.SphereGeometry(100, 32, 32),
		new THREE.MeshBasicMaterial({
			color: 0xFFFFFF, transparent: true, opacity: 0.25
		})
	);
	
	/*
	// Invert the mesh inside-out
	sphere.scale.x = -1;
	this.sphere = sphere;
	scene.add(sphere);
	
	this.photoSphere2 = new PhotoSphere(scene, 'images/cloud.png', {  transparent: true});
	*/
	
	this.remove = function(){
		this.photoSphere.remove();
		this.textLights.remove();
		this.textbox.remove();
		this.hotspotToRoom3.remove();
		this.hotspotToRoom5.remove();
		
		for (var i=0;i<this.textBoxes.length;i++){
			this.textBoxes[i].remove();
		}
		
		// remove self
		scene.removeRoom(this);
	}
	
}