Slideshow.prototype = Object.create(THREE.Object3D.prototype);
Slideshow.prototype.constructor = Slideshow;

function Slideshow(rootThis, args) {

	var slideshow = this;
	
	this.slideshowImages = [];
	this.slideshowIndex = 0;
	this.slideshowUrls = ['images/screenshot.png','images/screenshot2.png']
	
	for (var i=0;i<this.slideshowUrls.length;i++) {
	
		THREE.ImageUtils.loadTexture(slideshow.slideshowUrls[i], undefined, function(texture){

			slideshow.slideshowImages.push(new DetailImage(rootThis, texture, {
				scale: 100,
				degree: 100,
				verticalDegree: 0,
				radius: (5 * SCALE) + (SCALE * 0.5 * i),
				onFocus: function(){
					slideshow.action();
					//this.remove();	
					//scene.addPart(2);
					//scene.checkAllParts();
				}
			}));
			
		});
	}
	
	this.action = function(){
		this.slideshowIndex = (this.slideshowIndex + 1) % this.slideshowUrls.length;
		
		for (var i=0;i<this.slideshowUrls.length;i++) {
			var index = (i + this.slideshowIndex) % this.slideshowUrls.length;
			var scale = 1+(0.15*index);
			
			this.slideshowImages[i].mesh.scale.set(scale,scale,1);
			this.slideshowImages[i].args.radius = (5 * SCALE) + (SCALE * 0.5 * index);
			this.slideshowImages[i].updatePosition();
		}
	}
	
	this.remove = function() {
		for (var i=0;i<this.slideshowImages.length;i++) {
			this.slideshowImages[i].remove();
		}
		// Remove from scene
		rootThis.remove(this);
	}
	
}


