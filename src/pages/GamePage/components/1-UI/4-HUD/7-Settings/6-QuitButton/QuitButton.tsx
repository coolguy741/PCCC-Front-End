import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import QuitButtonBGSVG from "../13-SettingsSVGAssets/QuitButtonBGSVG";
import QuitButtonSVG from "../13-SettingsSVGAssets/QuitButtonSVG";
import QuitPressedSVG from "../13-SettingsSVGAssets/QuitPressedSVG";
import { handleLanguageChangeAnimation } from "../14-SettingsAnimations/SettingsAnimations";
import QuitButtonStyleContainer from "./QuitButtonStyleContainer";

const QuitButton: FC = () => {
  // Refs
  const quitButtonTextEngRef: RefDivType = useRef(null);
  const quitButtonTextFrRef: RefDivType = useRef(null);

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
  const handleOpenQuitPanel: ConstantVoidFunctionType =
    useCallback((): void => {
      if (isQuitPanelOpen) return;
      setIsQuitPanelOpen(true);
    }, [isQuitPanelOpen, setIsQuitPanelOpen]);

  const handleLanguageChange: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!quitButtonTextEngRef.current) return;
      if (!quitButtonTextFrRef.current) return;

      handleLanguageChangeAnimation(
        quitButtonTextEngRef.current,
        quitButtonTextFrRef.current,
        activeLanguage,
      );
    }, [activeLanguage]);

  // Listeners
  useEffect(handleLanguageChange, [activeLanguage, handleLanguageChange]);

  return (
    <QuitButtonStyleContainer>
      <div className="quit-button-bg">
        <QuitButtonBGSVG />
      </div>
      <button className="quit-btn" onClick={handleOpenQuitPanel}>
        <div className="static">
          <QuitButtonSVG />
        </div>
        <div className="quit-btn-text">
          <h1 ref={quitButtonTextEngRef} className="quit-btn-text-eng">
            Quit
          </h1>
          <h1 ref={quitButtonTextFrRef} className="quit-btn-text-fr">
            Quitter
          </h1>
        </div>
        <div className="pressed">
          <QuitPressedSVG />
        </div>
      </button>
    </QuitButtonStyleContainer>
  );
};

export default memo(QuitButton);
