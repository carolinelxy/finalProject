var camera, scene, renderer, controls;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  var light = new THREE.DirectionalLight(0xffffff, 1); // color, intensity
  light.position.set(1, 1, 1); // location x, y, z
  scene.add(light);

  // skybox files
  var path = 'images/city/';
  var format = '.jpg';
  var urls = [
    path + 'met_ft' + format, path + 'met_bk' + format,
    path + 'met_up' + format, path + 'met_dn' + format,
    path + 'met_rt' + format, path + 'met_lf' + format
  ];

  var cubeTexture = new THREE.CubeTextureLoader().load(urls);
  cubeTexture.format = THREE.RGBFormat;

  // skybox rendering
  var shader = THREE.ShaderLib['cube'];
  shader.uniforms['tCube'].value = cubeTexture;

  var cubeMaterial = new THREE.ShaderMaterial({
    fragmentShader: shader.fragmentShader,
    vertexShader: shader.vertexShader,
    uniforms: shader.uniforms,
    depthWrite: false,
    side: THREE.BackSide
  });


  var cubeGeometry = new THREE.BoxGeometry(4000, 4000, 4000);
  var cubemap = new THREE.Mesh(cubeGeometry, cubeMaterial);
  scene.add(cubemap);

  var textureLoader = new THREE.TextureLoader();

  textureLoader.load('images/texture.jpg', function(texture) {
    var material = new THREE.MeshLambertMaterial({
      map: texture,
      vertexColors: THREE.VertexColors
    });

    var octahedronGeometry = new THREE.CubeGeometry(100, 600, 100); 
      
    var octahedron = new THREE.Mesh(octahedronGeometry, material);
    octahedron.position.y = 0;
    scene.add(octahedron);
  });


  renderer = new THREE.WebGLRenderer({
    alpha: 1,
    antialias: true
  });
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  var date = new Date(); // get date string
  var timer = date.getTime() * 0.0002;
  camera.position.x = 800 * Math.cos(timer);
  camera.position.z = 800 * Math.sin(timer);

  renderer.render(scene, camera);
  controls.update();
}

init();
animate();