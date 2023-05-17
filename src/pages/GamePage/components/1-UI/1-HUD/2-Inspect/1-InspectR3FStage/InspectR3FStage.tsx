import { FC, Fragment, memo } from "react";
import InspectCamera from "../2-InspectEntities/InspectCamera";
import InspectItem from "../2-InspectEntities/InspectItem";
import InspectShadowBG from "../2-InspectEntities/InspectShadowBG";
import InspectEnvironment from "../3-InspectEnvironment/InspectEnvironment";
import InspectLighting from "../3-InspectEnvironment/InspectLighting";

const InspectR3FStage: FC = () => {
  return (
    <Fragment>
      <InspectShadowBG />
      <InspectItem />
      <InspectEnvironment />
      <InspectLighting />
      <InspectCamera />
    </Fragment>
  );
};

export default memo(InspectR3FStage);
