import { FC, memo } from "react";
import MusicSliderButtonSVG from "../2-SettingsSVGAssets/MusicSliderButtonSVG";
import SoundSliderButtonSVG from "../2-SettingsSVGAssets/SoundSliderButtonSVG";
import AudioSlidersStyleContainer from "./AudioSlidersStyleContainer";

const AudioSliders: FC = () => {
  //   const bindHeight = useDrag(
  //     ({ down, dragging, offset: [_, oy] }) => {
  //       if (down && dragging) {
  //         api.start({
  //           height: oy * -1 + boundHeight / 2,
  //           immediate: true,
  //         });
  //       }
  //       if (zoomScale <= topScale && zoomScale >= bottomScale && !down) {
  //         setZoomScale(
  //           oy < 0
  //             ? oy * positiveFactor + baseScale
  //             : oy * negativeFactor + baseScale,
  //           oy,
  //         );
  //         setYPosition(oy === 0 ? 0 : oy * signFlippedFactorY + 0.25);
  //       }
  //     },
  //     {
  //       from: () => height.get(),
  //       bounds: { top: (boundHeight / 2) * -1, bottom: boundHeight / 2 },
  //     },
  //   );

  return (
    <AudioSlidersStyleContainer>
      <div className="music-slider">
        <div className="music-slider-bg" />
        <div className="music-slider-fill" />
        <div className="music-slider-btn">
          <MusicSliderButtonSVG />
        </div>
      </div>
      <div className="sound-slider">
        <div className="sound-slider-bg" />
        <div className="sound-slider-fill" />
        <div className="sound-slider-btn">
          <SoundSliderButtonSVG />
        </div>
      </div>
    </AudioSlidersStyleContainer>
  );
};

export default memo(AudioSliders);
