import { FC, memo } from "react";
import GameCanvas from "./components/0-Game/0-Canvas/GameCanvas";
import GameStage from "./components/0-Game/1-Stage/GameStage";
import UIContainer from "./components/1-UI/0-UIContainer/UIContainer";
import StyleProvider from "./styles/StyleProvider";

const GamePage: FC = () => {
  return (
    <StyleProvider>
      <GameCanvas>
        <GameStage />
      </GameCanvas>
      <UIContainer />
    </StyleProvider>
  );
};

export default memo(GamePage);
