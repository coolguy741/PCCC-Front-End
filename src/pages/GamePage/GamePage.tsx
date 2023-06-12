import { FC, Fragment, memo } from "react";
import GameCanvas from "./components/0-Game/0-Canvas/0-GameCanvas/GameCanvas";
import GameStage from "./components/0-Game/1-Stage/GameStage";
import UIContainer from "./components/1-UI/0-UIContainer/UIContainer";
import AudioController from "./components/3-Shared/0-Controllers/AudioController";
import CursorVisibilityController from "./components/3-Shared/0-Controllers/CursorVisibilityController";
import DebugController from "./components/3-Shared/0-Controllers/DebugController";
import WindowSizeController from "./components/3-Shared/0-Controllers/WindowSizeController";
import StyleProvider from "./styles/StyleProvider";

const GamePage: FC = () => {
  return (
    <Fragment>
      <DebugController />
      <AudioController />
      <WindowSizeController />
      <CursorVisibilityController />
      <StyleProvider>
        <GameCanvas>
          <GameStage />
        </GameCanvas>
        <UIContainer />
      </StyleProvider>
    </Fragment>
  );
};

export default memo(GamePage);
