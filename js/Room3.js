Room3.prototype = Object.create(THREE.Object3D.prototype);
Room3.prototype.constructor = Room3;

function Room3(rootThis){
	THREE.Object3D.call(this);
	var room = this;
	
	this.textLights = new TextLights(rootThis, {
		
	});
	
	this.textbox = new Textbox(rootThis, {
		text: "We believe in sharing",
		radius: 5 * SCALE,
		degree: 50,
		verticalDegree: 165,
		color: 0xeeeeee
	});
	
	this.smallText = function(text, verticalDegree){
		return new Textbox(rootThis, {
			text: text,
			radius: 5 * SCALE,
			degree: 50,
			verticalDegree: verticalDegree,
			color: 0xeeeeee,
			size: 1
		});
	}
	
	this.smallText("The open source principle innovates and delivers value ", 176);
	this.smallText("through co-creation. Sharing simply makes economic ", 182);
	this.smallText("sense. At Luminis we actively support and contribute to the", 188);
	this.smallText("open source developer community and engage in joint R&D", 194);
	this.smallText("with our customers. The exchange of knowledge and ideas", 200);
	this.smallText("through our publications, training programmes and", 206);
	this.smallText("contributions to international conferences are an ongoing", 212);
	this.smallText("source of inspiration.", 218);
	
	this.photoSphere = new PhotoSphere(rootThis, 'images/small.jpg');
	
	this.remove = function(){
		this.photoSphere.remove();
		this.computerHotspot.remove();
		this.doorHotspot.remove();
		this.textbox.remove();
		
		// remove self
		rootThis.removeRoom(this);
	}
	
}