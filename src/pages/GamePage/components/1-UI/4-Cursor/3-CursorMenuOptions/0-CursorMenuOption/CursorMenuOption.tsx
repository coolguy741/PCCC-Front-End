// CursorMenuOption.js
import { FC, memo } from "react";
import CursorMenuOptionStyleContainer from "./CursorMenuOptionStyleContainer";

interface CursorMenuOptionPropTypes {
  label: string;
  iconURL: string;
}

const CursorMenuOption: FC<CursorMenuOptionPropTypes> = ({
  label,
  iconURL,
}) => {
  return (
    <CursorMenuOptionStyleContainer>
      <h3 className="label">{label}</h3>
      <img className="icon" alt={label} src={iconURL} draggable={false} />
    </CursorMenuOptionStyleContainer>
  );
};

export default memo(CursorMenuOption);
