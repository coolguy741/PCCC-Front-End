import { FC, memo } from "react";
import StaticSVGLoader from "../../../5-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import { InventoryEquippedBGSVG } from "../6-InventorySVGAssets/InventoryEquippedBGSVG";
import { InventoryEquippedBodySVG } from "../6-InventorySVGAssets/InventoryEquippedBodySVG";
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
        <div className="equipped-title">
          <div className="equipped-title-spacer" />
          <h1 className="equipped-title-text">Equipped</h1>
        </div>
        <div className="equipped-items">
          <div className="equipped-item">
            <StaticSVGLoader
              id="equipped-head-svg"
              svgPath={InventoryEquippedHeadSVG}
            />
          </div>
          <div className="equipped-item">
            <StaticSVGLoader
              id="equipped-hand-svg"
              svgPath={InventoryEquippedHandsSVG}
            />
          </div>
          <div className="equipped-item">
            <StaticSVGLoader
              id="equipped-eye-svg"
              svgPath={InventoryEquippedBodySVG}
            />
          </div>
        </div>
      </div>
    </EquippedStyleContainer>
  );
};

export default memo(Equipped);
