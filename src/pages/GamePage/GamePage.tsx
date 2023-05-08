import { memo } from "react";
import GameCanvas from "./components/0-R3F/0-GameCanvas/GameCanvas";
import GameStage from "./components/0-R3F/1-GameStage/GameStage";
import UIContainer from "./components/1-UI/0-UIContainer/UIContainer";
import GamePageStyleContainer from "./styles/Containers/GamePageStyleContainer";
import StyleProvider from "./styles/StyleProvider";

const GamePage = () => {
  // useEffect(() => {
  //   const onFocus = () => {
  //     document.body.style.cursor = "none";
  //   };

  //   const onBlur = () => {
  //     document.body.style.cursor = "default";
  //   };

  //   window.addEventListener("focus", onFocus);
  //   window.addEventListener("blur", onBlur);
  //   return () => {
  //     window.removeEventListener("focus", onFocus);
  //     window.removeEventListener("blur", onBlur);
  //   };
  // }, []);

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
