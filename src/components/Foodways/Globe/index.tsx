import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { GLTF } from "three-stdlib";
import { Marker } from "../Marker";

type GLTFResult = GLTF & {
  nodes: {
    globe: THREE.Mesh;
  };
  materials: {
    foodways_mat: THREE.MeshStandardMaterial;
  };
};

export const Globe = () => {
  const markerRef = useRef<Group>(null);
  const { nodes, materials } = useGLTF("/models/globe.glb") as GLTFResult;
  const [marker, setMarker] = useState({
    position: { x: 0, y: 0, z: 0 },
  });

  const handleClick = (e: any) => {
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
    <Canvas style={{ height: "100%" }}>
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          onClick={(e) => e.stopPropagation()}
        />
        <rectAreaLight position={[-3, 3, 3]} />
        <ambientLight intensity={2} />
        <group dispose={null} scale={[8, 8, 8]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.globe.geometry}
            onClick={handleClick}
            material={materials.foodways_mat}
          />
        </group>
        <Marker ref={markerRef} />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/models/globe.glb");
