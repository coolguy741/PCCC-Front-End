import {
  DoubleSide,
  MeshStandardMaterial,
  SphereGeometry,
  TubeGeometry,
} from "three";
import {
  BIGTREE_GARDENHOSE_ROUTE,
  BIGTREE_SOILCORNER_ROUTE,
  BIGTREE_TOOLRACK_ROUTE,
  GARDENVIEW_BIGTREE_ROUTE,
  GARDENVIEW_GARDENHOSE_ROUTE,
  GARDENVIEW_KITCHENVIEW_ROUTE,
  GARDENVIEW_PLANTBOX_ROUTE,
  GARDENVIEW_SOILCORNER_ROUTE,
  GARDENVIEW_TOOLRACK_ROUTE,
  GATE_PLANTBOX_ROUTE,
  GATE_TOOLRACK_ROUTE,
  KITCHENVIEW_BIGTREE_ROUTE,
  KITCHENVIEW_GARDENHOSE_ROUTE,
  KITCHENVIEW_PLANTBOX_ROUTE,
  KITCHENVIEW_SOILCORNER_ROUTE,
  KITCHENVIEW_TOOLRACK_ROUTE,
  PLANTBOX_BIGTREE_ROUTE,
  PLANTBOX_GARDENHOSE_ROUTE,
  PLANTBOX_SOILCORNER_ROUTE,
  PLANTBOX_TOOLRACK_ROUTE,
  SOILCORNER_GARDENHOSE_ROUTE,
  TOOLRACK_GARDENHOSE_ROUTE,
  TOOLRACK_SOILCORNER_ROUTE,
} from "./GARDEN_ROUTES";

const radius = 0.015;
const closed = false;
const radiusSegments = 8;
const tubularSegments = 100;

const HOTSPOT_HELPER_GEO = new SphereGeometry(
  0.05,
  32,
  16,
  0,
  Math.PI * 2,
  0,
  Math.PI,
);

const HOTSPOT_ROUTE_HELPER_MATERIAL = new MeshStandardMaterial({
  color: "red",
  side: DoubleSide,
});

const HOTSPOT_LOOKAT_HELPER_MATERIAL = new MeshStandardMaterial({
  color: "blue",
  side: DoubleSide,
});

const HOTSPOT_POSITION_HELPER_MATERIAL = new MeshStandardMaterial({
  color: "green",
  side: DoubleSide,
});

