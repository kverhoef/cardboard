RoomWorkplacesFront.prototype = Object.create(THREE.Object3D.prototype);
RoomWorkplacesFront.prototype.constructor = RoomWorkplacesFront;

function RoomWorkplacesFront(scene){
	THREE.Object3D.call(this);
	var roomWorkplacesFront = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/PANO_workplaces_front.jpg');
	
	this.textLights = new TextLights(scene, {});
	
	this.arrowToRoomArrival = new Textbox(scene, {
		lookAt: new THREE.Vector3( cardboard.camera.position.x, -300, cardboard.camera.position.z ),
		text: "V",
		radius: 5 * SCALE,
		degree: -25,
		verticalDegree: -10,
		color: 0x000000,
		size: 5
	});
	
	this.hotspotToRoomArrival = new Hotspot(scene, {
		rectLength: 5, 
		rectWidth: 9, 
		degree: -10,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				roomWorkplacesFront.remove();
				// Start a new room
				new RoomArrival(scene);
		}
	});
	this.hotspotToRoomArrival.rectMesh.position.y -= 5;
	
	this.arrowToWorkplaces = new Textbox(scene, {
		lookAt: new THREE.Vector3( cardboard.camera.position.x, -300, cardboard.camera.position.z ),
		text: "V",
		radius: 5 * SCALE,
		degree: 162,
		verticalDegree: -10,
		color: 0x000000,
		size: 5
	});
	
	this.hotspotToWorkplaces = new Hotspot(scene, {
		rectLength: 5, 
		rectWidth: 9, 
		degree: 178,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				roomWorkplacesFront.remove();
				// Start a new room
				new RoomWorkplaces(scene);
				scene.rotation.y -= 750;
		}
	});
	this.hotspotToWorkplaces.rectMesh.position.y -= 5;
	
	this.arrowToRoomRelax = new Textbox(scene, {
		lookAt: new THREE.Vector3( cardboard.camera.position.x, -300, cardboard.camera.position.z ),
		text: "V",
		radius: 5 * SCALE,
		degree: 105,
		verticalDegree: -10,
		color: 0x000000,
		size: 5
	});
	
	this.hotspotToRoomRelax = new Hotspot(scene, {
		rectLength: 5, 
		rectWidth: 9, 
		degree: 120,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				roomWorkplacesFront.remove();
				// Start a new room
				new RoomRelax(scene);
				scene.rotation.y -= 800;
		}
	});
	this.hotspotToRoomRelax.rectMesh.position.y -= 5;
	
	/*
	this.textLights = new TextLights(scene, {
		
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
	*/
	
	
	this.remove = function(){
		this.photoSphere.remove();
		this.hotspotToRoomArrival.remove();
		this.hotspotToWorkplaces.remove();
		this.hotspotToRoomRelax.remove();
		
		this.arrowToRoomRelax.remove();
		this.arrowToWorkplaces.remove();
		this.arrowToRoomArrival.remove();
		this.textLights.remove();
		/*
		this.textbox.remove();
		this.textLights.remove();
		for (var i=0;i<this.textBoxes.length;i++){
			this.textBoxes[i].remove();
		}
		*/
		
		// remove self
		scene.removeRoom(this);
	}
	
}