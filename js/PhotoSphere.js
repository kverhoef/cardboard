PhotoSphere.prototype = Object.create(THREE.Object3D.prototype);
PhotoSphere.prototype.constructor = PhotoSphere;

function PhotoSphere(rootThis, textureUrl) {
	var sphere = new THREE.Mesh(
		new THREE.SphereGeometry(100, 32, 32),
		new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture(textureUrl)
		})
	);
	
	// Invert the mesh inside-out
	sphere.scale.x = -1;
	
	this.sphere = sphere;
	
	rootThis.add(sphere);
	
	this.remove = function(){
		// Remove from scene
		rootThis.remove(sphere);
	}
}
