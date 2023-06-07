import { Bone, SkinnedMesh } from "three";
import { GLTF } from "three-stdlib";

export interface GardenToolTrackNodeTypes {
  garden: SkinnedMesh;
  blue_hat_collider: SkinnedMesh;
  blue_overalls_collider: SkinnedMesh;
  drawer_collider: SkinnedMesh;
  gardening_and_sunglasses_collider: SkinnedMesh;
  gardening_gloves_collider: SkinnedMesh;
  green_hat_collider: SkinnedMesh;
  hoe_collider: SkinnedMesh;
  orange_overalls_collider: SkinnedMesh;
  paint_cans_collider: SkinnedMesh;
  phillips_screwdriver_collider: SkinnedMesh;
  pitchfork_collider: SkinnedMesh;
  rake_collider: SkinnedMesh;
  red_hat_collider: SkinnedMesh;
  seed_packets_collider: SkinnedMesh;
  shovel_collider: SkinnedMesh;
  slotted_screwdriver_collider: SkinnedMesh;
  wood_glue_collider: SkinnedMesh;
  wood_scraps_collider: SkinnedMesh;
  root_bone: Bone;
  paint_cans_bone: Bone;
  seed_packets_bone: Bone;
  gardening_gloves_bone: Bone;
  wood_glue_bone: Bone;
  red_hat_bone: Bone;
  green_hat_bone: Bone;
  blue_hat_bone: Bone;
  orange_overalls_bone: Bone;
  rake_bone: Bone;
  shovel_bone: Bone;
  hoe_bone: Bone;
  pitchfork_bone: Bone;
  gardening_and_sunglasses_bone: Bone;
  wood_scraps_bone: Bone;
  blue_overalls_bone: Bone;
  drawer_bone: Bone;
  slotted_screwdriver_bone: Bone;
  phillips_screwdriver_bone: Bone;
}

export type GardenGLTF = GLTF & {
  nodes: GardenToolTrackNodeTypes;
};
