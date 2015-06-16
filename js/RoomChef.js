RoomChef.prototype = Object.create(THREE.Object3D.prototype);
	RoomChef.prototype.constructor = RoomChef;
	
	function RoomChef(scene){
		THREE.Object3D.call(this);
		var room = this;
		scene.room = this;
		
		this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Kantoor_directeur.jpg');
		
		this.textLights = new TextLights(scene, {});		
		
		THREE.ImageUtils.loadTexture('images/vandijk/whiteboard.png', undefined, function(texture){
			room.whiteboard = new DetailImage(scene, texture, {
				scale: 28,
				degree: 163,
				verticalDegree: -11.5,
				radius: 12.5 * SCALE
			});
			room.whiteboard.mesh.rotation.y = 0.5;
			room.whiteboard.mesh.rotation.x = -0.02;
		});
		
		THREE.ImageUtils.loadTexture('images/vandijk/vandijk3.png', undefined, function(texture){
			room.vandijk3 = new DetailImage(scene, texture, {
				scale: 22,
				degree: 0,
				verticalDegree: 0,
				radius: 12.5 * SCALE,
				onFocus: function() {
					new DetailImage(scene, texture, {
						scale: 15,
						degree: 0,
						verticalDegree: 0,
						radius: 8 * SCALE,
						onBlur: function() {
							this.remove();
						}
					});
				}
			});
			room.vandijk3.mesh.rotation.y = 0.15;
			room.vandijk3.mesh.rotation.x = 0;
			room.vandijk3.mesh.rotation.z = 0.07;
		});
		
		THREE.ImageUtils.loadTexture('images/vandijk/vandijk1.png', undefined, function(texture){
			room.vandijk1 = new DetailImage(scene, texture, {
				scale: 60,
				degree: 95,
				verticalDegree: -40,
				radius: 12 * SCALE,
				onFocus: function() {
					new DetailImage(scene, texture, {
						scale: 15,
						degree: 95,
						verticalDegree: -40,
						radius: 8 * SCALE,
						onBlur: function() {
							this.remove();
						}
					});
				}
			});
			room.vandijk1.mesh.rotation.x = -1;
			room.vandijk1.mesh.rotation.y = -0.21;
		});
		
		THREE.ImageUtils.loadTexture('images/vandijk/vandijk2.png', undefined, function(texture){
			room.vandijk2 = new DetailImage(scene, texture, {
				scale: 60,
				degree: 95,
				verticalDegree: 0,
				radius: 12 * SCALE,
				onFocus: function() {
					new DetailImage(scene, texture, {
						scale: 20,
						degree: 95,
						verticalDegree: 0,
						radius: 8 * SCALE,
						onBlur: function() {
							this.remove();
						}
					});
				}
			});
			room.vandijk2.mesh.rotation.z = 0.13;
		});
		
		this.navigationArrowToArrival = new NavigationArrow(scene, {
			degree: -53,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				room.remove();
				// Start a new room
				new RoomArrival(scene);
				scene.rotation.y += 250;
			}
		});
		
		this.remove = function(){
			this.photoSphere.remove();

			this.textLights.remove();
			
			this.navigationArrowToArrival.remove();
			
			if (room.vandijk1 != undefined){
				room.vandijk1.remove();
			}
			if (room.vandijk2 != undefined){
				room.vandijk2.remove();
			}
			if (room.vandijk3 != undefined){
				room.vandijk3.remove();
			}
			if (room.whiteboard != undefined){
				room.whiteboard.remove();
			}
			
			// part
			if (room.part2 != undefined){
				room.part2.remove();
			}
			
			// remove self
			scene.removeRoom(this);
		}
	}