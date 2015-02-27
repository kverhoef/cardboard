TextLights.prototype = Object.create(THREE.Object3D.prototype);
TextLights.prototype.constructor = TextLights;

function TextLights(scene, args) {
	THREE.Object3D.call(this);

	this.dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
	this.dirLight.position.set( 0, 0, 0 )
	scene.add( this.dirLight );

	this.pointLight = new THREE.PointLight( 0xffffff, 1.0 );
	this.pointLight.position.set( 5, 0, 0 );
	scene.add( this.pointLight );

//	this.pointLight.color.setHSL( 0.2, 1, 0.5 );

	var root = this;

	this.remove = function(){
		// Remove from scene
		scene.remove(root.dirLight);
		scene.remove(root.pointLight);
	}
}