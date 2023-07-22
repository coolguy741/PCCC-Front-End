import { useGLTF } from "@react-three/drei";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";
import { GLTF } from "three-stdlib";

interface Props {
  children?: ReactNode;
}

type GLTFResult = GLTF & {
  nodes: {
    marker: THREE.Mesh;
  };
  materials: {
    foodways_mat: THREE.MeshStandardMaterial;
  };
};

export const Marker = forwardRef<Group, Props>((props, ref) => {
  const { nodes, materials } = useGLTF("/models/marker.glb") as GLTFResult;

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.marker.geometry}
        material={materials.foodways_mat}
        scale={100}
        rotation-x={-Math.PI / 2}
      />
    </group>
  );
});

useGLTF.preload("/models/marker.glb");
