import { FC, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import GardenKitchenPickerStyleContainer from "./GardenKitchenPickerStyleContainer";

const GardenKitchenPicker: FC = () => {
  // Global State
  const { setUIPhase, UIPhase } = useGlobalState(
    (state) => ({
      UIPhase: state.UIPhase,
      setUIPhase: state.setUIPhase,
    }),
    shallow,
  );

  const handleGardenKitchenSelection = useCallback(() => {
    if (UIPhase !== "GardenKitchenSelection") return;
    setUIPhase("Tutorial");
  }, [setUIPhase, UIPhase]);

  return (
    <GardenKitchenPickerStyleContainer
      key={"garden-kitchen-picker"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        name={"garden"}
        className="go-to-garden"
        onClick={handleGardenKitchenSelection}
      >
        GO TO GARDEN
      </button>
      <button className="go-to-kitchen" name={"kitchen"}>
        GO TO KITCHEN
      </button>
    </GardenKitchenPickerStyleContainer>
  );
};

export default memo(GardenKitchenPicker);
