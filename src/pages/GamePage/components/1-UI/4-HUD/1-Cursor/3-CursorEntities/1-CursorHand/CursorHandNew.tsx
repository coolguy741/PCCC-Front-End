import { useGLTF } from "@react-three/drei";
import { FC, memo } from "react";
import { Bone, MeshStandardMaterial, SkinnedMesh } from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    hand_1: SkinnedMesh;
    hand: Bone;
  };
  materials: {
    PlayerHand: MeshStandardMaterial;
  };
};

const CursorHandNew: FC = () => {
  const { nodes, materials } = useGLTF(
    "/game_assets/models/hand-transformed.glb",
  ) as GLTFResult;

  return (
    <group name="Scene" scale={4}>
      <group name="hand_rig" userData={{ name: "hand_rig" }}>
        <primitive object={nodes.hand} />
        <skinnedMesh
          name="hand_1"
          geometry={nodes.hand_1.geometry}
          material={materials.PlayerHand}
          skeleton={nodes.hand_1.skeleton}
          userData={{ name: "hand" }}
          frustumCulled={false}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/game_assets/models/hand-transformed.glb");

export default memo(CursorHandNew);
