RoomChef.prototype = Object.create(THREE.Object3D.prototype);
	RoomChef.prototype.constructor = RoomChef;
	
	function RoomChef(scene){
		THREE.Object3D.call(this);
		var roomArrival = this;
		scene.room = this;
		
		this.photoSphere = new PhotoSphere(scene, 'images/PANO_Kantoor_directeur.jpg');
		
		this.textLights = new TextLights(scene, {});		
		
		THREE.ImageUtils.loadTexture('images/vandijk/whiteboard.png', undefined, function(texture){
			roomArrival.part2 = new DetailImage(scene, texture, {
				scale: 14,
				degree: 163,
				verticalDegree: -11.5,
				radius: 25 * SCALE,
			});
			roomArrival.part2.mesh.rotation.y = 0.5;
			roomArrival.part2.mesh.rotation.x = -0.02;
		});
		
		THREE.ImageUtils.loadTexture('images/vandijk/vandijk3.png', undefined, function(texture){
			roomArrival.part2 = new DetailImage(scene, texture, {
				scale: 11,
				degree: 0,
				verticalDegree: 0,
				radius: 25 * SCALE,
			});
			roomArrival.part2.mesh.rotation.y = 0.15;
			roomArrival.part2.mesh.rotation.x = 0;
			roomArrival.part2.mesh.rotation.z = 0.07;
		});
		
		THREE.ImageUtils.loadTexture('images/vandijk/vandijk1.png', undefined, function(texture){
			roomArrival.part2 = new DetailImage(scene, texture, {
				scale: 30,
				degree: 95,
				verticalDegree: -40,
				radius: 24 * SCALE,
			});
			roomArrival.part2.mesh.rotation.x = -1;
			roomArrival.part2.mesh.rotation.y = -0.21;
		});
		
		THREE.ImageUtils.loadTexture('images/vandijk/vandijk2.png', undefined, function(texture){
			roomArrival.part2 = new DetailImage(scene, texture, {
				scale: 30,
				degree: 95,
				verticalDegree: 0,
				radius: 24 * SCALE,
			});
			roomArrival.part2.mesh.rotation.z = 0.13;
		});
		
		this.remove = function(){
			this.photoSphere.remove();
			this.hotspotToEntrence.remove();
			this.hotspotToWorkplacesFront.remove();
			
			this.textLights.remove();
			this.arrowToEntrence.remove();
			this.arrowToWorkplacesFront.remove();
			
			// part
			if (roomArrival.part2 != undefined){
				roomArrival.part2.remove();
			}
			
			// remove self
			scene.removeRoom(this);
		}
	}