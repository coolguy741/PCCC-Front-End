import { FC, memo } from "react";
import SaveButtonBGSVG from "../4-SettingsSVGAssets/SaveButtonBGSVG";
import SaveButtonSVG from "../4-SettingsSVGAssets/SaveButtonSVG";
import SavePressedSVG from "../4-SettingsSVGAssets/SavePressedSVG";
import SaveStyleContainer from "./SaveStyleContainer";

const Save: FC = () => {
  return (
    <SaveStyleContainer>
      <div className="save-button-bg">
        <SaveButtonBGSVG />
      </div>
      <button className="save-btn">
        <div className="static">
          <SaveButtonSVG />
        </div>
        <div className="pressed">
          <SavePressedSVG />
        </div>
      </button>
    </SaveStyleContainer>
  );
};

export default memo(Save);
