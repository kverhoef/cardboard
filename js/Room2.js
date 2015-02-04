Room2.prototype = Object.create(THREE.Object3D.prototype);
	Room2.prototype.constructor = Room2;
	
	function Room2(rootThis){
		THREE.Object3D.call(this);
		var room2 = this;
		
		this.photoSphere = new PhotoSphere(rootThis, 'images/share-carousel2.jpg');
		
		this.hotspot = new Hotspot(rootThis, {
			rectLength: 4, 
			rectWidth: 4, 
			degree: 90,
			verticalDegree: 0,
			radius: 5 * SCALE,
			showHotspot: rootThis.showHotspots,
			onFocus: function(){
					// remove the room
					room2.remove();
					// Start a new room
					var room = new Room1(rootThis);
					rootThis.add(room);
			}
		});
		
		this.remove = function(){
			this.photoSphere.remove();
			this.hotspot.remove();
			
			// remove self
			rootThis.removeRoom(this);
		}
	}