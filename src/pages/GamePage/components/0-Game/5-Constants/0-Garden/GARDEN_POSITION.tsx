import { Vector3 } from "three";

const GATE_POSITION: Vector3 = new Vector3(0.39, 0.33, 4.29);

const BIGTREE_POSITION: Vector3 = new Vector3(0.48, 0.46, 1.17);

const TOOLRACK_POSITION: Vector3 = new Vector3(
  -2.0750300884246826,
  0.34871044754981995,
  -0.7797117829322815,
);

const PLANTBOX_POSITION: Vector3 = new Vector3(
  0.8169320821762085,
  1.3982962369918823,
  0.2592017352581024,
);

const SOILCORNER_POSITION: Vector3 = new Vector3(0.45, 0.46, 1.67);

const GARDENHOSE_POSITION: Vector3 = new Vector3(-1.58, 0.28, -0.27);

const GARDENVIEW_POSITION: Vector3 = new Vector3(-5, 4, 4);

const KITCHENVIEW_POSITION: Vector3 = new Vector3(0.22, 0.74, 0.7);

const HOTSPOT_POSITION_INSTANCE_DATA = [
  {
    id: 0,
    position: GATE_POSITION,
  },
  {
    id: 1,
    position: BIGTREE_POSITION,
  },
  {
    id: 2,
    position: PLANTBOX_POSITION,
  },
  {
    id: 3,
    position: TOOLRACK_POSITION,
  },
  {
    id: 4,
    position: SOILCORNER_POSITION,
  },
  {
    id: 5,
    position: GARDENHOSE_POSITION,
  },
  {
    id: 6,
    position: GARDENVIEW_POSITION,
  },
  {
    id: 7,
    position: KITCHENVIEW_POSITION,
  },
];

export {
  GATE_POSITION,
  BIGTREE_POSITION,
  PLANTBOX_POSITION,
  TOOLRACK_POSITION,
  SOILCORNER_POSITION,
  GARDENVIEW_POSITION,
  GARDENHOSE_POSITION,
  KITCHENVIEW_POSITION,
  HOTSPOT_POSITION_INSTANCE_DATA,
};
