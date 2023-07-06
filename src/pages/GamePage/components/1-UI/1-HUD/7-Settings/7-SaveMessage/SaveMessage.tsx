import { gsap } from "gsap";
import { FC, memo, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import SaveMessageStyleContainer from "./SaveMessageStyleContainer";

const SaveMessage: FC = () => {
  // Refs
  const saveMessageRef: RefDivType = useRef(null);

  // Global State
  const { activeLanguage, isGameSaved, setIsGameSaved } = useGlobalState(
    (state) => ({
      isGameSaved: state.isGameSaved,
      setIsGameSaved: state.setIsGameSaved,
      activeLanguage: state.activeLanguage,
    }),
    shallow,
  );

  useEffect(() => {
    if (!isGameSaved) return;
    if (!saveMessageRef.current) return;
    gsap.to(saveMessageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.25,
      overwrite: true,
      ease: BACK_1_OUT,
      onComplete: () => {
        gsap.to(saveMessageRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.25,
          overwrite: true,
          ease: BACK_1_OUT,
          delay: 1,
          onComplete: () => {
            setIsGameSaved(false);
          },
        });
      },
    });
  }, [isGameSaved, setIsGameSaved]);

  return (
    <SaveMessageStyleContainer ref={saveMessageRef}>
      <h1 className="saved-message-text">
        {activeLanguage === "eng"
          ? "Saved Successfully"
          : "Enregistré avec succès"}
      </h1>
    </SaveMessageStyleContainer>
  );
};

export default memo(SaveMessage);
