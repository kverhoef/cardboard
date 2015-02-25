Bat.prototype = Object.create(THREE.Object3D.prototype);
Bat.prototype.constructor = Bat;

function Bat(scene, args) {
	THREE.Object3D.call(this);

	var rectShape = new THREE.Shape(); 
	rectShape.moveTo( 0, 0 ); 
	rectShape.lineTo( 0, args.rectLength ); 
	rectShape.lineTo( args.rectWidth, args.rectLength ); 
	rectShape.lineTo( args.rectWidth, 0 ); 
	rectShape.lineTo( 0, 0 ); 
	
	this.rectShape = rectShape;
	
	var rectGeom = new THREE.ShapeGeometry( rectShape ); 
	var rectMesh = new THREE.Mesh( rectGeom, new THREE.MeshBasicMaterial( { color: 0xff00ff } ) ) ;	
	
	this.rectMesh = rectMesh;
	
	var centroid = getCentroid( rectMesh );
	rectMesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( -centroid.x, -centroid.y, -centroid.z ) );
	
	rectMesh.position.x = 0;
    rectMesh.position.y = 0;
    rectMesh.position.z = -8;
	
	this.add(rectMesh);
	
	scene.add(this);
	
	scene.updatables.push(function(){

		// view =  0.6 ] 0 [ -0.6
		var orbitTheta = cardboard.orbitControls.theta
		
		rectMesh.position.x = (orbitTheta * 15) * -1;
		
		var phi = cardboard.orbitControls.phi - 1.5
		rectMesh.position.y = (phi * 15);
	});
	
	//scene.intersectables.push(this.children[0]);
	
	this.remove = function(){
		// Remove from intersectables
		scene.intersectables.splice($.inArray(this, scene.intersectables),1);
		// Remove from scene
		scene.remove(this);
	}

	this.onFocus = args.onFocus;
	this.onBlur = args.onBlur;
}
