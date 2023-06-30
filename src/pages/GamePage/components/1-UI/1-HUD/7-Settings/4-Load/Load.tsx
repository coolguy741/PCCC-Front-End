import { FC, memo } from "react";
import LoadButtonBGSVG from "../4-SettingsSVGAssets/LoadButtonBGSVG";
import LoadButtonSVG from "../4-SettingsSVGAssets/LoadButtonSVG";
import LoadPressedSVG from "../4-SettingsSVGAssets/LoadPressedSVG";
import LoadStyleContainer from "./LoadStyleContainer";

const Load: FC = () => {
  return (
    <LoadStyleContainer>
      <div className="load-button-bg">
        <LoadButtonBGSVG />
      </div>
      <button className="load-btn">
        <div className="static">
          <LoadButtonSVG />
        </div>
        <div className="pressed">
          <LoadPressedSVG />
        </div>
      </button>
    </LoadStyleContainer>
  );
};

export default memo(Load);
