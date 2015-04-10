RoomBack.prototype = Object.create(THREE.Object3D.prototype);
RoomBack.prototype.constructor = RoomBack;

function RoomBack(scene){
	THREE.Object3D.call(this);
	var roomBack = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/PANO_back.jpg');
	
	this.textLights = new TextLights(scene, {});
	
	this.arrowToRoomWorkplaces = new Textbox(scene, {
		lookAt: new THREE.Vector3( cardboard.camera.position.x, -300, cardboard.camera.position.z ),
		text: "V",
		radius: 5 * SCALE,
		degree: 180,
		verticalDegree: -10,
		color: 0x000000,
		size: 5
	});
	
	this.hotspotToRoomWorkplaces = new Hotspot(scene, {
		rectLength: 5, 
		rectWidth: 9, 
		degree: 195,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				roomBack.remove();
				// Start a new room
				new RoomWorkplaces(scene);
				scene.rotation.y += 750;
		}
	});
	this.hotspotToRoomWorkplaces.rectMesh.position.y -= 5;
	
	this.arrowToRoomRelax = new Textbox(scene, {
		lookAt: new THREE.Vector3( cardboard.camera.position.x, -300, cardboard.camera.position.z ),
		text: "V",
		radius: 5 * SCALE,
		degree: 248,
		verticalDegree: -10,
		color: 0x000000,
		size: 5
	});
	
	this.hotspotToRoomRelax = new Hotspot(scene, {
		rectLength: 5, 
		rectWidth: 9, 
		degree: 264,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				roomBack.remove();
				// Start a new room
				new RoomRelax(scene);
				scene.rotation.y += 750;
		}
	});
	this.hotspotToRoomRelax.rectMesh.position.y -= 5;
	
	// parts	
	if (!scene.hasPart(4)){
	
		THREE.ImageUtils.loadTexture('images/part4_.png', undefined, function(texture){
			roomBack.part4 = new DetailImage(scene, texture, {
				scale: 8,
				degree: 6,
				verticalDegree: -16,
				radius: 30 * SCALE,
				onFocus: function(){
					this.remove();	
					scene.addPart(4);
					scene.checkAllParts();
				}
			});
		});
	}	
	
	
	/*
	this.textLights = new TextLights(scene, {
		
	});
	
	var jsonLoader = new THREE.JSONLoader();
	jsonLoader.load( "js/models/android.js", function(geometry, materials){
		var material = new THREE.MeshFaceMaterial( materials );
		android = new THREE.Mesh( geometry, material );
		android.scale.set(0.1,0.1,0.1);
		android.position.x = 1
		scene.add( android );
	} );
	*/
	this.remove = function(){
		this.photoSphere.remove();
		
		this.hotspotToRoomWorkplaces.remove();
		this.hotspotToRoomRelax.remove();
		
		this.textLights.remove();
		this.arrowToRoomWorkplaces.remove();
		this.arrowToRoomRelax.remove();
		
		/*
		this.textLights.remove();
		*/
		// part
		if (this.part4 != undefined){
			this.part4.remove();
		}
		
		// remove self
		scene.removeRoom(this);
	}
	
}