RoomIne.prototype = Object.create(THREE.Object3D.prototype);
RoomIne.prototype.constructor = RoomIne;

function RoomIne(scene){
	THREE.Object3D.call(this);
	var roomIne = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Kantoor_officemanager.jpg');
	
	this.textLights = new TextLights(scene, {});
	
	THREE.ImageUtils.loadTexture('images/OTIB/skillsatschool.jpg', undefined, function(texture){
		roomIne.skillsatschool = new DetailImage(scene, texture, {
			scale: 88,
			degree: 177,
			verticalDegree: 348,
			radius: 15 * SCALE,				
		});
		roomIne.skillsatschool.mesh.rotation.z = 0.17;
	});
	
	THREE.ImageUtils.loadTexture('images/OTIB/kennishuis.png', undefined, function(texture){
		roomIne.kennishuis = new DetailImage(scene, texture, {
			scale: 90,
			degree: 138,
			verticalDegree: 356,
			radius: 15 * SCALE,				
		});
		roomIne.kennishuis.mesh.rotation.z = 0.25;
	});
		
	THREE.ImageUtils.loadTexture('images/OTIB/OTIB_Logo.png', undefined, function(texture){
		roomIne.otib = new DetailImage(scene, texture, {
			scale: 28,
			degree: 320,
			verticalDegree: 10,
			radius: 15 * SCALE,								
		});
		roomIne.otib.mesh.rotation.z = 50;
	});	

	this.navigationArrowToArrival = new NavigationArrow(scene, {
			degree: 75,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomIne.remove();
				// Start a new room
				new RoomArrival(scene);
				scene.rotation.y += 250;
			}
	});
	
	this.remove = function(){
		this.photoSphere.remove();

		this.textLights.remove();
		this.navigationArrowToArrival.remove();
		
		if (roomIne.skillsatschool != undefined){
			roomIne.skillsatschool.remove();
		}
		if (roomIne.kennishuis != undefined){
			roomIne.kennishuis.remove();
		}
		if (roomIne.otib != undefined){
			roomIne.otib.remove();
		}
		
		// remove self
		scene.removeRoom(this);
	}
	
}