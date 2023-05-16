import { Vector2 } from "three";
import { globalStateApiType } from "../../GlobalStateTypes";

const UIModule = ({ set, get }: globalStateApiType) => {
  return {
    cursorLocation: new Vector2(),

    isCursorDown: false,
    setIsCursorDown: (isCursorDown: boolean) => {
      set({ isCursorDown });
    },

    windowSize: new Vector2(),

    activeHoveredHudMenuOption: null,
    setActiveHoveredHudMenuOption: (newHoveredHudMenuOption: string | null) => {
      set({ activeHoveredHudMenuOption: newHoveredHudMenuOption });
    },
  };
};

export { UIModule };
