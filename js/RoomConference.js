RoomConference.prototype = Object.create(THREE.Object3D.prototype);
RoomConference.prototype.constructor = RoomConference;
	
	function RoomConference(scene){
		THREE.Object3D.call(this);
		var room = this;
		scene.room = this;
		
		
		this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Vergaderruimte.jpg');
		
		this.textLights = new TextLights(scene, {});		
		
		THREE.ImageUtils.loadTexture('images/monuta/monuta1.png', undefined, function(texture){
			room.whiteboard = new DetailImage(scene, texture, {
				scale: 60,
				degree: 120,
				verticalDegree: -10,
				radius: 10 * SCALE,
			});
            room.whiteboard.mesh.rotation.z = 0.15;
            room.whiteboard.mesh.rotation.y = -0.5;
		});

        THREE.ImageUtils.loadTexture('images/monuta/monuta2.png', undefined, function(texture){
            room.whiteboard = new DetailImage(scene, texture, {
                scale: 67,
                degree: 180,
                verticalDegree: -44,
                radius: 14 * SCALE
            });
            room.whiteboard.mesh.rotation.z = -0.12;
            room.whiteboard.mesh.rotation.x = -1;
        });

        THREE.ImageUtils.loadTexture('images/monuta/monuta_logo_rood.png', undefined, function(texture){
            room.whiteboard = new DetailImage(scene, texture, {
                scale: 5,
                degree: 180,
                verticalDegree: -10,
                radius: 10 * SCALE
            });
            //room.whiteboard.mesh.position.y += 40;
            room.whiteboard.mesh.rotation.z = -0.04;
//            room.whiteboard.mesh.rotation.y = -0.5;
//            room.whiteboard.mesh.rotation.x = -1;
        });

        this.navigationArrowToArrival = new NavigationArrow(scene, {
			degree: -53,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				room.remove();
				// Start a new room
				new RoomBack(scene);
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