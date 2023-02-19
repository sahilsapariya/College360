let panorama_arrow, panorama_canal_gate, panorama_cf_middle, panorama_cf_outside, panorama_main_gate, viewer;
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
panorama_front_canteen = new PANOLENS.ImagePanorama("static/images/Front_Canteen.jpg")
panorama_front_library = new PANOLENS.ImagePanorama("static/images/Front_Library.jpg")
panorama_front_narayan_bhavan = new PANOLENS.ImagePanorama("static/images/Front_Narayan_Bhavan.jpg")
panorama_girls_hostel = new PANOLENS.ImagePanorama("static/images/Girls_Hostel.jpg")
panorama_ce_dept_from_library = new PANOLENS.ImagePanorama("static/images/Library.jpg")
panorama_CF_back_side = new PANOLENS.ImagePanorama("static/images/CF_back_side.jpg")
panorama_CE_dept_steps = new PANOLENS.ImagePanorama("static/images/CE_dept_steps.jpg")
panorama_EC_dept_steps = new PANOLENS.ImagePanorama("static/images/EC_dept_steps.jpg")
panorama_infront_seminar_hall = new PANOLENS.ImagePanorama("static/images/infront_seminar_hall.jpg")
panorama_CH_lab = new PANOLENS.ImagePanorama("static/images/CH_lab.jpg")
panorama_EC_nvc_lab_first= new PANOLENS.ImagePanorama("static/images/EC_nvc_lab_first.jpg")


panorama_arrow.link(panorama_main_gate, new THREE.Vector3( -1007.50, 404.88, -5000.00))
panorama_main_gate.link(panorama_cf_outside, new THREE.Vector3( 10000.50, -1000, -500))
panorama_cf_outside.link(panorama_cf_middle, new THREE.Vector3( 6000.50, -1200, 1500))
panorama_cf_outside.link(panorama_canal_gate, new THREE.Vector3( 50.50, -400.88, -5000.00))
panorama_cf_outside.link(panorama_main_gate, new THREE.Vector3( -700.50, -700.88, 5000.00))
panorama_cf_middle.link(panorama_cf_outside, new THREE.Vector3( -9000.50, -1800.88, -3000.00))
panorama_canal_gate.link(panorama_cf_outside, new THREE.Vector3( 8800.50, -1450.88, 3000.00))
panorama_main_gate.link(panorama_front_canteen, new THREE.Vector3( -700, -600, 7000 ))
panorama_front_canteen.link(panorama_front_narayan_bhavan, new THREE.Vector3(-700, -600, 7000))
panorama_front_canteen.link(panorama_front_library, new THREE.Vector3(8500, -1500, 4000))
panorama_front_canteen.link(panorama_main_gate, new THREE.Vector3(9500, -1800, -5500))
panorama_front_narayan_bhavan.link(panorama_front_canteen, new THREE.Vector3(500, -1000, 7000))
panorama_front_narayan_bhavan.link(panorama_girls_hostel, new THREE.Vector3(-500, -500, -7000))
panorama_girls_hostel.link(panorama_front_narayan_bhavan, new THREE.Vector3(-2000, -500, -6000))
panorama_girls_hostel.link(panorama_canal_gate, new THREE.Vector3(9000, -2500, -1500))

panorama_front_library.link(panorama_ce_dept_from_library, new THREE.Vector3(0, -2000, 10000))
panorama_front_library.link(panorama_front_canteen, new THREE.Vector3(0, -2000, -10000))

panorama_ce_dept_from_library.link(panorama_front_library, new THREE.Vector3(-1500, -2500, 10000))
panorama_cf_middle.link(panorama_CE_dept_steps, new THREE.Vector3( 2000, -600, 7000 ))
panorama_cf_middle.link(panorama_EC_dept_steps, new THREE.Vector3( 6000, -400, -500 ))
panorama_cf_middle.link(panorama_CF_back_side, new THREE.Vector3( 5000, -2500, 3000 ))
panorama_CF_back_side.link(panorama_CE_dept_steps, new THREE.Vector3( 2000, -600, 7000 ))
panorama_CF_back_side.link(panorama_EC_dept_steps, new THREE.Vector3( 3000, 0, -6000 ))
panorama_EC_dept_steps.link(panorama_CF_back_side, new THREE.Vector3( 5000, -400, 3000 ))
panorama_EC_dept_steps.link(panorama_EC_nvc_lab_first, new THREE.Vector3( -1300, 100, 7000))
panorama_EC_dept_steps.link(panorama_CH_lab, new THREE.Vector3( 4000, 100, -9000))
panorama_EC_dept_steps.link(panorama_infront_seminar_hall, new THREE.Vector3( -3200, 100, 6000))

viewer = new PANOLENS.Viewer({
  container: imageContainer,
  // autoRotate: true,
//   autoRotateSpeed: 0.8,
  // controlBar: false,
});

viewer.add(panorama_arrow, panorama_canal_gate, panorama_cf_middle, panorama_cf_outside, panorama_main_gate, panorama_front_canteen, panorama_front_library, panorama_front_narayan_bhavan, panorama_girls_hostel, panorama_ce_dept_from_library, panorama_CF_back_side,panorama_CE_dept_steps,panorama_EC_dept_steps,panorama_infront_seminar_hall,panorama_CH_lab,panorama_EC_nvc_lab_first)






