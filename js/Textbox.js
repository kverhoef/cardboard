Textbox.prototype = Object.create(THREE.Object3D.prototype);
Textbox.prototype.constructor = Textbox;



function Textbox(rootThis, args) {
	THREE.Object3D.call(this);

	var text3d = createText(args.text);
	text3d.receiveShadow = true;

	text3d.computeBoundingBox();

	var phi = (args.verticalDegree)*Math.PI/180;
    var theta = (args.degree-180)*Math.PI/180;
	
	var centroid = getCentroid( textMesh1 )
	
	textMesh1.position.x = (-args.radius * Math.cos(phi) * Math.cos(theta));
    textMesh1.position.y = args.radius * Math.sin(phi);
    textMesh1.position.z = (args.radius * Math.cos(phi) * Math.sin(theta));
	
	// Centreer de text
	var center = getCentroid( textMesh1 );
	textMesh1.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( -centroid.x, -centroid.y, -centroid.z ) );
	
	var v = cardboard.camera.position
	
	
	textMesh1.lookAt(cardboard.camera.position);

	rootThis.add(textMesh1);
	
	
	

	this.remove = function(){
		// Remove from scene
		rootThis.remove(text);
	}
}

function getCentroid( mesh ) {

    mesh.geometry.computeBoundingBox();
    var boundingBox = mesh.geometry.boundingBox;
	console.log(boundingBox)
    var x0 = boundingBox.min.x;
	var x1 = boundingBox.max.x;
	var y0 = boundingBox.min.y;
	var y1 = boundingBox.max.y;
	var z0 = boundingBox.min.z;
	var z1 = boundingBox.max.z;


    var bWidth = ( x0 > x1 ) ? x0 - x1 : x1 - x0;
    var bHeight = ( y0 > y1 ) ? y0 - y1 : y1 - y0;
    var bDepth = ( z0 > z1 ) ? z0 - z1 : z1 - z0;

    var centroidX = x0 + ( bWidth / 2 ) + mesh.position.x;
    var centroidY = y0 + ( bHeight / 2 )+ mesh.position.y;
    var centroidZ = z0 + ( bDepth / 2 ) + mesh.position.z;

    return mesh.geometry.centroid = { x : centroidX, y : centroidY, z : centroidZ };

}

function createText(text) {

	var textGeo = new THREE.TextGeometry( text, {

		size: 3,
		height: 0.2,
		curveSegments: 2,

		font: "helvetiker",
	
		bevelThickness: 0.1,
		bevelSize: 0.1,
		bevelEnabled: true,

		material: 0,
		extrudeMaterial: 1

	});

	textGeo.computeBoundingBox();
	textGeo.computeVertexNormals();

	var material = new THREE.MeshFaceMaterial( [
		new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ), // front
		new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
	] );
	
	var material = new THREE.MeshPhongMaterial({color: 0xdddddd});	
	
	textMesh1 = new THREE.Mesh( textGeo, material );

	return textGeo;

}
