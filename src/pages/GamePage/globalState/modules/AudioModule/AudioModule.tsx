import { globalStateApiType } from "../../GlobalStateTypes";
import {
  PCCCAudio,
  PCCCAudioFadeDuration,
  PCCCVolumeKeys,
} from "./AudioModuleDefines";
import { PCCCAudioKeysType } from "./AudioModuleTypes";

const AudioModule = ({ set, get }: globalStateApiType) => {
  return {
    PCCCAudio,
    PCCCVolumeKeys,
    PCCCActiveVolumeKeys: { ...PCCCVolumeKeys },

    playAudio: (key: PCCCAudioKeysType) => {
      const targetVO = get().PCCCAudio[key];
      targetVO.play();
    },

    stopAudio: (key: PCCCAudioKeysType) => {
      const targetVO = get().PCCCAudio[key];
      targetVO.stop();
    },

    isGlobalMute: false,
    setIsGlobalMute: (isGlobalMute: boolean) => {
      set({ isGlobalMute });
    },

    setMuted: (key: PCCCAudioKeysType, muteState: boolean) => {
      const audioKey = get().PCCCAudio[key];
      const audioKeyCurrentVolume = audioKey.volume();

      if (muteState) {
        get().PCCCActiveVolumeKeys[key] = audioKey.volume();
        audioKey.fade(audioKeyCurrentVolume, 0, PCCCAudioFadeDuration);
        setTimeout(() => {
          audioKey.mute(true);
        }, PCCCAudioFadeDuration);
      } else {
        audioKey.mute(false);
        audioKey.fade(
          audioKeyCurrentVolume,
          get().PCCCActiveVolumeKeys[key],
          PCCCAudioFadeDuration,
        );
      }
    },

    setVolume: (key: PCCCAudioKeysType, volume: number) => {
      const audioKey = get().PCCCAudio[key];
      audioKey.fade(audioKey.volume(), volume, 50);
    },
  };
};
export { AudioModule };
