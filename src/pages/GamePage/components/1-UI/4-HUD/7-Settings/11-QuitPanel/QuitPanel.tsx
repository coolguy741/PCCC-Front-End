import { gsap } from "gsap";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import QuitNoSVG from "../13-SettingsSVGAssets/QuitNoSVG";
import QuitPanelPagesSVG from "../13-SettingsSVGAssets/QuitPanelPagesSVG";
import QuitYesSVG from "../13-SettingsSVGAssets/QuitYesSVG";
import ExitButton from "../9-ExitButton/ExitButton";
import QuitPanelStyleContainer from "./QuitPanelStyleContainer";

const QuitPanel: FC = () => {
  // Refs
  const quitPanelRef: RefDivType = useRef(null);

  // Global State
  const { activeLanguage, isQuitPanelOpen, setIsQuitPanelOpen } =
    useGlobalState(
      (state) => ({
        activeLanguage: state.activeLanguage,
        isQuitPanelOpen: state.isQuitPanelOpen,
        setIsQuitPanelOpen: state.setIsQuitPanelOpen,
      }),
      shallow,
    );

  // Handlers
  const handleQuitExitButton: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!isQuitPanelOpen) return;
      if (!quitPanelRef.current) return;
      gsap.to(quitPanelRef.current, {
        opacity: 0,
        duration: 0.25,
        overwrite: true,
        ease: BACK_1_OUT,
        onComplete: () => {
          if (!quitPanelRef.current) return;
          setIsQuitPanelOpen(false);
          quitPanelRef.current.style.visibility = "hidden";
        },
      });
    }, [isQuitPanelOpen, setIsQuitPanelOpen]);

  const handleOpenQuitPanel: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!isQuitPanelOpen) return;
      if (!quitPanelRef.current) return;

      quitPanelRef.current.style.visibility = "visible";
      gsap.fromTo(
        quitPanelRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.25,
          overwrite: true,
          ease: BACK_1_OUT,
        },
      );
    }, [isQuitPanelOpen]);

  // Listeners
  useEffect(handleOpenQuitPanel, [handleOpenQuitPanel, isQuitPanelOpen]);

  return (
    <QuitPanelStyleContainer ref={quitPanelRef}>
      <div className="quit-panel-bg">
        <img
          alt="quit"
          draggable={false}
          src="/game_assets/ui_images/settings/quit_panel_bg.webp"
        />
      </div>
      <div className="quit-content">
        <div className="quit-header">
          <div className="quit-pages">
            <QuitPanelPagesSVG />
          </div>
          <div className="quit-copy">
            {activeLanguage === "eng"
              ? "Are you sure you want to quit"
              : "Êtes-vous sûr de vouloir quitter"}
          </div>
        </div>

        <div className="quit-btns">
          <button className="yes-quit-btn">
            <div className="quit-yes-svg">
              <QuitYesSVG />
            </div>
            <h1 className="quit-yes-text">
              {activeLanguage === "eng" ? "Yes" : "Oui"}
            </h1>
          </button>
          <button className="no-quit-btn">
            <div className="quit-no-svg">
              <QuitNoSVG />
            </div>
            <h1 className="quit-no-text">
              {activeLanguage === "eng" ? "No" : "Non"}
            </h1>
          </button>
        </div>
      </div>

      <div className="quit-exit-button">
        <ExitButton exitAction={handleQuitExitButton} />
      </div>
    </QuitPanelStyleContainer>
  );
};

export default memo(QuitPanel);
