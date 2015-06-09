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
					scene.rotation.y += 1000;
			}
		});
		
		this.navigationArrowToChef = new NavigationArrow(scene, {
			degree: 61,
			verticalOffset: 0,
			onFocus: function(){
					
				// remove the room
				roomArrival.remove();
				// Start a new room
				new RoomChef(scene);
				//scene.rotation.y -= 250;
			}
		});
		
		this.navigationArrowToIne = new NavigationArrow(scene, {
			degree: 142,
			verticalOffset: 4,
			onFocus: function(){
				
				// remove the room
				roomArrival.remove();
				// Start a new room
				new RoomIne(scene);
				scene.rotation.y -= 250;
			}
		});
		this.navigationArrowToIne.arrow.textMesh.rotation.y += 0.2
	
		this.navigationArrowToRelax = new NavigationArrow(scene, {
			degree: 165,
			verticalOffset: 4,
			onFocus: function(){
				// remove the room
				roomArrival.remove();
				// Start a new room
				new RoomRelax(scene);
			}
		});
		this.navigationArrowToRelax.arrow.textMesh.rotation.y += 0.2
		
		this.navigationArrowToWorkplaces = new NavigationArrow(scene, {
			degree: 195,
			verticalOffset: 4,
			onFocus: function(){
				// remove the room
				roomArrival.remove();
				// Start a new room
				new RoomWorkplaces(scene);
				
				scene.rotation.y += 300;
			}
		});
		this.navigationArrowToWorkplaces.arrow.textMesh.rotation.y += 0.2
	
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
			this.navigationArrowToIne.remove();
			this.navigationArrowToChef.remove();
			this.navigationArrowToWorkplaces.remove();
			
			this.textLights.remove();
			
			// part
			if (roomArrival.part2 != undefined){
				roomArrival.part2.remove();
			}
			
			// remove self
			scene.removeRoom(this);
		}
	}