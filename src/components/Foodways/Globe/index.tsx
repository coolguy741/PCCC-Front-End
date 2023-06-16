import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Vector3 } from "three";

interface GlobeProps {
  latitude?: number;
  longitude?: number;
}

export const Globe = ({ latitude, longitude }: GlobeProps) => {
  // TODO: Unknown Three.js Type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes, materials } = useGLTF("/models/earth.glb") as any;

  // Function to convert longitude and latitude to 3D coordinates
  const latLongToVector3 = (lat: number, long: number, radius: number) => {
    const phi = (lat * Math.PI) / 180;
    const theta = ((long - 180) * Math.PI) / 180;

    const x = -(radius * Math.cos(phi) * Math.cos(theta));
    const y = radius * Math.sin(phi);
    const z = radius * Math.cos(phi) * Math.sin(theta);

    return new Vector3(x, y, z);
  };

  return (
    <Canvas style={{ height: "100%" }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <rectAreaLight position={[-3, 3, 3]} />
        <ambientLight intensity={0.3} />
        <group dispose={null} scale={[0.3, 0.3, 0.3]}>
          <group rotation={[-Math.PI / 2, 0, -Math.PI / 1.4]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.earth4_blinn1_0.geometry}
                material={materials.blinn1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.earth4_lambert1_0.geometry}
                material={materials.lambert1}
              />
            </group>
          </group>
        </group>
        {latitude && longitude && (
          <mesh position={latLongToVector3(latitude, longitude, 2.7)}>
            <sphereBufferGeometry args={[0.1, 32, 32]} />
            <meshBasicMaterial color="red" />
          </mesh>
        )}
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/earth.glb");
