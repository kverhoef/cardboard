function MainController() {
	THREE.Object3D.call(this);
	lookToClick.bind(this)();
	
	var scene = this;

	scene.showHotspots = true;

	// Rotate
	//scene.rotation.y = 1000;
	
	scene.showStats = false;
	
	if (scene.showStats){
		// STATS
		var stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.bottom = '0px';
		stats.domElement.style.zIndex = 100;
		document.getElementById('scene').appendChild( stats.domElement );
		
		scene.updatables.push(function(){
			stats.update();
		});
	}
	
	// Start the first room
	var room1 = new RoomArrival(scene);

	scene.add(room1);
	
	this.removeRoom = function(room){
		scene.intersectables = [];
		scene.updatables = [];
		scene.remove(room1);
	}
	
}

function lookToClick() {
	// create the raycaster
	this.raycaster = new THREE.Raycaster();

	// List of possible intersectables
	this.intersectables = [];
	this.updatables = [];
	
	this.parts = [];
	// adds a puzzle peace
	this.addPart = function(part){
		this.parts.push(part);
		THREE.ImageUtils.loadTexture('images/part' + part + '.png', undefined, function(texture){
			new Part(scene, texture, {
				
			});
		});
	}
	
	this.hasPart = function(part){
		return $.inArray( part, this.parts ) != -1;
	}
	
	this.checkAllParts = function(){
		if (this.parts.length == 1){
			// remove the room
			this.room.remove();
			// Start a new room
			this.rotation.y = 0;
			new GameRoom(this);
			
		}
	}
}

MainController.prototype = Object.create(THREE.Object3D.prototype);
MainController.prototype.constructor = MainController;

var TTL = 100;
MainController.prototype.findIntersections = function() {

	var gaze = new THREE.Vector3(0, 0, 1);
	window.gaze = gaze;

	gaze.unproject( cardboard.camera );

	this.raycaster.set(
		cardboard.camera.position,
		gaze.sub(cardboard.camera.position).normalize()
	);
	
	var intersects = this.raycaster.intersectObjects(this.intersectables);

	// reset cursur scale
	cursor.scale.set(1, 1, 1);

	// if found
	if (intersects.length > 0) {
		var found = intersects[0];

		if (!this.selected) {
			window.navigator.vibrate(30);
			this.selected = {
				id: found.object.uuid,
				ttl: TTL,
				obj: found.object
			};
		} 
		else {
			if (this.selected.id == found.object.uuid) {
				
				if (this.selected.obj.parent.onFocus != undefined){
			
					// decrement
					this.selected.ttl -= 1;
					var p = (this.selected.ttl / TTL);
					cursor.scale.set(p, p, p);
					if (this.selected.ttl <= 0) {
						p = p * 100;
						cursor.scale.set(p, p, p);
						
						// Fire the onFocus event let the object decide the action
						this.selected.obj.parent.onFocus();
						this.selected = null;
					}
				
				}
			}
			else {
				try {
			
					// Blur event on previous focused object
					this.selected.obj.parent.onBlur();
				
					window.navigator.vibrate(30);
					this.selected = {
						id: found.object.uuid,
						ttl: TTL,
						obj: found.object
					};
				
				}
				catch (e){
					// TODO find out why this happens
					//console.log(e);
				}
			}
		}
	} 
	else {
		if (this.selected != null){
			// Blur event
			if (this.selected.obj.parent.onBlur != undefined){
				this.selected.obj.parent.onBlur();
			}
			
		}
	
		this.selected = null;
	}
};

MainController.prototype.update = function() {
	this.findIntersections();
	
	for (var i=0;i<this.updatables.length;i++) {
		var updatable = this.updatables[i];
		updatable();
	}
	
	
	
	
};