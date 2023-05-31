import { useCallback, useEffect } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../../shared/Types/DefineTypes";
import { animateCursorTapBurst } from "./CursorTapBurstAnimations";
import { tapBurstMaterial } from "./CursorTapBurstDefines";

const useCursorTapBurstLogic: ConstantVoidFunctionType = (): void => {
  // Global State
  const { menuActive } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
    }),
    shallow,
  );

  // Handlers
  const handleTapBurstOnClick: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!menuActive) return;
      animateCursorTapBurst(tapBurstMaterial);
    }, [menuActive]);

  // useFrame((state: RootState, delta: number) => {
  //   if (tapBurstMaterial.uniforms.uTime.value >= 1) {
  //     tapBurstMaterial.uniforms.uTime.value = 0;
  //   }
  //   tapBurstMaterial.uniforms.uTime.value += delta;
  // });

  // Listeners
  useEffect(handleTapBurstOnClick, [menuActive, handleTapBurstOnClick]);
};

export { useCursorTapBurstLogic };
