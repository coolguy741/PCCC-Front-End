import { FC, memo } from "react";

interface LoadSlotOptionProps {
  slotPosition: number;
}

const LoadSlotOption: FC<LoadSlotOptionProps> = ({ slotPosition }) => {
  return <div>SLOT {slotPosition}</div>;
};

export default memo(LoadSlotOption);
