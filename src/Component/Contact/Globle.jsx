import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef } from "react";




function Earth() {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, "/earth_atmos_2048.jpg");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002; // auto rotate speed
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <meshStandardMaterial
        map={texture}
        metalness={0.4}
        roughness={0.7}
      />
    </Sphere>
  );
} 

export default function Globe() {
  return (
    <div style={{ height: "700px", width: "700px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={5.6} />
        <directionalLight position={[5, 3, 5]} />
        <Earth />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}