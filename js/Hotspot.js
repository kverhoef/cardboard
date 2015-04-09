Hotspot.prototype = Object.create(THREE.Object3D.prototype);
Hotspot.prototype.constructor = Hotspot;

function Hotspot(scene, args) {
	THREE.Object3D.call(this);

	var rectShape = new THREE.Shape(); 
	rectShape.moveTo( 0, 0 ); 
	rectShape.lineTo( 0, args.rectLength ); 
	rectShape.lineTo( args.rectWidth, args.rectLength ); 
	rectShape.lineTo( args.rectWidth, 0 ); 
	rectShape.lineTo( 0, 0 ); 
	
	this.rectShape = rectShape;
	
	var rectGeom = new THREE.ShapeGeometry( rectShape ); 
	var rectMesh = new THREE.Mesh( rectGeom, new THREE.MeshBasicMaterial( { color: 0xff0000, transparent: true, opacity: args.showHotspot?0.5:0.0 } ) ) ;	
	
	this.rectMesh = rectMesh;
	
	var phi = (args.verticalDegree)*Math.PI/180;
    var theta = (args.degree-180)*Math.PI/180;
	
	rectMesh.position.x = -args.radius * Math.cos(phi) * Math.cos(theta);
    rectMesh.position.y = args.radius * Math.sin(phi);
    rectMesh.position.z = args.radius * Math.cos(phi) * Math.sin(theta);
	
	rectMesh.lookAt(cardboard.camera.position);
	
	this.add(rectMesh);
	
	scene.add(this);
	scene.intersectables.push(this.children[0]);
	
	this.remove = function(){
		// Remove from intersectables
		scene.intersectables.splice($.inArray(this.children[0], scene.intersectables),1);
		// Remove from scene
		scene.remove(this);
	}

	this.onFocus = args.onFocus;
	this.onBlur = args.onBlur;
}
