// CursorMenuOption.js
import { FC, memo } from "react";
import { Vector2 } from "three";
import CursorMenuOptionStyleContainer from "./CursorMenuOptionStyleContainer";
import { useCursorMenuOptionLogic } from "./useCursorMenuOptionLogic";

interface CursorMenuOptionPropTypes {
  color: string;
  label: string;
  iconURL: string;
  animOffset: number;
  hoverTrigger: boolean;
  menuPositionEnd: Vector2;
  menuPositionDriver: Vector2;
  boundingRectVector: Vector2;
  menuPositionOffset: Vector2;
  tempCursorLocationCopy: Vector2;
}

const CursorMenuOption: FC<CursorMenuOptionPropTypes> = ({
  color,
  label,
  iconURL,
  animOffset,
  hoverTrigger,
  menuPositionEnd,
  menuPositionDriver,
  boundingRectVector,
  menuPositionOffset,
  tempCursorLocationCopy,
}) => {
  // Hooks
  const { styleObject, cursorMenuOptionRef } = useCursorMenuOptionLogic({
    color,
    animOffset,
    hoverTrigger,
    menuPositionEnd,
    menuPositionDriver,
    boundingRectVector,
    menuPositionOffset,
    tempCursorLocationCopy,
  });

  return (
    <CursorMenuOptionStyleContainer
      style={styleObject}
      ref={cursorMenuOptionRef}
    >
      <h3 className="label">{label}</h3>
      <div className="body-bg" />
      <img className="icon" alt={label} src={iconURL} draggable={false} />
    </CursorMenuOptionStyleContainer>
  );
};

export default memo(CursorMenuOption);
