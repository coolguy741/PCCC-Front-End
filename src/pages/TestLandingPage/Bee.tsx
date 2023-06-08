import { useAnimations, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  // TODO: Unknown Three.js Type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nodes: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  materials: any;
};

export function Bee({ pos }: any) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/bee.glb",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;
  const position = new THREE.Vector2();

  const calculateUnitSize = () => {
    const fov = 75;
    const cameraZ = 5;

    const vFov = (fov * Math.PI) / 180;

    const unitHeight = 2 * Math.tan(vFov / 2) * cameraZ;
    const unitWidth = unitHeight * aspect;

    return { unitWidth, unitHeight };
  };

  const { unitWidth, unitHeight } = calculateUnitSize();

  useEffect(() => {
    if (actions.Sunny_happyIdle) {
      actions.Sunny_happyIdle.play();
    }
  }, []);

  useEffect(() => {
    if (group.current) {
      gsap.to(group.current.position, {
        duration: 10,
        x: -(unitWidth / 2) + pos.x / unitWidth / 10,
        y: unitHeight / 2 - pos.y / unitHeight / 15,
        ease: "inout",
        delay: 1,
      });

      if (
        -(unitWidth / 2) + pos.x / unitWidth / 10 >
        group.current.position.x
      ) {
        gsap.to(group.current.rotation, {
          duration: 2,
          y: 0.5,
          ease: "inout",
        });
      } else {
        gsap.to(group.current.rotation, {
          duration: 2,
          y: -0.5,
          ease: "inout",
        });
      }

      if (unitHeight / 2 - pos.y / unitHeight / 15 > group.current.position.y) {
        gsap.to(group.current.rotation, {
          duration: 6,
          x: -0.5,
          ease: "inout",
        });
      } else {
        gsap.to(group.current.rotation, {
          duration: 6,
          x: 0.5,
          ease: "inout",
        });
      }
    }
  }, [pos]);

  return (
    <group ref={group} dispose={null} scale={[3, 3, 3]}>
      <group name="Scene">
        <group name="BeeArmature">
          <primitive object={nodes.root} />
          <primitive object={nodes.IK_hand_L} />
          <primitive object={nodes.IK_hand_R} />
          <primitive object={nodes.IK_foreFoot_L} />
          <primitive object={nodes.IK_foreFoot_R} />
          <primitive object={nodes.IK_hindFoot_L} />
          <primitive object={nodes.IK_hindFoot_R} />
          <primitive object={nodes.IK_antennaTip_L} />
          <primitive object={nodes.IK_antennaTip_R} />
          <primitive object={nodes.properties} />
          <primitive object={nodes.neutral_bone} />
          <group name="BeeBody">
            <skinnedMesh
              name="Cube017"
              geometry={nodes.Cube017.geometry}
              material={materials.body}
              skeleton={nodes.Cube017.skeleton}
            />
            <skinnedMesh
              name="Cube017_1"
              geometry={nodes.Cube017_1.geometry}
              material={materials.blackout}
              skeleton={nodes.Cube017_1.skeleton}
            />
            <skinnedMesh
              name="Cube017_2"
              geometry={nodes.Cube017_2.geometry}
              material={materials["Material.002"]}
              skeleton={nodes.Cube017_2.skeleton}
            />
            <skinnedMesh
              name="Cube017_3"
              geometry={nodes.Cube017_3.geometry}
              material={materials.cornea}
              skeleton={nodes.Cube017_3.skeleton}
            />
            <skinnedMesh
              name="Cube017_4"
              geometry={nodes.Cube017_4.geometry}
              material={materials["Material.001"]}
              skeleton={nodes.Cube017_4.skeleton}
            />
            <skinnedMesh
              name="Cube017_5"
              geometry={nodes.Cube017_5.geometry}
              material={materials.eyes}
              skeleton={nodes.Cube017_5.skeleton}
            />
            <skinnedMesh
              name="Cube017_6"
              geometry={nodes.Cube017_6.geometry}
              material={materials.tongue}
              skeleton={nodes.Cube017_6.skeleton}
            />
            <skinnedMesh
              name="Cube017_7"
              geometry={nodes.Cube017_7.geometry}
              material={materials.wings}
              skeleton={nodes.Cube017_7.skeleton}
            />
            <skinnedMesh
              name="Cube017_8"
              geometry={nodes.Cube017_8.geometry}
              material={materials.wingsSpeedLines}
              skeleton={nodes.Cube017_8.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/bee.glb");
