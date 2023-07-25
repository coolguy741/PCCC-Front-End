import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, memo, useEffect, useRef } from "react";
import { Bone, Group, Mesh, MeshStandardMaterial, SkinnedMesh } from "three";
import { GLTF } from "three-stdlib";
import { SunnyMaterial } from "./SunnyDefines";

type GLTFResult = GLTF & {
  nodes: {
    BeeBody: SkinnedMesh;
    boombox_merged: SkinnedMesh;
    butcher_knife: SkinnedMesh;
    chef_hat: SkinnedMesh;
    donut_crumb: SkinnedMesh;
    gardener_hat: SkinnedMesh;
    kitchen_knife_hero: SkinnedMesh;
    peony: SkinnedMesh;
    shower_brush: SkinnedMesh;
    weird_dish_pizza: Mesh;
    weird_dish_watermelon: Mesh;
    pot_wire_handle: SkinnedMesh;
    snorkel: SkinnedMesh;
    root: Bone;
    D_torso: Bone;
    D_head: Bone;
    D_gardenHatRoot: Bone;
    D_gardenHatTip: Bone;
    D_antennaRoot_L: Bone;
    D_antennaMid_L: Bone;
    D_antennaTip_L: Bone;
    D_antennaRoot_R: Bone;
    D_antennaMid_R: Bone;
    D_antennaTip_R: Bone;
    D_eye_L: Bone;
    D_btmLid_L: Bone;
    D_topLid_L: Bone;
    D_eye_R: Bone;
    D_btmLid_R: Bone;
    D_topLid_R: Bone;
    D_mouthTop: Bone;
    D_mouthTop_L: Bone;
    D_mouthCornerTop_L: Bone;
    D_mouthCornerBtm_L: Bone;
    D_mouthBtm_L: Bone;
    D_mouthBtm: Bone;
    D_mouthTop_R: Bone;
    D_mouthCornerTop_R: Bone;
    D_mouthCornerBtm_R: Bone;
    D_mouthBtm_R: Bone;
    D_tongueRoot: Bone;
    D_tongueMid: Bone;
    D_tongueTip: Bone;
    D_arm_L: Bone;
    D_forearm_L: Bone;
    D_hand_L: Bone;
    D_foreleg_L: Bone;
    D_foreshin_L: Bone;
    D_foreFoot_L: Bone;
    D_hindleg_L: Bone;
    D_hindshin_L: Bone;
    D_hindFoot_L: Bone;
    D_arm_R: Bone;
    D_forearm_R: Bone;
    D_hand_R: Bone;
    D_foreleg_R: Bone;
    D_foreshin_R: Bone;
    D_foreFoot_R: Bone;
    D_hindleg_R: Bone;
    D_hindshin_R: Bone;
    D_hindFoot_R: Bone;
    D_wingRoot_L: Bone;
    D_wingTip_L: Bone;
    D_wingTip_L001: Bone;
    D_wingRoot_R: Bone;
    D_wingTip_R: Bone;
    D_wingTip_R001: Bone;
    D_abdomen: Bone;
    D_stinger: Bone;
    D_upperTeeth: Bone;
    D_lowerTeeth: Bone;
    D_wingTrailRoot_L: Bone;
    D_wingTrailRoot_R: Bone;
    D_gardenHatFlapFront: Bone;
    D_gardenHatFlapFront_L: Bone;
    D_gardenHatFlapSideFront_L: Bone;
    D_gardenHatFlapFront_R: Bone;
    D_gardenHatFlapSideFront_R: Bone;
    D_gardenHatFlapBack: Bone;
    D_gardenHatFlapBack_L: Bone;
    D_gardenHatFlapBack_R: Bone;
    D_eyeball_L: Bone;
    D_eyeball_R: Bone;
    D_mouthCornerBtm_L003: Bone;
    D_mouthBtm_L003: Bone;
    D_mouthBtm_R003: Bone;
    D_mouthCornerBtm_R003: Bone;
    D_mouthCornerTop_L003: Bone;
    D_mouthCornerTop_R003: Bone;
    D_mouthTop_R003: Bone;
    D_mouthTop_L003: Bone;
    D_mouthTop004: Bone;
    D_mouthTop005: Bone;
    D_donutCrumb: Bone;
    D_snorkel: Bone;
    D_snorkelTube: Bone;
    D_potHandle: Bone;
    D_pot: Bone;
    D_potJuice3: Bone;
    D_potJuice1: Bone;
    D_potJuice2: Bone;
    D_potJuice4: Bone;
    IK_hand_L: Bone;
    IK_hand_R: Bone;
    IK_foreFoot_L: Bone;
    IK_foreFoot_R: Bone;
    IK_hindFoot_L: Bone;
    IK_hindFoot_R: Bone;
    IK_antennaTip_L: Bone;
    IK_antennaTip_R: Bone;
    properties: Bone;
    D_potSpoon: Bone;
    D_flowerRoot004: Bone;
    D_ChetHatRoot001: Bone;
    flowerRoot004: Bone;
    kitchen_knife_bone001: Bone;
    D_kitchen_knife_bone007: Bone;
    butcher_knife_Bone001: Bone;
    D_butcher_knife_Bone007: Bone;
    boombox_D_root_bone001: Bone;
    boombox_D_antennaL001: Bone;
    boombox_D_antennaR001: Bone;
    boombox_D_speaker_boneL001: Bone;
    boombox_D_speaker_boneR001: Bone;
    boombox_D_equalizer_one001: Bone;
    boombox_D_equalizer_two001: Bone;
    boombox_D_equalizer_three001: Bone;
    boombox_D_equalizer_four001: Bone;
    boombox_control_root_bone001: Bone;
    D_shower_brush_bone001: Bone;
    shower_brush_bone001: Bone;
  };
  materials: {
    Color_Metallic_Specular_Roughness_AO_Alpha: MeshStandardMaterial;
    Color_AO: MeshStandardMaterial;
    Color_Metallic_Specular_Roughness_AO: MeshStandardMaterial;
  };
};

