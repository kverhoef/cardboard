Textbox.prototype = Object.create(THREE.Object3D.prototype);
Textbox.prototype.constructor = Textbox;



function Textbox(rootThis, args) {
	THREE.Object3D.call(this);
	
	var text3d = new THREE.TextGeometry( args.text, {
		size: 2,
		height: 0.2,
		curveSegments: 2,
		font: "helvetiker"
	});
	text3d.receiveShadow = true;

	text3d.computeBoundingBox();
	//text3d.computeVertexNormals();
	
	/*
	var light = new THREE.PointLight(0xffffff);
    light.position.set(0,0,1000);
    rootThis.add(light);

	var textMaterial = new THREE.MeshPhongMaterial({color: 0xdddddd});	
	*/
	
	var textMaterial = new THREE.MeshBasicMaterial( { color: args.color, overdraw: 0.5 } );
	text = new THREE.Mesh( text3d, textMaterial );
	
	var phi = (args.verticalDegree)*Math.PI/180;
    var theta = (args.degree-180)*Math.PI/180;
	
	text.position.x = -args.radius * Math.cos(phi) * Math.cos(theta);
    text.position.y = args.radius * Math.sin(phi);
    text.position.z = args.radius * Math.cos(phi) * Math.sin(theta);
	
	text.lookAt(cardboard.camera.position);

	rootThis.add(text);
	
	this.remove = function(){
		// Remove from scene
		rootThis.remove(text);
	}
}
