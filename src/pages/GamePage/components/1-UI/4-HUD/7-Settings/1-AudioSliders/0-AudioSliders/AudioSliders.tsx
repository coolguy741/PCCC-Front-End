import { FC, memo } from "react";
import Slider from "../1-Slider/Slider";
import AudioSlidersStyleContainer from "./AudioSlidersStyleContainer";

const AudioSliders: FC = () => {
  return (
    <AudioSlidersStyleContainer>
      <Slider type="music" />
      <Slider type="sound" />
    </AudioSlidersStyleContainer>
  );
};

export default memo(AudioSliders);
