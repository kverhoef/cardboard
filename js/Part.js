
function Part(scene, texture, args) {

	var geometry = new THREE.PlaneBufferGeometry(texture.image.width / 320, texture.image.height / 320);
	
	var material = new THREE.MeshBasicMaterial(
		{
			map: texture,
			transparent: true, 
			opacity: 1.0, 
			depthWrite: false, 
			depthTest: false 
		}
	);

	THREE.Mesh.call(this, geometry, material);
	cardboard.camera.add(this);
	this.position.z = -3 * SCALE;
	//this.position.x = 2.6;
	//this.position.y = -1.7;
	this.lookAt(cardboard.camera.position);
	
	this.remove = function(){
		// Remove from scene
		scene.remove(this);
	}
	
}

Part.SIZE = 0.1 * SCALE;
Part.prototype = Object.create(THREE.Mesh.prototype);
Part.prototype.constructor = Part;


