import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { FC, Fragment, memo, useLayoutEffect } from "react";
import ToolRack from "../1-ToolRack/0-ToolRack/ToolRack";
import {
  gardenColorMultiplier,
  gardenMaterial,
  gardenMaterialOBC,
} from "./GardenDefines";
import { GardenGLTF } from "./GardenTypes";

const Garden: FC = () => {
  // Load GLTF
  const { nodes } = useGLTF(
    "/game_assets/models/garden_v008-transformed.glb",
  ) as GardenGLTF;

  // Hooks
  const { enable, intensity, aoIntensity, colorMultiplier } = useControls({
    garden: folder(
      {
        colorMultiplier: { r: 255, b: 255, g: 255 },
        aoIntensity: {
          value: 1,
          min: 0,
          max: 1.5,
          step: 0.000001,
        },
      },
      { collapsed: true },
    ),
    shadows: folder(
      {
        enable: true,
      },
      { collapsed: true },
    ),
    HDR: folder(
      {
        intensity: {
          value: 1.5,
          min: 0,
          max: 5,
          step: 0.0001,
        },
      },
      { collapsed: true },
    ),
  });

  useLayoutEffect(() => {
    gardenMaterial.onBeforeCompile = gardenMaterialOBC;
  }, []);

  useFrame(() => {
    gardenColorMultiplier.set(
      colorMultiplier.r / 255,
      colorMultiplier.g / 255,
      colorMultiplier.b / 255,
    );

    if (gardenMaterial.userData.shader) {
      gardenMaterial.userData.shader.uniforms.uMultiplier.value =
        gardenColorMultiplier;
      gardenMaterial.userData.shader.uniforms.uAOMultiplier.value = aoIntensity;
      gardenMaterial.envMapIntensity = intensity;
    }
  });

  return (
    <Fragment>
      <group name="Armature" userData={{ name: "Armature" }}>
        <primitive object={nodes.root_bone} />
        <ToolRack nodes={nodes} />
        <skinnedMesh
          name="garden"
          castShadow={enable}
          receiveShadow={enable}
          material={gardenMaterial}
          geometry={nodes.garden.geometry}
          skeleton={nodes.garden.skeleton}
          userData={{ name: "garden" }}
        />
      </group>
    </Fragment>
  );
};

useGLTF.preload("/game_assets/models/garden_v008-transformed.glb");

export default memo(Garden);
