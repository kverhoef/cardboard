RoomWorkplaces.prototype = Object.create(THREE.Object3D.prototype);
RoomWorkplaces.prototype.constructor = RoomWorkplaces;

function RoomWorkplaces(scene){
	THREE.Object3D.call(this);
	var roomWorkplaces = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/PANO_workplaces.jpg');
	
	this.hotspotToWorkplacesFront = new Hotspot(scene, {
		
		rectLength: 11, 
		rectWidth: 14, 
		degree: 130,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				roomWorkplaces.remove();
				// Start a new room
				new RoomWorkplacesFront(scene);
				scene.rotation.y += 650;
		}
	});
	this.hotspotToWorkplacesFront.rectMesh.position.y -= 6;
	
	this.hotspotToRoomBack = new Hotspot(scene, {
		rectLength: 12, 
		rectWidth: 14, 
		degree: 285,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				roomWorkplaces.remove();
				// Start a new room
				new RoomBack(scene);
				scene.rotation.y -= 650;
		}
	});
	this.hotspotToRoomBack.rectMesh.position.y -= 6;
	
	if (!scene.hasPart(3)){
	
		THREE.ImageUtils.loadTexture('images/part3_.png', undefined, function(texture){
			roomWorkplaces.part3 = new DetailImage(scene, texture, {
				scale: 10,
				degree: 224,
				verticalDegree: -11,
				radius: 30 * SCALE,
				onFocus: function(){
					this.remove();	
					scene.addPart(3);
					scene.checkAllParts();
				}
			});
		});
		
	}
	/*
	this.textLights = new TextLights(scene, {
		
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
	*/
	/*
	// Invert the mesh inside-out
	sphere.scale.x = -1;
	this.sphere = sphere;
	scene.add(sphere);
	
	this.photoSphere2 = new PhotoSphere(scene, 'images/cloud.png', {  transparent: true});
	*/
	
	this.remove = function(){
		this.photoSphere.remove();
		
		this.hotspotToWorkplacesFront.remove();
		this.hotspotToRoomBack.remove();
		/*
		this.textLights.remove();
		this.textbox.remove();
		
		for (var i=0;i<this.textBoxes.length;i++){
			this.textBoxes[i].remove();
		}
		
		*/
		// part
		if (this.part3 != undefined){
			this.part3.remove();
		}
		
		// remove self
		scene.removeRoom(this);
	}
	
}