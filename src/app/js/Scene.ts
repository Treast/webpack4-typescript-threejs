import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Scene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private torusMesh: THREE.Mesh;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.bind();
  }

  bind() {
    window.addEventListener('resize', () => this.onResize);
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  init() {
    this.camera.position.set(2, 2, 2);
    this.camera.lookAt(0, 0, 0);
    const torusGeometry = new THREE.TorusKnotGeometry(0.8, 0.2, 200, 32);
    const torusMateriel = new THREE.MeshNormalMaterial();
    this.torusMesh = new THREE.Mesh(torusGeometry, torusMateriel);
    this.scene.add(this.torusMesh);
  }

  render() {
    requestAnimationFrame(() => this.render());
    this.renderer.render(this.scene, this.camera);

    this.torusMesh.rotation.x += 0.01;
    this.torusMesh.rotation.y += 0.01;
  }
}

export default new Scene();
