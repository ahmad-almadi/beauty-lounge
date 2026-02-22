"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ═══════════ 1. Lipstick ═══════════ */
function Lipstick({ position, speed = 1, scale = 1 }: { position: [number, number, number]; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.z = Math.sin(Date.now() * 0.001 * speed * 0.4) * 0.25 + 0.15; ref.current.rotation.y += delta * speed * 0.6; } });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={ref} position={position} scale={scale}>
        <mesh position={[0, -0.3, 0]}><cylinderGeometry args={[0.18, 0.2, 0.7, 16]} /><meshStandardMaterial color="#1a1a1a" transparent opacity={0.55} metalness={0.9} roughness={0.05} /></mesh>
        <mesh position={[0, 0.08, 0]}><cylinderGeometry args={[0.19, 0.19, 0.06, 16]} /><meshStandardMaterial color="#d4a574" transparent opacity={0.6} metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, 0.35, 0]}><cylinderGeometry args={[0.02, 0.17, 0.45, 16]} /><meshStandardMaterial color="#e8365d" transparent opacity={0.6} metalness={0.2} roughness={0.3} /></mesh>
      </group>
    </Float>
  );
}

/* ═══════════ 2. Perfume Bottle ═══════════ */
function PerfumeBottle({ position, speed = 1, scale = 1 }: { position: [number, number, number]; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.y += delta * speed * 0.5; ref.current.rotation.x = Math.sin(Date.now() * 0.001 * speed * 0.2) * 0.08; } });
  return (
    <Float speed={speed * 0.7} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={ref} position={position} scale={scale}>
        <mesh><boxGeometry args={[0.55, 0.8, 0.3]} /><meshStandardMaterial color="#f9a8d4" transparent opacity={0.4} metalness={0.3} roughness={0.05} /></mesh>
        <mesh position={[0, 0.55, 0]}><cylinderGeometry args={[0.06, 0.1, 0.3, 12]} /><meshStandardMaterial color="#f0c0d8" transparent opacity={0.5} metalness={0.5} roughness={0.1} /></mesh>
        <mesh position={[0, 0.8, 0]}><boxGeometry args={[0.18, 0.2, 0.18]} /><meshStandardMaterial color="#d4a574" transparent opacity={0.55} metalness={0.95} roughness={0.05} /></mesh>
      </group>
    </Float>
  );
}

/* ═══════════ 3. Nail Polish ═══════════ */
function NailPolish({ position, color = "#ec4899", speed = 1, scale = 1 }: { position: [number, number, number]; color?: string; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.z = Math.sin(Date.now() * 0.001 * speed * 0.35) * 0.2; ref.current.rotation.y += delta * speed * 0.7; } });
  return (
    <Float speed={speed * 0.8} rotationIntensity={0.5} floatIntensity={0.4}>
      <group ref={ref} position={position} scale={scale}>
        <mesh position={[0, -0.15, 0]}><sphereGeometry args={[0.28, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.7]} /><meshStandardMaterial color={color} transparent opacity={0.45} metalness={0.3} roughness={0.05} /></mesh>
        <mesh position={[0, 0.2, 0]}><cylinderGeometry args={[0.07, 0.1, 0.2, 10]} /><meshStandardMaterial color={color} transparent opacity={0.5} metalness={0.4} roughness={0.1} /></mesh>
        <mesh position={[0, 0.42, 0]}><cylinderGeometry args={[0.09, 0.09, 0.25, 10]} /><meshStandardMaterial color="#1a1a1a" transparent opacity={0.55} metalness={0.8} roughness={0.1} /></mesh>
      </group>
    </Float>
  );
}

/* ═══════════ 4. Makeup Mirror ═══════════ */
function MakeupMirror({ position, speed = 1, scale = 1 }: { position: [number, number, number]; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.y += delta * speed * 0.4; ref.current.rotation.z = Math.sin(Date.now() * 0.001 * speed * 0.25) * 0.15; } });
  return (
    <Float speed={speed * 0.6} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref} position={position} scale={scale}>
        <mesh><torusGeometry args={[0.35, 0.04, 10, 32]} /><meshStandardMaterial color="#d4a574" transparent opacity={0.55} metalness={0.95} roughness={0.05} /></mesh>
        <mesh><circleGeometry args={[0.33, 24]} /><meshStandardMaterial color="#e8e0f0" transparent opacity={0.4} metalness={0.95} roughness={0.0} side={THREE.DoubleSide} /></mesh>
        <mesh position={[0, -0.55, 0]}><cylinderGeometry args={[0.05, 0.04, 0.4, 8]} /><meshStandardMaterial color="#d4a574" transparent opacity={0.55} metalness={0.9} roughness={0.1} /></mesh>
      </group>
    </Float>
  );
}

