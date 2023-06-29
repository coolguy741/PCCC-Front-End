export type LanguageType = "eng" | "fr";

export interface SettingsModuleTypes {
  activeLanguage: LanguageType;
  setActiveLanguage: (newLanguage: LanguageType) => void;
}
