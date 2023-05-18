import { useGLTF } from "@react-three/drei";
import { folder, useControls } from "leva";
import { memo, useCallback, useEffect, useState } from "react";
import { Group, Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";

type GLTFResult = GLTF & {
  nodes: {
    Mesh001: Mesh;
    Mesh001_1: Mesh;
    Mesh001_2: Mesh;
    Mesh001_3: Mesh;
    Mesh001_4: Mesh;
    Mesh001_5: Mesh;
    Mesh001_6: Mesh;
    Mesh001_7: Mesh;
    Mesh001_8: Mesh;
    Mesh001_9: Mesh;
    Mesh001_10: Mesh;
    Mesh001_11: Mesh;
    Mesh001_12: Mesh;
    Mesh001_13: Mesh;
    Mesh001_14: Mesh;
    Mesh001_15: Mesh;
    Mesh001_16: Mesh;
    Mesh001_17: Mesh;
    Mesh001_18: Mesh;
    Mesh001_19: Mesh;
    Mesh001_20: Mesh;
    Mesh001_21: Mesh;
    Mesh001_22: Mesh;
    Mesh001_23: Mesh;
    Mesh001_24: Mesh;
  };
  materials: {
    ["Beige.002"]: MeshStandardMaterial;
    ["lambert2.001"]: MeshStandardMaterial;
    ["Dark_Brown.003"]: MeshStandardMaterial;
    ["Metal.002"]: MeshStandardMaterial;
    ["Brown.001"]: MeshStandardMaterial;
    ["Dark_Green.004"]: MeshStandardMaterial;
    ["Grey.001"]: MeshStandardMaterial;
    ["Light_Green.002"]: MeshStandardMaterial;
    ["Orange.002"]: MeshStandardMaterial;
    ["Light_Beige.002"]: MeshStandardMaterial;
    ["Glass.001"]: MeshStandardMaterial;
    ["Dark_Green.005"]: MeshStandardMaterial;
    ["Water.001"]: MeshStandardMaterial;
    ["farm_pack.001"]: MeshStandardMaterial;
    ["Red.001"]: MeshStandardMaterial;
    ["Yellow.001"]: MeshStandardMaterial;
  };
};

const loader = new GLTFLoader();

const Garden = (props: JSX.IntrinsicElements["group"]) => {
  // Local State
  const [gltfScene, setGltfScene] = useState<Group | null>(null);

  const { nodes, materials } = useGLTF(
    "/game_assets/models/pccc_garden_merged_v003-transformed.glb",
  ) as GLTFResult;

  // Global State
  const { setMenuActive, dynamicGarden } = useGlobalState(
    (state) => ({
      setMenuActive: state.setMenuActive,
      dynamicGarden: state.dynamicGarden,
    }),
    shallow,
  );

  const handleTempMenuExit = useCallback(() => {
    setMenuActive(false);
  }, [setMenuActive]);

  // Handlers
  const handleUpdateGLTFScene = useCallback(() => {
    if (!dynamicGarden) return;

    loader.parse(dynamicGarden, "", (gltf) => {
      setGltfScene(gltf.scene);
    });
  }, [dynamicGarden]);

  // Listeners
  useEffect(handleUpdateGLTFScene, [handleUpdateGLTFScene, dynamicGarden]);

  // Hooks
  const { gardenVisible } = useControls({
    gardenVisible: folder({
      gardenVisible: true,
    }),
  });

  return (
    <group visible={gardenVisible}>
      {gltfScene ? (
        <group>{gltfScene && <primitive object={gltfScene} />}</group>
      ) : (
        <group dispose={null} onClick={handleTempMenuExit}>
          <group
            name="MergedEnvironment001"
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0099999998, 0.0099999979, 0.0099999979]}
            userData={{ name: "MergedEnvironment.001" }}
          >
            <mesh
              name="Mesh001"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001.geometry}
              material={materials["Beige.002"]}
            />
            <mesh
              name="Mesh001_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_1.geometry}
              material={materials["lambert2.001"]}
            />
            <mesh
              name="Mesh001_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_2.geometry}
              material={materials["Dark_Brown.003"]}
            />
            <mesh
              name="Mesh001_3"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_3.geometry}
              material={materials["Metal.002"]}
            />
            <mesh
              name="Mesh001_4"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_4.geometry}
              material={materials["Brown.001"]}
            />
            <mesh
              name="Mesh001_5"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_5.geometry}
              material={materials["Dark_Green.004"]}
            />
            <mesh
              name="Mesh001_6"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_6.geometry}
              material={materials["Grey.001"]}
            />
            <mesh
              name="Mesh001_7"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_7.geometry}
              material={materials["Light_Green.002"]}
            />
            <mesh
              name="Mesh001_8"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_8.geometry}
              material={materials["Orange.002"]}
            />
            <mesh
              name="Mesh001_9"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_9.geometry}
              material={materials["Light_Beige.002"]}
            />
            <mesh
              name="Mesh001_10"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_10.geometry}
              material={materials["Glass.001"]}
            />
            <mesh
              name="Mesh001_11"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_11.geometry}
              material={materials["Dark_Green.005"]}
            />
            <mesh
              name="Mesh001_12"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_12.geometry}
              material={materials["Water.001"]}
            />
            <mesh
              name="Mesh001_13"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_13.geometry}
              material={materials["farm_pack.001"]}
            />
            <mesh
              name="Mesh001_14"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_14.geometry}
              material={materials["Red.001"]}
            />
            <mesh
              name="Mesh001_15"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_15.geometry}
              material={materials["Dark_Brown.003"]}
            />
            <mesh
              name="Mesh001_16"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_16.geometry}
              material={materials["Light_Green.002"]}
            />
            <mesh
              name="Mesh001_17"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_17.geometry}
              material={materials["Dark_Green.004"]}
            />
            <mesh
              name="Mesh001_18"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_18.geometry}
              material={materials["Metal.002"]}
            />
            <mesh
              name="Mesh001_19"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_19.geometry}
              material={materials["Yellow.001"]}
            />
            <mesh
              name="Mesh001_20"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_20.geometry}
              material={materials["Beige.002"]}
            />
            <mesh
              name="Mesh001_21"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_21.geometry}
              material={materials["Light_Beige.002"]}
            />
            <mesh
              name="Mesh001_22"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_22.geometry}
              material={materials["Orange.002"]}
            />
            <mesh
              name="Mesh001_23"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_23.geometry}
              material={materials["Dark_Green.004"]}
            />
            <mesh
              name="Mesh001_24"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_24.geometry}
              material={materials["Dark_Brown.003"]}
            />
          </group>
        </group>
      )}
    </group>
  );
};

useGLTF.preload("/game_assets/models/pccc_garden_merged_v003-transformed.glb");

export default memo(Garden);
