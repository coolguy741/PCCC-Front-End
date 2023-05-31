import { useGLTF } from "@react-three/drei";
import { Fragment, memo } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";

type GLTFResult = GLTF & {
  nodes: {
    bucket: THREE.Mesh;
    drawer: THREE.Mesh;
    gloves: THREE.Mesh;
    hat_01: THREE.Mesh;
    hat_02: THREE.Mesh;
    hat_03: THREE.Mesh;
    hoe: THREE.Mesh;
    old_clothing_01: THREE.Mesh;
    old_clothing_02: THREE.Mesh;
    paint_cans: THREE.Mesh;
    pitchfork: THREE.Mesh;
    rake: THREE.Mesh;
    scarecrow_hat: THREE.Mesh;
    screwdriver_phillips: THREE.Mesh;
    screwdriver_slot: THREE.Mesh;
    seed_packets: THREE.Mesh;
    spade: THREE.Mesh;
    sun_glasses: THREE.Mesh;
    wood_glue: THREE.Mesh;
    wood_scraps: THREE.Mesh;
  };
  materials: {
    VertexColors_PBR: THREE.MeshStandardMaterial;
  };
};

const ToolRackPOC = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/game_assets/models/tool-rack-items-transformed.glb",
  ) as GLTFResult;

  const { activeHoveredEntity } = useGlobalState(
    (state) => ({
      activeHoveredEntity: state.activeHoveredEntity,
    }),
    shallow,
  );

  return (
    <Fragment>
      <mesh
        castShadow
        geometry={nodes.gloves.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Gardening Gloves"}
      />
      <mesh
        castShadow
        geometry={nodes.hat_01.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Gardening Hat and Sunglasses"}
      />
      <mesh
        castShadow
        scale={1.25}
        position={[0, 0.01, 0]}
        geometry={nodes.spade.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Shovel"}
      />

      <mesh
        castShadow
        scale={0.95}
        rotation={[0.25, 0, 0]}
        position={[0, 0, 0.01]}
        geometry={nodes.drawer.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Drawer"}
      />

      <mesh
        castShadow
        scale={1.5}
        position={[0, -0.01, 0]}
        geometry={nodes.rake.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Rake"}
      />

      <mesh
        castShadow
        scale={1.25}
        position={[0, -0.015, 0]}
        geometry={nodes.seed_packets.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Seed Packets"}
      />

      <mesh
        castShadow
        geometry={nodes.sun_glasses.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Sunglasses"}
      />

      <mesh
        castShadow
        scale={1.3}
        position={[0, 0.01, 0]}
        material={materials.VertexColors_PBR}
        geometry={nodes.screwdriver_phillips.geometry}
        visible={activeHoveredEntity === "Phillips Screwdriver"}
      />

      <mesh
        castShadow
        material={materials.VertexColors_PBR}
        geometry={nodes.screwdriver_slot.geometry}
        visible={activeHoveredEntity === "Slotted Screwdriver"}
      />

      <mesh
        castShadow
        scale={1.3}
        position={[0, 0.01, 0]}
        geometry={nodes.hoe.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Hoe"}
      />

      <mesh
        castShadow
        scale={1.4}
        position={[0, 0.02, 0]}
        rotation={[0.15, 0, 0]}
        geometry={nodes.wood_glue.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Wood Glue"}
      />

      <mesh
        castShadow
        geometry={nodes.wood_scraps.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Wood Scraps"}
      />

      <mesh
        castShadow
        scale={1.4}
        position={[0, 0.02, 0]}
        geometry={nodes.pitchfork.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Pitch Fork"}
      />

      <mesh
        castShadow
        scale={0.8}
        geometry={nodes.paint_cans.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Paint Cans"}
      />

      <mesh
        castShadow
        geometry={nodes.hat_02.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Red Straw Hat"}
      />

      <mesh
        castShadow
        geometry={nodes.hat_03.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Green Straw Hat"}
      />

      <mesh
        castShadow
        geometry={nodes.scarecrow_hat.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Blue Straw Hat"}
      />

      <mesh
        castShadow
        geometry={nodes.old_clothing_02.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Blue Overalls"}
      />

      <mesh
        castShadow
        geometry={nodes.old_clothing_01.geometry}
        material={materials.VertexColors_PBR}
        visible={activeHoveredEntity === "Orange Overalls"}
      />

      {/* <mesh
        name="bucket"
        castShadow
        visible={false}
        geometry={nodes.bucket.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "bucket" }}
      />
      
       */}
    </Fragment>
  );
};

useGLTF.preload("/game_assets/models/tool-rack-items-transformed.glb");

export default memo(ToolRackPOC);
