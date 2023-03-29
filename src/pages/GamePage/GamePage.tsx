import { memo } from "react";
import StyleProvider from "./styles/StyleProvider";
import GameCanvas from "./components/0-R3F/0-GameCanvas/GameCanvas";
import GameStage from "./components/0-R3F/1-GameStage/GameStage";
import UIContainer from "./components/1-UI/0-UIContainer/UIContainer";
import GamePageStyleContainer from "./styles/Containers/GamePageStyleContainer";

const GamePage = () => {
  return (
    <StyleProvider>
      <GamePageStyleContainer>
        <GameCanvas>
          <GameStage />
        </GameCanvas>
      </GamePageStyleContainer>
      <UIContainer />
    </StyleProvider>
  );
};

export default memo(GamePage);
