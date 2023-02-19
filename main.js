const panoramaImage = new PANOLENS.ImagePanorama("images/cf_middle.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  // autoRotate: true,
//   autoRotateSpeed: 0.8,
  controlBar: false,
});

viewer.add(panoramaImage);

let panorama, panorama2, panorama3 ;

const path = 'images/arrow_up';
const format = '.jpg';
panorama = new PANOLENS.CubePanorama( [
    path + format, path  + format,
    path + format, path + format,
    path + format, path + format
] );
panorama2 = new PANOLENS.ImagePanorama('images/cf_outside.jpg');
panorama3 = new PANOLENS.ImagePanorama('images/Library.jpg');
panoramaImage.link(panorama2, new THREE.Vector3(500.50, 600.88, -5000.00 ));
panorama2.link(panorama3, new THREE.Vector3(-807.50, 604.88, -5000.00 ));
// panorama3.link(panorama, new THREE.Vector3(-807.50, 604.88, -5000.00 ));
// viewer = new PANOLENS.Viewer();
viewer.add(panorama, panorama2, panorama3);