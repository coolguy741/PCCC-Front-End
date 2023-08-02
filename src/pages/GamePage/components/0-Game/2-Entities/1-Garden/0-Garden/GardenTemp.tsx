import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bone, Mesh, MeshStandardMaterial, SkinnedMesh } from "three";
import { GLTF } from "three-stdlib";
import StaticGardenElements from "../2-StaticElements/StaticGardenElements";
import { gardenColorMultiplier, gardenMaterial } from "./GardenDefines";

type GLTFResult = GLTF & {
  nodes: {
    tree_five_005003: Mesh;
    tree_five_005010: Mesh;
    tree_five_005013: Mesh;
    big_tree_weeds004: Mesh;
    cliff_rock_one_003: Mesh;
    cliff_rock_one_005: Mesh;
    cliff_rock_one_002: Mesh;
    cliff_rock_one_004: Mesh;
    cliff_rock_one_007: Mesh;
    cliff_rock_one_010: Mesh;
    cliff_rock_one_006: Mesh;
    cliff_rock_three_002: Mesh;
    cliff_rock_three_007: Mesh;
    cliff_rock_three_004: Mesh;
    cliff_rock_three_005: Mesh;
    cliff_rock_two_003: Mesh;
    cliff_rock_two_005: Mesh;
    cliff_rock_two_007: Mesh;
    cliff_rock_two_002: Mesh;
    cliff_rock_two_004: Mesh;
    cliff_rock_two_006: Mesh;
    cloud_right_009: Mesh;
    cliff_rock_five_002001: Mesh;
    cliff_rock_five_003: Mesh;
    cliff_rock_five_002: Mesh;
    cliff_rock_six_001: Mesh;
    generic_tree001: Mesh;
    garden001: SkinnedMesh;
    garden001_1: SkinnedMesh;
    leafpile_collider: SkinnedMesh;
    mushrooms_collider: SkinnedMesh;
    langstroth_hive_collider: SkinnedMesh;
    beehive_collider: SkinnedMesh;
    blueberry_plant001_collider: SkinnedMesh;
    blueberry_plant002_collider: SkinnedMesh;
    honey_extractor_collider: SkinnedMesh;
    nest_collider: SkinnedMesh;
    bee_smoker_collider: SkinnedMesh;
    water_can_collider: SkinnedMesh;
    water_hose_collider: SkinnedMesh;
    goldfish_collider: SkinnedMesh;
    right_gate_collider: SkinnedMesh;
    left_gate_collider: SkinnedMesh;
    house_door_collider: SkinnedMesh;
    scarecrow_stage_05_collider: SkinnedMesh;
    dumpster_collider: SkinnedMesh;
    wheelbarrow_collider: SkinnedMesh;
    compost_bin_collider: SkinnedMesh;
    hydroponics_planter_old_collider: SkinnedMesh;
    seedligns_merged_collider: SkinnedMesh;
    slotted_screwdriver_collider: SkinnedMesh;
    gardening_gloves_collider: SkinnedMesh;
    seed_packets_collider: SkinnedMesh;
    drawer_collider: SkinnedMesh;
    wood_scraps_collider: SkinnedMesh;
    phillips_screwdriver_collider: SkinnedMesh;
    pitchfork_collider: SkinnedMesh;
    hoe_collider: SkinnedMesh;
    shovel_collider: SkinnedMesh;
    rake_collider: SkinnedMesh;
    orange_overalls_collider: SkinnedMesh;
    blue_overalls_collider: SkinnedMesh;
    gardening_hat_and_sunglasses_collider: SkinnedMesh;
    red_straw_hat_collider: SkinnedMesh;
    green_straw_hat_collider: SkinnedMesh;
    blue_straw_hat_collider: SkinnedMesh;
    wood_glue_collider: SkinnedMesh;
    paint_can_blue_collider: SkinnedMesh;
    paint_can_yellow_collider: SkinnedMesh;
    paint_can_red_collider: SkinnedMesh;
    garden_root_bone: Bone;
    leafpile_bone: Bone;
    mushrooms_bone: Bone;
    langstroth_hive_bone: Bone;
    beehive_bone: Bone;
    blueberry_plant001_bone: Bone;
    blueberry_plant002_bone: Bone;
    honey_extractor_bone: Bone;
    nest_bone: Bone;
    bee_smoker_bone: Bone;
    water_can_bone: Bone;
    water_hose_bone: Bone;
    goldfish_bone: Bone;
    right_gate_bone: Bone;
    left_gate_bone: Bone;
    house_door_bone: Bone;
    scarecrow_stage_05_bone: Bone;
    dumpster_bone: Bone;
    wheelbarrow_bone: Bone;
    compost_bin_bone: Bone;
    hydroponics_planter_old_bone: Bone;
    seedligns_merged_bone: Bone;
    slotted_screwdriver_bone: Bone;
    gardening_gloves_bone: Bone;
    seed_packets_bone: Bone;
    drawer_bone: Bone;
    wood_scraps_bone: Bone;
    phillips_screwdriver_bone: Bone;
    pitchfork_bone: Bone;
    hoe_bone: Bone;
    shovel_bone: Bone;
    rake_bone: Bone;
    orange_overalls_bone: Bone;
    blue_overalls_bone: Bone;
    gardening_hat_and_sunglasses_bone: Bone;
    red_straw_hat_bone: Bone;
    green_straw_hat_bone: Bone;
    blue_straw_hat_bone: Bone;
    wood_glue_bone: Bone;
    paint_can_blue_bone: Bone;
    paint_can_yellow_bone: Bone;
    paint_can_red_bone: Bone;
  };
  materials: {
    Color_AO: MeshStandardMaterial;
    Color_Metallic_Specular_Roughness_AO: MeshStandardMaterial;
  };
};

