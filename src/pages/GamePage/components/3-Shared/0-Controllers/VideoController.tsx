import { memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import AchievementBadgeAtlas from "./assets/AchievementBadgeAtlas.webm";

const VideoController = () => {
  // Global State
  const { setAchievementVideoTexture, setAchievementVideoTextureLoaded } =
    useGlobalState(
      (state) => ({
        setAchievementVideoTexture: state.setAchievementVideoTexture,
        setAchievementVideoTextureLoaded:
          state.setAchievementVideoTextureLoaded,
      }),
      shallow,
    );

  const achievementVideoTextureRef = useCallback(
    (node: HTMLVideoElement) => {
      setAchievementVideoTexture(node);
    },
    [setAchievementVideoTexture],
  );

  const handleCanPlayThrough = useCallback(() => {
    setAchievementVideoTextureLoaded(true);
  }, [setAchievementVideoTextureLoaded]);

  return (
    <video
      muted
      loop={false}
      preload="auto"
      autoPlay={true}
      controls={false}
      playsInline={true}
      crossOrigin="anonymous"
      ref={achievementVideoTextureRef}
      onCanPlayThrough={handleCanPlayThrough}
      style={{ visibility: "hidden", userSelect: "none", display: "none" }}
    >
      <source src={AchievementBadgeAtlas} type="video/webm" />
    </video>
  );
};

export default memo(VideoController);
