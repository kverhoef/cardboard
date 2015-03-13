Room5.prototype = Object.create(THREE.Object3D.prototype);
Room5.prototype.constructor = Room5;

function Room5(scene){
	THREE.Object3D.call(this);
	var room = this;
	
	this.textLights = new TextLights(scene, {
		
	});
	
	// parts
	THREE.ImageUtils.loadTexture('images/part1.png', undefined, function(texture){
		room.detail = new DetailImage(scene, texture, {
			degree: 0,
			verticalDegree: 0,
			radius: 10 * SCALE,
			onFocus: function(){
				this.remove();	
				scene.addPart(1);
			}
		});
	});
	
	THREE.ImageUtils.loadTexture('images/part2.png', undefined, function(texture){
		room.detail = new DetailImage(scene, texture, {
			degree: 30,
			verticalDegree: 0,
			radius: 10 * SCALE,
			onFocus: function(){
				this.remove();	
				scene.addPart(2);
			}
		});
	});
	
	THREE.ImageUtils.loadTexture('images/part3.png', undefined, function(texture){
		room.detail = new DetailImage(scene, texture, {
			degree: 60,
			verticalDegree: 0,
			radius: 10 * SCALE,
			onFocus: function(){
				this.remove();	
				scene.addPart(3);
			}
		});
	});
	
	THREE.ImageUtils.loadTexture('images/part4.png', undefined, function(texture){
		room.detail = new DetailImage(scene, texture, {
			degree: 90,
			verticalDegree: 0,
			radius: 10 * SCALE,
			onFocus: function(){
				this.remove();	
				scene.addPart(4);
			}
		});
	});
	
	THREE.ImageUtils.loadTexture('images/part5.png', undefined, function(texture){
		room.detail = new DetailImage(scene, texture, {
			degree: 120,
			verticalDegree: 0,
			radius: 10 * SCALE,
			onFocus: function(){
				this.remove();	
				scene.addPart(5);
			}
		});
	});
	
	
	this.photoSphere = new PhotoSphere(scene, 'images/small.jpg', {   });
	/*
	var jsonLoader = new THREE.JSONLoader();
	jsonLoader.load( "js/models/android.js", function(geometry, materials){
		var material = new THREE.MeshFaceMaterial( materials );
		android = new THREE.Mesh( geometry, material );
		android.scale.set(0.1,0.1,0.1);
		android.position.x = 1
		scene.add( android );
	} );
	*/
	this.remove = function(){
		this.photoSphere.remove();
		this.textLights.remove();
		this.textbox.remove();
		
		// remove self
		scene.removeRoom(this);
	}
	
}