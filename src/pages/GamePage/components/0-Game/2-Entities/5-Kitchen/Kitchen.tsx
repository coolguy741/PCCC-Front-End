import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { memo, useLayoutEffect } from "react";
import { Mesh } from "three";
import { GLTF } from "three-stdlib";
import {
  kitchenColorMultiplier,
  kitchenMaterial,
  kitchenMaterialOBC,
} from "./KitchenDefines";

type GLTFResult = GLTF & {
  nodes: {
    Mesh001: Mesh;
  };
};

const KitchenDebug = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(
    "/game_assets/models/kitchen_size_placed-transformed.glb",
  ) as GLTFResult;

  // Hooks
  const { enable, intensity, aoIntensity, colorMultiplier } = useControls({
    kitchen: folder(
      {
        colorMultiplier: { r: 223, b: 238, g: 255 },
        aoIntensity: {
          value: 0.75,
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
    kitchenMaterial.onBeforeCompile = kitchenMaterialOBC;
  }, []);

  useFrame(() => {
    kitchenColorMultiplier.set(
      colorMultiplier.r / 255,
      colorMultiplier.g / 255,
      colorMultiplier.b / 255,
    );

    if (kitchenMaterial.userData.shader) {
      kitchenMaterial.userData.shader.uniforms.uMultiplier.value =
        kitchenColorMultiplier;
      kitchenMaterial.userData.shader.uniforms.uAOMultiplier.value =
        aoIntensity;
      kitchenMaterial.envMapIntensity = intensity;
    }
  });

  return (
    <mesh
      name="Mesh001"
      castShadow={enable}
      receiveShadow={enable}
      geometry={nodes.Mesh001.geometry}
      material={kitchenMaterial}
      position={[0.4628995657, 0.9749501348, -2.3889021873]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[0.0033281634, 0.0033281639, 0.0033281639]}
      userData={{ name: "Mesh.001" }}
    />
  );
};

useGLTF.preload("/game_assets/models/kitchen_size_placed-transformed.glb");

export default memo(KitchenDebug);
