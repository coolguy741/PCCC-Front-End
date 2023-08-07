import { FC, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import AchievementBadgeAtlas from "../assets/AchievementBadgeAtlas.webm";
import VideoControllerStyleContainer from "./VideoControllerStyleContainer";

const VideoController: FC = () => {
  // Global State
  const { setAchievementVideoTextureLoaded } = useGlobalState(
    (state) => ({
      setAchievementVideoTextureLoaded: state.setAchievementVideoTextureLoaded,
    }),
    shallow,
  );

  const handleCanPlayThrough: ConstantVoidFunctionType =
    useCallback((): void => {
      setAchievementVideoTextureLoaded(true);
    }, [setAchievementVideoTextureLoaded]);

  return (
    <VideoControllerStyleContainer
      muted
      loop={false}
      preload="auto"
      autoPlay={true}
      controls={false}
      playsInline={true}
      crossOrigin="anonymous"
      id="achievement-badge-video"
      onCanPlayThrough={handleCanPlayThrough}
    >
      <source src={AchievementBadgeAtlas} type="video/webm" />
    </VideoControllerStyleContainer>
  );
};

export default memo(VideoController);
