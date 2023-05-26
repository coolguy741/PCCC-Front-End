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
        name="gloves"
        castShadow
        visible={activeHoveredEntity === "Gardening Gloves"}
        geometry={nodes.gloves.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "gloves" }}
      />
      <mesh
        name="hat"
        castShadow
        visible={activeHoveredEntity === "Gardening Hat"}
        geometry={nodes.hat_01.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "hat_01" }}
      />
      <mesh
        name="spade"
        castShadow
        visible={activeHoveredEntity === "Shovel"}
        geometry={nodes.spade.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "spade" }}
        scale={1.15}
        position={[0, 0.01, 0]}
      />
      {/* <mesh
        name="bucket"
        castShadow
        visible={false}
        geometry={nodes.bucket.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "bucket" }}
      /> */}
      {/* <mesh
        name="drawer"
        castShadow
        visible={false}
        geometry={nodes.drawer.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "drawer" }}
      /> */}

      {/* <mesh
        name="hat_02"
        castShadow
        visible={false}
        geometry={nodes.hat_02.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "hat_02" }}
      />
      <mesh
        name="hat_03"
        castShadow
        visible={false}
        geometry={nodes.hat_03.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "hat_03" }}
      /> */}
      {/* <mesh
        name="hoe"
        castShadow
        visible={false}
        geometry={nodes.hoe.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "hoe" }}
      /> */}
      {/* <mesh
        name="old_clothing_01"
        castShadow
        visible={false}
        geometry={nodes.old_clothing_01.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "old_clothing_01" }}
      />
      <mesh
        name="old_clothing_02"
        castShadow
        visible={false}
        geometry={nodes.old_clothing_02.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "old_clothing_02" }}
      /> */}
      {/* <mesh
        name="paint_cans"
        castShadow
        visible={false}
        geometry={nodes.paint_cans.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "paint_cans" }}
      />
      <mesh
        name="pitchfork"
        castShadow
        visible={false}
        geometry={nodes.pitchfork.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "pitchfork" }}
      /> */}
      {/* <mesh
        name="rake"
        castShadow
        visible={false}
        geometry={nodes.rake.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "rake" }}
      /> */}
      {/* <mesh
        name="scarecrow_hat"
        castShadow
        visible={false}
        geometry={nodes.scarecrow_hat.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "scarecrow_hat" }}
      /> */}
      {/* <mesh
        name="screwdriver_phillips"
        castShadow
        visible={false}
        geometry={nodes.screwdriver_phillips.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "screwdriver_phillips" }}
      />
      <mesh
        name="screwdriver_slot"
        castShadow
        visible={false}
        geometry={nodes.screwdriver_slot.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "screwdriver_slot" }}
      />
      <mesh
        name="seed_packets"
        castShadow
        visible={false}
        geometry={nodes.seed_packets.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "seed_packets" }}
      /> */}

      {/* <mesh
        name="sun_glasses"
        castShadow
        visible={false}
        geometry={nodes.sun_glasses.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "sun_glasses" }}
      /> */}
      {/* <mesh
        name="wood_glue"
        castShadow
        visible={false}
        geometry={nodes.wood_glue.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "wood_glue" }}
      />
      <mesh
        name="wood_scraps"
        castShadow
        visible={false}
        geometry={nodes.wood_scraps.geometry}
        material={materials.VertexColors_PBR}
        userData={{ name: "wood_scraps" }}
      /> */}
    </Fragment>
  );
};

useGLTF.preload("/game_assets/models/tool-rack-items-transformed.glb");

export default memo(ToolRackPOC);

// {
//   /* <mesh castShadow
// visible={false} ref={inspectItemMeshRef} scale={1.1}>
// <torusKnotGeometry args={[1, 0.25, 64, 8, 2, 3]} />
// <meshStandardMaterial color="hotpink" emissiveIntensity={0} />
// </mesh> */
// }
