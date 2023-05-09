/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 pccc_rig_test_noAnim_v2.glb --transform --precision=10 --shadows --keepnames --meta --types
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    object_1_collider: THREE.Mesh
    object_0_collider: THREE.Mesh
    object_combined_SkinnedMesh_0: THREE.SkinnedMesh
    root_bone: THREE.Bone
  }
  materials: {
    object_combined_material: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/pccc_rig_test_noAnim_v2-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <skinnedMesh name="object_combined_SkinnedMesh_0" geometry={nodes.object_combined_SkinnedMesh_0.geometry} material={materials.object_combined_material} skeleton={nodes.object_combined_SkinnedMesh_0.skeleton} userData={{ name: 'object_combined_SkinnedMesh_0' }} />
      <primitive object={nodes.root_bone} />
    </group>
  )
}

useGLTF.preload('/pccc_rig_test_noAnim_v2-transformed.glb')
