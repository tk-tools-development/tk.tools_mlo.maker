import React, { useEffect, useRef } from 'react';
import * as BABYLON from 'babylonjs';
import '@/styles/globals.css';

interface ViewportProps {
  onSceneReady?: (scene: BABYLON.Scene) => void;
}

export const Viewport: React.FC<ViewportProps> = ({ onSceneReady }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<BABYLON.Engine | null>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Babylon.js
    const engine = new BABYLON.Engine(canvasRef.current, true);
    engineRef.current = engine;

    // Create scene
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.2, 0.2, 0.2, 1);
    sceneRef.current = scene;

    // Create camera - free camera for CodeWalker-like navigation
    const camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 50, 100));
    camera.attachControl(canvasRef.current, true);
    camera.inertia = 0.7;
    camera.angularSensibility = 1000;
    camera.speed = 0.5;

    // Add lights
    const light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    light1.intensity = 0.7;

    const light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(100, 100, 100), scene);
    light2.intensity = 0.5;

    // Create ground plane
    const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 500, height: 500 }, scene);
    const groundMaterial = new BABYLON.StandardMaterial('groundMat', scene);
    groundMaterial.diffuse = new BABYLON.Color3(0.4, 0.4, 0.4);
    ground.material = groundMaterial;

    // Create a debug sphere to show origin
    const origin = BABYLON.MeshBuilder.CreateSphere('origin', { diameter: 2 }, scene);
    origin.position.y = 1;
    const originMaterial = new BABYLON.StandardMaterial('originMat', scene);
    originMaterial.diffuse = new BABYLON.Color3(1, 0, 0);
    origin.material = originMaterial;

    // Create grid
    createGrid(scene);

    // Render loop
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      engine.resize();
    });

    // Callback
    if (onSceneReady) {
      onSceneReady(scene);
    }

    // Cleanup
    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, [onSceneReady]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
};

/**
 * Create a visual grid for reference
 */
function createGrid(scene: BABYLON.Scene): void {
  const gridSize = 500;
  const gridStep = 10;
  const gridMaterial = new BABYLON.StandardMaterial('gridMat', scene);
  gridMaterial.diffuse = new BABYLON.Color3(0.8, 0.8, 0.8);
  gridMaterial.wireframe = true;

  const grid = BABYLON.MeshBuilder.CreateGround(
    'grid',
    { width: gridSize, height: gridSize, subdivisions: gridSize / gridStep },
    scene
  );
  grid.material = gridMaterial;
  grid.position.y = 0.01; // Slightly above ground
}
