let panorama, viewer;
const imageContainer = document.querySelector(".image-container");

panorama = new PANOLENS.ImagePanorama("static/images/miami.jpeg")
// panorama = new PANOLENS.ImagePanorama("{{ url_for('static', filename='images/miami.jpeg') }}")


viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.8,
});

viewer.add(panorama)
