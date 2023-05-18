import { FC, Fragment, memo } from "react";
import InspectCamera from "../2-InspectEntities/0-InspectCamera/InspectCamera";
import InspectItem from "../2-InspectEntities/1-InspectItem/InspectItem";
import InspectShadowBG from "../2-InspectEntities/2-InspectShadowBG/InspectShadowBG";
import InspectEnvironmentMap from "../4-InspectEnvironment/0-InspectEnironmentMap/InspectEnvironmentMap";
import InspectLighting from "../4-InspectEnvironment/1-InspectLighting/InspectLighting";

const InspectR3FStage: FC = () => {
  return (
    <Fragment>
      <InspectShadowBG />
      <InspectItem />
      <InspectEnvironmentMap />
      <InspectLighting />
      <InspectCamera />
    </Fragment>
  );
};

export default memo(InspectR3FStage);
