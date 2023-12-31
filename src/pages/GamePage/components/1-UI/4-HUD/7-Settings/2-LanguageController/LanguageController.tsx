import { gsap } from "gsap";
import { FC, memo, useCallback, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import EngButtonSVG from "../13-SettingsSVGAssets/EngButtonSVG";
import EnglishInActiveButton from "../13-SettingsSVGAssets/EnglishInActiveButton";
import FrenchButtonSVG from "../13-SettingsSVGAssets/FrenchButtonSVG";
import FrenchInActiveButtonSVG from "../13-SettingsSVGAssets/FrenchInActiveButtonSVG";
import LanguageBGSVG from "../13-SettingsSVGAssets/LanguageBGSVG";
import LanguageControllerStyleContainer from "./LanguageControllerStyleContainer";

const LanguageController: FC = () => {
  // Refs
  const englishActiveRef: RefDivType = useRef(null);
  const englishInActiveRef: RefDivType = useRef(null);
  const frenchActiveRef: RefDivType = useRef(null);
  const frenchInActiveRef: RefDivType = useRef(null);

  // Global State
  const { activeLanguage, setActiveLanguage } = useGlobalState(
    (state) => ({
      activeLanguage: state.activeLanguage,
      setActiveLanguage: state.setActiveLanguage,
    }),
    shallow,
  );

  const handleLanguageToggle = useCallback(() => {
    if (!frenchActiveRef.current) return;
    if (!englishActiveRef.current) return;
    if (!frenchInActiveRef.current) return;
    if (!englishInActiveRef.current) return;

    if (activeLanguage === "eng") {
      setActiveLanguage("fr");
      gsap.to([englishActiveRef.current, frenchInActiveRef.current], {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        overwrite: true,
        ease: BACK_1_OUT,
      });
      gsap.to([englishInActiveRef.current, frenchActiveRef.current], {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        overwrite: true,
        ease: BACK_1_OUT,
      });
    } else {
      setActiveLanguage("eng");
      gsap.to([englishActiveRef.current, frenchInActiveRef.current], {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        overwrite: true,
        ease: BACK_1_OUT,
      });
      gsap.to([englishInActiveRef.current, frenchActiveRef.current], {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        overwrite: true,
        ease: BACK_1_OUT,
      });
    }
  }, [activeLanguage, setActiveLanguage]);

  return (
    <LanguageControllerStyleContainer>
      <div className="language-button-bg">
        <LanguageBGSVG />
      </div>
      <div className="eng-french-buttons">
        <div className="english" onClick={handleLanguageToggle}>
          <div className="eng-inactive" ref={englishInActiveRef}>
            <EnglishInActiveButton />
          </div>
          <div className="eng-active" ref={englishActiveRef}>
            <EngButtonSVG />
          </div>
        </div>

        <div className="french" onClick={handleLanguageToggle}>
          <div className="fr-inactive" ref={frenchInActiveRef}>
            <FrenchInActiveButtonSVG />
          </div>
          <div className="fr-active" ref={frenchActiveRef}>
            <FrenchButtonSVG />
          </div>
        </div>
      </div>
    </LanguageControllerStyleContainer>
  );
};

export default memo(LanguageController);
