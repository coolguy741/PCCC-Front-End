import { Vector3 } from "three";

const FRIDGE_POSITION: Vector3 = new Vector3(-0.15, 0.98, -2.16);

const PANTRY_POSITION: Vector3 = new Vector3(-0.31, 0.98, -2.38);

const LOCKER_POSITION: Vector3 = new Vector3(-1.08, 0.74, -1.87);

const HYDROPONICS_POSITION: Vector3 = new Vector3(-0.87, 0.74, -1.87);

const SINK_POSITION: Vector3 = new Vector3(0.89, 1.1, -2.4);

const STOVE_POSITION: Vector3 = new Vector3(0.67, 1.18, -2.3);

const WORKSPACE_POSITION: Vector3 = new Vector3(0.73, 1.07, -2.36);

const KITCHEN_HOTSPOT_POSITION_INSTANCE_DATA = [
  {
    id: 0,
    position: FRIDGE_POSITION,
  },
  {
    id: 1,
    position: PANTRY_POSITION,
  },
  {
    id: 2,
    position: LOCKER_POSITION,
  },
  {
    id: 3,
    position: HYDROPONICS_POSITION,
  },
  {
    id: 4,
    position: SINK_POSITION,
  },
  {
    id: 5,
    position: STOVE_POSITION,
  },
  {
    id: 6,
    position: WORKSPACE_POSITION,
  },
];

export {
  WORKSPACE_POSITION,
  SINK_POSITION,
  FRIDGE_POSITION,
  PANTRY_POSITION,
  LOCKER_POSITION,
  HYDROPONICS_POSITION,
  STOVE_POSITION,
  KITCHEN_HOTSPOT_POSITION_INSTANCE_DATA,
};
