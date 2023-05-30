import { gsap } from "gsap";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import StaticSVGLoader from "../../../3-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import { InspectItemBGSVG } from "../../../4-Assets/InspectItemBGSVG";
import InspectCanvas from "../1-InspectCanvas/InspectCanvas";
import InspectR3FStage from "../3-InspectR3FStage/InspectR3FStage";
import InspectInfo from "../5-InspectInfo/InspectInfo";
import InspectStyleContainer from "./InspectStyleContainer";

const Inspect: FC = () => {
  // Refs
  const inspectModalRef: RefDivType = useRef(null);

  // Global State
  const { inspectActive, setInspectActive } = useGlobalState(
    (state) => ({
      inspectActive: state.inspectActive,
      setInspectActive: state.setInspectActive,
    }),
    shallow,
  );

  // Handlers
  const handleExitInspect = useCallback(() => {
    setInspectActive(false);
  }, [setInspectActive]);

  const handleOnPointerEvent = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    if (!inspectModalRef.current) return;

    if (inspectActive) {
      inspectModalRef.current.style.visibility = "visible";
      inspectModalRef.current.style.pointerEvents = "auto";
      gsap.fromTo(
        inspectModalRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
          ease: BACK_1_OUT,
        },
      );
    } else {
      gsap.to(inspectModalRef.current, {
        opacity: 0,
        y: 20,
        ease: BACK_1_OUT,
        onComplete: () => {
          if (!inspectModalRef.current) return;
          inspectModalRef.current.style.visibility = "hidden";
          inspectModalRef.current.style.pointerEvents = "none";
        },
      });
    }
  }, [inspectActive]);

  return (
    <InspectStyleContainer
      ref={inspectModalRef}
      onPointerEnter={handleOnPointerEvent}
      onPointerLeave={handleOnPointerEvent}
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
        <InspectInfo />
        <button className="exit-inspect" onClick={handleExitInspect}>
          X
        </button>
      </div>
    </InspectStyleContainer>
  );
};

export default memo(Inspect);
