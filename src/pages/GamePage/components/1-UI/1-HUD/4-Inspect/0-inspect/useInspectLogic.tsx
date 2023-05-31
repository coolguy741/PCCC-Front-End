import { useCallback, useEffect, useRef, useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import {
  animateInspectModalIn,
  animateInspectModalOut,
} from "./InspectAnimations";
import {
  UseInspectLogicReturnTypes,
  UseInspectLogicType,
} from "./InspectTypes";

const useInspectLogic: UseInspectLogicType = (): UseInspectLogicReturnTypes => {
  // Refs
  const inspectModalRef: RefDivType = useRef(null);

  // Local State
  const [inspectModalIsShowing, setInspectModalIsShowing] = useState(false);

  // Global State
  const { inspectActive } = useGlobalState(
    (state) => ({
      inspectActive: state.inspectActive,
    }),
    shallow,
  );

  // Handlers
  const handleRevealHideInspectModal: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!inspectModalRef.current) return;

      if (inspectActive && !inspectModalIsShowing) {
        inspectModalRef.current.style.visibility = "visible";
        setInspectModalIsShowing(true);
        animateInspectModalIn(inspectModalRef.current);
      }

      if (!inspectActive && inspectModalIsShowing) {
        animateInspectModalOut(inspectModalRef.current, () => {
          if (!inspectModalRef.current) return;
          inspectModalRef.current.style.visibility = "hidden";
          setInspectModalIsShowing(false);
        });
      }
    }, [inspectActive, inspectModalIsShowing, setInspectModalIsShowing]);

  // Listeners
  useEffect(handleRevealHideInspectModal, [
    inspectActive,
    handleRevealHideInspectModal,
  ]);
  return { inspectModalRef };
};

export { useInspectLogic };