const GATE_PLANTBOX_ROUTE_HELPER_GEO = new TubeGeometry(
  GATE_PLANTBOX_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const GATE_TOOLRACK_ROUTE_HELPER_GEO = new TubeGeometry(
  GATE_TOOLRACK_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const GARDENVIEW_KITCHENVIEW_ROUTE_HELPER_GEO = new TubeGeometry(
  GARDENVIEW_KITCHENVIEW_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const GARDENVIEW_PLANTBOX_ROUTE_HELPER_GEO = new TubeGeometry(
  GARDENVIEW_PLANTBOX_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const GARDENVIEW_BIGTREE_ROUTE_HELPER_GEO = new TubeGeometry(
  GARDENVIEW_BIGTREE_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const GARDENVIEW_TOOLRACK_ROUTE_HELPER_GEO = new TubeGeometry(
  GARDENVIEW_TOOLRACK_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const GARDENVIEW_SOILCORNER_ROUTE_HELPER_GEO = new TubeGeometry(
  GARDENVIEW_SOILCORNER_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const GARDENVIEW_GARDENHOSE_ROUTE_HELPER_GEO = new TubeGeometry(
  GARDENVIEW_GARDENHOSE_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const KITCHENVIEW_PLANTBOX_ROUTE_HELPER_GEO = new TubeGeometry(
  KITCHENVIEW_PLANTBOX_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const KITCHENVIEW_BIGTREE_ROUTE_HELPER_GEO = new TubeGeometry(
  KITCHENVIEW_BIGTREE_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const KITCHENVIEW_TOOLRACK_ROUTE_HELPER_GEO = new TubeGeometry(
  KITCHENVIEW_TOOLRACK_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const KITCHENVIEW_SOILCORNER_ROUTE_HELPER_GEO = new TubeGeometry(
  KITCHENVIEW_SOILCORNER_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const KITCHENVIEW_GARDENHOSE_ROUTE_HELPER_GEO = new TubeGeometry(
  KITCHENVIEW_GARDENHOSE_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const PLANTBOX_BIGTREE_ROUTE_HELPER_GEO = new TubeGeometry(
  PLANTBOX_BIGTREE_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const PLANTBOX_TOOLRACK_ROUTE_HELPER_GEO = new TubeGeometry(
  PLANTBOX_TOOLRACK_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const PLANTBOX_SOILCORNER_ROUTE_HELPER_GEO = new TubeGeometry(
  PLANTBOX_SOILCORNER_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const PLANTBOX_GARDENHOSE_ROUTE_HELPER_GEO = new TubeGeometry(
  PLANTBOX_GARDENHOSE_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const BIGTREE_TOOLRACK_ROUTE_HELPER_GEO = new TubeGeometry(
  BIGTREE_TOOLRACK_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const BIGTREE_SOILCORNER_ROUTE_HELPER_GEO = new TubeGeometry(
  BIGTREE_SOILCORNER_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const BIGTREE_GARDENHOSE_ROUTE_HELPER_GEO = new TubeGeometry(
  BIGTREE_GARDENHOSE_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const TOOLRACK_SOILCORNER_ROUTE_HELPER_GEO = new TubeGeometry(
  TOOLRACK_SOILCORNER_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const TOOLRACK_GARDENHOSE_ROUTE_HELPER_GEO = new TubeGeometry(
  TOOLRACK_GARDENHOSE_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const SOILCORNER_GARDENHOSE_ROUTE_HELPER_GEO = new TubeGeometry(
  SOILCORNER_GARDENHOSE_ROUTE,
  tubularSegments,
  radius,
  radiusSegments,
  closed,
);

const HOTSPOT_ROUTE_GEO_DATA = [
  { id: 0, geometry: GATE_PLANTBOX_ROUTE_HELPER_GEO },
  { id: 1, geometry: GATE_TOOLRACK_ROUTE_HELPER_GEO },
  { id: 2, geometry: GARDENVIEW_PLANTBOX_ROUTE_HELPER_GEO },
  { id: 3, geometry: GARDENVIEW_KITCHENVIEW_ROUTE_HELPER_GEO },
  { id: 4, geometry: GARDENVIEW_BIGTREE_ROUTE_HELPER_GEO },
  { id: 5, geometry: GARDENVIEW_TOOLRACK_ROUTE_HELPER_GEO },
  { id: 6, geometry: GARDENVIEW_SOILCORNER_ROUTE_HELPER_GEO },
  { id: 7, geometry: GARDENVIEW_GARDENHOSE_ROUTE_HELPER_GEO },
  { id: 8, geometry: KITCHENVIEW_PLANTBOX_ROUTE_HELPER_GEO },
  { id: 9, geometry: KITCHENVIEW_BIGTREE_ROUTE_HELPER_GEO },
  { id: 10, geometry: KITCHENVIEW_TOOLRACK_ROUTE_HELPER_GEO },
  { id: 11, geometry: KITCHENVIEW_SOILCORNER_ROUTE_HELPER_GEO },
  { id: 12, geometry: KITCHENVIEW_GARDENHOSE_ROUTE_HELPER_GEO },
  { id: 13, geometry: PLANTBOX_BIGTREE_ROUTE_HELPER_GEO },
  { id: 14, geometry: PLANTBOX_TOOLRACK_ROUTE_HELPER_GEO },
  { id: 15, geometry: PLANTBOX_SOILCORNER_ROUTE_HELPER_GEO },
  { id: 16, geometry: PLANTBOX_GARDENHOSE_ROUTE_HELPER_GEO },
  { id: 17, geometry: BIGTREE_TOOLRACK_ROUTE_HELPER_GEO },
  { id: 18, geometry: BIGTREE_SOILCORNER_ROUTE_HELPER_GEO },
  { id: 19, geometry: BIGTREE_GARDENHOSE_ROUTE_HELPER_GEO },
  { id: 20, geometry: TOOLRACK_SOILCORNER_ROUTE_HELPER_GEO },
  { id: 21, geometry: TOOLRACK_GARDENHOSE_ROUTE_HELPER_GEO },
  { id: 22, geometry: SOILCORNER_GARDENHOSE_ROUTE_HELPER_GEO },
];

export {
  HOTSPOT_HELPER_GEO,
  HOTSPOT_ROUTE_GEO_DATA,
  HOTSPOT_ROUTE_HELPER_MATERIAL,
  HOTSPOT_LOOKAT_HELPER_MATERIAL,
  HOTSPOT_POSITION_HELPER_MATERIAL,
};
