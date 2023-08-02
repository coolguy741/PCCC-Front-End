import { useGLTF } from "@react-three/drei";
import { memo } from "react";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";

type GLTFResult = GLTF & {
  nodes: {
    slotted_screwdriver: Mesh;
    gardening_gloves: Mesh;
    seed_packets: Mesh;
    drawer: Mesh;
    wood_scraps: Mesh;
    phillips_screwdriver: Mesh;
    pitchfork: Mesh;
    hoe: Mesh;
    shovel: Mesh;
    rake: Mesh;
    orange_overalls: Mesh;
    blue_overalls: Mesh;
    wood_glue: Mesh;
    paint_can_red: Mesh;
    Mesh111: Mesh;
    Mesh111_1: Mesh;
    red_hat: Mesh;
    green_hat: Mesh;
    blue_hat: Mesh;
  };
  materials: {
    VertexColors_PBR: MeshStandardMaterial;
  };
};

const ToolRackPOC = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/game_assets/models/tools_inspect-transformed.glb",
  ) as GLTFResult;

  const { activeHoveredEntity } = useGlobalState(
    (state) => ({
      activeHoveredEntity: state.activeHoveredEntity,
    }),
    shallow,
  );

  return (
    <group scale={0.5}>
      <mesh
        name="gardening_gloves"
        castShadow
        receiveShadow
        geometry={nodes.gardening_gloves.geometry}
        material={materials.VertexColors_PBR}
        rotation={[2.4902013166, -0.1142041491, 2.063760095]}
        scale={[2.2650938034, 2.265093565, 2.2650938034]}
        visible={activeHoveredEntity === "Gardening Gloves"}
      />

      <group
        name="gardening_and_sunglasses"
        position={[0.0003256366, -0.0000208202, 0]}
        rotation={[0.9327107905, 0, 0]}
        scale={[1.6071506739, 1.6071507931, 1.6071507931]}
        userData={{ name: "gardening_and_sunglasses" }}
        visible={activeHoveredEntity === "Gardening Hat and Sunglasses"}
      >
        <mesh
          name="Mesh111"
          castShadow
          receiveShadow
          geometry={nodes.Mesh111.geometry}
          material={materials.VertexColors_PBR}
        />
        <mesh
          name="Mesh111_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh111_1.geometry}
          material={materials.VertexColors_PBR}
        />
      </group>

      <mesh
        name="shovel"
        castShadow
        receiveShadow
        geometry={nodes.shovel.geometry}
        material={materials.VertexColors_PBR}
        rotation={[Math.PI / 2, -0.4935724765, 1.401e-7]}
        scale={[0.7531049252 + 0.1, 0.7531049848 + 0.1, 0.7531049848 + 0.1]}
        userData={{ name: "shovel" }}
        visible={activeHoveredEntity === "Shovel"}
      />

      <mesh
        name="drawer"
        castShadow
        receiveShadow
        geometry={nodes.drawer.geometry}
        material={materials.VertexColors_PBR}
        rotation={[0.1911123485, 1.4549524753, 6.36e-8]}
        scale={[1.4297975302 - 0.3, 1.4297976494 - 0.3, 1.4297977686 - 0.3]}
        visible={activeHoveredEntity === "Drawer"}
      />

      <mesh
        name="rake"
        castShadow
        receiveShadow
        geometry={nodes.rake.geometry}
        material={materials.VertexColors_PBR}
        rotation={[Math.PI / 2, -0.4902147573, 1.159e-7]}
        scale={0.723392427 + 0.1}
        userData={{ name: "rake" }}
        visible={activeHoveredEntity === "Rake"}
      />

      <mesh
        name="seed_packets"
        castShadow
        receiveShadow
        geometry={nodes.seed_packets.geometry}
        material={materials.VertexColors_PBR}
        position={[0.0109715434, -0.0266451724, 0]}
        rotation={[0.1502472583, 0.0946677634, 1.556487561]}
        scale={[1.4365855455, 1.4365855455, 1.4365853071]}
        visible={activeHoveredEntity === "Seed Packets"}
      />

      <mesh
        name="phillips_screwdriver"
        castShadow
        receiveShadow
        geometry={nodes.phillips_screwdriver.geometry}
        material={materials.VertexColors_PBR}
        rotation={[0, 0, -0.6444122556]}
        scale={[1.8329007626 + 0.5, 1.8329007626 + 0.5, 1.8329006433 + 0.5]}
        visible={activeHoveredEntity === "Phillips Screwdriver"}
      />

      <mesh
        name="slotted_screwdriver"
        castShadow
        receiveShadow
        geometry={nodes.slotted_screwdriver.geometry}
        material={materials.VertexColors_PBR}
        rotation={[1.1379205147, -0.442479967, -0.1953424709]}
        scale={[1.9077363014, 1.9077365398, 1.9077363014]}
        visible={activeHoveredEntity === "Slotted Screwdriver"}
      />

      <mesh
        name="hoe"
        castShadow
        receiveShadow
        geometry={nodes.hoe.geometry}
        material={materials.VertexColors_PBR}
        rotation={[Math.PI / 2, -0.6543340251, 2.21e-7]}
        scale={0.810968399 + 0.1}
        userData={{ name: "hoe" }}
        visible={activeHoveredEntity === "Hoe"}
      />

      <mesh
        name="wood_glue"
        castShadow
        receiveShadow
        geometry={nodes.wood_glue.geometry}
        material={materials.VertexColors_PBR}
        rotation={[0, 0, -0.1133655547]}
        scale={4.8236131668 + 0.8}
        userData={{ name: "wood_glue" }}
        visible={activeHoveredEntity === "Wood Glue"}
      />

      <mesh
        name="wood_scraps"
        castShadow
        receiveShadow
        geometry={nodes.wood_scraps.geometry}
        material={materials.VertexColors_PBR}
        rotation={[Math.PI / 2, -0.4001057775, 1.358e-7]}
        scale={1.2335858345}
        visible={activeHoveredEntity === "Wood Scraps"}
      />

      <mesh
        name="pitchfork"
        castShadow
        receiveShadow
        geometry={nodes.pitchfork.geometry}
        material={materials.VertexColors_PBR}
        rotation={[Math.PI / 2, -0.6429221352, 2.163e-7]}
        scale={[0.700858891 + 0.1, 0.700858891 + 0.1, 0.7008589506 + 0.1]}
        userData={{ name: "pitchfork" }}
        visible={activeHoveredEntity === "Pitch Fork"}
      />

      <mesh
        name="paint_can_red"
        castShadow
        receiveShadow
        geometry={nodes.paint_can_red.geometry}
        material={materials.VertexColors_PBR}
        rotation={[0, Math.PI / 3, 0]}
        scale={1.5}
        userData={{ name: "paint_can_red" }}
        visible={activeHoveredEntity === "Paint Cans"}
      />

      <mesh
        name="red_hat"
        castShadow
        receiveShadow
        geometry={nodes.red_hat.geometry}
        material={materials.VertexColors_PBR}
        rotation={[0.8379650974, 0.4295551627, 0.0863787684]}
        scale={[1.6599535942, 1.659953475, 1.6599537134]}
        visible={activeHoveredEntity === "Red Straw Hat"}
      />

      <mesh
        name="green_hat"
        castShadow
        receiveShadow
        geometry={nodes.green_hat.geometry}
        material={materials.VertexColors_PBR}
        rotation={[0.8181150453, -0.1479164782, -0.0419324928]}
        scale={1.6870865822}
        visible={activeHoveredEntity === "Green Straw Hat"}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blue_hat.geometry}
        material={materials.VertexColors_PBR}
        rotation={[1.6565217775, -0.0371518578, -1.9365451626]}
        scale={[1.5242320299, 1.5242321491, 1.5242320299]}
        visible={activeHoveredEntity === "Blue Straw Hat"}
      />

      <mesh
        name="blue_overalls"
        castShadow
        receiveShadow
        geometry={nodes.blue_overalls.geometry}
        material={materials.VertexColors_PBR}
        rotation={[0.1087247782, 0.2478771055, -0.1583286055]}
        scale={[1.0914077759, 1.091407299, 1.0914074183]}
        userData={{ name: "blue_overalls" }}
        visible={activeHoveredEntity === "Blue Overalls"}
      />

      <mesh
        name="orange_overalls"
        castShadow
        receiveShadow
        geometry={nodes.orange_overalls.geometry}
        material={materials.VertexColors_PBR}
        rotation={[0.0192211545, 0.0554341024, -0.3339634044]}
        scale={[1.0515049696, 1.0515048504, 1.0515050888]}
        userData={{ name: "orange_overalls" }}
        visible={activeHoveredEntity === "Orange Overalls"}
      />
    </group>
  );
};

useGLTF.preload("/game_assets/models/tools_inspect-transformed.glb");

export default memo(ToolRackPOC);
