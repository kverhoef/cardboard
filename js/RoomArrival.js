RoomArrival.prototype = Object.create(THREE.Object3D.prototype);
	RoomArrival.prototype.constructor = RoomArrival;
	
	function RoomArrival(scene){
		THREE.Object3D.call(this);
		var roomArrival = this;
		scene.room = this;
		
		this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Werkplekken.jpg');
		
		this.textLights = new TextLights(scene, {});
	
		this.navigationArrowToEntrence = new NavigationArrow(scene, {
			degree: 36,
			verticalOffset: 0,
			onFocus: function(){
					
					// remove the room
					roomArrival.remove();
					// Start a new room
					new RoomEntrence(scene);
					scene.rotation.y -= 250;
			}
		});
		
		this.navigationArrowToManager = new NavigationArrow(scene, {
			degree: 66,
			verticalOffset: 0,
			onFocus: function(){
					alert('TODO')
					// remove the room
					//roomArrival.remove();
					// Start a new room
					//new RoomEntrence(scene);
					//scene.rotation.y -= 250;
			}
		});
		
		this.navigationArrowToOffice = new NavigationArrow(scene, {
			degree: 142,
			verticalOffset: 0,
			onFocus: function(){
					alert('TODO')
					// remove the room
					//roomArrival.remove();
					// Start a new room
					//new RoomEntrence(scene);
					//scene.rotation.y -= 250;
			}
		});
	
		this.navigationArrowToRelax = new NavigationArrow(scene, {
			degree: 165,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomArrival.remove();
				// Start a new room
				new RoomRelax(scene);
			}
		});
		
		this.navigationArrowToWorkplaces = new NavigationArrow(scene, {
			degree: 195,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomArrival.remove();
				// Start a new room
				new RoomWorkplaces(scene);
			}
		});
	
		if (!scene.hasPart(2)){
	
			THREE.ImageUtils.loadTexture('images/part2_.png', undefined, function(texture){
				roomArrival.part2 = new DetailImage(scene, texture, {
					scale: 100,
					degree: 0,
					verticalDegree: -38,
					radius: 5 * SCALE,
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
			
			this.navigationArrowToEntrence.remove();
			this.navigationArrowToRelax.remove();
			this.navigationArrowToOffice.remove();
			this.navigationArrowToManager.remove();
			this.navigationArrowToWorkplaces.remove();
			
			// part
			if (roomArrival.part2 != undefined){
				roomArrival.part2.remove();
			}
			
			// remove self
			scene.removeRoom(this);
		}
	}