// useEffect(() => {

// }, []);

const GardenTemp = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/game_assets/models//garden_v009-transformed.glb",
  ) as GLTFResult;

  useFrame(() => {
    gardenColorMultiplier.set(223 / 255, 238 / 255, 255 / 255);
    if (gardenMaterial.userData.shader) {
      gardenMaterial.userData.shader.uniforms.uMultiplier.value =
        gardenColorMultiplier;
      gardenMaterial.userData.shader.uniforms.uAOMultiplier.value = 1;
      gardenMaterial.envMapIntensity = 1.5;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group name="garden_rig" userData={{ name: "garden_rig" }}>
        <primitive object={nodes.garden_root_bone} />
        <primitive object={nodes.leafpile_bone} />
        <primitive object={nodes.mushrooms_bone} />
        <primitive object={nodes.langstroth_hive_bone} />
        <primitive object={nodes.beehive_bone} />
        <primitive object={nodes.blueberry_plant001_bone} />
        <primitive object={nodes.blueberry_plant002_bone} />
        <primitive object={nodes.honey_extractor_bone} />
        <primitive object={nodes.nest_bone} />
        <primitive object={nodes.bee_smoker_bone} />
        <primitive object={nodes.water_can_bone} />
        <primitive object={nodes.water_hose_bone} />
        <primitive object={nodes.goldfish_bone} />
        <primitive object={nodes.right_gate_bone} />
        <primitive object={nodes.left_gate_bone} />
        <primitive object={nodes.house_door_bone} />
        <primitive object={nodes.scarecrow_stage_05_bone} />
        <primitive object={nodes.dumpster_bone} />
        <primitive object={nodes.wheelbarrow_bone} />
        <primitive object={nodes.compost_bin_bone} />
        <primitive object={nodes.hydroponics_planter_old_bone} />
        <primitive object={nodes.seedligns_merged_bone} />
        <primitive object={nodes.slotted_screwdriver_bone} />
        <primitive object={nodes.gardening_gloves_bone} />
        <primitive object={nodes.seed_packets_bone} />
        <primitive object={nodes.drawer_bone} />
        <primitive object={nodes.wood_scraps_bone} />
        <primitive object={nodes.phillips_screwdriver_bone} />
        <primitive object={nodes.pitchfork_bone} />
        <primitive object={nodes.hoe_bone} />
        <primitive object={nodes.shovel_bone} />
        <primitive object={nodes.rake_bone} />
        <primitive object={nodes.orange_overalls_bone} />
        <primitive object={nodes.blue_overalls_bone} />
        <primitive object={nodes.gardening_hat_and_sunglasses_bone} />
        <primitive object={nodes.red_straw_hat_bone} />
        <primitive object={nodes.green_straw_hat_bone} />
        <primitive object={nodes.blue_straw_hat_bone} />
        <primitive object={nodes.wood_glue_bone} />
        <primitive object={nodes.paint_can_blue_bone} />
        <primitive object={nodes.paint_can_yellow_bone} />
        <primitive object={nodes.paint_can_red_bone} />
      </group>
      <StaticGardenElements materials={materials} nodes={nodes} />
      <skinnedMesh
        castShadow
        receiveShadow
        name="garden001"
        geometry={nodes.garden001.geometry}
        material={gardenMaterial}
        skeleton={nodes.garden001.skeleton}
      />

      <skinnedMesh
        castShadow
        receiveShadow
        name="garden001_1"
        geometry={nodes.garden001_1.geometry}
        material={materials.Color_AO}
        skeleton={nodes.garden001_1.skeleton}
      />

      {/* <InteractiveGameEntity
        name="Leafpile"
        bone={nodes.leafpile_bone}
        geometry={nodes.leafpile_collider.geometry}
        skeleton={nodes.leafpile_collider.skeleton}
      /> */}
      {/* <skinnedMesh
        name="leafpile_collider"
        geometry={nodes.leafpile_collider.geometry}
        material={nodes.leafpile_collider.material}
        skeleton={nodes.leafpile_collider.skeleton}
      /> */}
      {/* <skinnedMesh
        name="mushrooms_collider"
        geometry={nodes.mushrooms_collider.geometry}
        material={nodes.mushrooms_collider.material}
        skeleton={nodes.mushrooms_collider.skeleton}
        userData={{ name: "mushrooms_collider" }}
      />

      <skinnedMesh
        name="langstroth_hive_collider"
        geometry={nodes.langstroth_hive_collider.geometry}
        material={nodes.langstroth_hive_collider.material}
        skeleton={nodes.langstroth_hive_collider.skeleton}
        userData={{ name: "langstroth_hive_collider" }}
      /> */}
    </group>
  );
};

useGLTF.preload("/game_assets/models/garden_v009-transformed.glb");

export default GardenTemp;

{
  /* 

<group name="garden" userData={{ name: "garden" }}>


</group>


<skinnedMesh
name="beehive_collider"
geometry={nodes.beehive_collider.geometry}
material={nodes.beehive_collider.material}
skeleton={nodes.beehive_collider.skeleton}
userData={{ name: "beehive_collider" }}
/>
<skinnedMesh
name="blueberry_plant001_collider"
geometry={nodes.blueberry_plant001_collider.geometry}
material={nodes.blueberry_plant001_collider.material}
skeleton={nodes.blueberry_plant001_collider.skeleton}
userData={{ name: "blueberry_plant.001_collider" }}
/>
<skinnedMesh
name="blueberry_plant002_collider"
geometry={nodes.blueberry_plant002_collider.geometry}
material={nodes.blueberry_plant002_collider.material}
skeleton={nodes.blueberry_plant002_collider.skeleton}
userData={{ name: "blueberry_plant.002_collider" }}
/>
<skinnedMesh
name="honey_extractor_collider"
geometry={nodes.honey_extractor_collider.geometry}
material={nodes.honey_extractor_collider.material}
skeleton={nodes.honey_extractor_collider.skeleton}
userData={{ name: "honey_extractor_collider" }}
/>
<skinnedMesh
name="nest_collider"
geometry={nodes.nest_collider.geometry}
material={nodes.nest_collider.material}
skeleton={nodes.nest_collider.skeleton}
userData={{ name: "nest_collider" }}
/>
<skinnedMesh
name="bee_smoker_collider"
geometry={nodes.bee_smoker_collider.geometry}
material={nodes.bee_smoker_collider.material}
skeleton={nodes.bee_smoker_collider.skeleton}
userData={{ name: "bee_smoker_collider" }}
/>
<skinnedMesh
name="water_can_collider"
geometry={nodes.water_can_collider.geometry}
material={nodes.water_can_collider.material}
skeleton={nodes.water_can_collider.skeleton}
userData={{ name: "water_can_collider" }}
/>
<skinnedMesh
name="water_hose_collider"
geometry={nodes.water_hose_collider.geometry}
material={nodes.water_hose_collider.material}
skeleton={nodes.water_hose_collider.skeleton}
userData={{ name: "water_hose_collider" }}
/>
<skinnedMesh
name="goldfish_collider"
geometry={nodes.goldfish_collider.geometry}
material={nodes.goldfish_collider.material}
skeleton={nodes.goldfish_collider.skeleton}
userData={{ name: "goldfish_collider" }}
/>
<skinnedMesh
name="right_gate_collider"
geometry={nodes.right_gate_collider.geometry}
material={nodes.right_gate_collider.material}
skeleton={nodes.right_gate_collider.skeleton}
userData={{ name: "right_gate_collider" }}
/>
<skinnedMesh
name="left_gate_collider"
geometry={nodes.left_gate_collider.geometry}
material={nodes.left_gate_collider.material}
skeleton={nodes.left_gate_collider.skeleton}
userData={{ name: "left_gate_collider" }}
/>
<skinnedMesh
name="house_door_collider"
geometry={nodes.house_door_collider.geometry}
material={nodes.house_door_collider.material}
skeleton={nodes.house_door_collider.skeleton}
userData={{ name: "house_door_collider" }}
/>
<skinnedMesh
name="scarecrow_stage_05_collider"
geometry={nodes.scarecrow_stage_05_collider.geometry}
material={nodes.scarecrow_stage_05_collider.material}
skeleton={nodes.scarecrow_stage_05_collider.skeleton}
userData={{ name: "scarecrow_stage_05_collider" }}
/>
<skinnedMesh
name="dumpster_collider"
geometry={nodes.dumpster_collider.geometry}
material={nodes.dumpster_collider.material}
skeleton={nodes.dumpster_collider.skeleton}
userData={{ name: "dumpster_collider" }}
/>
<skinnedMesh
name="wheelbarrow_collider"
geometry={nodes.wheelbarrow_collider.geometry}
material={nodes.wheelbarrow_collider.material}
skeleton={nodes.wheelbarrow_collider.skeleton}
userData={{ name: "wheelbarrow_collider" }}
/>
<skinnedMesh
name="compost_bin_collider"
geometry={nodes.compost_bin_collider.geometry}
material={nodes.compost_bin_collider.material}
skeleton={nodes.compost_bin_collider.skeleton}
userData={{ name: "compost_bin_collider" }}
/>
<skinnedMesh
name="hydroponics_planter_old_collider"
geometry={nodes.hydroponics_planter_old_collider.geometry}
material={nodes.hydroponics_planter_old_collider.material}
skeleton={nodes.hydroponics_planter_old_collider.skeleton}
userData={{ name: "hydroponics_planter_old_collider" }}
/>
<skinnedMesh
name="seedligns_merged_collider"
geometry={nodes.seedligns_merged_collider.geometry}
material={nodes.seedligns_merged_collider.material}
skeleton={nodes.seedligns_merged_collider.skeleton}
userData={{ name: "seedligns_merged_collider" }}
/>
<skinnedMesh
name="slotted_screwdriver_collider"
geometry={nodes.slotted_screwdriver_collider.geometry}
material={nodes.slotted_screwdriver_collider.material}
skeleton={nodes.slotted_screwdriver_collider.skeleton}
userData={{ name: "slotted_screwdriver_collider" }}
/>
<skinnedMesh
name="gardening_gloves_collider"
geometry={nodes.gardening_gloves_collider.geometry}
material={nodes.gardening_gloves_collider.material}
skeleton={nodes.gardening_gloves_collider.skeleton}
userData={{ name: "gardening_gloves_collider" }}
/>
<skinnedMesh
name="seed_packets_collider"
geometry={nodes.seed_packets_collider.geometry}
material={nodes.seed_packets_collider.material}
skeleton={nodes.seed_packets_collider.skeleton}
userData={{ name: "seed_packets_collider" }}
/>
<skinnedMesh
name="drawer_collider"
geometry={nodes.drawer_collider.geometry}
material={nodes.drawer_collider.material}
skeleton={nodes.drawer_collider.skeleton}
userData={{ name: "drawer_collider" }}
/>
<skinnedMesh
name="wood_scraps_collider"
geometry={nodes.wood_scraps_collider.geometry}
material={nodes.wood_scraps_collider.material}
skeleton={nodes.wood_scraps_collider.skeleton}
userData={{ name: "wood_scraps_collider" }}
/>
<skinnedMesh
name="phillips_screwdriver_collider"
geometry={nodes.phillips_screwdriver_collider.geometry}
material={nodes.phillips_screwdriver_collider.material}
skeleton={nodes.phillips_screwdriver_collider.skeleton}
userData={{ name: "phillips_screwdriver_collider" }}
/>
<skinnedMesh
name="pitchfork_collider"
geometry={nodes.pitchfork_collider.geometry}
material={nodes.pitchfork_collider.material}
skeleton={nodes.pitchfork_collider.skeleton}
userData={{ name: "pitchfork_collider" }}
/>
<skinnedMesh
name="hoe_collider"
geometry={nodes.hoe_collider.geometry}
material={nodes.hoe_collider.material}
skeleton={nodes.hoe_collider.skeleton}
userData={{ name: "hoe_collider" }}
/>
<skinnedMesh
name="shovel_collider"
geometry={nodes.shovel_collider.geometry}
material={nodes.shovel_collider.material}
skeleton={nodes.shovel_collider.skeleton}
userData={{ name: "shovel_collider" }}
/>
<skinnedMesh
name="rake_collider"
geometry={nodes.rake_collider.geometry}
material={nodes.rake_collider.material}
skeleton={nodes.rake_collider.skeleton}
userData={{ name: "rake_collider" }}
/>
<skinnedMesh
name="orange_overalls_collider"
geometry={nodes.orange_overalls_collider.geometry}
material={nodes.orange_overalls_collider.material}
skeleton={nodes.orange_overalls_collider.skeleton}
userData={{ name: "orange_overalls_collider" }}
/>
<skinnedMesh
name="blue_overalls_collider"
geometry={nodes.blue_overalls_collider.geometry}
material={nodes.blue_overalls_collider.material}
skeleton={nodes.blue_overalls_collider.skeleton}
userData={{ name: "blue_overalls_collider" }}
/>
<skinnedMesh
name="gardening_hat_and_sunglasses_collider"
geometry={nodes.gardening_hat_and_sunglasses_collider.geometry}
material={nodes.gardening_hat_and_sunglasses_collider.material}
skeleton={nodes.gardening_hat_and_sunglasses_collider.skeleton}
userData={{ name: "gardening_hat_and_sunglasses_collider" }}
/>
<skinnedMesh
name="red_straw_hat_collider"
geometry={nodes.red_straw_hat_collider.geometry}
material={nodes.red_straw_hat_collider.material}
skeleton={nodes.red_straw_hat_collider.skeleton}
userData={{ name: "red_straw_hat_collider" }}
/>
<skinnedMesh
name="green_straw_hat_collider"
geometry={nodes.green_straw_hat_collider.geometry}
material={nodes.green_straw_hat_collider.material}
skeleton={nodes.green_straw_hat_collider.skeleton}
userData={{ name: "green_straw_hat_collider" }}
/>
<skinnedMesh
name="blue_straw_hat_collider"
geometry={nodes.blue_straw_hat_collider.geometry}
material={nodes.blue_straw_hat_collider.material}
skeleton={nodes.blue_straw_hat_collider.skeleton}
userData={{ name: "blue_straw_hat_collider" }}
/>
<skinnedMesh
name="wood_glue_collider"
geometry={nodes.wood_glue_collider.geometry}
material={nodes.wood_glue_collider.material}
skeleton={nodes.wood_glue_collider.skeleton}
userData={{ name: "wood_glue_collider" }}
/>
<skinnedMesh
name="paint_can_blue_collider"
geometry={nodes.paint_can_blue_collider.geometry}
material={nodes.paint_can_blue_collider.material}
skeleton={nodes.paint_can_blue_collider.skeleton}
userData={{ name: "paint_can_blue_collider" }}
/>
<skinnedMesh
name="paint_can_yellow_collider"
geometry={nodes.paint_can_yellow_collider.geometry}
material={nodes.paint_can_yellow_collider.material}
skeleton={nodes.paint_can_yellow_collider.skeleton}
userData={{ name: "paint_can_yellow_collider" }}
/>
<skinnedMesh
name="paint_can_red_collider"
geometry={nodes.paint_can_red_collider.geometry}
material={nodes.paint_can_red_collider.material}
skeleton={nodes.paint_can_red_collider.skeleton}
userData={{ name: "paint_can_red_collider" }}
/> */
}
