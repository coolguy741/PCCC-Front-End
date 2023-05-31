import { Vector2 } from "three";
import { globalStateApiType } from "../../GlobalStateTypes";

const UIModule = ({ set, get }: globalStateApiType) => {
  return {
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
    setActiveHoveredHudMenuOption: (newHoveredHudMenuOption: string | null) => {
      set({ activeHoveredHudMenuOption: newHoveredHudMenuOption });
    },
  };
};

export { UIModule };
