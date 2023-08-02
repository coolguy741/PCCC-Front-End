import { motion } from "framer-motion";
import { FC, memo, PointerEvent, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { SkintToneType } from "../../../globalState/modules/UIModule/UIModuleTypes";
import { useGlobalState } from "../../../globalState/useGlobalState";
import SkinToneOne from "./assets/skin-tone-1.webp";
import SkinToneTwo from "./assets/skin-tone-2.webp";
import SkinToneThree from "./assets/skin-tone-3.webp";
import SkinToneBoard from "./assets/skin-tone-board.webp";
import SkinTonePickerStyleContainer from "./SkinTonePickerStyleContainer";

const SkinTonePicker: FC = () => {
  // Global State
  const { setUIPhase, UIPhase, setActiveSkinTone, activeSkinTone } =
    useGlobalState(
      (state) => ({
        UIPhase: state.UIPhase,
        setUIPhase: state.setUIPhase,
        activeSkinTone: state.activeSkinTone,
        setActiveSkinTone: state.setActiveSkinTone,
      }),
      shallow,
    );

  const handleSkinToneTemp = useCallback(() => {
    // setUIPhase("Game");
    console.log("hey");
  }, []);

  const handleSetSkinTone = useCallback(
    (e: PointerEvent<HTMLButtonElement>) => {
      if (e.currentTarget.name === activeSkinTone) return;
      setActiveSkinTone(e.currentTarget.name as SkintToneType);
      console.log(e.currentTarget.name);
    },
    [activeSkinTone, setActiveSkinTone],
  );

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
        <motion.button
          name={"skin-tone-one"}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleSkinToneTemp}
          className="skin-tone-one-btn"
          onPointerEnter={handleSetSkinTone}
          disabled={UIPhase !== "SkinTonePicker"}
        >
          <img
            className="skin-tone-one"
            alt="skin-tone-one"
            draggable={false}
            src={SkinToneOne}
          />
        </motion.button>
        <motion.button
          name={"skin-tone-two"}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleSkinToneTemp}
          className="skin-tone-two-btn"
          onPointerEnter={handleSetSkinTone}
          disabled={UIPhase !== "SkinTonePicker"}
        >
          <img
            className="skin-tone-two"
            alt="skin-tone-two"
            draggable={false}
            src={SkinToneTwo}
          />
        </motion.button>
        <motion.button
          name={"skin-tone-three"}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleSkinToneTemp}
          className="skin-tone-three-btn"
          onPointerEnter={handleSetSkinTone}
          disabled={UIPhase !== "SkinTonePicker"}
        >
          <img
            className="skin-tone-three"
            alt="skin-tone-three"
            draggable={false}
            src={SkinToneThree}
          />
        </motion.button>
      </div>
    </SkinTonePickerStyleContainer>
  );
};

export default memo(SkinTonePicker);
