import { gsap } from "gsap";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import ExitButton from "../9-ExitButton/ExitButton";
import CreditsPanelStyleContainer from "./CreditsPanelStyleContainer";

const CreditsPanel: FC = () => {
  // Refs
  const creditsPanelRef: RefDivType = useRef(null);

  // Global State
  const { isCreditsPanelOpen, setIsCreditsPanelOpen } = useGlobalState(
    (state) => ({
      isCreditsPanelOpen: state.isCreditsPanelOpen,
      setIsCreditsPanelOpen: state.setIsCreditsPanelOpen,
    }),
    shallow,
  );

  // Handlers
  const handleCreditsExitButton: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!isCreditsPanelOpen) return;
      if (!creditsPanelRef.current) return;

      gsap.to(creditsPanelRef.current, {
        x: 500,
        opacity: 0,
        duration: 0.5,
        overwrite: true,
        ease: BACK_1_OUT,
        onComplete: () => {
          if (!creditsPanelRef.current) return;
          setIsCreditsPanelOpen(false);
          creditsPanelRef.current.style.visibility = "hidden";
          creditsPanelRef.current.style.pointerEvents = "none";
        },
      });
    }, [isCreditsPanelOpen, setIsCreditsPanelOpen]);

  const handleShowCreditsPanel: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!isCreditsPanelOpen) return;
      if (!creditsPanelRef.current) return;

      creditsPanelRef.current.style.visibility = "visible";
      creditsPanelRef.current.style.pointerEvents = "auto";

      gsap.fromTo(
        creditsPanelRef.current,
        {
          x: 500,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          overwrite: true,
          ease: BACK_1_OUT,
        },
      );
    }, [isCreditsPanelOpen]);

  // Listeners
  useEffect(handleShowCreditsPanel, [
    isCreditsPanelOpen,
    handleShowCreditsPanel,
  ]);

  return (
    <CreditsPanelStyleContainer ref={creditsPanelRef}>
      <div className="credits-panel-bg">
        <img
          alt="credits"
          draggable={false}
          src="/game_assets/ui_images/settings/credits_panel_bg.webp"
        />
      </div>
      <div className="credits-content">Credits</div>
      <div className="credits-exit-button">
        <ExitButton exitAction={handleCreditsExitButton} />
      </div>
    </CreditsPanelStyleContainer>
  );
};

export default memo(CreditsPanel);
