RoomArrival.prototype = Object.create(THREE.Object3D.prototype);
	RoomArrival.prototype.constructor = RoomArrival;
	
	function RoomArrival(scene){
		THREE.Object3D.call(this);
		var roomArrival = this;
		scene.room = this;
		
		this.photoSphere = new PhotoSphere(scene, 'images/PANO_arrival.jpg');
		
		this.hotspotToEntrence = new Hotspot(scene, {
			rectLength: 16, 
			rectWidth: 11, 
			degree: 86,
			verticalDegree: 0,
			radius: 5 * SCALE,
			showHotspot: scene.showHotspots,
			onFocus: function(){
					// remove the room
					roomArrival.remove();
					// Start a new room
					new RoomEntrence(scene);
					scene.rotation.y -= 250;
			}
		});
		this.hotspotToEntrence.rectMesh.position.y -= 9;
		
		this.hotspotToWorkplacesFront = new Hotspot(scene, {
			rectLength: 24, 
			rectWidth: 34, 
			degree: 220,
			verticalDegree: 0,
			radius: 5 * SCALE,
			showHotspot: scene.showHotspots,
			onFocus: function(){
					// remove the room
					roomArrival.remove();
					// Start a new room
					new RoomWorkplacesFront(scene);
			}
		});
		this.hotspotToWorkplacesFront.rectMesh.position.y -= 12;
		
		if (!scene.hasPart(2)){
	
			THREE.ImageUtils.loadTexture('images/part2_.png', undefined, function(texture){
				roomArrival.part2 = new DetailImage(scene, texture, {
					scale: 20,
					degree: 0,
					verticalDegree: -38,
					radius: 30 * SCALE,
					onFocus: function(){
						this.remove();	
						scene.addPart(2);
						scene.checkAllParts();
					}
				});
			});
			
		}
		
		this.remove = function(){
			this.photoSphere.remove();
			this.hotspotToEntrence.remove();
			this.hotspotToWorkplacesFront.remove();
			
			// part
			if (roomArrival.part2 != undefined){
				roomArrival.part2.remove();
			}
			
			// remove self
			scene.removeRoom(this);
		}
	}