RoomWorkplaces.prototype = Object.create(THREE.Object3D.prototype);
RoomWorkplaces.prototype.constructor = RoomWorkplaces;

function RoomWorkplaces(scene){
	THREE.Object3D.call(this);
	var roomWorkplaces = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Werkplekken_garderobe_zijde.jpg');
	
	this.textLights = new TextLights(scene, {});
	
	this.navigationArrowToArrival = new NavigationArrow(scene, {
			degree: 132,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomWorkplaces.remove();
				// Start a new room
				new RoomArrival(scene);
				scene.rotation.y += 650;
			}
	});
	
	this.navigationArrowToBack = new NavigationArrow(scene, {
			degree: 286,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomWorkplaces.remove();
				// Start a new room
				new RoomBack(scene);
				scene.rotation.y -= 650;
			}
	});
	
	if (!scene.hasPart(3)){
	
		THREE.ImageUtils.loadTexture('images/part3_.png', undefined, function(texture){
			roomWorkplaces.part3 = new DetailImage(scene, texture, {
				scale: 100,
				degree: 224,
				verticalDegree: -11,
				radius: 5 * SCALE,
				onFocus: function(){
					this.remove();	
					scene.addPart(3);
					scene.checkAllParts();
				}
			});
		});
		
	}
	
	this.remove = function(){
		this.photoSphere.remove();
		
		this.navigationArrowToArrival.remove();
		this.navigationArrowToBack.remove();
		
		this.textLights.remove();

		// part
		if (this.part3 != undefined){
			this.part3.remove();
		}
		
		// remove self
		scene.removeRoom(this);
	}
	
}