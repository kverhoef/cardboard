RoomIne.prototype = Object.create(THREE.Object3D.prototype);
RoomIne.prototype.constructor = RoomIne;

function RoomIne(scene){
	THREE.Object3D.call(this);
	var roomIne = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Kantoor_officemanager.jpg');
	
	this.textLights = new TextLights(scene, {});
	
	THREE.ImageUtils.loadTexture('images/OTIB/skillsatschool.jpg', undefined, function(texture){
			roomIne.part1 = new DetailImage(scene, texture, {
				scale: 44,
				degree: 177,
				verticalDegree: 348,
				radius: 30 * SCALE,				
			});
			roomIne.part1.mesh.rotation.z = 0.17;
		});
	
	THREE.ImageUtils.loadTexture('images/OTIB/kennishuis.png', undefined, function(texture){
			roomIne.part1 = new DetailImage(scene, texture, {
				scale: 45,
				degree: 138,
				verticalDegree: 356,
				radius: 30 * SCALE,				
			});
			roomIne.part1.mesh.rotation.z = 0.25;
		});
		
	THREE.ImageUtils.loadTexture('images/OTIB/OTIB_Logo.png', undefined, function(texture){
			roomIne.part2 = new DetailImage(scene, texture, {
				scale: 14,
				degree: 320,
				verticalDegree: 10,
				radius: 30 * SCALE,								
			});
			roomIne.part2.mesh.rotation.z = 50;
		});						
	
	this.remove = function(){
		this.photoSphere.remove();
		this.hotspotToRoomIne.remove();
		this.hotspotToWorkplaces.remove();
		this.hotspotToRoomRelax.remove();
		
		this.arrowToRoomRelax.remove();
		this.arrowToWorkplaces.remove();
		this.arrowToRoomIne.remove();
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