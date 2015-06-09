RoomConference.prototype = Object.create(THREE.Object3D.prototype);
RoomConference.prototype.constructor = RoomConference;
	
	function RoomConference(scene){
		THREE.Object3D.call(this);
		var room = this;
		scene.room = this;
		
		
		this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Vergaderruimte.jpg');
		
		this.textLights = new TextLights(scene, {});		
		
		THREE.ImageUtils.loadTexture('images/monuta/monuta1.png', undefined, function(texture){
			room.drupal = new DetailImage(scene, texture, {
				scale: 60,
				degree: 120,
				verticalDegree: -10,
				radius: 10 * SCALE,
			});
            room.drupal.mesh.rotation.z = 0.15;
            room.drupal.mesh.rotation.y = -0.5;
		});

        THREE.ImageUtils.loadTexture('images/monuta/monuta2.png', undefined, function(texture){
            room.mvm = new DetailImage(scene, texture, {
                scale: 67,
                degree: 180,
                verticalDegree: -44,
                radius: 14 * SCALE
            });
            room.mvm.mesh.rotation.z = -0.12;
            room.mvm.mesh.rotation.x = -1;
        });
        
        THREE.ImageUtils.loadTexture('images/monuta/uitvaartkostenmeter.jpg', undefined, function(texture){
            room.uvkm = new DetailImage(scene, texture, {
                scale: 60,
                degree: 246,
                verticalDegree: -4,
                radius: 10 * SCALE
            });
            room.uvkm.mesh.rotation.z = -0.20;
            room.uvkm.mesh.rotation.x = 0;
        });

        THREE.ImageUtils.loadTexture('images/monuta/monuta_logo_rood.png', undefined, function(texture){
            room.logo = new DetailImage(scene, texture, {
                scale: 5,
                degree: 180,
                verticalDegree: -10,
                radius: 10 * SCALE
            });
            //room.whiteboard.mesh.position.y += 40;
            room.logo.mesh.rotation.z = -0.04;
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
			
			if (room.drupal != undefined){
				room.drupal.remove();
			}
			if (room.mvm != undefined){
				room.mvm.remove();
			}
			if (room.uvkm != undefined){
				room.uvkm.remove();
			}
			if (room.logo != undefined){
				room.logo.remove();
			}						
			
			// remove self
			scene.removeRoom(this);
		}
	}