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
	
	var batMaterial = new THREE.MeshLambertMaterial({color: args.color, transparent: true, opacity: 0.6 }); 
	
	var rectGeom = new THREE.ShapeGeometry( rectShape ); 
	var rectMesh = new THREE.Mesh(rectGeom, batMaterial);
	
	this.rectMesh = rectMesh;
	this.rectMesh.receiveShadow = true;
	var centroid = getCentroid(rectMesh);
	rectMesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( -centroid.x, -centroid.y, -centroid.z ) );
	
	rectMesh.position.x = 0;
    rectMesh.position.y = 0;
    rectMesh.position.z = args.batLine;
	
	this.add(rectMesh);
	
	scene.add(this);
	
	scene.updatables.push(function(){

		// view =  0.6 ] 0 [ -0.6
		var orbitTheta = cardboard.theta;
		var phi = cardboard.phi - 1.5;
		
		var movementSpeed = 15;
		
		var newX = (orbitTheta * movementSpeed) * -1;
		var newY = (phi * movementSpeed);
		
		// limit on max
		var halfRectWidth = args.rectWidth / (2);
		var halfRectHeight = args.rectLength / (2);
		var halfBoxHeight = (args.boxHeight / 2);
		var halfBoxWidth = (args.boxWidth / 2);
		
		if (newX > halfBoxWidth - halfRectWidth){
			newX = halfBoxWidth - halfRectWidth;
		}
		else if (newX < (halfBoxWidth * -1) + halfRectWidth){
			newX = (halfBoxWidth * -1) + halfRectWidth;
		}
		
		if (newY > halfBoxHeight - halfRectHeight){
			newY = halfBoxHeight - halfRectHeight;
		}
		else if (newY < (halfBoxHeight * -1) + halfRectHeight){
			newY = (halfBoxHeight * -1) + halfRectHeight;
		}
		
		rectMesh.position.x = newX;
		rectMesh.position.y = newY;
	});
	
	this.remove = function(){
		// Remove from scene
		scene.remove(this);
	}

	this.onFocus = args.onFocus;
	this.onBlur = args.onBlur;
}
