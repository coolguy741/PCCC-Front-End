import { TransformControls } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { Euler, Group, Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { RefGroupType } from "../../../shared/Types/RefTypes";

const loader = new GLTFLoader();

const dynamicGLBWorldPos = new Vector3();
const dynamicGLBWorldScale = new Vector3();

const dynamicGLBWorldQuat = new Quaternion();
const dynamicGLBWorldEul = new Euler();

const DynamicEntity: FC = () => {
  // Refs
  const dynamicGLBRef: RefGroupType = useRef(null);

  // Local State
  const [gltfScene, setGltfScene] = useState<Group | null>(null);

  // Global State
  const { dynamicGLB } = useGlobalState(
    (state) => ({ dynamicGLB: state.dynamicGLB }),
    shallow,
  );

  // Hooks
  const { transformsVisible, mode } = useControls({
    DynamicModel: folder({
      transformsVisible: true,
      mode: {
        value: 0,
        min: 0,
        max: 2,
        step: 1,
      },
    }),
  });

  // Handlers
  const handleLogLightPos = useCallback(() => {
    if (!dynamicGLBRef.current) return;

    const newPos = dynamicGLBRef.current.getWorldPosition(dynamicGLBWorldPos);
    const newRot =
      dynamicGLBRef.current.getWorldQuaternion(dynamicGLBWorldQuat);
    dynamicGLBWorldEul.setFromQuaternion(newRot);
    dynamicGLBRef.current.getWorldScale(dynamicGLBWorldScale);
    console.clear();
    console.log(
      "dynamicGLBPosition:",
      "x:",
      newPos.x,
      "y:",
      newPos.y,
      "z:",
      newPos.z,
    );
    console.log(
      "dynamicGLBRotation:",
      "x:",
      dynamicGLBWorldEul.x,
      "y:",
      dynamicGLBWorldEul.y,
      "z:",
      dynamicGLBWorldEul.z,
    );
    console.log(
      "dynamicGLBScale:",
      "x:",
      dynamicGLBWorldScale.x,
      "y:",
      dynamicGLBWorldScale.y,
      "z:",
      dynamicGLBWorldScale.z,
    );
  }, []);

  const handleUpdateGLTFScene = useCallback(() => {
    if (!dynamicGLB) return;

    loader.parse(dynamicGLB, "", (gltf) => {
      setGltfScene(gltf.scene);
    });
  }, [dynamicGLB]);

  // Listeners
  useEffect(handleUpdateGLTFScene, [handleUpdateGLTFScene, dynamicGLB]);

  return (
    <TransformControls
      position={[0, 1, 1]}
      onMouseUp={handleLogLightPos}
      mode={mode === 0 ? "translate" : mode === 1 ? "rotate" : "scale"}
      showX={transformsVisible && dynamicGLB !== null}
      showY={transformsVisible && dynamicGLB !== null}
      showZ={transformsVisible && dynamicGLB !== null}
    >
      <group>
        {gltfScene && <primitive ref={dynamicGLBRef} object={gltfScene} />}
      </group>
    </TransformControls>
  );
};

export default memo(DynamicEntity);
