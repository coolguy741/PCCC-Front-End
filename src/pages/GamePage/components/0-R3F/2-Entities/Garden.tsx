import { useGLTF } from "@react-three/drei";
import { memo } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh019: THREE.Mesh;
    Mesh019_1: THREE.Mesh;
    Mesh090: THREE.Mesh;
    Mesh090_1: THREE.Mesh;
    Mesh090_2: THREE.Mesh;
    Mesh090_3: THREE.Mesh;
    Mesh090_4: THREE.Mesh;
    Mesh090_5: THREE.Mesh;
    Mesh090_6: THREE.Mesh;
    Mesh090_7: THREE.Mesh;
    Mesh090_8: THREE.Mesh;
    Mesh090_9: THREE.Mesh;
    Mesh090_10: THREE.Mesh;
    Mesh090_11: THREE.Mesh;
    Mesh090_12: THREE.Mesh;
    Mesh090_13: THREE.Mesh;
    Mesh090_14: THREE.Mesh;
    leafPile: THREE.Mesh;
    drawer: THREE.Mesh;
    dumpster: THREE.Mesh;
    waterCan: THREE.Mesh;
    wheelbarrow: THREE.Mesh;
    hat: THREE.Mesh;
    sunglasses: THREE.Mesh;
    gloves: THREE.Mesh;
    clothes_apron: THREE.Mesh;
    clothes_overall: THREE.Mesh;
    big_branch: THREE.Mesh;
    screwdriver: THREE.Mesh;
    grainBag: THREE.Mesh;
    grainBag001: THREE.Mesh;
    rake: THREE.Mesh;
    shovel: THREE.Mesh;
    Scarecrow: THREE.Mesh;
    soil: THREE.Mesh;
  };
  materials: {
    ["Dark_Green.002"]: THREE.MeshStandardMaterial;
    ["Dark_Brown.001"]: THREE.MeshStandardMaterial;
    Beige: THREE.MeshStandardMaterial;
    lambert2: THREE.MeshStandardMaterial;
    ["Dark_Brown.001"]: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
    Brown: THREE.MeshStandardMaterial;
    ["Dark_Green.002"]: THREE.MeshStandardMaterial;
    Grey: THREE.MeshStandardMaterial;
    Light_Green: THREE.MeshStandardMaterial;
    Orange: THREE.MeshStandardMaterial;
    Light_Beige: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    ["Dark_Green.001"]: THREE.MeshStandardMaterial;
    Water: THREE.MeshStandardMaterial;
    farm_pack: THREE.MeshStandardMaterial;
    Red: THREE.MeshStandardMaterial;
    Yellow: THREE.MeshStandardMaterial;
  };
};

type ActionName = "CameraPathAction" | "Cam_ToolRack.001Action";

