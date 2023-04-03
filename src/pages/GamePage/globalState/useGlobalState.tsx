import { create } from "zustand";
import { GlobalStateTypes } from "./GlobalStateTypes";
import { LocationModule } from "./modules/LocationModule/LocationModule";

const useGlobalState = create<GlobalStateTypes>((set, get) => ({
  ...LocationModule({ set, get }),
}));

export { useGlobalState };
