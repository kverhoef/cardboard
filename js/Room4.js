Room4.prototype = Object.create(THREE.Object3D.prototype);
Room4.prototype.constructor = Room4;

function Room4(rootThis){
	THREE.Object3D.call(this);
	var room = this;
	
	this.textLights = new TextLights(rootThis, {
		
	});
	
	this.textbox = new Textbox(rootThis, {
		text: "We love technology",
		radius: 5 * SCALE,
		degree: 50,
		verticalDegree: 165,
		color: 0xeeeeee
	});
	
	this.smallText = function(text, verticalDegree){
		var text = new Textbox(rootThis, {
			text: text,
			radius: 5 * SCALE,
			degree: 50,
			verticalDegree: verticalDegree,
			color: 0xeeeeee,
			size: 1
		});
	
		this.smallTexts.push(text);
		
		return text;
	};
	
	this.smallTexts = [];
	
	this.smallText("We know that technology can make a difference in ", 176);
	this.smallText("business, society, and life in general. We seek relevance", 182);
	this.smallText("through embracing new information technology and using", 188);
	this.smallText("this to innovate for and with our customers. We are pioneers", 194);
	this.smallText("in open innovation. We proactively develop modular,", 200);
	this.smallText("reusable software components.", 206);
	
	this.photoSphere = new PhotoSphere(rootThis, 'images/small.jpg', {  depth: 110 });
	
	var sphere = new THREE.Mesh(
		new THREE.SphereGeometry(100, 32, 32),
		new THREE.MeshBasicMaterial({
			color: 0xFFFFFF, transparent: true, opacity: 0.25
		})
	);
	
	// Invert the mesh inside-out
	sphere.scale.x = -1;
	this.sphere = sphere;
	rootThis.add(sphere);
	
	this.photoSphere2 = new PhotoSphere(rootThis, 'images/cloud.png', {  transparent: true});
	
	this.remove = function(){
		this.photoSphere.remove();
		this.textLights.remove();
		this.textbox.remove();
		
		for (var i=0;i<smallTexts.length;i++){
			this.smallTexts[i].remove();
		}
		
		// remove self
		rootThis.removeRoom(this);
	}
	
}