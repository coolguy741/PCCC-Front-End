import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { RefBooleanType } from "../../../../../shared/Types/RefTypes";
import { animateCursorTapBurst } from "./CursorTapBurstAnimations";
import { tapBurstGeometry, tapBurstMaterial } from "./CursorTapBurstDefines";

const CursorTapBurst: FC = () => {
  // Refs
  const tapBurstAnimAllowedRef: RefBooleanType = useRef(false);
  // Global State
  const { isCursorDown, isHoveringEntity } = useGlobalState(
    (state) => ({
      isCursorDown: state.isCursorDown,
      isHoveringEntity: state.isHoveringEntity,
    }),
    shallow,
  );

  // Handlers
  const handleTapBurstOnClick = useCallback((): void => {
    if (isCursorDown && isHoveringEntity) {
      tapBurstAnimAllowedRef.current = true;
    }

    if (!isCursorDown && tapBurstAnimAllowedRef.current) {
      animateCursorTapBurst(tapBurstMaterial);
      tapBurstAnimAllowedRef.current = false;
    }
  }, [isCursorDown, isHoveringEntity]);

  // Listeners
  useEffect(handleTapBurstOnClick, [isCursorDown, handleTapBurstOnClick]);

  return (
    <mesh
      scale={0.7}
      rotation={[0, 0, 0.14]}
      material={tapBurstMaterial}
      geometry={tapBurstGeometry}
      position={[-0.28, 0.48, -1]}
    />
  );
};

export default memo(CursorTapBurst);
