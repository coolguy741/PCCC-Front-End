import { FC, memo } from "react";

interface DebugButtonPropTypes {
  btnContent: string;
  btnAction: () => void;
}
const DebugButton: FC<DebugButtonPropTypes> = ({ btnContent, btnAction }) => {
  return (
    <button
      onClick={btnAction}
      style={{
        color: "white",
        border: "solid white 1px",
        backgroundColor: "black",
        paddingRight: "1rem",
        paddingLeft: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}
    >
      {btnContent}
    </button>
  );
};

export default memo(DebugButton);
