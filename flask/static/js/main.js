let panorama, panorama2, panorama3, viewer, panorama4, panorama5, image;

const imageContainer = document.querySelector(".image-container");

const path = "static/icons/arrow-upward";
const format = '.png'

panorama_arrow = new PANOLENS.CubePanorama( [
    path + format, path + format,
    path + format, path + format,
    path + format, path + format
  ] )

panorama_main_gate = new PANOLENS.ImagePanorama("static/images/main_campus_entrance.jpg")

panorama_cf_outside = new PANOLENS.ImagePanorama("static/images/cf_outside.jpg")
panorama_cf_middle = new PANOLENS.ImagePanorama("static/images/cf_middle.jpg")
panorama_canal_gate = new PANOLENS.ImagePanorama("static/images/dental_campus_entrance.jpg")

// panorama.link(panorama2, new THREE.Vector3( -1007.50, 404.88, -5000.00))
panorama_arrow.link(panorama_main_gate, new THREE.Vector3( -1007.50, 404.88, -5000.00))
panorama_main_gate.link(panorama_cf_outside, new THREE.Vector3( 10000.50, -1000, -500))
panorama_cf_outside.link(panorama_cf_middle, new THREE.Vector3( 6000.50, -1200, 1500))
panorama_cf_outside.link(panorama_canal_gate, new THREE.Vector3( 50.50, -400.88, -5000.00))
panorama_cf_outside.link(panorama_main_gate, new THREE.Vector3( -700.50, -700.88, 5000.00))
panorama_cf_middle.link(panorama_cf_outside, new THREE.Vector3( -9000.50, -1800.88, -3000.00))
panorama_canal_gate.link(panorama_cf_outside, new THREE.Vector3( 8800.50, -1450.88, 3000.00))
panorama_main_gate.link(panorama_canal_gate, new THREE.Vector3( -700, -600, 7000 ))


viewer = new PANOLENS.Viewer({
  container: imageContainer,
  // autoRotate: true,
//   autoRotateSpeed: 0.8,
  // controlBar: false,
});

viewer.add(panorama_arrow, panorama_canal_gate, panorama_cf_middle, panorama_cf_outside, panorama_main_gate)





