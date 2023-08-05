import { FC, memo } from "react";
import FlowerBG from "../assets/flower_bg.webp";
import SlotOptionProgressStyleContainer from "../SlotOptionProgress/SlotOptionProgressStyleContainer";

interface SlotOptionProgressProps {
  title: string;
  progress: number;
}
const SlotOptionProgress: FC<SlotOptionProgressProps> = ({
  title,
  progress,
}) => {
  return (
    <SlotOptionProgressStyleContainer>
      <h1 className="title">{title}</h1>
      <div className="progress-container">
        <img
          alt={`${title}-progress`}
          draggable={false}
          src={FlowerBG}
          className="flower-bg"
        />
        <h1 className="progress-text">{progress}%</h1>
      </div>
    </SlotOptionProgressStyleContainer>
  );
};

export default memo(SlotOptionProgress);
