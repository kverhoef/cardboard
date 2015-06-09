
NavigationArrow.prototype = Object.create(THREE.Object3D.prototype);
NavigationArrow.prototype.constructor = PhotoSphere;

function NavigationArrow(rootThis, args) {

	this.arrow = new Textbox(rootThis, {
		lookAt: new THREE.Vector3( cardboard.camera.position.x, -300, cardboard.camera.position.z ),
		text: "V",
		radius: 5 * SCALE,
		degree: args.degree,
		verticalDegree: -10,
		color: 0x000000,
		size: 5
	});
	
	this.hotspot = new Hotspot(rootThis, {
		rectLength: 5, 
		rectWidth: 11, 
		degree: args.degree + 20,
		radius: 5 * SCALE,
		verticalDegree: 0,
		showHotspot: rootThis.showHotspots,
		onFocus: args.onFocus
	});
	this.arrow.textMesh.position.y -= args.verticalOffset;
	this.hotspot.rectMesh.position.y -= args.verticalOffset + 5;
		
	this.remove = function(){
		this.arrow.remove();
		this.hotspot.remove();
	}
}
