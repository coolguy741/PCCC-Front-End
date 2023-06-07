import { FC, Fragment, memo } from "react";
import InteractiveGameEntity from "../../../1-InteractiveGameEntity/InteractiveGameEntity";
import { GardenToolTrackNodeTypes } from "../../0-Garden/GardenTypes";

interface ToolRackProps {
  nodes: GardenToolTrackNodeTypes;
}

const ToolRack: FC<ToolRackProps> = ({ nodes }) => {
  return (
    <Fragment>
      <InteractiveGameEntity
        name={"Pitch Fork"}
        bone={nodes.pitchfork_bone}
        geometry={nodes.pitchfork_collider.geometry}
        skeleton={nodes.pitchfork_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Gardening Gloves"}
        bone={nodes.gardening_gloves_bone}
        geometry={nodes.gardening_gloves_collider.geometry}
        skeleton={nodes.gardening_gloves_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Shovel"}
        bone={nodes.shovel_bone}
        geometry={nodes.shovel_collider.geometry}
        skeleton={nodes.shovel_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Seed Packets"}
        bone={nodes.seed_packets_bone}
        geometry={nodes.seed_packets_collider.geometry}
        skeleton={nodes.seed_packets_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Rake"}
        bone={nodes.rake_bone}
        geometry={nodes.rake_collider.geometry}
        skeleton={nodes.rake_collider.skeleton}
      />

      <InteractiveGameEntity
        name={"Hoe"}
        bone={nodes.hoe_bone}
        geometry={nodes.hoe_collider.geometry}
        skeleton={nodes.hoe_collider.skeleton}
      />

      <InteractiveGameEntity
        name={"Paint Cans"}
        bone={nodes.paint_cans_bone}
        geometry={nodes.paint_cans_collider.geometry}
        skeleton={nodes.paint_cans_collider.skeleton}
      />

      <InteractiveGameEntity
        name={"Wood Glue"}
        bone={nodes.wood_glue_bone}
        geometry={nodes.wood_glue_collider.geometry}
        skeleton={nodes.wood_glue_collider.skeleton}
      />

      <InteractiveGameEntity
        name={"Drawer"}
        bone={nodes.drawer_bone}
        geometry={nodes.drawer_collider.geometry}
        skeleton={nodes.drawer_collider.skeleton}
      />

      <InteractiveGameEntity
        name={"Slotted Screwdriver"}
        bone={nodes.slotted_screwdriver_bone}
        geometry={nodes.slotted_screwdriver_collider.geometry}
        skeleton={nodes.slotted_screwdriver_collider.skeleton}
      />

      <InteractiveGameEntity
        name={"Phillips Screwdriver"}
        bone={nodes.phillips_screwdriver_bone}
        geometry={nodes.phillips_screwdriver_collider.geometry}
        skeleton={nodes.phillips_screwdriver_collider.skeleton}
      />

      <InteractiveGameEntity
        name={"Wood Scraps"}
        bone={nodes.wood_scraps_bone}
        geometry={nodes.wood_scraps_collider.geometry}
        skeleton={nodes.wood_scraps_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Blue Straw Hat"}
        bone={nodes.blue_hat_bone}
        geometry={nodes.blue_hat_collider.geometry}
        skeleton={nodes.blue_hat_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Green Straw Hat"}
        bone={nodes.green_hat_bone}
        geometry={nodes.green_hat_collider.geometry}
        skeleton={nodes.green_hat_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Red Straw Hat"}
        bone={nodes.red_hat_bone}
        geometry={nodes.red_hat_collider.geometry}
        skeleton={nodes.red_hat_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Gardening Hat and Sunglasses"}
        bone={nodes.gardening_and_sunglasses_bone}
        geometry={nodes.gardening_and_sunglasses_collider.geometry}
        skeleton={nodes.gardening_and_sunglasses_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Blue Overalls"}
        bone={nodes.blue_overalls_bone}
        geometry={nodes.blue_overalls_collider.geometry}
        skeleton={nodes.blue_overalls_collider.skeleton}
      />
      <InteractiveGameEntity
        name={"Orange Overalls"}
        bone={nodes.orange_overalls_bone}
        geometry={nodes.orange_overalls_collider.geometry}
        skeleton={nodes.orange_overalls_collider.skeleton}
      />
    </Fragment>
  );
};

export default memo(ToolRack);