/* ═══════════ 5. Makeup Brush ═══════════ */
function MakeupBrush({ position, speed = 1, scale = 1 }: { position: [number, number, number]; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.z = Math.sin(Date.now() * 0.001 * speed * 0.3) * 0.3 + 0.4; ref.current.rotation.y += delta * speed * 0.5; } });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={ref} position={position} scale={scale}>
        <mesh position={[0, -0.5, 0]}><cylinderGeometry args={[0.04, 0.05, 0.8, 8]} /><meshStandardMaterial color="#d4a574" transparent opacity={0.55} metalness={0.85} roughness={0.1} /></mesh>
        <mesh position={[0, -0.05, 0]}><cylinderGeometry args={[0.07, 0.05, 0.12, 8]} /><meshStandardMaterial color="#c0c0c0" transparent opacity={0.5} metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, 0.2, 0]}><coneGeometry args={[0.12, 0.4, 12]} /><meshStandardMaterial color="#f5e0d0" transparent opacity={0.45} roughness={0.8} /></mesh>
      </group>
    </Float>
  );
}

/* ═══════════ 6. Heart ═══════════ */
function HeartShape({ position, color = "#f472b6", speed = 1, scale = 1 }: { position: [number, number, number]; color?: string; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0.3); s.bezierCurveTo(0, 0.3, -0.05, 0.2, -0.25, 0.2); s.bezierCurveTo(-0.55, 0.2, -0.55, 0.5, -0.55, 0.5);
    s.bezierCurveTo(-0.55, 0.7, -0.35, 0.88, 0, 1.1); s.bezierCurveTo(0.35, 0.88, 0.55, 0.7, 0.55, 0.5);
    s.bezierCurveTo(0.55, 0.5, 0.55, 0.2, 0.25, 0.2); s.bezierCurveTo(0.05, 0.2, 0, 0.3, 0, 0.3);
    return s;
  }, []);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.y += delta * speed * 0.8; ref.current.rotation.z = Math.sin(Date.now() * 0.001 * speed * 0.5) * 0.15; } });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <extrudeGeometry args={[shape, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 4 }]} />
        <meshStandardMaterial color={color} transparent opacity={0.45} metalness={0.3} roughness={0.2} />
      </mesh>
    </Float>
  );
}

/* ═══════════ 7. Mascara ═══════════ */
function Mascara({ position, speed = 1, scale = 1 }: { position: [number, number, number]; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.z = Math.sin(Date.now() * 0.001 * speed * 0.3) * 0.3 + 0.3; ref.current.rotation.y += delta * speed * 0.5; } });
  return (
    <Float speed={speed * 0.9} rotationIntensity={0.4} floatIntensity={0.5}>
      <group ref={ref} position={position} scale={scale}>
        <mesh><cylinderGeometry args={[0.08, 0.08, 1.0, 10]} /><meshStandardMaterial color="#2d2d2d" transparent opacity={0.55} metalness={0.8} roughness={0.1} /></mesh>
        <mesh position={[0, 0.55, 0]}><cylinderGeometry args={[0.06, 0.08, 0.12, 10]} /><meshStandardMaterial color="#d4a574" transparent opacity={0.6} metalness={0.9} roughness={0.05} /></mesh>
      </group>
    </Float>
  );
}

/* ═══════════ 8. Compact Powder ═══════════ */
function CompactPowder({ position, speed = 1, scale = 1 }: { position: [number, number, number]; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.y += delta * speed * 0.4; ref.current.rotation.x = Math.sin(Date.now() * 0.001 * speed * 0.2) * 0.1; } });
  return (
    <Float speed={speed * 0.6} rotationIntensity={0.3} floatIntensity={0.7}>
      <group ref={ref} position={position} scale={scale}>
        <mesh><cylinderGeometry args={[0.4, 0.4, 0.12, 20]} /><meshStandardMaterial color="#f0c8d8" transparent opacity={0.45} metalness={0.5} roughness={0.1} /></mesh>
        <mesh position={[0, 0.08, 0]}><cylinderGeometry args={[0.38, 0.38, 0.04, 20]} /><meshStandardMaterial color="#d4a574" transparent opacity={0.5} metalness={0.9} roughness={0.05} /></mesh>
      </group>
    </Float>
  );
}

