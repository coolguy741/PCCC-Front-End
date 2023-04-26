import { PerspectiveCamera, Sphere } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import {
  Fragment,
  memo,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import {
  CubicBezierCurve3,
  DoubleSide,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TubeGeometry,
  Vector3,
} from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";

const PlayerCamera = () => {
  // Refs
  const tubeRef: MutableRefObject<Mesh | null> = useRef(null);
  const ref: MutableRefObject<number> = useRef(0);
  const pos: MutableRefObject<Vector3> = useRef(
    new Vector3(-3.895013, 2.909739, 4.410319),
  );
  const done: MutableRefObject<boolean> = useRef(false);
  const laRef: MutableRefObject<Mesh | null> = useRef(null);

  // Global State
  const { activeCamera } = useGlobalState(
    (state) => ({
      activeCamera: state.activeCamera,
    }),
    shallow,
  );

  const { geo, mat, toolsGeo, shedGeo } = useMemo(() => {
    const GardenToHive = new CubicBezierCurve3(
      new Vector3(-3.895013, 2.909739, 4.410319),
      new Vector3(-2.423339, 2.977311, 3.233827),
      new Vector3(0.237769, -1.340426, 1.715937),
      new Vector3(0.882773, 0.655599, 0.807008),
    );

    const HiveToTools = new CubicBezierCurve3(
      new Vector3(-1.473415, 0.409478, -0.568148),
      new Vector3(-2.277086, 0.394055, 0.377746),
      new Vector3(0.511357, 0.207018, 1.255984),
      new Vector3(0.882773, 0.655599, 0.807008),
    );

    const Shed = new CubicBezierCurve3(
      new Vector3(1.211647, 0.411415, 2.962348),
      new Vector3(0.594354, 0.083283, 2.856155),
      new Vector3(0.62483, 0.690586, 1.772533),
      new Vector3(0.882773, 0.655599, 0.807008),
    );

    const geo = new TubeGeometry(GardenToHive, 100, 0.025, 8, false);
    const toolsGeo = new TubeGeometry(HiveToTools, 100, 0.025, 8, false);
    const shedGeo = new TubeGeometry(Shed, 100, 0.025, 8, false);

    const mat = new MeshStandardMaterial({
      color: "red",
      wireframe: false,
      side: DoubleSide,
    });
    const lA = new Vector3(0.882773, 0.355599, 0.807008);

    // const q = new Quaternion();

    return { geo, mat, toolsGeo, lA, shedGeo };
  }, []);

  const dampVector3 = useCallback(
    (target: Vector3, to: Vector3, step: number, delta: number) => {
      target.x = MathUtils.damp(target.x, to.x, step, delta);
      target.y = MathUtils.damp(target.y, to.y, step, delta);
      target.z = MathUtils.damp(target.z, to.z, step, delta);
    },
    [],
  );

  useFrame(({ camera, mouse }, delta) => {
    if (laRef.current && activeCamera === "PlayerCamera") {
      camera.lookAt(laRef.current.getWorldPosition(new Vector3()));
      // const e = new Euler(mouse.y * 0.1, mouse.x * -0.1, 0);
      // q.setFromEuler(e);
      // camera.quaternion.multiply(q);
    }

    if (activeCamera === "PlayerCamera") {
      pos.current.copy(geo.parameters.path.getPointAt(ref.current));
      if (camera.position !== pos.current) {
        dampVector3(camera.position, pos.current, 2, delta);
      }
    }
  });

  const camera = useThree((state) => state.camera);

  useEffect(() => {
    if (activeCamera === "PlayerCamera") {
      gsap.fromTo(
        ref,
        { current: 0 },
        {
          delay: 1,
          current: 1,
          duration: 5,
          onComplete: () => {
            done.current = true;
          },
          ease: "power3.inOut",
        },
      );
    }
  }, [activeCamera]);
  return (
    <Fragment>
      <mesh
        castShadow
        receiveShadow
        material={mat}
        geometry={shedGeo}
        visible={activeCamera === "OrbitControls" ? true : false}
      />

      <mesh
        castShadow
        receiveShadow
        material={mat}
        geometry={toolsGeo}
        visible={activeCamera === "OrbitControls" ? true : false}
      />

      <mesh
        castShadow
        receiveShadow
        ref={tubeRef}
        material={mat}
        geometry={geo}
        visible={activeCamera === "OrbitControls" ? true : false}
      />

      <Sphere
        ref={laRef}
        scale={0.05}
        position={[1.3563986156440468, 0.3706496237954682, 0.11039601948771649]}
      >
        <meshStandardMaterial color={"red"} />
      </Sphere>

      {activeCamera === "PlayerCamera" && (
        <PerspectiveCamera
          makeDefault={activeCamera === "PlayerCamera"}
          position={[-3.895013, 2.909739, 4.410319]}
        />
      )}
    </Fragment>
  );
};

export default memo(PlayerCamera);
