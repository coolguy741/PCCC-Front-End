import { FC, memo, useCallback, useEffect } from "react";
import { shallow } from "zustand/shallow";
import { PCCCAudioKeysType } from "../../../globalState/modules/AudioModule/AudioModuleTypes";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../shared/Types/DefineTypes";
import useWindowFocusBlur from "../1-Hooks/useWindowFocusBlur";

const AudioController: FC = () => {
  // Global State
  const { playAudio, PCCCAudio, setMuted, setIsGlobalMute, PCCCVolumeKeys } =
    useGlobalState(
      (state) => ({
        setMuted: state.setMuted,
        playAudio: state.playAudio,
        PCCCAudio: state.PCCCAudio,
        PCCCVolumeKeys: state.PCCCVolumeKeys,
        setIsGlobalMute: state.setIsGlobalMute,
      }),
      shallow,
    );

  // Handlers
  const handleOnBlur: ConstantVoidFunctionType = useCallback((): void => {
    Object.keys(PCCCVolumeKeys).forEach((key) => {
      const audioKey = key as PCCCAudioKeysType;
      setMuted(audioKey, true);
      setIsGlobalMute(true);
    });
  }, [PCCCVolumeKeys, setMuted, setIsGlobalMute]);

  const handleOnFocus: ConstantVoidFunctionType = useCallback((): void => {
    Object.keys(PCCCVolumeKeys).forEach((key) => {
      const audioKey = key as PCCCAudioKeysType;
      setMuted(audioKey, false);
      setIsGlobalMute(false);
    });
  }, [PCCCVolumeKeys, setMuted, setIsGlobalMute]);

  const handleOnInit: ConstantVoidFunctionType = useCallback((): void => {
    if (!PCCCAudio["PCCCTheme"]) return;
    if (PCCCAudio["PCCCTheme"].playing()) return;
    playAudio("PCCCTheme");
  }, [PCCCAudio, playAudio]);

  // Hooks
  useWindowFocusBlur(handleOnFocus, handleOnBlur);

  // Listeners
  useEffect(handleOnInit, [PCCCAudio, playAudio, handleOnInit]);

  return null;
};

export default memo(AudioController);
