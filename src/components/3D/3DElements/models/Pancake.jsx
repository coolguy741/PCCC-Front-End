/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
created: Wed May 11 14:15:26 2022
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
const path = "/assets/glb/pancakes_PanAction.glb"

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(path);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.butter_1.geometry}
        material={nodes.butter_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blueberry_01_1.geometry}
        material={nodes.blueberry_01_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blueberry_02_1.geometry}
        material={nodes.blueberry_02_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blueberry_03_1.geometry}
        material={nodes.blueberry_03_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blueberry_04_1.geometry}
        material={nodes.blueberry_04_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blueberry_05_1.geometry}
        material={nodes.blueberry_05_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blueberry_06_1.geometry}
        material={nodes.blueberry_06_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pancake_01_1.geometry}
        material={nodes.pancake_01_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pancake_02_1.geometry}
        material={nodes.pancake_02_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pan_1.geometry}
        material={nodes.pan_1.material}
      />
    </group>
  );
}

useGLTF.preload(path);
