import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import StaticSVGLoader from "../../../5-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import { SettingsTabSVG } from "../13-SettingsSVGAssets/SettingsTabSVG";
import { handleLanguageChangeAnimation } from "../14-SettingsAnimations/SettingsAnimations";
import SettingsTitleTabStyleContainer from "./SettingsTitleTabStyleContainer";

const SettingsTitleTab: FC = () => {
  // Refs
  const settingsTitleTabFrRef: RefDivType = useRef(null);
  const settingsTitleTabEngRef: RefDivType = useRef(null);

  // Global State
  const { activeLanguage } = useGlobalState(
    (state) => ({
      activeLanguage: state.activeLanguage,
    }),
    shallow,
  );

  // Handlers
  const handleLanguageChange: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!settingsTitleTabEngRef.current) return;
      if (!settingsTitleTabFrRef.current) return;

      handleLanguageChangeAnimation(
        settingsTitleTabEngRef.current,
        settingsTitleTabFrRef.current,
        activeLanguage,
      );
    }, [activeLanguage]);

  // Listeners
  useEffect(handleLanguageChange, [activeLanguage, handleLanguageChange]);

  return (
    <SettingsTitleTabStyleContainer>
      <div className="settings-svg-container">
        <StaticSVGLoader id="settings-svg" svgPath={SettingsTabSVG} />
      </div>
      <h1 ref={settingsTitleTabEngRef} className="settings-tab-text-eng">
        Settings
      </h1>
      <h1 ref={settingsTitleTabFrRef} className="settings-tab-text-fr">
        Options
      </h1>
    </SettingsTitleTabStyleContainer>
  );
};

export default memo(SettingsTitleTab);
