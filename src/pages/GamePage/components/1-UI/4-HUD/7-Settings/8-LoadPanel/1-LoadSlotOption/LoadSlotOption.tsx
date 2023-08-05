import { FC, memo, useMemo } from "react";
import LocationTemp from "./assets/location_temp.webp";
import SlotOneBG from "./assets/slot_1.webp";
import SlotTwoBG from "./assets/slot_2.webp";
import SlotThreeBG from "./assets/slot_3.webp";
import LoadSlotOptionStyleContainer from "./LoadSlotOptionStyleContainer";
import SlotOptionProgress from "./SlotOptionProgress/SlotOptionProgress";

interface LoadSlotOptionProps {
  slotPosition: number;
  recipeTitle: string;
  locationImgSrc: string;
}

// TODO: Populate with API data
const LoadSlotOption: FC<LoadSlotOptionProps> = ({
  slotPosition,
  recipeTitle,
  locationImgSrc,
}) => {
  const slotBGImage = useMemo(() => {
    return slotPosition === 1
      ? SlotOneBG
      : slotPosition === 2
      ? SlotTwoBG
      : SlotThreeBG;
  }, [slotPosition]);

  const [topTitle, bottomTitle] = useMemo(() => {
    const words = recipeTitle.split(" ");
    const topTitle = words.slice(0, 1).join(" ");
    const bottomTitle = words.slice(1).join(" ");
    return [topTitle, bottomTitle];
  }, [recipeTitle]);

  return (
    <LoadSlotOptionStyleContainer>
      <div className="slot-bg">
        <img
          alt="load-option"
          draggable={false}
          src={slotBGImage}
          className={`slot-${slotPosition}`}
        />
      </div>

      <div className="slot-title">
        <h1 className="slot-title-content">SAVE {slotPosition}</h1>
      </div>

      <div className="top-title">
        <h1 className="title-content">Recipe</h1>
        <h1 className="recipe-title-content">
          {topTitle}
          <br />
          {bottomTitle}
        </h1>
        <img
          alt={locationImgSrc}
          draggable={false}
          src={LocationTemp}
          className="location-img"
        />
        <h1 className="achievement-progress">Achievement Progress</h1>
        <div className="progress">
          <SlotOptionProgress title="Garden" progress={45} />
          <div className="line-break" />
          <SlotOptionProgress title="Kitchen" progress={15} />
        </div>
      </div>
    </LoadSlotOptionStyleContainer>
  );
};

export default memo(LoadSlotOption);
