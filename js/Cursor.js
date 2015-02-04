function Cursor() {
    var geometry = new THREE.RingGeometry(
    0.85 * Cursor.SIZE * SCALE, 1 * Cursor.SIZE * SCALE, 32
    );
    var material = new THREE.MeshBasicMaterial(
    {
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    }
    );
    THREE.Mesh.call(this, geometry, material);
  }

  Cursor.SIZE = 0.1 * SCALE;
  Cursor.prototype = Object.create(THREE.Mesh.prototype);
  Cursor.prototype.constructor = Cursor;