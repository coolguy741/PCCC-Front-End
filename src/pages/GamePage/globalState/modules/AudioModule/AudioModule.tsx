// Howler
import { Howl } from "howler";
import { globalStateApiType } from "../../GlobalStateTypes";
import {
  PCCCAudioKeysType,
  PCCCAudioType,
  PCCCVolumeKeysType,
} from "./AudioModuleTypes";

const PCCCVolumeKeys: PCCCVolumeKeysType = {
  PCCCTheme: 0.5,
  InventoryNotification: 1.5,
};

const PCCCAudio: PCCCAudioType = {
  PCCCTheme: new Howl({
    src: ["/game_assets/audio/pccc_theme.aac"],
    volume: PCCCVolumeKeys.PCCCTheme,
    loop: true,
  }),
  InventoryNotification: new Howl({
    src: ["/game_assets/audio/inventory_notification.aac"],
    volume: PCCCVolumeKeys.InventoryNotification,
    loop: false,
  }),
};

const AudioModule = ({ set, get }: globalStateApiType) => {
  return {
    PCCCAudio,
    PCCCVolumeKeys,

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
      const targetVolumeKey = get().PCCCVolumeKeys[key];
      if (muteState) {
        audioKey.fade(audioKeyCurrentVolume, 0, 250);
        setTimeout(() => {
          audioKey.mute(true);
        }, 250);
      } else {
        audioKey.mute(false);
        audioKey.fade(audioKeyCurrentVolume, targetVolumeKey, 250);
      }
    },
  };
};
export { AudioModule };
