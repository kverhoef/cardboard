Room1.prototype = Object.create(THREE.Object3D.prototype);
Room1.prototype.constructor = Room1;

function Room1(rootThis){
	THREE.Object3D.call(this);
	var room = this;
	
	this.textLights = new TextLights(rootThis, {

	});
	
	this.textbox = new Textbox(rootThis, {
		text: "We focus on value",
		radius: 5 * SCALE,
		degree: 10,
		verticalDegree: 180,
		color: 0x000
	});
	
	this.photoSphere = new PhotoSphere(rootThis, 'images/small.jpg');
	
	this.doorHotspot = new Hotspot(rootThis, {
		rectLength: 9, 
		rectWidth: 4, 
		degree: 240,
		radius: 5 * SCALE,
		verticalDegree: -15,
		showHotspot: rootThis.showHotspots,
		onFocus: function(){
				
				// remove the room
				room.remove();
				// Start a new room
				var room2 = new Room2(rootThis);
			
		}
	});
	
	this.createComputerHotspot = function(){
		room.computerHotspot = new Hotspot(rootThis, {
			rectLength: 6, 
			rectWidth: 6, 
			degree: 93,
			verticalDegree: -34,
			radius: 5 * SCALE,
			showHotspot: rootThis.showHotspots,
			onFocus: function(){
					
				// remove self
				this.remove();	
				
				THREE.ImageUtils.loadTexture('images/IMG_20150109_121939.jpg', undefined, function(texture){
					room.detail = new DetailImage(rootThis, texture, {
						degree: 80,
						verticalDegree: -22,
						radius: 10 * SCALE,
						onBlur: function(){
							this.remove();	
							// Create the hotspot again
							room.createComputerHotspot();
						}
					});
				});
	
			}
		});
	};
	this.createComputerHotspot();
	
	
	this.remove = function(){
		this.photoSphere.remove();
		this.computerHotspot.remove();
		this.doorHotspot.remove();
		this.textbox.remove();
		
		// remove self
		rootThis.removeRoom(this);
	}
	
}