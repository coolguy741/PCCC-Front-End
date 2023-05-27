import { FC, memo } from "react";
import StaticSVGLoader from "../../../3-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import { InventoryEquippedBGSVG } from "../6-InventorySVGAssets/InventoryEquippedBGSVG";
import { InventoryEquippedBodySVG } from "../6-InventorySVGAssets/InventoryEquippedBodySVG";
import { InventoryEquippedEyeSVG } from "../6-InventorySVGAssets/InventoryEquippedEyeSVG";
import { InventoryEquippedHandsSVG } from "../6-InventorySVGAssets/InventoryEquippedHandsSVG";
import { InventoryEquippedHeadSVG } from "../6-InventorySVGAssets/InventoryEquippedHeadSVG";
import EquippedStyleContainer from "./EquippedStyleContainer";

const Equipped: FC = () => {
  return (
    <EquippedStyleContainer>
      <div className="equipped-bg">
        <StaticSVGLoader
          id="equipped-bg-svg"
          svgPath={InventoryEquippedBGSVG}
        />
      </div>
      <div className="equipped-content-container">
        <h1 className="equipped-title">Equipped</h1>
        <div className="equipped-items">
          <div className="equipped-item">
            <StaticSVGLoader
              id="equipped-head-svg"
              svgPath={InventoryEquippedHeadSVG}
            />
          </div>
          <hr className="equipped-break-line" />
          <div className="equipped-item">
            <StaticSVGLoader
              id="equipped-eye-svg"
              svgPath={InventoryEquippedEyeSVG}
            />
          </div>
          <hr className="equipped-break-line" />
          <div className="equipped-item">
            <StaticSVGLoader
              id="equipped-hand-svg"
              svgPath={InventoryEquippedHandsSVG}
            />
          </div>
          <hr className="equipped-break-line" />
          <div className="equipped-item">
            <StaticSVGLoader
              id="equipped-body-svg"
              svgPath={InventoryEquippedBodySVG}
            />
          </div>
        </div>
      </div>
    </EquippedStyleContainer>
  );
};

export default memo(Equipped);
