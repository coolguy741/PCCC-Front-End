/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 bee.glb --transform --precision=10 --shadows --keepnames --meta --types
*/

import { useGLTF } from "@react-three/drei";
import { memo } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube017: THREE.SkinnedMesh;
    Cube017_1: THREE.SkinnedMesh;
    Cube017_2: THREE.SkinnedMesh;
    Cube017_3: THREE.SkinnedMesh;
    Cube017_4: THREE.SkinnedMesh;
    Cube017_5: THREE.SkinnedMesh;
    Cube017_6: THREE.SkinnedMesh;
    Cube017_7: THREE.SkinnedMesh;
    Cube017_8: THREE.SkinnedMesh;
    FurTest: THREE.SkinnedMesh;
    D_torso: THREE.Bone;
    D_head: THREE.Bone;
    D_antennaRoot_L: THREE.Bone;
    D_antennaMid_L: THREE.Bone;
    D_antennaTip_L: THREE.Bone;
    D_antennaRoot_R: THREE.Bone;
    D_antennaMid_R: THREE.Bone;
    D_antennaTip_R: THREE.Bone;
    D_eye_L: THREE.Bone;
    D_btmLid_L: THREE.Bone;
    D_topLid_L: THREE.Bone;
    D_eye_R: THREE.Bone;
    D_btmLid_R: THREE.Bone;
    D_topLid_R: THREE.Bone;
    D_mouthTop: THREE.Bone;
    D_mouthTop_L: THREE.Bone;
    D_mouthCornerTop_L: THREE.Bone;
    D_mouthCornerBtm_L: THREE.Bone;
    D_mouthBtm_L: THREE.Bone;
    D_mouthBtm: THREE.Bone;
    D_mouthTop_R: THREE.Bone;
    D_mouthCornerTop_R: THREE.Bone;
    D_mouthCornerBtm_R: THREE.Bone;
    D_mouthBtm_R: THREE.Bone;
    D_tongueRoot: THREE.Bone;
    D_tongueMid: THREE.Bone;
    D_tongueTip: THREE.Bone;
    D_arm_L: THREE.Bone;
    D_forearm_L: THREE.Bone;
    D_hand_L: THREE.Bone;
    D_foreleg_L: THREE.Bone;
    D_foreshin_L: THREE.Bone;
    D_foreFoot_L: THREE.Bone;
    D_hindleg_L: THREE.Bone;
    D_hindshin_L: THREE.Bone;
    D_hindFoot_L: THREE.Bone;
    D_arm_R: THREE.Bone;
    D_forearm_R: THREE.Bone;
    D_hand_R: THREE.Bone;
    D_foreleg_R: THREE.Bone;
    D_foreshin_R: THREE.Bone;
    D_foreFoot_R: THREE.Bone;
    D_hindleg_R: THREE.Bone;
    D_hindshin_R: THREE.Bone;
    D_hindFoot_R: THREE.Bone;
    D_wingRoot_L: THREE.Bone;
    D_wingTip_L: THREE.Bone;
    D_wingRoot_R: THREE.Bone;
    D_wingTip_R: THREE.Bone;
    D_abdomen: THREE.Bone;
    D_stinger: THREE.Bone;
    D_upperTeeth: THREE.Bone;
    D_lowerTeeth: THREE.Bone;
    D_wingTrailRoot_L: THREE.Bone;
    D_wingTrailRoot_R: THREE.Bone;
    neutral_bone: THREE.Bone;
  };
  materials: {
    body: THREE.MeshStandardMaterial;
    blackout: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    cornea: THREE.MeshPhysicalMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    eyes: THREE.MeshStandardMaterial;
    tongue: THREE.MeshStandardMaterial;
    wings: THREE.MeshPhysicalMaterial;
    wingsSpeedLines: THREE.MeshStandardMaterial;
    Fur: THREE.MeshStandardMaterial;
  };
};

