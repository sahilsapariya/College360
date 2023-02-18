let panorama, viewer;
const imageContainer = document.querySelector(".image-container");

panorama = new PANOLENS.ImagePanorama('images/miami.jpeg')


viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.8,
});

viewer.add(panorama)
