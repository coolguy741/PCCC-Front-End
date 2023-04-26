import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

export function Globe() {
  const { nodes, materials } = useGLTF("/models/earth.glb") as GLTFResult;

  console.log(nodes);

  return (
    <Canvas style={{ height: "100%" }}>
      <OrbitControls enableZoom={false} />
      <rectAreaLight position={[-3, 3, 3]} />
      <ambientLight intensity={0.3} />
      <group dispose={null} scale={[0.3, 0.3, 0.3]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
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
    </Canvas>
  );
}

useGLTF.preload("/earth.glb");