const Garden = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/game_assets/models/Garden_All_Merged-transformed.glb",
  ) as GLTFResult;
  return (
    <group>
      <group name="Scene">
        <group
          name="pccc_garden"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "pccc_garden" }}
        >
          <group
            name="camera_and_lights"
            userData={{ name: "camera_and_lights" }}
          >
            <group name="Garden_Cameras" userData={{ name: "Garden_Cameras" }}>
              <group
                name="Cam_ToolRack_FollowPath"
                rotation={[0.1034595375, -0.0994080332, 2.457592973]}
                scale={[57.8764457703, 57.876449585, 57.8764419556]}
                userData={{ name: "Cam_ToolRack_FollowPath" }}
              />
              <group
                name="CameraPath"
                position={[-738.2266235352, -374.2258300781, -287.3842163086]}
                rotation={[-Math.PI / 2, 1.5277025639, 5.873e-7]}
                scale={[180.5596923828, 180.5597076416, 180.5596923828]}
                userData={{ name: "CameraPath" }}
              />
            </group>
          </group>
          <group
            name="Big_Tree"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            userData={{ name: "Big Tree" }}
          >
            <mesh
              name="Mesh019"
              castShadow
              receiveShadow
              geometry={nodes.Mesh019.geometry}
              material={materials["Dark_Green.002"]}
            />
            <mesh
              name="Mesh019_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh019_1.geometry}
              material={materials["Dark_Brown.001"]}
            />
          </group>
          <group
            name="MergedEnvironment"
            position={[0, 0, 1.8688118458]}
            userData={{ name: "MergedEnvironment" }}
          >
            <mesh
              name="Mesh090"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090.geometry}
              material={materials.Beige}
            />
            <mesh
              name="Mesh090_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_1.geometry}
              material={materials.lambert2}
            />
            <mesh
              name="Mesh090_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_2.geometry}
              material={materials["Dark_Brown.001"]}
            />
            <mesh
              name="Mesh090_3"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_3.geometry}
              material={materials.Metal}
            />
            <mesh
              name="Mesh090_4"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_4.geometry}
              material={materials.Brown}
            />
            <mesh
              name="Mesh090_5"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_5.geometry}
              material={materials["Dark_Green.002"]}
            />
            <mesh
              name="Mesh090_6"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_6.geometry}
              material={materials.Grey}
            />
            <mesh
              name="Mesh090_7"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_7.geometry}
              material={materials.Light_Green}
            />
            <mesh
              name="Mesh090_8"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_8.geometry}
              material={materials.Orange}
            />
            <mesh
              name="Mesh090_9"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_9.geometry}
              material={materials.Light_Beige}
            />
            <mesh
              name="Mesh090_10"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_10.geometry}
              material={materials.Glass}
            />
            <mesh
              name="Mesh090_11"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_11.geometry}
              material={materials["Dark_Green.001"]}
            />
            <mesh
              name="Mesh090_12"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_12.geometry}
              material={materials.Water}
            />
            <mesh
              name="Mesh090_13"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_13.geometry}
              material={materials.farm_pack}
            />
            <mesh
              name="Mesh090_14"
              castShadow
              receiveShadow
              geometry={nodes.Mesh090_14.geometry}
              material={materials.Red}
            />
          </group>
        </group>
        <mesh
          name="leafPile"
          castShadow
          receiveShadow
          geometry={nodes.leafPile.geometry}
          material={materials.Light_Green}
          position={[8.1427469254, 0.2376442254, 4.3841619492]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "leafPile" }}
        />
        <mesh
          name="drawer"
          castShadow
          receiveShadow
          geometry={nodes.drawer.geometry}
          material={materials.Metal}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "drawer" }}
        />
        <mesh
          name="dumpster"
          castShadow
          receiveShadow
          geometry={nodes.dumpster.geometry}
          material={materials["Dark_Green.002"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "dumpster" }}
        />
        <mesh
          name="waterCan"
          castShadow
          receiveShadow
          geometry={nodes.waterCan.geometry}
          material={materials["Dark_Green.002"]}
          position={[-4.5263543129, 0.4083321989, -1.7730680704]}
          rotation={[Math.PI / 2, 2.255e-7, 2.4895414031]}
          scale={0.0099999998}
          userData={{ name: "waterCan" }}
        />
        <mesh
          name="wheelbarrow"
          castShadow
          receiveShadow
          geometry={nodes.wheelbarrow.geometry}
          material={materials.Metal}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "wheelbarrow" }}
        />
        <mesh
          name="hat"
          castShadow
          receiveShadow
          geometry={nodes.hat.geometry}
          material={materials.Light_Beige}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "hat" }}
        />
        <mesh
          name="sunglasses"
          castShadow
          receiveShadow
          geometry={nodes.sunglasses.geometry}
          material={materials.Orange}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "sunglasses" }}
        />
        <mesh
          name="gloves"
          castShadow
          receiveShadow
          geometry={nodes.gloves.geometry}
          material={materials.Yellow}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "gloves" }}
        />
        <mesh
          name="clothes_apron"
          castShadow
          receiveShadow
          geometry={nodes.clothes_apron.geometry}
          material={materials.Light_Green}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "clothes_apron" }}
        />
        <mesh
          name="clothes_overall"
          castShadow
          receiveShadow
          geometry={nodes.clothes_overall.geometry}
          material={materials["Dark_Green.002"]}
          position={[-4.7984609604, 0.1672565788, -6.3391766548]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "clothes_overall" }}
        />
        <mesh
          name="big_branch"
          castShadow
          receiveShadow
          geometry={nodes.big_branch.geometry}
          material={materials["Dark_Brown.001"]}
          position={[4.4162707329, 0.1732034683, 0.1698027253]}
          rotation={[Math.PI / 2, 1.933e-7, 1.9198621088]}
          scale={[0.0099999988, 0.0099999988, 0.0099999998]}
          userData={{ name: "big branch" }}
        />
        <mesh
          name="screwdriver"
          castShadow
          receiveShadow
          geometry={nodes.screwdriver.geometry}
          material={materials.Metal}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "screwdriver" }}
        />
        <mesh
          name="grainBag"
          castShadow
          receiveShadow
          geometry={nodes.grainBag.geometry}
          material={materials.Beige}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "grainBag" }}
        />
        <mesh
          name="grainBag001"
          castShadow
          receiveShadow
          geometry={nodes.grainBag001.geometry}
          material={materials.Light_Beige}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "grainBag.001" }}
        />
        <mesh
          name="rake"
          castShadow
          receiveShadow
          geometry={nodes.rake.geometry}
          material={materials.Metal}
          position={[-5.5774559975, 1.3886176348, -8.3638486862]}
          rotation={[Math.PI / 2, -0.1450416884, -9.8e-9]}
          scale={0.0099999998}
          userData={{ name: "rake" }}
        />
        <mesh
          name="shovel"
          castShadow
          receiveShadow
          geometry={nodes.shovel.geometry}
          material={materials.Metal}
          position={[0.2705432773, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "shovel" }}
        />
        <mesh
          name="Scarecrow"
          castShadow
          receiveShadow
          geometry={nodes.Scarecrow.geometry}
          material={materials.Orange}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "Scarecrow" }}
        />
        <mesh
          name="soil"
          castShadow
          receiveShadow
          geometry={nodes.soil.geometry}
          material={materials["Dark_Brown.001"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0099999998}
          userData={{ name: "soil" }}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/game_assets/models/Garden_All_Merged-transformed.glb");

export default memo(Garden);
