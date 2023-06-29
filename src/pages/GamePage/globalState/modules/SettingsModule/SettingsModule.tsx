import { globalStateApiType } from "../../GlobalStateTypes";
import { LanguageType } from "./SettingsModuleTypes";

const SettingsModule = ({ set, get }: globalStateApiType) => {
  return {
    activeLanguage: "eng" as LanguageType,
    setActiveLanguage: (newLanguage: LanguageType) => {
      set({ activeLanguage: newLanguage });
    },
  };
};

export { SettingsModule };
