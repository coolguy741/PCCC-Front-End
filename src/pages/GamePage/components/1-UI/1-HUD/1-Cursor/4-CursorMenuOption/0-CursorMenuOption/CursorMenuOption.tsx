import { FC, Fragment, memo } from "react";
import { mergeRefs } from "react-merge-refs";
import CursorMenuOptionStyleContainer from "./CursorMenuOptionStyleContainer";
import { CursorMenuOptionPropTypes } from "./CursorMenuOptionTypes";
import { useCursorMenuOptionLogic } from "./useCursorMenuOptionLogic";

const CursorMenuOption: FC<CursorMenuOptionPropTypes> = ({
  type,
  label,
  iconURL,
  animOffset,
  styleObject,
  hoverTrigger,
  offsetFactor,
  menuPositionEnd,
  menuPositionDriver,
  boundingRectVector,
  menuPositionOffset,
  tempCursorLocationCopy,
}) => {
  // Hooks
  const { cursorMenuOptionRef, cursorMenuOptionMeasureRef } =
    useCursorMenuOptionLogic({
      animOffset,
      hoverTrigger,
      offsetFactor,
      menuPositionEnd,
      menuPositionDriver,
      boundingRectVector,
      menuPositionOffset,
      tempCursorLocationCopy,
    });

  return (
    <CursorMenuOptionStyleContainer
      style={styleObject}
      ref={mergeRefs([cursorMenuOptionRef, cursorMenuOptionMeasureRef])}
    >
      {type === "exit" ? (
        <div className="exit-body-bg">
          <h3 className="exit-label">{label}</h3>
        </div>
      ) : (
        <Fragment>
          <h3 className="label">{label}</h3>
          <div className="body-bg" />
          <img className="icon" alt={label} src={iconURL} draggable={false} />
        </Fragment>
      )}
    </CursorMenuOptionStyleContainer>
  );
};

export default memo(CursorMenuOption);