const Bee = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "game_assets/models/bee-transformed.glb",
  ) as GLTFResult;
  return (
    <group {...props} dispose={null} position={[0, 0.25, 0.5]}>
      <group name="BeeArmature" userData={{ name: "BeeArmature" }}>
        <primitive object={nodes.D_torso} />
        <primitive object={nodes.D_head} />
        <primitive object={nodes.D_antennaRoot_L} />
        <primitive object={nodes.D_antennaMid_L} />
        <primitive object={nodes.D_antennaTip_L} />
        <primitive object={nodes.D_antennaRoot_R} />
        <primitive object={nodes.D_antennaMid_R} />
        <primitive object={nodes.D_antennaTip_R} />
        <primitive object={nodes.D_eye_L} />
        <primitive object={nodes.D_btmLid_L} />
        <primitive object={nodes.D_topLid_L} />
        <primitive object={nodes.D_eye_R} />
        <primitive object={nodes.D_btmLid_R} />
        <primitive object={nodes.D_topLid_R} />
        <primitive object={nodes.D_mouthTop} />
        <primitive object={nodes.D_mouthTop_L} />
        <primitive object={nodes.D_mouthCornerTop_L} />
        <primitive object={nodes.D_mouthCornerBtm_L} />
        <primitive object={nodes.D_mouthBtm_L} />
        <primitive object={nodes.D_mouthBtm} />
        <primitive object={nodes.D_mouthTop_R} />
        <primitive object={nodes.D_mouthCornerTop_R} />
        <primitive object={nodes.D_mouthCornerBtm_R} />
        <primitive object={nodes.D_mouthBtm_R} />
        <primitive object={nodes.D_tongueRoot} />
        <primitive object={nodes.D_tongueMid} />
        <primitive object={nodes.D_tongueTip} />
        <primitive object={nodes.D_arm_L} />
        <primitive object={nodes.D_forearm_L} />
        <primitive object={nodes.D_hand_L} />
        <primitive object={nodes.D_foreleg_L} />
        <primitive object={nodes.D_foreshin_L} />
        <primitive object={nodes.D_foreFoot_L} />
        <primitive object={nodes.D_hindleg_L} />
        <primitive object={nodes.D_hindshin_L} />
        <primitive object={nodes.D_hindFoot_L} />
        <primitive object={nodes.D_arm_R} />
        <primitive object={nodes.D_forearm_R} />
        <primitive object={nodes.D_hand_R} />
        <primitive object={nodes.D_foreleg_R} />
        <primitive object={nodes.D_foreshin_R} />
        <primitive object={nodes.D_foreFoot_R} />
        <primitive object={nodes.D_hindleg_R} />
        <primitive object={nodes.D_hindshin_R} />
        <primitive object={nodes.D_hindFoot_R} />
        <primitive object={nodes.D_wingRoot_L} />
        <primitive object={nodes.D_wingTip_L} />
        <primitive object={nodes.D_wingRoot_R} />
        <primitive object={nodes.D_wingTip_R} />
        <primitive object={nodes.D_abdomen} />
        <primitive object={nodes.D_stinger} />
        <primitive object={nodes.D_upperTeeth} />
        <primitive object={nodes.D_lowerTeeth} />
        <primitive object={nodes.D_wingTrailRoot_L} />
        <primitive object={nodes.D_wingTrailRoot_R} />
        <primitive object={nodes.neutral_bone} />
        <group name="body" userData={{ name: "body" }}>
          <skinnedMesh
            name="Cube017"
            geometry={nodes.Cube017.geometry}
            material={materials.body}
            skeleton={nodes.Cube017.skeleton}
          />
          <skinnedMesh
            name="Cube017_1"
            geometry={nodes.Cube017_1.geometry}
            material={materials.blackout}
            skeleton={nodes.Cube017_1.skeleton}
          />
          <skinnedMesh
            name="Cube017_2"
            geometry={nodes.Cube017_2.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Cube017_2.skeleton}
          />
          <skinnedMesh
            name="Cube017_3"
            geometry={nodes.Cube017_3.geometry}
            material={materials.cornea}
            skeleton={nodes.Cube017_3.skeleton}
          />
          <skinnedMesh
            name="Cube017_4"
            geometry={nodes.Cube017_4.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Cube017_4.skeleton}
          />
          <skinnedMesh
            name="Cube017_5"
            geometry={nodes.Cube017_5.geometry}
            material={materials.eyes}
            skeleton={nodes.Cube017_5.skeleton}
          />
          <skinnedMesh
            name="Cube017_6"
            geometry={nodes.Cube017_6.geometry}
            material={materials.tongue}
            skeleton={nodes.Cube017_6.skeleton}
          />
          <skinnedMesh
            name="Cube017_7"
            geometry={nodes.Cube017_7.geometry}
            material={materials.wings}
            skeleton={nodes.Cube017_7.skeleton}
          />
          <skinnedMesh
            name="Cube017_8"
            geometry={nodes.Cube017_8.geometry}
            material={materials.wingsSpeedLines}
            skeleton={nodes.Cube017_8.skeleton}
          />
        </group>
      </group>
      <skinnedMesh
        name="FurTest"
        geometry={nodes.FurTest.geometry}
        material={materials.Fur}
        skeleton={nodes.FurTest.skeleton}
        userData={{ name: "FurTest" }}
      />
    </group>
  );
};

useGLTF.preload("game_assets/models/bee-transformed.glb");

export default memo(Bee);
