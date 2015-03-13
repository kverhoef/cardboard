DetailImage.prototype = Object.create(THREE.Object3D.prototype);
DetailImage.prototype.constructor = DetailImage;



function DetailImage(rootThis, texture, args) {
	THREE.Object3D.call(this);

	// Create the object
	var geometry = new THREE.PlaneBufferGeometry(texture.image.width / args.scale || 100, texture.image.height / args.scale || 100);

	var material = new THREE.MeshBasicMaterial({
		map: texture,
		transparent: true, 
		opacity: 1.0
	});
	
	var mesh = new THREE.Mesh(geometry, material);
	
	this.mesh = mesh;
	
	// Add the object
	this.add(mesh);
	
	this.args = args;
	this.degree = args.degree;
	
	this.updatePosition = function(){
		var phi = (this.args.verticalDegree)*Math.PI/180;
		var theta = (this.args.degree-180)*Math.PI/180;
		
		this.position.x = -this.args.radius * Math.cos(phi) * Math.cos(theta);
		this.position.y = this.args.radius * Math.sin(phi);
		this.position.z = this.args.radius * Math.cos(phi) * Math.sin(theta);
		
		this.lookAt(cardboard.camera.position);
	}
	this.updatePosition();
	
	rootThis.add(this);

	rootThis.intersectables.push(this.children[0]);

	this.remove = function(){
		// Remove from intersectables
		rootThis.intersectables.splice($.inArray(this.children[0], rootThis.intersectables),1);
		// Remove from scene
		rootThis.remove(this);
	}
	
	this.onFocus = args.onFocus;
	this.onBlur = args.onBlur;
	
	

}


