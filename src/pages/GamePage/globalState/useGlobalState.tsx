import { create } from 'zustand';
import { GlobalStateTypes } from './GlobalStateTypes';
import { DevelopmentModule } from './modules/DevelopmentModule.tsx/DevelopmentModule';
import { LocationModule } from './modules/LocationModule/LocationModule';

const useGlobalState = create<GlobalStateTypes>((set, get) => ({
  ...DevelopmentModule({ set, get }),
  ...LocationModule({ set, get }),
}));

export { useGlobalState };
