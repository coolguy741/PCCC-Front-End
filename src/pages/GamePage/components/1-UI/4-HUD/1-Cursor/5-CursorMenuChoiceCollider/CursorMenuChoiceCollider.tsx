import { FC, memo } from "react";
import CursorMenuChoiceColliderStyleContainer from "./CursorMenuChoiceColliderStyleContainer";
import { useCursorMenuChoiceColliderLogic } from "./useCursorMenuChoiceColliderLogic";

const CursorMenuChoiceCollider: FC = () => {
  // Hooks
  const { cursorMenuChoiceColliderRef, handleCursorMenuOptionChoice } =
    useCursorMenuChoiceColliderLogic();

  return (
    <CursorMenuChoiceColliderStyleContainer
      ref={cursorMenuChoiceColliderRef}
      onClick={handleCursorMenuOptionChoice}
    />
  );
};

export default memo(CursorMenuChoiceCollider);
