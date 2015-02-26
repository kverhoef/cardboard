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
	
	this.smallText("We are convinced that progress requires a blend of", 176);
	this.smallText("domain knowledge and expertise. You know your ", 182);
	this.smallText("business and we know how information technology can be ", 188);
	this.smallText("used. We focus on creating value by cooperating with ", 194);
	this.smallText("clients, partners and other stakeholders in value networks. ", 200);
	this.smallText("Our worlds converse where we identify, create and seize ", 206);
	this.smallText("opportunities together.", 212);
	
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