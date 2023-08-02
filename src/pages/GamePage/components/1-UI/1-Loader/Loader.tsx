import { motion } from "framer-motion";
import { FC, memo, useCallback, useRef } from "react";
import Lottie from "react-lottie";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { RefTimeoutType } from "../../../shared/Types/RefTypes";
import animationData from "./assets/loader.json";
import LoaderStyleContainer from "./LoaderStyleContainer";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loader: FC = () => {
  // Refs
  const loaderLottieRef = useRef<Lottie | null>(null);
  const loaderTimeoutRef: RefTimeoutType = useRef(null);

  // Global State
  const { setUIPhase, UIPhase } = useGlobalState(
    (state) => ({
      UIPhase: state.UIPhase,
      setUIPhase: state.setUIPhase,
    }),
    shallow,
  );

  // Handlers
  const handleGoToLanding = useCallback(() => {
    if (UIPhase !== "Loader") return;
    if (loaderTimeoutRef.current) {
      clearTimeout(loaderTimeoutRef.current);
    }
    loaderTimeoutRef.current = setTimeout(() => {
      setUIPhase("Landing");
    }, 10000);
  }, [UIPhase, setUIPhase]);

  return (
    <LoaderStyleContainer
      key={"loader-screen"}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        key={"loader-lottie"}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="loader-lottie-container"
      >
        <Lottie
          ref={loaderLottieRef}
          options={defaultOptions}
          width={"100%"}
          height={"100%"}
          eventListeners={[
            {
              eventName: "DOMLoaded",
              callback: handleGoToLanding,
            },
          ]}
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="loader-copy"
        key={"loader-copy"}
      >
        loading...
      </motion.h1>
    </LoaderStyleContainer>
  );
};

export default memo(Loader);
