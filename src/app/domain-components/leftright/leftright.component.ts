import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-leftright',
  templateUrl: './leftright.component.html',
  styleUrls: ['./leftright.component.scss']
})
export class LeftrightComponent {

  @ViewChild('threeview')
  private threeView!: ElementRef;

  public rotationSpeedX: number = 0.002;
  public rotationSpeedY: number = 0.03;
  public size: number = 150;

  public cameraZ: number = 400;
  public fieldOfView: number = 1;
  public nearClippingPlane: number = 1;
  public farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.threeView.nativeElement;
  }

  private geometry = new THREE.BoxGeometry(2, 1, 2);
  private material = new THREE.MeshBasicMaterial({ color: 'lightblue' });

  private borders = new THREE.WireframeGeometry(this.geometry,);
  private lines = new THREE.LineSegments(this.borders);

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  //scene
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('lightsalmon');
    this.scene.add(this.cube);
    this.scene.add(this.lines);

    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      window.innerWidth / window.innerHeight,
      this.nearClippingPlane,
      this.farClippingPlane
    )

    this.camera.position.z = this.cameraZ;

    //y no tho?
    //this.scene.add(this.camera);
  }

  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
    this.lines.rotation.x += this.rotationSpeedX;
    this.lines.rotation.y += this.rotationSpeedY;
  }

  private renderingLoop() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    });

    this.renderer.setPixelRatio(devicePixelRatio);
    //buggy in angular?
    //this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    let component: LeftrightComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  ngAfterViewInit() {
    this.createScene();
    this.renderingLoop();
  }

}
