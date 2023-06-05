import { Howl } from "howler";
import { PCCCAudioType, PCCCVolumeKeysType } from "./AudioModuleTypes";

const PCCCAudioFadeDuration = 250;

const PCCCVolumeKeys: PCCCVolumeKeysType = {
  PCCCTheme: 0.5,
  InventoryNotification: 1.5,
  ClickDown: 1,
  ClickUp: 1,
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
  ClickDown: new Howl({
    src: ["/game_assets/audio/click_down.aac"],
    volume: PCCCVolumeKeys.ClickDown,
    loop: false,
  }),
  ClickUp: new Howl({
    src: ["/game_assets/audio/click_up.aac"],
    volume: PCCCVolumeKeys.ClickUp,
    loop: false,
  }),
};

export { PCCCAudio, PCCCVolumeKeys, PCCCAudioFadeDuration };
