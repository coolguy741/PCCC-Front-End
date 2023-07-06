import { gsap } from "gsap";
import { LanguageType } from "../../../../../globalState/modules/SettingsModule/SettingsModuleTypes";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";

const handleLanguageChangeAnimation = (
  engElement: HTMLElement,
  frElement: HTMLElement,
  toLanguage: LanguageType,
) => {
  if (toLanguage === "eng") {
    gsap.fromTo(
      engElement,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        overwrite: true,
        ease: BACK_1_OUT,
      },
    );

    gsap.fromTo(
      frElement,
      { scale: 1, opacity: 1 },
      {
        scale: 0,
        opacity: 0,
        overwrite: true,
        ease: BACK_1_OUT,
      },
    );
  } else {
    gsap.fromTo(
      engElement,
      { scale: 1, opacity: 1 },
      {
        scale: 0,
        opacity: 0,
        overwrite: true,
        ease: BACK_1_OUT,
      },
    );

    gsap.fromTo(
      frElement,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        overwrite: true,
        ease: BACK_1_OUT,
      },
    );
  }
};

export { handleLanguageChangeAnimation };
