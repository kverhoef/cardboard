RoomEntrence.prototype = Object.create(THREE.Object3D.prototype);
RoomEntrence.prototype.constructor = RoomEntrence;

function RoomEntrence(scene){
	THREE.Object3D.call(this);
	var roomEntrence = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Ingang.jpg');
	
	this.textLights = new TextLights(scene, {});
	
	this.navigationArrowToArrival = new NavigationArrow(scene, {
			degree: 169,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomEntrence.remove();
				// Start a new room
				new RoomArrival(scene);
				scene.rotation.y += 250;
			}
		});

	// Part 1 
	if (!scene.hasPart(1)){
	
		THREE.ImageUtils.loadTexture('images/part1_.png', undefined, function(texture){
			roomEntrence.part1 = new DetailImage(scene, texture, {
				scale: 40,
				degree: 0,
				verticalDegree: -67,
				radius: 5 * SCALE,
				onFocus: function(){
					this.remove();	
					scene.addPart(1);
					scene.checkAllParts();
				}
			});
		});
		
	}
	this.remove = function(){
		this.photoSphere.remove();
		this.navigationArrowToArrival.remove();
		
		this.textLights.remove();

		// part
		if (roomEntrence.part1 != undefined){
			roomEntrence.part1.remove();
		}
		
		// remove self
		scene.removeRoom(this);
	}
	
}