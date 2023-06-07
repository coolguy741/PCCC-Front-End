import { FC, memo, useCallback, useEffect } from "react";
import { shallow } from "zustand/shallow";
import GameCanvas from "./components/0-Game/0-Canvas/GameCanvas";
import GameStage from "./components/0-Game/1-Stage/GameStage";
import UIContainer from "./components/1-UI/0-UIContainer/UIContainer";
import useWindowFocusBlur from "./components/1-UI/5-Hooks/useWindowFocusBlur";
import { PCCCAudioKeysType } from "./globalState/modules/AudioModule/AudioModuleTypes";
import { useGlobalState } from "./globalState/useGlobalState";
import StyleProvider from "./styles/StyleProvider";

interface GamePagePropTypes {
  debug?: boolean;
}

const GamePage: FC<GamePagePropTypes> = ({ debug }) => {
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

  useEffect(() => {
    if (!PCCCAudio["PCCCTheme"]) return;
    if (PCCCAudio["PCCCTheme"].playing()) return;
    playAudio("PCCCTheme");
  }, [PCCCAudio, playAudio]);

  const onBlur = useCallback(() => {
    Object.keys(PCCCVolumeKeys).forEach((key) => {
      const audioKey = key as PCCCAudioKeysType;
      setMuted(audioKey, true);
      setIsGlobalMute(true);
    });
  }, [PCCCVolumeKeys, setMuted, setIsGlobalMute]);

  const onFocus = useCallback(() => {
    Object.keys(PCCCVolumeKeys).forEach((key) => {
      const audioKey = key as PCCCAudioKeysType;
      setMuted(audioKey, false);
      setIsGlobalMute(false);
    });
  }, [PCCCVolumeKeys, setMuted, setIsGlobalMute]);

  // Hooks
  useWindowFocusBlur(onFocus, onBlur);

  return (
    <StyleProvider>
      <GameCanvas>
        <GameStage />
      </GameCanvas>
      <UIContainer debug={debug} />
    </StyleProvider>
  );
};

export default memo(GamePage);
