import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import LoadButtonBGSVG from "../13-SettingsSVGAssets/LoadButtonBGSVG";
import LoadButtonSVG from "../13-SettingsSVGAssets/LoadButtonSVG";
import LoadPressedSVG from "../13-SettingsSVGAssets/LoadPressedSVG";
import { handleLanguageChangeAnimation } from "../14-SettingsAnimations/SettingsAnimations";
import LoadButtonStyleContainer from "./LoadButtonStyleContainer";

const LoadButton: FC = () => {
  // Refs
  const loadButtonTextEngRef: RefDivType = useRef(null);
  const loadButtonTextFrRef: RefDivType = useRef(null);

  // Global State
  const { activeLanguage, isLoadPanelOpen, setIsLoadPanelOpen } =
    useGlobalState(
      (state) => ({
        activeLanguage: state.activeLanguage,
        isLoadPanelOpen: state.isLoadPanelOpen,
        setIsLoadPanelOpen: state.setIsLoadPanelOpen,
      }),
      shallow,
    );

  // Handlers
  const handleOpenLoadPanel: ConstantVoidFunctionType =
    useCallback((): void => {
      if (isLoadPanelOpen) return;
      setIsLoadPanelOpen(true);
    }, [isLoadPanelOpen, setIsLoadPanelOpen]);

  const handleLanguageChange: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!loadButtonTextEngRef.current) return;
      if (!loadButtonTextFrRef.current) return;

      handleLanguageChangeAnimation(
        loadButtonTextEngRef.current,
        loadButtonTextFrRef.current,
        activeLanguage,
      );
    }, [activeLanguage]);

  // Listeners
  useEffect(handleLanguageChange, [activeLanguage, handleLanguageChange]);

  return (
    <LoadButtonStyleContainer onClick={handleOpenLoadPanel}>
      <div className="load-button-bg">
        <LoadButtonBGSVG />
      </div>
      <div className="load-btn">
        <div className="static">
          <LoadButtonSVG />
        </div>
        <div className="load-btn-text">
          <h1 ref={loadButtonTextEngRef} className="load-btn-text-eng">
            Load
          </h1>
          <h1 ref={loadButtonTextFrRef} className="load-btn-text-fr">
            Charger
          </h1>
        </div>
        <div className="pressed">
          <LoadPressedSVG />
        </div>
      </div>
    </LoadButtonStyleContainer>
  );
};

export default memo(LoadButton);
