const panoramaImage = new PANOLENS.ImagePanorama("images/cf_middle.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  // autoRotate: true,
//   autoRotateSpeed: 0.8,
  controlBar: false,
});

viewer.add(panoramaImage);