// type ActionName =
//   | "bee_broncoButterfly_exit"
//   | "bee_broncoButterfly_loop"
//   | "bee_emoEating_flower"
//   | "bee_excited"
//   | "bee_happy"
//   | "bee_hotpot"
//   | "bee_informative"
//   | "bee_neutralTalking"
//   | "bee_sad"
//   | "bee_scared"
//   | "bee_surprised"
//   | "bee_swim_exit"
//   | "bee_swim_loop"
//   | "bee_thinking"
//   | "weird_dish_pizza"
//   | "weird_dish_watermelon";
// type GLTFActions = Record<ActionName, AnimationAction | AnimationClip>;

const Sunny: FC = () => {
  const group = useRef<Group | null>(null);
  const { nodes, animations } = useGLTF(
    "/game_assets/models/sunny_v006-transformed.glb",
  ) as GLTFResult;

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.bee_excited?.play();
  }, [actions]);

  useFrame((state, delta) => {
    if (!group.current) return;
    // group.current.scale.x =
    //   group.current.scale.y =
    //   group.current.scale.z =
    //     Math.sin(state.clock.elapsedTime) * 0.5 + 0.5;
  });
  return (
    <group ref={group} dispose={null} position={[0, 0.5, 0.5]}>
      <group name="Scene">
        <group name="BeeArmature" userData={{ name: "BeeArmature" }}>
          <primitive object={nodes.root} />
          <primitive object={nodes.D_torso} />
          <primitive object={nodes.D_head} />
          <primitive object={nodes.D_gardenHatRoot} />
          <primitive object={nodes.D_gardenHatTip} />
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
          <primitive object={nodes.D_wingTip_L001} />
          <primitive object={nodes.D_wingRoot_R} />
          <primitive object={nodes.D_wingTip_R} />
          <primitive object={nodes.D_wingTip_R001} />
          <primitive object={nodes.D_abdomen} />
          <primitive object={nodes.D_stinger} />
          <primitive object={nodes.D_upperTeeth} />
          <primitive object={nodes.D_lowerTeeth} />
          <primitive object={nodes.D_wingTrailRoot_L} />
          <primitive object={nodes.D_wingTrailRoot_R} />
          <primitive object={nodes.D_gardenHatFlapFront} />
          <primitive object={nodes.D_gardenHatFlapFront_L} />
          <primitive object={nodes.D_gardenHatFlapSideFront_L} />
          <primitive object={nodes.D_gardenHatFlapFront_R} />
          <primitive object={nodes.D_gardenHatFlapSideFront_R} />
          <primitive object={nodes.D_gardenHatFlapBack} />
          <primitive object={nodes.D_gardenHatFlapBack_L} />
          <primitive object={nodes.D_gardenHatFlapBack_R} />
          <primitive object={nodes.D_eyeball_L} />
          <primitive object={nodes.D_eyeball_R} />
          <primitive object={nodes.D_mouthCornerBtm_L003} />
          <primitive object={nodes.D_mouthBtm_L003} />
          <primitive object={nodes.D_mouthBtm_R003} />
          <primitive object={nodes.D_mouthCornerBtm_R003} />
          <primitive object={nodes.D_mouthCornerTop_L003} />
          <primitive object={nodes.D_mouthCornerTop_R003} />
          <primitive object={nodes.D_mouthTop_R003} />
          <primitive object={nodes.D_mouthTop_L003} />
          <primitive object={nodes.D_mouthTop004} />
          <primitive object={nodes.D_mouthTop005} />
          <primitive object={nodes.D_donutCrumb} />
          <primitive object={nodes.D_snorkel} />
          <primitive object={nodes.D_snorkelTube} />
          <primitive object={nodes.D_potHandle} />
          <primitive object={nodes.D_pot} />
          <primitive object={nodes.D_potJuice3} />
          <primitive object={nodes.D_potJuice1} />
          <primitive object={nodes.D_potJuice2} />
          <primitive object={nodes.D_potJuice4} />
          <primitive object={nodes.IK_hand_L} />
          <primitive object={nodes.IK_hand_R} />
          <primitive object={nodes.IK_foreFoot_L} />
          <primitive object={nodes.IK_foreFoot_R} />
          <primitive object={nodes.IK_hindFoot_L} />
          <primitive object={nodes.IK_hindFoot_R} />
          <primitive object={nodes.IK_antennaTip_L} />
          <primitive object={nodes.IK_antennaTip_R} />
          <primitive object={nodes.properties} />
          <primitive object={nodes.D_potSpoon} />
          <primitive object={nodes.D_flowerRoot004} />
          <primitive object={nodes.D_ChetHatRoot001} />
          <primitive object={nodes.flowerRoot004} />
          <primitive object={nodes.kitchen_knife_bone001} />
          <primitive object={nodes.D_kitchen_knife_bone007} />
          <primitive object={nodes.butcher_knife_Bone001} />
          <primitive object={nodes.D_butcher_knife_Bone007} />
          <primitive object={nodes.boombox_D_root_bone001} />
          <primitive object={nodes.boombox_D_antennaL001} />
          <primitive object={nodes.boombox_D_antennaR001} />
          <primitive object={nodes.boombox_D_speaker_boneL001} />
          <primitive object={nodes.boombox_D_speaker_boneR001} />
          <primitive object={nodes.boombox_D_equalizer_one001} />
          <primitive object={nodes.boombox_D_equalizer_two001} />
          <primitive object={nodes.boombox_D_equalizer_three001} />
          <primitive object={nodes.boombox_D_equalizer_four001} />
          <primitive object={nodes.boombox_control_root_bone001} />
          <primitive object={nodes.D_shower_brush_bone001} />
          <primitive object={nodes.shower_brush_bone001} />
          <skinnedMesh
            name="BeeBody"
            geometry={nodes.BeeBody.geometry}
            material={SunnyMaterial}
            skeleton={nodes.BeeBody.skeleton}
            userData={{ name: "BeeBody" }}
          />
          {/* <skinnedMesh
            name="boombox_merged"
            geometry={nodes.boombox_merged.geometry}
            material={materials.Color_Metallic_Specular_Roughness_AO}
            skeleton={nodes.boombox_merged.skeleton}
            userData={{ name: "boombox_merged" }}
          />
          <skinnedMesh
            name="butcher_knife"
            geometry={nodes.butcher_knife.geometry}
            material={materials.Color_Metallic_Specular_Roughness_AO}
            skeleton={nodes.butcher_knife.skeleton}
            userData={{ name: "butcher_knife" }}
          />
          <skinnedMesh
            name="chef_hat"
            geometry={nodes.chef_hat.geometry}
            material={materials.Color_AO}
            skeleton={nodes.chef_hat.skeleton}
            userData={{ name: "chef_hat" }}
          />
          <skinnedMesh
            name="donut_crumb"
            geometry={nodes.donut_crumb.geometry}
            material={materials.Color_AO}
            skeleton={nodes.donut_crumb.skeleton}
            userData={{ name: "donut_crumb" }}
          />
          <skinnedMesh
            name="gardener_hat"
            geometry={nodes.gardener_hat.geometry}
            material={materials.Color_AO}
            skeleton={nodes.gardener_hat.skeleton}
            userData={{ name: "gardener_hat" }}
          />
          <skinnedMesh
            name="kitchen_knife_hero"
            geometry={nodes.kitchen_knife_hero.geometry}
            material={materials.Color_Metallic_Specular_Roughness_AO}
            skeleton={nodes.kitchen_knife_hero.skeleton}
            userData={{ name: "kitchen_knife_hero" }}
          />
          <skinnedMesh
            name="peony"
            geometry={nodes.peony.geometry}
            material={materials.Color_AO}
            skeleton={nodes.peony.skeleton}
            userData={{ name: "peony" }}
          />
          <skinnedMesh
            name="shower_brush"
            geometry={nodes.shower_brush.geometry}
            material={materials.Color_AO}
            skeleton={nodes.shower_brush.skeleton}
            userData={{ name: "shower_brush" }}
          /> */}
        </group>
        {/* <mesh
          name="weird_dish_pizza"
          castShadow
          receiveShadow
          geometry={nodes.weird_dish_pizza.geometry}
          material={materials.Color_Metallic_Specular_Roughness_AO}
          position={[0, -0.0299999993, 0.200000003]}
          userData={{ name: "weird_dish_pizza" }}
        />
        <mesh
          name="weird_dish_watermelon"
          castShadow
          receiveShadow
          geometry={nodes.weird_dish_watermelon.geometry}
          material={materials.Color_Metallic_Specular_Roughness_AO}
          position={[0, -0.0299999993, 0.200000003]}
          userData={{ name: "weird_dish_watermelon" }}
        />
        <skinnedMesh
          name="pot_wire_handle"
          geometry={nodes.pot_wire_handle.geometry}
          material={materials.Color_Metallic_Specular_Roughness_AO}
          skeleton={nodes.pot_wire_handle.skeleton}
          userData={{ name: "pot_wire_handle" }}
        />
        <skinnedMesh
          name="snorkel"
          geometry={nodes.snorkel.geometry}
          material={materials.Color_Metallic_Specular_Roughness_AO_Alpha}
          skeleton={nodes.snorkel.skeleton}
          userData={{ name: "snorkel" }}
        /> */}
      </group>
    </group>
  );
};

export default memo(Sunny);

useGLTF.preload("/game_assets/models/sunny_v006-transformed.glb");
