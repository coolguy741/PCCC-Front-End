import { Instance, Instances } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, Fragment, memo } from "react";
import {
  HOTSPOT_HELPER_GEO,
  HOTSPOT_LOOKAT_HELPER_MATERIAL,
  HOTSPOT_POSITION_HELPER_MATERIAL,
  HOTSPOT_ROUTE_GEO_DATA,
  HOTSPOT_ROUTE_HELPER_MATERIAL,
} from "../5-Constants/0-Garden/GARDEN_DEBUG_DEFINES";
import { HOTSPOT_LOOKAT_INSTANCE_DATA } from "../5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import { HOTSPOT_POSITION_INSTANCE_DATA } from "../5-Constants/0-Garden/GARDEN_POSITION";

const HotSpotHelperController: FC = () => {
  // HOOKS
  const { routes, position, lookAtPos, hotSpotDebug } = useControls({
    debugHelpers: folder({
      hotSpotDebug: false,
      routes: true,
      position: true,
      lookAtPos: true,
    }),
  });

  return (
    <Fragment>
      <Instances
        visible={position && hotSpotDebug}
        geometry={HOTSPOT_HELPER_GEO}
        material={HOTSPOT_POSITION_HELPER_MATERIAL}
      >
        {HOTSPOT_POSITION_INSTANCE_DATA.map(({ id, position }) => {
          return <Instance key={id} position={position} />;
        })}
      </Instances>
      <Instances
        visible={lookAtPos && hotSpotDebug}
        geometry={HOTSPOT_HELPER_GEO}
        material={HOTSPOT_LOOKAT_HELPER_MATERIAL}
      >
        {HOTSPOT_LOOKAT_INSTANCE_DATA.map(({ id, position }) => {
          return <Instance key={id} position={position} />;
        })}
      </Instances>

      {HOTSPOT_ROUTE_GEO_DATA.map(({ id, geometry }) => {
        return (
          <mesh
            key={id}
            visible={routes && hotSpotDebug}
            geometry={geometry}
            material={HOTSPOT_ROUTE_HELPER_MATERIAL}
          />
        );
      })}
    </Fragment>
  );
};

export default memo(HotSpotHelperController);
