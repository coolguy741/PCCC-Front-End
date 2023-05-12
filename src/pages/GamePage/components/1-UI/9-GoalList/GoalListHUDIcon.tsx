import { gsap } from "gsap";
import { FC, memo, useCallback, useRef } from "react";
import { BACK_1_OUT } from "../../../shared/Eases/Eases";
import { RefDivType } from "../../../shared/Types/RefTypes";
import GoalListHUDIconStyleContainer from "./GoalListHUDIconStyleContainer";

const GoalListHUDIcon: FC = () => {
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
    <GoalListHUDIconStyleContainer
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <div className="bg" ref={ref} />

      <img
        className="GoalList"
        alt={"GoalList"}
        src={"/game_assets/ui_images/goal_list/goal_list.webp"}
        draggable={false}
      />
    </GoalListHUDIconStyleContainer>
  );
};

export default memo(GoalListHUDIcon);
