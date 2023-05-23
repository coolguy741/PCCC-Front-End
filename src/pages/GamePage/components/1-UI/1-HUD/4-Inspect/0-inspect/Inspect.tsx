import { FC, memo } from "react";
import StaticSVGLoader from "../../../3-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import { InspectItemBGSVG } from "../../../4-Assets/InspectItemBGSVG";
import InspectCanvas from "../1-InspectCanvas/InspectCanvas";
import InspectR3FStage from "../3-InspectR3FStage/InspectR3FStage";
import InspectStyleContainer from "./InspectStyleContainer";

const Inspect: FC = () => {
  return (
    <InspectStyleContainer>
      <div className="inspect-modal">
        <img
          alt="inspect-modal"
          className="inspect-modal-bg"
          src={"/game_assets/ui_images/inspect/inspect_modal_bg.webp"}
          draggable={false}
        />
        <div className="item-display">
          <div className="item-display-view">
            <StaticSVGLoader id="item-display-bg" svgPath={InspectItemBGSVG} />
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
        <div className="item-info">
          <h1 className="item-title">Item Title</h1>
          <p className="item-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            earum fugit quidem dicta vero ipsa. Nihil in eaque voluptatem
            aliquam consequatur ipsa labore voluptate eligendi atque saepe.
            Explicabo, consectetur nulla.Nihil in eaque voluptatem aliquam
            consequatur ipsa labore voluptate eligendi atque saepe. Explicabo,
            consectetur nulla.
          </p>
        </div>
      </div>
    </InspectStyleContainer>
  );
};

export default memo(Inspect);
