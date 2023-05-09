import { Vector2 } from "three";
import { globalStateApiType } from "../../GlobalStateTypes";

const CursorModule = ({ set, get }: globalStateApiType) => {
  return {
    cursorLocation: new Vector2(),
  };
};

export { CursorModule };
