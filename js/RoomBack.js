RoomBack.prototype = Object.create(THREE.Object3D.prototype);
RoomBack.prototype.constructor = RoomBack;

function RoomBack(scene){
	THREE.Object3D.call(this);
	var roomBack = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/PANO_back.jpg');
	
	this.hotspotToRoomWorkplaces = new Hotspot(scene, {
		rectLength: 10, 
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
	
	this.hotspotToRoomRelax = new Hotspot(scene, {
		rectLength: 14, 
		rectWidth: 11, 
		degree: 267,
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
	this.hotspotToRoomRelax.rectMesh.position.y -= 7;
	
	// parts	
	if (!scene.hasPart(4)){
	
		THREE.ImageUtils.loadTexture('images/part4_.png', undefined, function(texture){
			roomBack.part4 = new DetailImage(scene, texture, {
				scale: 10,
				degree: 6,
				verticalDegree: -16,
				radius: 30 * SCALE,
				onFocus: function(){
					this.remove();	
					scene.addPart(4);
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