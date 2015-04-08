RoomEntrence.prototype = Object.create(THREE.Object3D.prototype);
RoomEntrence.prototype.constructor = RoomEntrence;

function RoomEntrence(scene){
	THREE.Object3D.call(this);
	var roomEntrence = this;

	/*
	var textColor = 0x70C6F4;
	
	this.textBoxes = [];
	
	this.textLights = new TextLights(scene, {

	});
	
	this.textbox = new Textbox(scene, {
		text: "We focus on value",
		radius: 5 * SCALE,
		degree: 50,
		verticalDegree: 165,
		color: textColor
	});
	
	
	this.smallText = function(text, verticalDegree){
		var textbox = new Textbox(scene, {
			text: text,
			radius: 5 * SCALE,
			degree: 50,
			verticalDegree: verticalDegree,
			color: textColor,
			size: 1
		});
		this.textBoxes.push(textbox);
		return textbox;
	}
	
	this.smallText("We are convinced that progress requires a blend of", 176);
	this.smallText("domain knowledge and expertise. You know your ", 182);
	this.smallText("business and we know how information technology can be ", 188);
	this.smallText("used. We focus on creating value by cooperating with ", 194);
	this.smallText("clients, partners and other stakeholders in value networks. ", 200);
	this.smallText("Our worlds converse where we identify, create and seize ", 206);
	this.smallText("opportunities together.", 212);
	*/
	// 0xffffff
	
	this.photoSphere = new PhotoSphere(scene, 'images/PANO_entrence.jpg');
	
	this.hotspotToArrival = new Hotspot(scene, {
		rectLength: 14, 
		rectWidth: 11, 
		degree: 198,
		radius: 5 * SCALE,
		verticalDegree: 0,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				
				// remove the room
				roomEntrence.remove();
				// Start a new room
				new RoomArrival(scene);
				scene.rotation.y += 250;
		}
	});
	this.hotspotToArrival.rectMesh.position.y -= 8;
	
	/*
	this.createComputerHotspot = function(){
		roomEntrence.computerHotspot = new Hotspot(scene, {
			rectLength: 6, 
			rectWidth: 6, 
			degree: 93,
			verticalDegree: -34,
			radius: 5 * SCALE,
			showHotspot: scene.showHotspots,
			onFocus: function(){
					
				// remove self
				this.remove();
				
				THREE.ImageUtils.loadTexture('images/IMG_20150109_121939.jpg', undefined, function(texture){
					roomEntrence.detail = new DetailImage(scene, texture, {
						degree: 80,
						verticalDegree: -22,
						radius: 10 * SCALE,
						onBlur: function(){
							this.remove();	
							// Create the hotspot again
							roomEntrence.createComputerHotspot();
						}
					});
				});
	
			}
		});
	};
	this.createComputerHotspot();
	*/
	// Part 1 
	if (!scene.hasPart(1)){
	
		THREE.ImageUtils.loadTexture('images/part1_.png', undefined, function(texture){
			roomEntrence.part1 = new DetailImage(scene, texture, {
				scale: 10,
				degree: 0,
				verticalDegree: -68,
				radius: 30 * SCALE,
				onFocus: function(){
					this.remove();	
					scene.addPart(1);
				}
			});
		});
		
	}
	this.remove = function(){
		this.photoSphere.remove();
		this.hotspotToArrival.remove();
		/*
		this.computerHotspot.remove();
		this.textbox.remove();
		this.textLights.remove();
		
		for (var i=0;i<this.textBoxes.length;i++){
			this.textBoxes[i].remove();
		}
		*/
		// part
		if (roomEntrence.part1 != undefined){
			roomEntrence.part1.remove();
		}
		
		// remove self
		scene.removeRoom(this);
	}
	
}