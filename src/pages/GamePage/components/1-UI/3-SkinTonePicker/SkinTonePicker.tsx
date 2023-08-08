import { motion } from "framer-motion";
import { FC, memo, PointerEvent, useCallback, useRef } from "react";
import { shallow } from "zustand/shallow";
import { SkintToneType } from "../../../globalState/modules/UIModule/UIModuleTypes";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { RefTimeoutType } from "../../../shared/Types/RefTypes";
import SkinToneBoard from "./assets/skin-tone-board.webp";
import { SkinToneButtonData } from "./SkinTonePickerConstants";
import SkinTonePickerStyleContainer from "./SkinTonePickerStyleContainer";

const SkinTonePicker: FC = () => {
  // Refs
  const skinToneExitTimeoutRef: RefTimeoutType = useRef(null);
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

  const handleSkinToneSelection = useCallback((): void => {
    if (skinToneExitTimeoutRef.current) {
      clearTimeout(skinToneExitTimeoutRef.current);
    }

    skinToneExitTimeoutRef.current = setTimeout(() => {
      setUIPhase("GardenKitchenSelection");
    }, 500);
  }, [setUIPhase]);

  const handleSetSkinTone = useCallback(
    (e: PointerEvent<HTMLButtonElement>): void => {
      if (e.currentTarget.name === activeSkinTone) return;
      setActiveSkinTone(e.currentTarget.name as SkintToneType);
    },
    [activeSkinTone, setActiveSkinTone],
  );

  return (
    <SkinTonePickerStyleContainer
      key={"skin-tone-picker"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
        {SkinToneButtonData.map(({ id, name, data }) => {
          return (
            <motion.button
              key={id}
              name={`skin-tone-${name}`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={handleSkinToneSelection}
              className={`skin-tone-${name}-btn`}
              onPointerEnter={handleSetSkinTone}
              disabled={UIPhase !== "SkinTonePicker"}
            >
              <img
                className={`skin-tone-${name}`}
                alt={`skin-tone-${name}`}
                draggable={false}
                src={data}
              />
            </motion.button>
          );
        })}
      </div>
    </SkinTonePickerStyleContainer>
  );
};

export default memo(SkinTonePicker);
