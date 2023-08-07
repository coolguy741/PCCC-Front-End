import { FC, Fragment, memo } from "react";
import GameCanvas from "./components/0-Game/0-Canvas/0-GameCanvas/GameCanvas";
import ScreenCanvas from "./components/0-Game/0-Canvas/1-ScreenCanvas/ScreenCanvas";
import GameStage from "./components/0-Game/1-Stage/GameStage";
import ScreenStage from "./components/0-Game/1-Stage/ScreenStage";
import UIContainer from "./components/1-UI/0-UIContainer/UIContainer";
import CursorVisibilityController from "./components/3-Shared/0-Controllers/CursorVisibilityController";
import DebugController from "./components/3-Shared/0-Controllers/DebugController";
import VideoController from "./components/3-Shared/0-Controllers/VidoeController/VideoController";
import WindowSizeController from "./components/3-Shared/0-Controllers/WindowSizeController";
import StyleProvider from "./styles/StyleProvider";

const GamePage: FC = () => {
  return (
    <Fragment>
      <DebugController />
      {/* <AudioController /> */}
      <WindowSizeController />
      <VideoController />
      <CursorVisibilityController />
      <StyleProvider>
        <GameCanvas>
          <GameStage />
        </GameCanvas>
        <ScreenCanvas>
          <ScreenStage />
        </ScreenCanvas>
        <UIContainer />
      </StyleProvider>
    </Fragment>
  );
};

export default memo(GamePage);
