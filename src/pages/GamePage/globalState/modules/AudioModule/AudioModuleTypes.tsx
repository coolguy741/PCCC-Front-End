import { Howl } from "howler";

export type PCCCAudioKeysType =
  | "ClickUp"
  | "PCCCTheme"
  | "ClickDown"
  | "InventoryNotification";

export type PCCCAudioType = {
  [K in PCCCAudioKeysType]: Howl;
};

export type PCCCVolumeKeysType = {
  [K in PCCCAudioKeysType]: number;
};

export interface AudioModuleTypes {
  isGlobalMute: boolean;
  PCCCAudio: PCCCAudioType;
  PCCCVolumeKeys: PCCCVolumeKeysType;
  playAudio: (key: PCCCAudioKeysType) => void;
  stopAudio: (key: PCCCAudioKeysType) => void;
  setIsGlobalMute: (isGlobalMute: boolean) => void;
  setMuted: (key: PCCCAudioKeysType, muteState: boolean) => void;
  setVolume: (key: PCCCAudioKeysType, volume: number) => void;
  PCCCActiveVolumeKeys: PCCCVolumeKeysType;
}
