import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroSolarCanvas() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 5.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Procedural Solar Cell Canvas Texture
    const createSolarCellTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');

      // Base silicon color
      ctx.fillStyle = '#061329';
      ctx.fillRect(0, 0, 1024, 1024);

      // Grid of 6 x 10 cells
      const cols = 6;
      const rows = 10;
      const cellW = 1024 / cols;
      const cellH = 1024 / rows;
      const pad = 4;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellW + pad;
          const y = j * cellH + pad;
          const w = cellW - pad * 2;
          const h = cellH - pad * 2;

          // Cell base gradient
          const cellGrad = ctx.createLinearGradient(x, y, x + w, y + h);
          cellGrad.addColorStop(0, '#0a2552');
          cellGrad.addColorStop(0.5, '#061a3b');
          cellGrad.addColorStop(1, '#031024');
          ctx.fillStyle = cellGrad;
          ctx.fillRect(x, y, w, h);

          // Thin busbars (9BB technology)
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
          ctx.lineWidth = 1;
          for (let b = 1; b <= 7; b++) {
            const bx = x + (w / 8) * b;
            ctx.beginPath();
            ctx.moveTo(bx, y);
            ctx.lineTo(bx, y + h);
            ctx.stroke();
          }

          // Micro fingers
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 0.5;
          for (let f = 1; f < h; f += 8) {
            ctx.beginPath();
            ctx.moveTo(x, y + f);
            ctx.lineTo(x + w, y + f);
            ctx.stroke();
          }
        }
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    const solarTexture = createSolarCellTexture();

    // Group for solar panel assembly
    const panelGroup = new THREE.Group();
    panelGroup.position.set(1.4, 0.1, 0.2);
    panelGroup.rotation.set(-0.35, -0.65, 0.15);
    scene.add(panelGroup);

    // 1. Solar Module Core
    const panelGeo = new THREE.BoxGeometry(2.2, 3.6, 0.04);
    const panelMat = new THREE.MeshStandardMaterial({
      map: solarTexture,
      roughness: 0.15,
      metalness: 0.85,
      color: 0x00d2ff,
      emissive: 0x002244,
      emissiveIntensity: 0.35
    });
    const panelMesh = new THREE.Mesh(panelGeo, panelMat);
    panelGroup.add(panelMesh);

    // 2. Aluminum Frame
    const frameGeo = new THREE.BoxGeometry(2.26, 3.66, 0.08);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.95,
      roughness: 0.25
    });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    frameMesh.position.z = -0.02;
    panelGroup.add(frameMesh);

    // 3. Glowing Glass Surface Sheen
    const glassGeo = new THREE.PlaneGeometry(2.2, 3.6);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.22,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.8,
      ior: 1.5,
      reflectivity: 0.9
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.z = 0.025;
    panelGroup.add(glassMesh);

    // 4. Stand & Mounting Structure
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 16);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9, roughness: 0.3 });
    const leg1 = new THREE.Mesh(legGeo, legMat);
    leg1.position.set(0.8, -1.2, -0.6);
    leg1.rotation.x = 0.4;
    panelGroup.add(leg1);

    const leg2 = leg1.clone();
    leg2.position.set(-0.8, -1.2, -0.6);
    panelGroup.add(leg2);

    // Glowing Sun Sphere in Background
    const sunGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xffb703,
      wireframe: false
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.position.set(-3.2, 3.2, -4.5);
    scene.add(sunMesh);

    // Sun Glow Halo
    const haloGeo = new THREE.RingGeometry(1.2, 3.5, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.copy(sunMesh.position);
    haloMesh.lookAt(camera.position);
    scene.add(haloMesh);

    // Floating Photon Energy Particles
    const particleCount = 650;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorGold = new THREE.Color(0xf59e0b);
    const colorCyan = new THREE.Color(0x00f0ff);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      // Scatter in a cone from sun to panel
      const progress = Math.random();
      positions[i * 3] = THREE.MathUtils.lerp(sunMesh.position.x, panelGroup.position.x + (Math.random() - 0.5) * 3, progress);
      positions[i * 3 + 1] = THREE.MathUtils.lerp(sunMesh.position.y, panelGroup.position.y + (Math.random() - 0.5) * 3, progress);
      positions[i * 3 + 2] = THREE.MathUtils.lerp(sunMesh.position.z, panelGroup.position.z + (Math.random() - 0.5) * 2, progress);

      // Random particle colors
      const randColor = Math.random();
      const c = randColor > 0.6 ? colorGold : randColor > 0.3 ? colorCyan : colorWhite;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      scales[i] = Math.random() * 0.04 + 0.015;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.0);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffedd5, 3.5);
    sunLight.position.copy(sunMesh.position);
    scene.add(sunLight);

    const cyanPointLight = new THREE.PointLight(0x00f0ff, 2.5, 10);
    cyanPointLight.position.set(2, 0, 2);
    scene.add(cyanPointLight);

    const goldPointLight = new THREE.PointLight(0xf59e0b, 3, 12);
    goldPointLight.position.set(-2, 2, 0);
    scene.add(goldPointLight);

    // Interactive Mouse Coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.25;
      targetY = y * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle responsive resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      // Adjust panel position on smaller screens
      if (width < 768) {
        panelGroup.position.set(0, -0.6, 0.5);
        panelGroup.scale.set(0.65, 0.65, 0.65);
        camera.position.set(0, 0, 5.8);
      } else if (width < 1024) {
        panelGroup.position.set(0.8, 0, 0.2);
        panelGroup.scale.set(0.85, 0.85, 0.85);
        camera.position.set(0, 0.8, 5.5);
      } else {
        panelGroup.position.set(1.4, 0.1, 0.2);
        panelGroup.scale.set(1, 1, 1);
        camera.position.set(0, 1.2, 5.5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    setIsLoaded(true);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Solar Panel Idle Levitation & Sun Tracking Tilt
      panelGroup.position.y += Math.sin(elapsedTime * 1.5) * 0.0015;
      panelGroup.rotation.y = -0.65 + mouseX + Math.sin(elapsedTime * 0.5) * 0.05;
      panelGroup.rotation.x = -0.35 + mouseY * 0.8 + Math.cos(elapsedTime * 0.5) * 0.03;

      // Halo pulse
      haloMesh.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.06);

      // Animate Photon Particles
      const pos = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Move towards panel
        pos[i3] += (panelGroup.position.x - pos[i3]) * 0.008;
        pos[i3 + 1] += (panelGroup.position.y - pos[i3 + 1]) * 0.008;
        pos[i3 + 2] += (panelGroup.position.z - pos[i3 + 2]) * 0.008;

        // Reset if reached near panel
        const dist = Math.hypot(
          pos[i3] - panelGroup.position.x,
          pos[i3 + 1] - panelGroup.position.y,
          pos[i3 + 2] - panelGroup.position.z
        );

        if (dist < 0.6 || Math.random() < 0.002) {
          pos[i3] = sunMesh.position.x + (Math.random() - 0.5) * 1.2;
          pos[i3 + 1] = sunMesh.position.y + (Math.random() - 0.5) * 1.2;
          pos[i3 + 2] = sunMesh.position.z + (Math.random() - 0.5) * 1.2;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      panelGeo.dispose();
      panelMat.dispose();
      frameGeo.dispose();
      frameMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div
        ref={containerRef}
        className="w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-950">
          <div className="w-12 h-12 border-2 border-solar-gold border-t-electric-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
