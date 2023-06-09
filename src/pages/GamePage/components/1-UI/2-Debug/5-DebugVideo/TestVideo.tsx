import { memo, useCallback, useEffect } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import PGVideo from "./BadgeVideoTest.mp4";

const PGVideoComponent = () => {
  // Global State
  const { pgVideo, setPGVideo, setPGVideoLoaded } = useGlobalState(
    (state) => ({
      pgVideo: state.pgVideo,
      setPGVideo: state.setPGVideo,
      setPGVideoLoaded: state.setPGVideoLoaded,
    }),
    shallow,
  );

  const pGVideoRef = useCallback(
    (node: HTMLVideoElement) => {
      setPGVideo(node);
    },
    [setPGVideo],
  );

  useEffect(() => {
    if (pgVideo) {
      // @ts-ignore
      pgVideo.play();
    }
  }, [pgVideo]);

  return (
    <video
      muted
      loop={true}
      preload="auto"
      autoPlay={true}
      controls={false}
      ref={pGVideoRef}
      playsInline={true}
      id="PGLandingLoop"
      crossOrigin="anonymous"
      onCanPlayThrough={() => setPGVideoLoaded(true)}
      style={{ visibility: "hidden", userSelect: "none", display: "none" }}
    >
      <source src={PGVideo} type="video/mp4" />
    </video>
  );
};

export default memo(PGVideoComponent);
