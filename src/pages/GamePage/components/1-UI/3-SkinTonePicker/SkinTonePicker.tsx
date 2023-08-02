import { FC, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import SkinToneOne from "./assets/skin-tone-1.webp";
import SkinToneTwo from "./assets/skin-tone-2.webp";
import SkinToneThree from "./assets/skin-tone-3.webp";
import SkinToneBoard from "./assets/skin-tone-board.webp";
import SkinTonePickerStyleContainer from "./SkinTonePickerStyleContainer";

const SkinTonePicker: FC = () => {
  // Global State
  const { setUIPhase, UIPhase } = useGlobalState(
    (state) => ({
      UIPhase: state.UIPhase,
      setUIPhase: state.setUIPhase,
    }),
    shallow,
  );

  const handleSkinToneTemp = useCallback(() => {
    setUIPhase("Game");
  }, [setUIPhase]);

  return (
    <SkinTonePickerStyleContainer>
      <div className="skin-tone-board">
        <img
          className="skin-tone-board-bg"
          alt="skin-tone-picker"
          draggable={false}
          src={SkinToneBoard}
        />
        <h1 className="skin-tone-copy">Pick your cursor skin color</h1>
      </div>
      <div className="skin-tone-choices">
        <button
          className="skin-tone-one-btn"
          onClick={handleSkinToneTemp}
          disabled={UIPhase !== "SkinTonePicker"}
        >
          <img
            className="skin-tone-one"
            alt="skin-tone-one"
            draggable={false}
            src={SkinToneOne}
          />
        </button>
        <button
          className="skin-tone-two-btn"
          onClick={handleSkinToneTemp}
          disabled={UIPhase !== "SkinTonePicker"}
        >
          <img
            className="skin-tone-two"
            alt="skin-tone-two"
            draggable={false}
            src={SkinToneTwo}
          />
        </button>
        <button
          className="skin-tone-three-btn"
          onClick={handleSkinToneTemp}
          disabled={UIPhase !== "SkinTonePicker"}
        >
          <img
            className="skin-tone-three"
            alt="skin-tone-three"
            draggable={false}
            src={SkinToneThree}
          />
        </button>
      </div>
    </SkinTonePickerStyleContainer>
  );
};

export default memo(SkinTonePicker);
