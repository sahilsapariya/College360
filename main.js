let panorama;
const imageContainer = document.querySelector(".image-container");
const path = 'icons/arrow-upward';

const format = '.png'

panorama = new PANOLENS.CubePanorama( [
    path + format, path + format,
    path + format, path + format,
    path + format, path + format
  ] )

let panorama2 = new PANOLENS.ImagePanorama('images/cf_outside.jpg')

// panorama2 = new PANOLENS.CubePanorama( [
//   path + format, path + format,
//   path + format, path + format,
//   path + format, path + format
// ] )

let panorama3 = new PANOLENS.ImagePanorama('images/dental_campus_entrance.jpg')

// panorama3 = new PANOLENS.CubePanorama( [
//   path + format, path + format,
//   path + format, path + format,
//   path + format, path + format
// ] )

panorama.link(panorama2, new THREE.Vector3( -807.50, 604.88, -5000.00))
panorama2.link(panorama3, new THREE.Vector3( -807.50, 604.88, -5000.00))
panorama3.link(panorama, new THREE.Vector3( -807.50, 604.88, -5000.00))

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  // autoRotate: true,
//   autoRotateSpeed: 0.8,
  controlBar: false,
});

viewer.add(panorama, panorama2, panorama3)