/* ═══════════ 9. Hair Comb ═══════════ */
function HairComb({ position, speed = 1, scale = 1 }: { position: [number, number, number]; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.z = Math.sin(Date.now() * 0.001 * speed * 0.25) * 0.2 + 0.1; ref.current.rotation.y += delta * speed * 0.4; } });
  return (
    <Float speed={speed * 0.7} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={ref} position={position} scale={scale}>
        <mesh position={[0, 0.15, 0]}><boxGeometry args={[0.5, 0.2, 0.05]} /><meshStandardMaterial color="#f0c0d8" transparent opacity={0.5} metalness={0.4} roughness={0.2} /></mesh>
        {[-0.18, -0.06, 0.06, 0.18].map((x, i) => (
          <mesh key={i} position={[x, -0.1, 0]}><boxGeometry args={[0.04, 0.3, 0.03]} /><meshStandardMaterial color="#f0c0d8" transparent opacity={0.45} metalness={0.3} roughness={0.2} /></mesh>
        ))}
      </group>
    </Float>
  );
}

/* ═══════════ 10. Eye Shadow Palette ═══════════ */
function EyeShadow({ position, speed = 1, scale = 1 }: { position: [number, number, number]; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.y += delta * speed * 0.5; ref.current.rotation.x = Math.sin(Date.now() * 0.001 * speed * 0.2) * 0.08; } });
  const colors = ["#f9a8d4", "#ec4899", "#f472b6", "#fce7f3"];
  return (
    <Float speed={speed * 0.6} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={ref} position={position} scale={scale}>
        <mesh><boxGeometry args={[0.7, 0.5, 0.08]} /><meshStandardMaterial color="#2d2d2d" transparent opacity={0.5} metalness={0.7} roughness={0.1} /></mesh>
        {colors.map((c, i) => (
          <mesh key={i} position={[-0.17 + i * 0.12, 0, 0.05]}><circleGeometry args={[0.08, 12]} /><meshStandardMaterial color={c} transparent opacity={0.6} metalness={0.2} roughness={0.3} /></mesh>
        ))}
      </group>
    </Float>
  );
}

/* ═══════════ 11. Hair Dryer ═══════════ */
function HairDryer({ position, speed = 1, scale = 1 }: { position: [number, number, number]; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.z = Math.sin(Date.now() * 0.001 * speed * 0.3) * 0.15 - 0.3; ref.current.rotation.y += delta * speed * 0.4; } });
  return (
    <Float speed={speed * 0.7} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={ref} position={position} scale={scale}>
        <mesh><cylinderGeometry args={[0.2, 0.25, 0.6, 12]} /><meshStandardMaterial color="#f0c0d8" transparent opacity={0.45} metalness={0.4} roughness={0.15} /></mesh>
        <mesh position={[0, -0.55, 0]}><cylinderGeometry args={[0.1, 0.1, 0.5, 10]} /><meshStandardMaterial color="#f0c0d8" transparent opacity={0.45} metalness={0.4} roughness={0.15} /></mesh>
        <mesh position={[0, 0.35, 0]}><cylinderGeometry args={[0.22, 0.2, 0.1, 12]} /><meshStandardMaterial color="#2d2d2d" transparent opacity={0.5} metalness={0.6} roughness={0.1} /></mesh>
      </group>
    </Float>
  );
}

/* ═══════════ 12. Gem / Diamond ═══════════ */
function Gem({ position, color = "#f9a8d4", speed = 1, scale = 1 }: { position: [number, number, number]; color?: string; speed?: number; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.y += delta * speed * 1.2; ref.current.rotation.x = Math.sin(Date.now() * 0.001 * speed * 0.3) * 0.4; } });
  return (
    <Float speed={speed * 1.2} rotationIntensity={0.6} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[0.3]} />
        <meshStandardMaterial color={color} transparent opacity={0.4} metalness={0.8} roughness={0.02} />
      </mesh>
    </Float>
  );
}

/* ═══════════ Heart curve helper ═══════════ */
function heartPos(t: number, sc = 0.6, oy = 1.5): [number, number, number] {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return [x * sc, y * sc + oy, -1.5];
}

