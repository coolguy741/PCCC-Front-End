import { TransformControls } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";

const loader = new GLTFLoader();

const DynamicEntity: FC = () => {
  // Local State
  const [gltfScene, setGltfScene] = useState<Group | null>(null);

  // Global State
  const { dynamicGLB } = useGlobalState(
    (state) => ({ dynamicGLB: state.dynamicGLB }),
    shallow,
  );

  // Hooks
  const { transformsVisible } = useControls({
    DynamicModel: folder({
      transformsVisible: true,
    }),
  });

  // Handlers
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
      showX={transformsVisible && dynamicGLB !== null}
      showY={transformsVisible && dynamicGLB !== null}
      showZ={transformsVisible && dynamicGLB !== null}
    >
      <group>{gltfScene && <primitive object={gltfScene} />}</group>
    </TransformControls>
  );
};

export default memo(DynamicEntity);
