RoomBack.prototype = Object.create(THREE.Object3D.prototype);
RoomBack.prototype.constructor = RoomBack;

function RoomBack(scene){
	THREE.Object3D.call(this);
	var roomBack = this;
	scene.room = this;
	
	this.photoSphere = new PhotoSphere(scene, 'images/rooms/PANO_Ruimte_achter.jpg');
	
	this.textLights = new TextLights(scene, {});
	
	var offset = 0;
	var topOffset = 0;
	
	THREE.ImageUtils.loadTexture('images/cloud/The human.png', undefined, function(texture){
		roomBack.img1 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 0,
			verticalDegree: topOffset + 0,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/People.png', undefined, function(texture){
		roomBack.img2 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 20,
			verticalDegree: topOffset + -12,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Opportunity.png', undefined, function(texture){
		roomBack.img3 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 20,
			verticalDegree: topOffset + -18,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Interprise.png', undefined, function(texture){
		roomBack.img4 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 18,
			verticalDegree: topOffset + -24,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Technology.png', undefined, function(texture){
		roomBack.img5 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 3,
			verticalDegree: topOffset + -30,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Craft.png', undefined, function(texture){
		roomBack.img6 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 37,
			verticalDegree: topOffset + -22,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Reputation.png', undefined, function(texture){
		roomBack.img7 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 20,
			verticalDegree: topOffset + 9,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Business.png', undefined, function(texture){
		roomBack.img8 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 58,
			verticalDegree: topOffset + 28,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Passion.png', undefined, function(texture){
		roomBack.img9 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 54,
			verticalDegree: topOffset + 0,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Design.png', undefined, function(texture){
		roomBack.img10 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 68,
			verticalDegree: topOffset + 7,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Challenging.png', undefined, function(texture){
		roomBack.img11 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 70,
			verticalDegree: topOffset + 0,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Luminis.png', undefined, function(texture){
		roomBack.img12 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 74,
			verticalDegree: topOffset + -8,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Emotion.png', undefined, function(texture){
		roomBack.img13 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 52,
			verticalDegree: topOffset + 35,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Venture.png', undefined, function(texture){
		roomBack.img14 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 48,
			verticalDegree: topOffset + 40,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Customers.png', undefined, function(texture){
		roomBack.img15 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 22,
			verticalDegree: topOffset + 18,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Future.png', undefined, function(texture){
		roomBack.img16 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 32,
			verticalDegree: topOffset + 34,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Internet.png', undefined, function(texture){
		roomBack.img17 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 22,
			verticalDegree: topOffset + 36,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Inspiration.png', undefined, function(texture){
		roomBack.img18 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -2,
			verticalDegree: topOffset + 23,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Empathy.png', undefined, function(texture){
		roomBack.img19 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -24,
			verticalDegree: topOffset + 35,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Direction.png', undefined, function(texture){
		roomBack.img20 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 1,
			verticalDegree: topOffset + 45,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Process.png', undefined, function(texture){
		roomBack.img21 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + 3,
			verticalDegree: topOffset + 50,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Creativity.png', undefined, function(texture){
		roomBack.img22 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -54,
			verticalDegree: topOffset + 45,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Worlds.png', undefined, function(texture){
		roomBack.img23 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -24,
			verticalDegree: topOffset + 58,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Product.png', undefined, function(texture){
		roomBack.img24 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -34,
			verticalDegree: topOffset + 50,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Together.png', undefined, function(texture){
		roomBack.img25 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -34,
			verticalDegree: topOffset + 27,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Open.png', undefined, function(texture){
		roomBack.img26 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -34,
			verticalDegree: topOffset + 18,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Risk.png', undefined, function(texture){
		roomBack.img27 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -54,
			verticalDegree: topOffset + 8,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Direction.png', undefined, function(texture){
		roomBack.img28 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -72,
			verticalDegree: topOffset + 0,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Open companies.png', undefined, function(texture){
		roomBack.img29 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -64,
			verticalDegree: topOffset + -12,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Identity.png', undefined, function(texture){
		roomBack.img30 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -82,
			verticalDegree: topOffset + -22,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Cloud.png', undefined, function(texture){
		roomBack.img31 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -102,
			verticalDegree: topOffset + -14,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Expert.png', undefined, function(texture){
		roomBack.img32 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -62,
			verticalDegree: topOffset + -26,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Different.png', undefined, function(texture){
		roomBack.img33 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -48,
			verticalDegree: topOffset + -28,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Knowledge.png', undefined, function(texture){
		roomBack.img34 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -34,
			verticalDegree: topOffset + -22,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Network.png', undefined, function(texture){
		roomBack.img35 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -20,
			verticalDegree: topOffset + -28,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Innovation.png', undefined, function(texture){
		roomBack.img36 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -86,
			verticalDegree: topOffset + 20,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/International.png', undefined, function(texture){
		roomBack.img37 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -78,
			verticalDegree: topOffset + 26,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Collaboration.png', undefined, function(texture){
		roomBack.img38 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -96,
			verticalDegree: topOffset + 35,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Authentic.png', undefined, function(texture){
		roomBack.img39 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -96,
			verticalDegree: topOffset + 45,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Co-workers.png', undefined, function(texture){
		roomBack.img40 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -94,
			verticalDegree: topOffset + 10,
			radius: 8 * SCALE
		});
	});
	
	THREE.ImageUtils.loadTexture('images/cloud/Strategic.png', undefined, function(texture){
		roomBack.img41 = new DetailImage(scene, texture, {
			scale: 10,
			degree: offset + -102,
			verticalDegree: topOffset + 2,
			radius: 8 * SCALE
		});
	});
		
	this.navigationArrowToWorkplaces = new NavigationArrow(scene, {
			degree: 135,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomBack.remove();
				// Start a new room
				new roomBack(scene);
				scene.rotation.y += 750;
			}
	});
	
	this.navigationArrowToRelax = new NavigationArrow(scene, {
			degree: 184,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomBack.remove();
				// Start a new room
				new RoomRelax(scene);
				scene.rotation.y += 750;
			}
	});
	
	this.navigationArrowToConferenceRoom = new NavigationArrow(scene, {
			degree: 218,
			verticalOffset: 0,
			onFocus: function(){
				// remove the room
				roomBack.remove();
				// Start a new room
                new RoomConference(scene);
                scene.rotation.y += 750;
				//new RoomRelax(scene);
				//scene.rotation.y += 750;
			}
	});
	
	// parts	
	if (!scene.hasPart(4)){
	
		THREE.ImageUtils.loadTexture('images/part4_.png', undefined, function(texture){
			roomBack.part4 = new DetailImage(scene, texture, {
				scale: 60,
				degree: 6,
				verticalDegree: -16,
				radius: 5 * SCALE,
				onFocus: function(){
					this.remove();	
					scene.addPart(4);
					scene.checkAllParts();
				}
			});
		});
	}	
	
	
	/*
	this.textLights = new TextLights(scene, {
		
	});
	
	var jsonLoader = new THREE.JSONLoader();
	jsonLoader.load( "js/models/android.js", function(geometry, materials){
		var material = new THREE.MeshFaceMaterial( materials );
		android = new THREE.Mesh( geometry, material );
		android.scale.set(0.1,0.1,0.1);
		android.position.x = 1
		scene.add( android );
	} );
	*/
	/*
	this.slideshow = new Slideshow(scene, {
		scale: 100,
		degree: 0,
		verticalDegree: 0,
		radius: (5 * SCALE)
	});
	*/
	this.remove = function(){
		this.photoSphere.remove();
		
		this.navigationArrowToWorkplaces.remove();
		this.navigationArrowToRelax.remove();
		this.navigationArrowToConferenceRoom.remove();
		this.textLights.remove();
		
		for (var i=1;i<42;i++) {
			if (roomBack["img"+i] != undefined) {
				roomBack["img"+i].remove();
			}
		}
		
		/*
		this.textLights.remove();
		*/
		// part
		if (this.part4 != undefined){
			this.part4.remove();
		}
		
		// remove self
		scene.removeRoom(this);
	}
	
}