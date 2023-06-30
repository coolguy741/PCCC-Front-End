import { useDrag } from "@use-gesture/react";
import { FC, memo, useCallback, useRef } from "react";
import { MathUtils } from "three";
import { shallow } from "zustand/shallow";
import {
  MusicSliderKeys,
  SoundSliderKeys,
} from "../../../../../../globalState/modules/AudioModule/AudioModuleDefines";
import { PCCCAudioKeysType } from "../../../../../../globalState/modules/AudioModule/AudioModuleTypes";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import { RefDivType } from "../../../../../../shared/Types/RefTypes";
import MusicPressedSVG from "../../4-SettingsSVGAssets/MusicPressedSVG";
import MusicSliderButtonSVG from "../../4-SettingsSVGAssets/MusicSliderButtonSVG";
import SoundPressedSVG from "../../4-SettingsSVGAssets/SoundPressedSVG";
import SoundSliderButtonSVG from "../../4-SettingsSVGAssets/SoundSliderButtonSVG";
import { handleInvertCount } from "./SliderConstants";
import SliderStyleContainer from "./SliderStyleContainer";
import { SliderPropTypes } from "./SliderTypes";

const Slider: FC<SliderPropTypes> = ({ type }) => {
  // Refs
  const sliderBGRef: RefDivType = useRef(null);
  const sliderFillRef: RefDivType = useRef(null);
  const sliderButtonRef: RefDivType = useRef(null);
  const sliderFillButtonRef: RefDivType = useRef(null);

  // Global State
  const { setVolume, PCCCVolumeKeys } = useGlobalState(
    (state) => ({
      setVolume: state.setVolume,
      PCCCVolumeKeys: state.PCCCVolumeKeys,
    }),
    shallow,
  );

  // Handlers
  const handleSliderChange = useCallback(
    (volume: number) => {
      const keysArray = type === "music" ? MusicSliderKeys : SoundSliderKeys;
      keysArray.forEach((key: PCCCAudioKeysType) => {
        setVolume(key, volume * PCCCVolumeKeys[key]);
      });
    },
    [type, setVolume, PCCCVolumeKeys],
  );

  // Hooks
  const bindDrag = useDrag(
    ({ down, dragging, cancel, offset: [ox, oy], _bounds: [bx, by] }) => {
      if (
        !down ||
        !dragging ||
        !sliderBGRef.current ||
        !sliderFillRef.current ||
        !sliderButtonRef.current ||
        !sliderFillButtonRef.current
      ) {
        return cancel();
      }

      sliderFillRef.current.style.width = `${handleInvertCount(
        ox * -1,
        sliderBGRef.current.getBoundingClientRect().width,
      )}px`;

      handleSliderChange(MathUtils.mapLinear(ox, 0, bx[0], 1, 0));

      sliderButtonRef.current.style.transform = `translateX(${ox}px)`;
    },
    {
      bounds: sliderFillButtonRef,
    },
  );

  return (
    <SliderStyleContainer>
      <div className="slider-bg" ref={sliderBGRef} />
      <div className="slider-fill-container">
        <div className="slider-fill" ref={sliderFillRef} />
      </div>
      <div className="slider-fill-button" ref={sliderFillButtonRef}>
        <div {...bindDrag()} ref={sliderButtonRef} className="slider-btn">
          <div className="slider-btn-container">
            <div className="static">
              {type === "music" ? (
                <MusicSliderButtonSVG />
              ) : (
                <SoundSliderButtonSVG />
              )}
            </div>
            <div className="pressed">
              {type === "music" ? <MusicPressedSVG /> : <SoundPressedSVG />}
            </div>
          </div>
        </div>
      </div>
    </SliderStyleContainer>
  );
};

export default memo(Slider);
