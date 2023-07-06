import { globalStateApiType } from "../../GlobalStateTypes";
import { LanguageType } from "./SettingsModuleTypes";

const SettingsModule = ({ set, get }: globalStateApiType) => {
  return {
    isGameSaved: false,
    setIsGameSaved: (isGameSaved: boolean) => {
      set({ isGameSaved });
    },

    isCreditsPanelOpen: false,
    setIsCreditsPanelOpen: (isCreditsPanelOpen: boolean) => {
      set({ isCreditsPanelOpen });
    },

    isQuitPanelOpen: false,
    setIsQuitPanelOpen: (isQuitPanelOpen: boolean) => {
      set({ isQuitPanelOpen });
    },

    isLoadPanelOpen: false,
    setIsLoadPanelOpen: (isLoadPanelOpen: boolean) => {
      set({ isLoadPanelOpen });
    },

    activeLanguage: "eng" as LanguageType,
    setActiveLanguage: (newLanguage: LanguageType) => {
      set({ activeLanguage: newLanguage });
    },

    isSettingsPanelOpen: false,
    setIsSettingsPanelOpen: (isSettingsPanelOpen: boolean) => {
      set({ isSettingsPanelOpen });
    },
  };
};

export { SettingsModule };
