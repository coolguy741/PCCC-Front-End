import { useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { RefBooleanType } from "../../../../../shared/Types/RefTypes";
import { animateCursorTapBurst } from "./CursorTapBurstAnimations";
import { tapBurstMaterial } from "./CursorTapBurstDefines";

const useCursorTapBurstLogic = () => {
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
};

export { useCursorTapBurstLogic };
