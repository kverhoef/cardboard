Part.prototype = Object.create(THREE.Object3D.prototype);
Part.prototype.constructor = Part;



function Part(rootThis, texture, args) {
	THREE.Object3D.call(this);
	
	// Create the object
	var geometry = new THREE.PlaneGeometry(texture.image.width / 100, texture.image.height / 100);

	var material = new THREE.MeshBasicMaterial({
		map: texture,
		transparent: true, 
		opacity: 1.0
	});
	
	var mesh = new THREE.Mesh(geometry, material);
	
	this.mesh = mesh;
	
	// Add the object
	this.add(mesh);

	this.lookAt(cardboard.camera.position);
	mesh.position.z = -3 * SCALE;
	cardboard.camera.add(mesh);
	
	rootThis.add(this);
	
	
	THREE.Mesh.call(this, geometry, material);
	
	rootThis.intersectables.push(this.children[0]);

	this.remove = function(){
		// Remove from intersectables
		rootThis.intersectables.splice($.inArray(this, rootThis.intersectables),1);
		// Remove from scene
		rootThis.remove(this);
	}
	
	this.onFocus = args.onFocus;
	this.onBlur = args.onBlur;
}


