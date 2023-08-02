import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import SaveButtonBGSVG from "../13-SettingsSVGAssets/SaveButtonBGSVG";
import SaveButtonSVG from "../13-SettingsSVGAssets/SaveButtonSVG";
import SavePressedSVG from "../13-SettingsSVGAssets/SavePressedSVG";
import { handleLanguageChangeAnimation } from "../14-SettingsAnimations/SettingsAnimations";
import SaveButtonStyleContainer from "./SaveButtonStyleContainer";

const SaveButton: FC = () => {
  // Refs
  const saveButtonTextEngRef: RefDivType = useRef(null);
  const saveButtonTextFrRef: RefDivType = useRef(null);

  // Global State
  const { activeLanguage, isGameSaved, setIsGameSaved } = useGlobalState(
    (state) => ({
      isGameSaved: state.isGameSaved,
      setIsGameSaved: state.setIsGameSaved,
      activeLanguage: state.activeLanguage,
    }),
    shallow,
  );

  // Handlers
  const handleSetIsGameSaved = useCallback(() => {
    if (isGameSaved) return;
    setIsGameSaved(true);
  }, [isGameSaved, setIsGameSaved]);

  // Handlers
  const handleLanguageChange: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!saveButtonTextEngRef.current) return;
      if (!saveButtonTextFrRef.current) return;

      handleLanguageChangeAnimation(
        saveButtonTextEngRef.current,
        saveButtonTextFrRef.current,
        activeLanguage,
      );
    }, [activeLanguage]);

  // Listeners
  useEffect(handleLanguageChange, [activeLanguage, handleLanguageChange]);

  return (
    <SaveButtonStyleContainer>
      <div className="save-button-bg">
        <SaveButtonBGSVG />
      </div>
      <button className="save-btn" onClick={handleSetIsGameSaved}>
        <div className="static">
          <SaveButtonSVG />
        </div>
        <div className="save-btn-text">
          <h1 ref={saveButtonTextEngRef} className="save-btn-text-eng">
            Save
          </h1>
          <h1 ref={saveButtonTextFrRef} className="save-btn-text-fr">
            Sauver
          </h1>
        </div>
        <div className="pressed">
          <SavePressedSVG />
        </div>
      </button>
    </SaveButtonStyleContainer>
  );
};

export default memo(SaveButton);
