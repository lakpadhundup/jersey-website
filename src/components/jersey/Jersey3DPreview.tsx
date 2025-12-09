import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, MeshDistortMaterial, Float } from '@react-three/drei';
import { JerseyConfig } from '@/data/footballData';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

interface Jersey3DPreviewProps {
  config: JerseyConfig;
  playerName: string;
  playerNumber: string;
}

function JerseyMesh({ config, playerName, playerNumber }: Jersey3DPreviewProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle hover animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  // Create more realistic jersey shape
  const jerseyShape = useMemo(() => {
    const shape = new THREE.Shape();

    // More refined jersey silhouette
    shape.moveTo(0, 2.2); // Collar center
    shape.quadraticCurveTo(0.3, 2.1, 0.5, 2); // Collar right
    shape.lineTo(0.9, 1.9); // Right shoulder
    shape.quadraticCurveTo(1.3, 1.7, 1.4, 1.3); // Right sleeve outer
    shape.lineTo(1.3, 1.1); // Sleeve bottom
    shape.quadraticCurveTo(1.1, 1.05, 0.95, 1); // Under arm
    shape.lineTo(0.9, -1.4); // Right side
    shape.quadraticCurveTo(0.85, -1.5, 0.8, -1.55); // Bottom right curve
    shape.lineTo(-0.8, -1.55); // Bottom
    shape.quadraticCurveTo(-0.85, -1.5, -0.9, -1.4); // Bottom left curve
    shape.lineTo(-0.95, 1); // Left side
    shape.quadraticCurveTo(-1.1, 1.05, -1.3, 1.1); // Under arm
    shape.lineTo(-1.4, 1.3); // Left sleeve
    shape.quadraticCurveTo(-1.3, 1.7, -0.9, 1.9); // Left sleeve outer
    shape.lineTo(-0.5, 2); // Left shoulder
    shape.quadraticCurveTo(-0.3, 2.1, 0, 2.2); // Back to collar

    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    steps: 2,
    depth: 0.15,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelSegments: 5,
  }), []);

  // Create fabric texture
  const fabricTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = config.primaryColor;
      ctx.fillRect(0, 0, 128, 128);
      // Add subtle fabric pattern
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      for (let i = 0; i < 128; i += 2) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 128);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(128, i);
        ctx.stroke();
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  }, [config.primaryColor]);

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Main jersey body with fabric-like material */}
        <mesh position={[0, 0, -0.07]}>
          <extrudeGeometry args={[jerseyShape, extrudeSettings]} />
          <meshPhysicalMaterial
            color={config.primaryColor}
            roughness={0.8}
            metalness={0}
            clearcoat={0.1}
            clearcoatRoughness={0.8}
            map={fabricTexture}
          />
        </mesh>

        {/* Collar */}
        <mesh position={[0, 2.1, 0.12]}>
          <boxGeometry args={[0.6, 0.12, 0.08]} />
          <meshPhysicalMaterial
            color={config.secondaryColor}
            roughness={0.7}
          />
        </mesh>

        {/* Shoulder stripes */}
        <mesh position={[0.7, 1.85, 0.1]}>
          <boxGeometry args={[0.5, 0.06, 0.02]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>
        <mesh position={[-0.7, 1.85, 0.1]}>
          <boxGeometry args={[0.5, 0.06, 0.02]} />
          <meshStandardMaterial color={config.accentColor} />
        </mesh>

        {/* Sleeve cuffs */}
        <mesh position={[1.25, 1.2, 0.05]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.3, 0.08, 0.06]} />
          <meshPhysicalMaterial color={config.secondaryColor} roughness={0.7} />
        </mesh>
        <mesh position={[-1.25, 1.2, 0.05]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.3, 0.08, 0.06]} />
          <meshPhysicalMaterial color={config.secondaryColor} roughness={0.7} />
        </mesh>

        {/* Stripes pattern for striped jerseys */}
        {config.pattern === 'stripes' && (
          <>
            <mesh position={[-0.35, 0.2, 0.1]}>
              <boxGeometry args={[0.18, 3, 0.01]} />
              <meshStandardMaterial color={config.secondaryColor} />
            </mesh>
            <mesh position={[0, 0.2, 0.1]}>
              <boxGeometry args={[0.18, 3, 0.01]} />
              <meshStandardMaterial color={config.secondaryColor} />
            </mesh>
            <mesh position={[0.35, 0.2, 0.1]}>
              <boxGeometry args={[0.18, 3, 0.01]} />
              <meshStandardMaterial color={config.secondaryColor} />
            </mesh>
          </>
        )}

        {/* Bottom hem */}
        <mesh position={[0, -1.5, 0.1]}>
          <boxGeometry args={[1.7, 0.08, 0.04]} />
          <meshPhysicalMaterial color={config.secondaryColor} roughness={0.7} />
        </mesh>

        {/* Player name */}
        {playerName && (
          <Text
            position={[0, 0.9, 0.18]}
            fontSize={0.22}
            color={config.secondaryColor}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.06}
            outlineWidth={0.01}
            outlineColor="#000000"
            fontWeight="bold"
          >
            {playerName}
          </Text>
        )}

        {/* Player number */}
        {playerNumber && (
          <Text
            position={[0, -0.15, 0.18]}
            fontSize={0.85}
            color={config.secondaryColor}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.02}
            outlineWidth={0.02}
            outlineColor="#000000"
            fontWeight="bold"
          >
            {playerNumber}
          </Text>
        )}
      </group>
    </Float>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1.5, 2.5, 0.1]} />
      <meshStandardMaterial color="#1a2744" wireframe />
    </mesh>
  );
}

export function Jersey3DPreview({ config, playerName, playerNumber }: Jersey3DPreviewProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.0], fov: 40 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={['#0d1a2d']} />

      {/* Lighting setup for realistic fabric look */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 5, 5]} intensity={0.8} />
      <pointLight position={[0, 3, 4]} intensity={0.6} color="#ffffff" />
      <pointLight position={[0, -2, 3]} intensity={0.3} color="#6CABDD" />

      {/* Rim light for depth */}
      <spotLight
        position={[0, 0, -3]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
        color="#FFD700"
      />

      <Suspense fallback={<LoadingFallback />}>
        <JerseyMesh
          config={config}
          playerName={playerName}
          playerNumber={playerNumber}
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.7}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
      />
    </Canvas>
  );
}