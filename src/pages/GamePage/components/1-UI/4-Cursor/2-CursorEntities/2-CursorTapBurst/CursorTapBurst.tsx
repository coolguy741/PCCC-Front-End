import { gsap } from "gsap";
import { FC, memo, useCallback, useEffect } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { tapBurstGeometry, tapBurstMaterial } from "./CursorTapBurstDefines";

const tL = gsap.timeline();

const CursorTapBurst: FC = () => {
  // Global State
  const { isCursorDown } = useGlobalState(
    (state) => ({
      isCursorDown: state.isCursorDown,
    }),
    shallow,
  );

  // Handlers
  const handleTapBurstOnClick = useCallback((): void => {
    if (isCursorDown) {
      tL.fromTo(
        tapBurstMaterial.uniforms.uTime,
        { value: -3 },
        {
          value: 0.4,
          duration: 0.15,
          overwrite: true,
        },
      );
      tL.to(tapBurstMaterial.uniforms.uTime, {
        value: -3,
        duration: 0.15,
      });
    }
  }, [isCursorDown]);

  // Listeners
  useEffect(handleTapBurstOnClick, [isCursorDown, handleTapBurstOnClick]);

  return (
    <mesh
      scale={0.5}
      rotation={[0, 0, 0.14]}
      material={tapBurstMaterial}
      geometry={tapBurstGeometry}
      position={[-0.28, 0.48, -1]}
    />
  );
};

export default memo(CursorTapBurst);
