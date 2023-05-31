import { FC, Fragment, memo } from "react";
import { handleStopPropagation } from "../../../../../shared/Utility/UtilityFunctions";
import StaticSVGLoader from "../../../3-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import { InspectItemBGSVG } from "../../../4-Assets/InspectItemBGSVG";
import InspectCanvas from "../1-InspectCanvas/InspectCanvas";
import InspectR3FStage from "../3-InspectR3FStage/InspectR3FStage";
import InspectExitCollider from "../5-InspectExitCollider/InspectExitCollider";
import InspectInfo from "../6-InspectInfo/InspectInfo";
import InspectStyleContainer from "./InspectStyleContainer";
import { useInspectLogic } from "./useInspectLogic";

const Inspect: FC = () => {
  // Component Logic
  const { inspectModalRef } = useInspectLogic();

  return (
    <Fragment>
      <InspectExitCollider />
      <InspectStyleContainer
        ref={inspectModalRef}
        onPointerEnter={handleStopPropagation}
        onPointerLeave={handleStopPropagation}
      >
        <div className="inspect-modal">
          <img
            alt="inspect-modal"
            className="inspect-modal-bg"
            src={"/game_assets/ui_images/inspect/inspect_modal_bg.webp"}
            draggable={false}
          />
          <div className="item-display">
            <div className="item-display-view">
              <StaticSVGLoader
                id="item-display-bg"
                svgPath={InspectItemBGSVG}
              />
              <InspectCanvas>
                <InspectR3FStage />
              </InspectCanvas>
            </div>
            <div className="item-display-count">
              <h3 className="item-display-count-current">5</h3>
              <h6 className="item-display-count-of">of</h6>
              <h3 className="item-display-count-total">15</h3>
            </div>
          </div>
          <InspectInfo />
        </div>
      </InspectStyleContainer>
    </Fragment>
  );
};

export default memo(Inspect);
