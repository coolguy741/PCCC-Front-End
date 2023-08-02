import { Vector2 } from "three";
import { globalStateApiType } from "../../GlobalStateTypes";
import { UIPhase } from "./UiModuleConstants";
import { activeHoveredHudMenuOptionType, UIPhaseType } from "./UIModuleTypes";

const UIModule = ({ set, get }: globalStateApiType) => {
  return {
    UIPhase: UIPhase,
    setUIPhase: (newUIPhase: UIPhaseType) => {
      set({ UIPhase: newUIPhase });
    },

    cursorSize: new Vector2(),

    cursorLocation: new Vector2(),

    isCursorDown: false,
    setIsCursorDown: (isCursorDown: boolean) => {
      set({ isCursorDown });
    },

    windowSize: new Vector2(),
    windowResizeEventTrigger: 0,
    setWindowResizeEventTrigger: () => {
      const windowResizeEventTrigger = get().windowResizeEventTrigger;
      set({ windowResizeEventTrigger: windowResizeEventTrigger + 1 });
    },

    activeHoveredHudMenuOption: null,
    setActiveHoveredHudMenuOption: (
      newHoveredHudMenuOption: activeHoveredHudMenuOptionType | null,
    ) => {
      set({ activeHoveredHudMenuOption: newHoveredHudMenuOption });
    },
  };
};

export { UIModule };
