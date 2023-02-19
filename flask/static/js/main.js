let panorama, panorama2, panorama3, viewer;
const imageContainer = document.querySelector(".image-container");

const path = "static/icons/arrow-upward";
const format = '.png'

panorama = new PANOLENS.CubePanorama( [
    path + format, path + format,
    path + format, path + format,
    path + format, path + format
  ] )

panorama2 = new PANOLENS.ImagePanorama("static/images/main_campus_entrance.jpg")

panorama3 = new PANOLENS.ImagePanorama("static/images/cf_outside.jpg")
panorama4 = new PANOLENS.ImagePanorama("static/images/cf_middle.jpg")
panorama5 = new PANOLENS.ImagePanorama("static/images/dental_campus_entrance.jpg")


panorama.link(panorama2, new THREE.Vector3( -1007.50, 404.88, -5000.00))
panorama2.link(panorama3, new THREE.Vector3( 50.50, -400.88, -5000.00))
panorama3.link(panorama4, new THREE.Vector3( 2000.50, -400.88, -5000.00))
panorama3.link(panorama5, new THREE.Vector3( 50.50, -400.88, -5000.00))
panorama4.link(panorama3, new THREE.Vector3( 50.50, -400.88, -5000.00))


viewer = new PANOLENS.Viewer({
  container: imageContainer,
  // autoRotate: true,
//   autoRotateSpeed: 0.8,
  // controlBar: false,
});

viewer.add(panorama, panorama2, panorama3, panorama4, panorama5)





