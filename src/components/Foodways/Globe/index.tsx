import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { Marker } from "../Marker";

export const Globe = () => {
  const markerRef = useRef<Group>(null);
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
        <OrbitControls enableZoom={false} />
        <rectAreaLight position={[-3, 3, 3]} />
        <ambientLight intensity={0.3} />
        <mesh onClick={handleClick}>
          <sphereBufferGeometry args={[2.65, 32, 32]} />
          <meshBasicMaterial color="blue" wireframe />
        </mesh>
        <Marker ref={markerRef} />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/earth.glb");
