import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { forwardRef, Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Group, Vector3 } from "three";
import { GLTF } from "three-stdlib";
import { Marker } from "../Marker";

interface Props {
  disableMarker?: boolean;
}

type GLTFResult = GLTF & {
  nodes: {
    globe: THREE.Mesh;
  };
  materials: {
    foodways_mat: THREE.MeshStandardMaterial;
  };
};

const Scene = forwardRef<Group, Props>(({ disableMarker = false }, ref) => {
  const markerRef = useRef<Group>(null);
  const { nodes, materials } = useGLTF("/models/globe.glb") as GLTFResult;
  const [marker, setMarker] = useState({
    position: { x: 0, y: 0, z: 0 },
  });

  const handleClick = (e: any) => {
    if (disableMarker) return;

    const pos = new Vector3(
      e.intersections[0].point.x,
      e.intersections[0].point.y,
      e.intersections[0].point.z,
    );

    setMarker({
      position: pos,
    });

    if (markerRef.current) {
      markerRef.current.position.set(pos.x, pos.y, pos.z);
      markerRef.current.lookAt(new Vector3(0, 0, 0));
    }
  };

  return (
    <>
      <group dispose={null} ref={ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.globe.geometry}
          onClick={handleClick}
          scale={[8, 8, 8]}
          material={materials.foodways_mat}
        />
        <Marker ref={markerRef} />
      </group>
    </>
  );
});

export const Globe = ({
  disableDrag = false,
  disableSoftOrbit = false,
  disableMarker = false,
}: {
  disableDrag?: boolean;
  disableSoftOrbit?: boolean;
  disableMarker?: boolean;
}) => {
  const groupRef = useRef<Group>(null);

  // Rotate globe based on mouse position
  const handleMouseMove = (e: any) => {
    const x = e.clientX;
    const y = e.clientY;

    if (groupRef.current) {
      if (disableSoftOrbit) return;

      gsap.to(groupRef.current.rotation, {
        x: ((y / 80) * Math.PI) / 180,
        y: ((x / 80) * Math.PI) / 180,
        duration: 3,

        ease: "power4.out",
      });
    }
  };

  return (
    <Canvas style={{ height: "100%" }} onMouseMove={handleMouseMove}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} enabled={!disableDrag} />
        <rectAreaLight position={[-3, 3, 3]} />
        <ambientLight intensity={2} />
        <Scene ref={groupRef} disableMarker={disableMarker} />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/models/globe.glb");
