Room3.prototype = Object.create(THREE.Object3D.prototype);
Room3.prototype.constructor = Room3;

function Room3(scene){
	THREE.Object3D.call(this);
	var room3 = this;
	
	this.textLights = new TextLights(scene, {
		
	});
	
	this.hotspotToRoom2 = new Hotspot(scene, {
		rectLength: 4, 
		rectWidth: 4, 
		degree: 180,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				room3.remove();
				// Start a new room
				var room = new Room2(scene);
				scene.add(room);
		}
	});
	
	this.hotspotToRoom4 = new Hotspot(scene, {
		rectLength: 4, 
		rectWidth: 4, 
		degree: 270,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				room3.remove();
				// Start a new room
				var room = new Room4(scene);
				scene.add(room);
		}
	});
	
	this.textbox = new Textbox(scene, {
		text: "We believe in sharing",
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
	}
	
	this.smallText("The open source principle innovates and delivers value ", 176);
	this.smallText("through co-creation. Sharing simply makes economic ", 182);
	this.smallText("sense. At Luminis we actively support and contribute to the", 188);
	this.smallText("open source developer community and engage in joint R&D", 194);
	this.smallText("with our customers. The exchange of knowledge and ideas", 200);
	this.smallText("through our publications, training programmes and", 206);
	this.smallText("contributions to international conferences are an ongoing", 212);
	this.smallText("source of inspiration.", 218);
	
	this.photoSphere = new PhotoSphere(scene, 'images/small.jpg');
	
	this.remove = function(){
		this.photoSphere.remove();
		this.textbox.remove();
		this.textLights.remove();
		this.hotspotToRoom2.remove();
		this.hotspotToRoom4.remove();
		
		for (var i=0;i<this.textBoxes.length;i++){
			this.textBoxes[i].remove();
		}
		
		
		// remove self
		scene.removeRoom(this);
	}
	
}