export type LanguageType = "eng" | "fr";

export interface SettingsModuleTypes {
  isSettingsPanelOpen: boolean;
  setIsSettingsPanelOpen: (isSettingsPanelOpen: boolean) => void;
  isQuitPanelOpen: boolean;
  setIsQuitPanelOpen: (isQuitPanelOpen: boolean) => void;
  isLoadPanelOpen: boolean;
  setIsLoadPanelOpen: (isLoadPanelOpen: boolean) => void;
  isCreditsPanelOpen: boolean;
  setIsCreditsPanelOpen: (isCreditsPanelOpen: boolean) => void;
  isGameSaved: boolean;
  setIsGameSaved: (isGameSaved: boolean) => void;
  activeLanguage: LanguageType;
  setActiveLanguage: (newLanguage: LanguageType) => void;
}
