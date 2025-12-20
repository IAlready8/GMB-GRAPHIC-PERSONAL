import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs-background',
  standalone: true,
  imports: [CommonModule],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [':host { display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; }']
})
export class ThreejsBackgroundComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private mouse = new THREE.Vector2(-100, -100);
  private animationFrameId: number | null = null;

  ngAfterViewInit(): void {
    this.initThree();
    this.animate();
    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initThree(): void {
    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 3;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.el.nativeElement.appendChild(this.renderer.domElement);

    // Particles
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 10;
        positions[i3 + 1] = (Math.random() - 0.5) * 10;
        positions[i3 + 2] = (Math.random() - 0.5) * 10;
        
        colors[i3] = 1.0;
        colors[i3 + 1] = 1.0;
        colors[i3 + 2] = 1.0;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.015,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);

    const elapsedTime = Date.now() * 0.0001;

    // Animate particles
    this.particles.rotation.y = elapsedTime * 0.2;
    this.particles.rotation.x = elapsedTime * 0.1;

    // Make particles react to mouse
    const positions = this.particles.geometry.attributes.position as THREE.BufferAttribute;
    const initialPositions = this.particles.geometry.attributes.position.array;

    for (let i = 0; i < positions.count; i++) {
        const i3 = i * 3;
        const x = initialPositions[i3];
        const y = initialPositions[i3 + 1];
        
        const dx = this.mouse.x * 5 - x;
        const dy = this.mouse.y * 5 - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const force = Math.max(0, 1 - dist * 0.5);
        
        positions.setZ(i, initialPositions[i3 + 2] + force * 0.5);
    }
    positions.needsUpdate = true;


    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize = (): void => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  
  private onMouseMove = (event: MouseEvent): void => {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
}