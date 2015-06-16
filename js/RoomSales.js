RoomSales.prototype = Object.create(THREE.Object3D.prototype);
	RoomSales.prototype.constructor = RoomSales;
	
	function RoomSales(scene){
		THREE.Object3D.call(this);
		var room = this;
		scene.room = this;
		
		
		this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Kantoor_sales.jpg');
		
		this.textLights = new TextLights(scene, {});		
		
		THREE.ImageUtils.loadTexture('images/finext/finext_logo.png', undefined, function(texture){
			room.whiteboard = new DetailImage(scene, texture, {
				scale: 120,
				degree: 163,
				verticalDegree: -35,
				radius: 12.5 * SCALE
				
			});
			room.whiteboard.mesh.rotation.y = 0.5;
			room.whiteboard.mesh.rotation.x = -0.02;
			room.whiteboard.mesh.rotation.z = -0.12;
		});
		
		THREE.ImageUtils.loadTexture('images/finext/scherm3.png', undefined, function(texture){
			room.scherm3 = new DetailImage(scene, texture, {
				scale: 50,
				degree: 50,
				verticalDegree: 13.5,
				radius: 12.5 * SCALE,
				onFocus: function() {
					new DetailImage(scene, texture, {
						scale: 20,
						degree: 50,
						verticalDegree: 13.5,
						radius: 8 * SCALE,
						onBlur: function() {
							this.remove();
						}
					});
				}
			});
			room.scherm3.mesh.rotation.y = 0;//.15;
			room.scherm3.mesh.rotation.x = 0;
		});
		
		THREE.ImageUtils.loadTexture('images/finext/scherm1.png', undefined, function(texture){
			room.scherm1 = new DetailImage(scene, texture, {
				scale: 50,
				degree: 135,
				verticalDegree: 10,
				radius: 12 * SCALE,
				onFocus: function() {
					new DetailImage(scene, texture, {
						scale: 25,
						degree: 135,
						verticalDegree: 10,
						radius: 8 * SCALE,
						onBlur: function() {
							this.remove();
						}
					});
				}
			});
			//room.scherm1.mesh.rotation.x = 0;
			//room.scherm1.mesh.rotation.y = 0.05;
		});
		
		THREE.ImageUtils.loadTexture('images/finext/scherm2.png', undefined, function(texture){
			room.scherm2 = new DetailImage(scene, texture, {
				scale: 45,
				degree: 215,
				verticalDegree: 6,
				radius: 10 * SCALE,
				onFocus: function() {
					new DetailImage(scene, texture, {
						scale: 25,
						degree: 215,
						verticalDegree: 6,
						radius: 8 * SCALE,
						onBlur: function() {
							this.remove();
						}
					});
				}
			});
			room.scherm2.mesh.rotation.y = 0.15;
			room.scherm2.mesh.rotation.x = 0;
			//room.scherm2.mesh.rotation.z = 0.13;
		});
		
		this.navigationArrowToBack = new NavigationArrow(scene, {
			degree: -33,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				room.remove();
				// Start a new room
				new RoomBack(scene);
// 				scene.rotation.y += 250;
				scene.rotation.y -= 750;				
			}
		});
		
		this.remove = function(){
			this.photoSphere.remove();

			this.textLights.remove();
			
			this.navigationArrowToBack.remove();
			
			if (room.scherm1 != undefined){
				room.scherm1.remove();
			}
			if (room.scherm2 != undefined){
				room.scherm2.remove();
			}
			if (room.scherm3 != undefined){
				room.scherm3.remove();
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