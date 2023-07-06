import { FC, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import CreditsButtonBGSVG from "../13-SettingsSVGAssets/CreditsButtonBGSVG";
import CreditsButtonSVG from "../13-SettingsSVGAssets/CreditsButtonSVG";
import CreditsPressedSVG from "../13-SettingsSVGAssets/CreditsPressedSVG";
import CreditsButtonStyleContainer from "./CreditsButtonStyleContainer";

const CreditsButton: FC = () => {
  // Global State
  const { isCreditsPanelOpen, setIsCreditsPanelOpen } = useGlobalState(
    (state) => ({
      isCreditsPanelOpen: state.isCreditsPanelOpen,
      setIsCreditsPanelOpen: state.setIsCreditsPanelOpen,
    }),
    shallow,
  );

  // Handlers
  const handleSetIsCreditsPanelOpen: ConstantVoidFunctionType =
    useCallback((): void => {
      if (isCreditsPanelOpen) return;
      setIsCreditsPanelOpen(true);
    }, [isCreditsPanelOpen, setIsCreditsPanelOpen]);

  return (
    <CreditsButtonStyleContainer>
      <div className="credits-button-bg">
        <CreditsButtonBGSVG />
      </div>
      <button className="credits-btn" onClick={handleSetIsCreditsPanelOpen}>
        <div className="static">
          <CreditsButtonSVG />
        </div>
        <div className="pressed">
          <CreditsPressedSVG />
        </div>
      </button>
    </CreditsButtonStyleContainer>
  );
};

export default memo(CreditsButton);
