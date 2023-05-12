import { gsap } from "gsap";
import { FC, memo, useCallback, useRef } from "react";
import { BACK_1_OUT } from "../../../shared/Eases/Eases";
import { RefDivType } from "../../../shared/Types/RefTypes";
import RecipeBookHUDIconStyleContainer from "./RecipeBookHUDIconStyleContainer";

const RecipeBookHUDIcon: FC = () => {
  const ref: RefDivType = useRef(null);

  const handlePointerOver = useCallback(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      scale: 2.5,
      duration: 0.5,
      ease: BACK_1_OUT,
    });
  }, []);

  const handlePointerOut = useCallback(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      scale: 1,
      duration: 0.5,
      ease: BACK_1_OUT,
    });
  }, []);

  return (
    <RecipeBookHUDIconStyleContainer
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <div className="bg" ref={ref} />

      <img
        className="recipe-book"
        alt={"Recipe Book"}
        src={"/game_assets/ui_images/recipe_book/recipe_book.webp"}
        draggable={false}
      />
    </RecipeBookHUDIconStyleContainer>
  );
};

export default memo(RecipeBookHUDIcon);
