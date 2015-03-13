Room2.prototype = Object.create(THREE.Object3D.prototype);
	Room2.prototype.constructor = Room2;
	
	function Room2(scene){
		THREE.Object3D.call(this);
		var room2 = this;
		
		this.photoSphere = new PhotoSphere(scene, 'images/share-carousel2.jpg');
		
		this.hotspotToRoom1 = new Hotspot(scene, {
			rectLength: 4, 
			rectWidth: 4, 
			degree: 90,
			verticalDegree: 0,
			radius: 5 * SCALE,
			showHotspot: scene.showHotspots,
			onFocus: function(){
					// remove the room
					room2.remove();
					// Start a new room
					var room = new Room1(scene);
					scene.add(room);
			}
		});
		
		this.hotspotToRoom3 = new Hotspot(scene, {
			rectLength: 4, 
			rectWidth: 4, 
			degree: 180,
			verticalDegree: 0,
			radius: 5 * SCALE,
			showHotspot: scene.showHotspots,
			onFocus: function(){
					// remove the room
					room2.remove();
					// Start a new room
					var room = new Room3(scene);
					scene.add(room);
			}
		});
		
		if (!scene.hasPart(2)){
	
		THREE.ImageUtils.loadTexture('images/part2.png', undefined, function(texture){
			room2.part2 = new DetailImage(scene, texture, {
				scale: 10,
				degree: 0,
				verticalDegree: 45,
				radius: 10 * SCALE,
				onFocus: function(){
					this.remove();	
					scene.addPart(2);
				}
			});
		});
		
	}
		
		this.remove = function(){
			this.photoSphere.remove();
			this.hotspotToRoom1.remove();
			this.hotspotToRoom3.remove();
			
			// part
			if (room2.part2 != undefined){
				room2.part2.remove();
			}
			
			// remove self
			scene.removeRoom(this);
		}
	}