import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    object_0_collider: THREE.SkinnedMesh;
    object_1_collider: THREE.SkinnedMesh;
    object_combined_SkinnedMesh_0: THREE.SkinnedMesh;
    root_bone: THREE.Bone;
  };
  materials: {
    object_combined_material: THREE.MeshStandardMaterial;
  };
};

const RigTest = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/game_assets/models/pccc_rig_test_noAnim_v3-transformed.glb",
  ) as GLTFResult;

  useFrame((state, delta) => {
    // nodes.object_0_bone.rotation.z += 1 * delta;
    // nodes.object_1_bone.rotation.z -= 1 * delta;
  });
  return (
    <group {...props} dispose={null}>
      <skinnedMesh
        name="object_0_collider"
        visible={false}
        onClick={(e) => console.log(e.eventObject.userData.name)}
        geometry={nodes.object_0_collider.geometry}
        material={nodes.object_0_collider.material}
        skeleton={nodes.object_0_collider.skeleton}
        userData={{ name: "object_0_collider" }}
      />
      <skinnedMesh
        name="object_1_collider"
        visible={false}
        onClick={(e) => console.log(e.eventObject.userData.name)}
        geometry={nodes.object_1_collider.geometry}
        material={nodes.object_1_collider.material}
        skeleton={nodes.object_1_collider.skeleton}
        userData={{ name: "object_1_collider" }}
      />
      <skinnedMesh
        name="object_combined_SkinnedMesh_0"
        geometry={nodes.object_combined_SkinnedMesh_0.geometry}
        material={materials.object_combined_material}
        skeleton={nodes.object_combined_SkinnedMesh_0.skeleton}
        userData={{ name: "object_combined_SkinnedMesh_0" }}
      />
      <primitive object={nodes.root_bone} />
    </group>
  );
};

useGLTF.preload("/game_assets/models/pccc_rig_test_noAnim_v3-transformed.glb");

export default memo(RigTest);
