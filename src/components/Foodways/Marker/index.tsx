import { useGLTF } from "@react-three/drei";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";
import { GLTF } from "three-stdlib";

interface Props {
  children?: ReactNode;
}

type GLTFResult = GLTF & {
  nodes: {
    Cone: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export const Marker = forwardRef<Group, Props>((props, ref) => {
  const { nodes, materials } = useGLTF("/models/marker.glb") as GLTFResult;

  return (
    <group dispose={null} scale={[0.15, 0.15, 0.15]} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={nodes.Cone.material}
      />
    </group>
  );
});

useGLTF.preload("/models/marker2.glb");