/* ═══════════════════ MAIN ═══════════════════ */
export default function ThreeBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => { 
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  if (!mounted) return null;

  const p = (i: number) => (2 * Math.PI * i) / 30;

  // Mobile: small elements on left and right sides
  const mobileScale = 0.35;
  const mobileCameraZ = 20;

  // Desktop: full heart pattern
  const desktopScale = 0.5;
  const desktopCameraZ = 18;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" style={{ background: "transparent" }}>
      <Canvas camera={{ position: [0, 0, isMobile ? mobileCameraZ : desktopCameraZ], fov: 60 }}>
        <ambientLight intensity={2.5} color="#ffe4e9" />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffc0cb" />
        <directionalLight position={[-5, -3, 3]} intensity={1} color="#e8b4f8" />
        <pointLight position={[0, 3, 8]} intensity={1.5} color="#ffb6c1" />

        {isMobile ? (
          // Mobile: Elements distributed on left and right sides, symmetrically positioned
          <>
            {/* Left side - top to bottom, all at same x position */}
            <Lipstick position={[-3.5, 5, -1]} speed={0.5} scale={mobileScale} />
            <PerfumeBottle position={[-3.5, 2, -1]} speed={0.6} scale={mobileScale} />
            <NailPolish position={[-3.5, -1, -1]} color="#ec4899" speed={0.7} scale={mobileScale} />
            <MakeupBrush position={[-3.5, -4, -1]} speed={0.5} scale={mobileScale} />
            <CompactPowder position={[-3.5, -7, -1]} speed={0.6} scale={mobileScale} />
            
            {/* Right side - top to bottom, all at same x position */}
            <Mascara position={[2.5, 5, -1]} speed={0.5} scale={mobileScale} />
            <MakeupMirror position={[2.5, 2, -1]} speed={0.4} scale={mobileScale} />
            <NailPolish position={[2.5, -1, -1]} color="#f472b6" speed={0.6} scale={mobileScale} />
            <EyeShadow position={[2.5, -4, -1]} speed={0.5} scale={mobileScale} />
            <Gem position={[2.5, -7, -1]} color="#f9a8d4" speed={0.5} scale={mobileScale} />
          </>
        ) : (
          // Desktop: Full heart pattern with 30 elements
          <>
            <Lipstick position={heartPos(p(0))} speed={0.5} scale={desktopScale} />
            <PerfumeBottle position={heartPos(p(1))} speed={0.6} scale={desktopScale} />
            <MakeupMirror position={heartPos(p(2))} speed={0.4} scale={desktopScale} />
            <NailPolish position={heartPos(p(3))} color="#ec4899" speed={0.7} scale={desktopScale} />
            <Mascara position={heartPos(p(4))} speed={0.5} scale={desktopScale} />
            <CompactPowder position={heartPos(p(5))} speed={0.6} scale={desktopScale} />
            <HairComb position={heartPos(p(6))} speed={0.4} scale={desktopScale} />
            <EyeShadow position={heartPos(p(7))} speed={0.5} scale={desktopScale} />
            <HairDryer position={heartPos(p(8))} speed={0.6} scale={desktopScale * 0.9} />
            <Gem position={heartPos(p(9))} color="#f472b6" speed={0.5} scale={desktopScale} />
            <HeartShape position={heartPos(p(10))} color="#f472b6" speed={0.4} scale={desktopScale * 0.8} />
            <MakeupBrush position={heartPos(p(11))} speed={0.6} scale={desktopScale} />
            <Lipstick position={heartPos(p(12))} speed={0.5} scale={desktopScale} />
            <PerfumeBottle position={heartPos(p(13))} speed={0.4} scale={desktopScale} />
            <NailPolish position={heartPos(p(14))} color="#f9a8d4" speed={0.6} scale={desktopScale} />
            <Mascara position={heartPos(p(15))} speed={0.5} scale={desktopScale} />
            <CompactPowder position={heartPos(p(16))} speed={0.4} scale={desktopScale} />
            <EyeShadow position={heartPos(p(17))} speed={0.6} scale={desktopScale * 0.9} />
            <HairDryer position={heartPos(p(18))} speed={0.5} scale={desktopScale * 0.9} />
            <Gem position={heartPos(p(19))} color="#ec4899" speed={0.4} scale={desktopScale} />
            <HeartShape position={heartPos(p(20))} color="#f9a8d4" speed={0.6} scale={desktopScale * 0.7} />
            <MakeupBrush position={heartPos(p(21))} speed={0.5} scale={desktopScale} />
            <HairComb position={heartPos(p(22))} speed={0.4} scale={desktopScale} />
            <MakeupMirror position={heartPos(p(23))} speed={0.6} scale={desktopScale} />
            <Lipstick position={heartPos(p(24))} speed={0.5} scale={desktopScale} />
            <NailPolish position={heartPos(p(25))} color="#f472b6" speed={0.4} scale={desktopScale} />
            <Mascara position={heartPos(p(26))} speed={0.6} scale={desktopScale} />
            <CompactPowder position={heartPos(p(27))} speed={0.5} scale={desktopScale * 0.9} />
            <Gem position={heartPos(p(28))} color="#f9a8d4" speed={0.4} scale={desktopScale} />
            <MakeupBrush position={heartPos(p(29))} speed={0.5} scale={desktopScale} />
          </>
        )}
      </Canvas>
    </div>
  );
}
