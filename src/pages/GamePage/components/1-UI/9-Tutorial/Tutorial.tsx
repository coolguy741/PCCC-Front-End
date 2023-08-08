import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { FC, memo, PointerEvent, useCallback, useRef, useState } from "react";
import { POWER_2_INOUT } from "../../../shared/Eases/Eases";
import { Theme } from "../../../styles/Snippets/Theme";
import DialogueBox from "./assets/dialogue_box.webp";
import { TutorialDataGardenPrimary } from "./TutorialDataGardenPrimary";
import TutorialNavButton from "./TutorialNavButton";
import TutorialStyleContainer from "./TutorialStyleContainer";

const Tutorial: FC = () => {
  // Refs
  const backButtonRef = useRef<SVGPathElement>(null);
  const dialogueItemRef = useRef<HTMLDivElement>(null);
  const forwardButtonRef = useRef<SVGPathElement>(null);
  const dialogueContentRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleTutorialNav = useCallback(
    (e: PointerEvent<HTMLButtonElement>): void => {
      if (!dialogueContentRef.current) return;
      if (!dialogueItemRef.current) return;
      if (btnDisabled) return;
      const sl = dialogueContentRef.current.scrollLeft;
      const w = dialogueItemRef.current.getBoundingClientRect().width;
      const indexFactor = e.currentTarget.name === "next" ? 1 : -1;
      const directionFactor = e.currentTarget.name === "next" ? sl + w : sl - w;
      setBtnDisabled(true);
      setCurrentIndex((currentIndex) => currentIndex + indexFactor);
      gsap.to(dialogueContentRef.current, {
        scrollLeft: directionFactor,
        overwrite: true,
        ease: POWER_2_INOUT,
        onComplete: () => {
          setBtnDisabled(false);
        },
      });
    },
    [setCurrentIndex, btnDisabled, setBtnDisabled],
  );

  const handlePointerDown = useCallback(
    (e: PointerEvent<HTMLButtonElement>) => {
      if (!backButtonRef.current) return;
      if (!dialogueItemRef.current) return;
      if (!forwardButtonRef.current) return;
      if (!dialogueContentRef.current) return;
      if (btnDisabled) return;

      if (e.currentTarget.name === "next") {
        gsap.to(forwardButtonRef.current, {
          fill: Theme.PCCCGreen,
          overwrite: true,
          duration: 0.15,
          ease: POWER_2_INOUT,
        });
      } else {
        gsap.to(backButtonRef.current, {
          fill: Theme.PCCCGreen,
          overwrite: true,
          duration: 0.15,
          ease: POWER_2_INOUT,
        });
      }
    },
    [btnDisabled],
  );
  const handlePointerUp = useCallback(
    (e: PointerEvent<HTMLButtonElement>) => {
      if (!backButtonRef.current) return;
      if (!dialogueItemRef.current) return;
      if (!forwardButtonRef.current) return;
      if (!dialogueContentRef.current) return;
      if (btnDisabled) return;

      if (e.currentTarget.name === "next") {
        gsap.to(forwardButtonRef.current, {
          fill: "#DBC6B2",
          duration: 0.15,
          overwrite: true,
          ease: POWER_2_INOUT,
        });
      } else {
        gsap.to(backButtonRef.current, {
          fill: "#DBC6B2",
          ease: POWER_2_INOUT,
          overwrite: true,
          duration: 0.15,
        });
      }
    },
    [btnDisabled],
  );

  return (
    <TutorialStyleContainer
      key={"tutorial"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="dialogue-box-conatiner">
        <div className="dialogue-box-bg">
          <img
            className="tutorial-dialogue-box"
            alt="tutorial"
            draggable={false}
            src={DialogueBox}
          />
        </div>

        <div className="dialogue-content" ref={dialogueContentRef}>
          {TutorialDataGardenPrimary.map(({ id, content }) => {
            return (
              <div key={id} className="dialogue-item" ref={dialogueItemRef}>
                <p className="dialogue-item-content">{content}</p>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {currentIndex > 0 && (
            <motion.button
              key={"prev"}
              name="prev"
              disabled={btnDisabled}
              className="prev-button"
              onClick={handleTutorialNav}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <TutorialNavButton ref={backButtonRef} direction={false} />
            </motion.button>
          )}
          {currentIndex < TutorialDataGardenPrimary.length - 1 && (
            <motion.button
              key={"next"}
              name="next"
              disabled={btnDisabled}
              className="next-button"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onClick={handleTutorialNav}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <TutorialNavButton ref={forwardButtonRef} direction={true} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </TutorialStyleContainer>
  );
};

export default memo(Tutorial);
