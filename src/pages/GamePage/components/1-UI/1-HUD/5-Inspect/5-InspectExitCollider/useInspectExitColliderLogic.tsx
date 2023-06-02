import { useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import {
  animateInspectExitColliderIn,
  animateInspectExitColliderOut,
} from "./InspectExitColliderAnimations";
import {
  UseInspectExitColliderLogicReturnTypes,
  UseInspectExitColliderLogicType,
} from "./InspectExitColliderTypes";

const useInspectExitColliderLogic: UseInspectExitColliderLogicType =
  (): UseInspectExitColliderLogicReturnTypes => {
    // Refs
    const inspectExitColliderRef: RefDivType = useRef(null);

    // Global State
    const { inspectActive, setInspectActive } = useGlobalState(
      (state) => ({
        inspectActive: state.inspectActive,
        setInspectActive: state.setInspectActive,
      }),
      shallow,
    );

    // Handlers
    const handleExitInspect = useCallback(() => {
      if (!inspectActive) return;
      if (!inspectExitColliderRef.current) return;

      setInspectActive(false);

      animateInspectExitColliderOut(inspectExitColliderRef.current, () => {
        if (!inspectExitColliderRef.current) return;
        inspectExitColliderRef.current.style.visibility = "hidden";
        inspectExitColliderRef.current.style.pointerEvents = "none";
      });
    }, [setInspectActive, inspectActive]);

    const handleRevealInspectExitCollider: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!inspectActive) return;
        if (!inspectExitColliderRef.current) return;
        inspectExitColliderRef.current.style.visibility = "visible";
        inspectExitColliderRef.current.style.pointerEvents = "auto";
        animateInspectExitColliderIn(inspectExitColliderRef.current);
      }, [inspectActive]);

    // Listers
    useEffect(handleRevealInspectExitCollider, [
      inspectActive,
      handleRevealInspectExitCollider,
    ]);

    return { inspectExitColliderRef, handleExitInspect };
  };

export { useInspectExitColliderLogic };
