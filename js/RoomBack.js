RoomBack.prototype = Object.create(THREE.Object3D.prototype);
RoomBack.prototype.constructor = RoomBack;

function RoomBack(scene){
	THREE.Object3D.call(this);
	var roomBack = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Ruimte_achter.jpg');
	
	this.textLights = new TextLights(scene, {});
		
	this.navigationArrowToWorkplaces = new NavigationArrow(scene, {
			degree: 135,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomBack.remove();
				// Start a new room
				new RoomWorkplaces(scene);
				scene.rotation.y += 750;
			}
	});
	
	this.navigationArrowToRelax = new NavigationArrow(scene, {
			degree: 176,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomBack.remove();
				// Start a new room
				new RoomRelax(scene);
				scene.rotation.y += 750;
			}
	});
	
	this.navigationArrowToSales = new NavigationArrow(scene, {
			degree: 195,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomBack.remove();
				// Start a new room
				new RoomSales(scene);
				scene.rotation.y += 750;
			}
	});
	
	this.navigationArrowToConferenceRoom = new NavigationArrow(scene, {
			degree: 218,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomBack.remove();
				// Start a new room
                new RoomConference(scene);
                scene.rotation.y += 750;
				//new RoomRelax(scene);
				//scene.rotation.y += 750;
			}
	});
	
	// parts	
	if (!scene.hasPart(4)){
	
		THREE.ImageUtils.loadTexture('images/part4_.png', undefined, function(texture){
			roomBack.part4 = new DetailImage(scene, texture, {
				scale: 60,
				degree: 6,
				verticalDegree: -16,
				radius: 5 * SCALE,
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
	/*
	this.slideshow = new Slideshow(scene, {
		scale: 100,
		degree: 0,
		verticalDegree: 0,
		radius: (5 * SCALE)
	});
	*/
	this.remove = function(){
		this.photoSphere.remove();
		
		this.navigationArrowToWorkplaces.remove();
		this.navigationArrowToRelax.remove();
		this.navigationArrowToSales.remove();
		this.navigationArrowToConferenceRoom.remove();
		this.textLights.remove();
		
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