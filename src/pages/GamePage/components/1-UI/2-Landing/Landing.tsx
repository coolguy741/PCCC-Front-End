import { AnimatePresence, motion, useAnimationFrame } from "framer-motion";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { RefTimeoutType, RefVideoType } from "../../../shared/Types/RefTypes";
import LandingLogo from "./assets/landing-logo.webp";
import LoaderLandingVideo from "./assets/loader-landing-video.webm";
import PlayButtonBG from "./assets/play-button-background.webp";
import PlayButton from "./assets/play-button.webp";
import LandingStyleContainer from "./LandingStyleContainer";

const Landing: FC = () => {
  // Refs
  const landingVideoRef: RefVideoType = useRef(null);
  const proceedTimeoutRef: RefTimeoutType = useRef(null);

  // Local State
  const [allowVideoToPlay, setAllowVideoToPlay] = useState<boolean>(false);

  // Global State
  const { setUIPhase, UIPhase } = useGlobalState(
    (state) => ({
      UIPhase: state.UIPhase,
      setUIPhase: state.setUIPhase,
    }),
    shallow,
  );

  const handleProceedToGame = useCallback(() => {
    if (allowVideoToPlay) return;
    if (!landingVideoRef.current) return;

    const landingVideoTimeLeft =
      landingVideoRef.current.duration - landingVideoRef.current.currentTime;

    if (proceedTimeoutRef.current) {
      clearTimeout(proceedTimeoutRef.current);
    }

    proceedTimeoutRef.current = setTimeout(() => {
      setUIPhase("SkinTonePicker");
    }, landingVideoTimeLeft * 1000);

    setAllowVideoToPlay(true);
  }, [allowVideoToPlay, setAllowVideoToPlay, setUIPhase]);

  const handleStartIntroVideoSequence = useCallback(() => {
    if (UIPhase !== "Landing") return;
    if (!landingVideoRef.current) return;

    landingVideoRef.current.play();
  }, [UIPhase]);

  // Listeners
  useEffect(handleStartIntroVideoSequence, [handleStartIntroVideoSequence]);

  // Update
  useAnimationFrame(() => {
    if (!landingVideoRef.current) return;

    if (landingVideoRef.current.currentTime >= 1 && !allowVideoToPlay) {
      landingVideoRef.current.currentTime = 0;
    }
  });

  useEffect(() => {
    if (!landingVideoRef.current) return;
    const landingVideo = landingVideoRef.current;

    landingVideo.addEventListener("ended", () => {
      console.log("video ended");
    });

    return () => {
      landingVideo.removeEventListener("ended", () => {
        console.log("video event removed");
      });
    };
  }, []);

  return (
    <LandingStyleContainer
      key={"landing"}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <video
        ref={landingVideoRef}
        muted
        preload="auto"
        autoPlay={false}
        controls={false}
        playsInline={true}
        crossOrigin="anonymous"
        className="loader-landing-video"
      >
        <source src={LoaderLandingVideo} type="video/webm" />
      </video>

      <AnimatePresence>
        <motion.div
          key={"btn"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="proceed-button-container"
        >
          <img
            className="proceed-button-image-bg"
            alt="play game"
            draggable={false}
            src={PlayButtonBG}
          />
          <button
            className="proceed-button"
            onClick={handleProceedToGame}
            disabled={UIPhase !== "Landing"}
          >
            <img
              className="proceed-button-image"
              alt="play game"
              draggable={false}
              src={PlayButton}
            />
            <h1 className="proceed-button-text">Play</h1>
          </button>
        </motion.div>

        <div className="landing-logo-container">
          <img
            className="landing-logo"
            alt="sunnys food adventure"
            draggable={false}
            src={LandingLogo}
          />
        </div>
      </AnimatePresence>
    </LandingStyleContainer>
  );
};

export default memo(Landing);
