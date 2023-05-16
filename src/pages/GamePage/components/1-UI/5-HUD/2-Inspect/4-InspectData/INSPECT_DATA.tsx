import { InteractiveGameEntityTypes } from "../../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";

interface InspectDataTypes {
  id: number;
  pickUp: boolean;
  action: string | null;
  inspectText: string | null;
  cantPickUpText: string | null;
  incorrectUseText: string | null;
  itemName: InteractiveGameEntityTypes;
}

const InspectData: InspectDataTypes[] = [
  {
    id: 0,
    itemName: "Bee Hive Top",
    pickUp: true,
    action: "Use",
    inspectText:
      "Harvest honeycombs from these frames, full of delicious honey made by hardworking bees!",
    cantPickUpText:
      "I can’t pick it up like this, harvesting honey requires the proper equipment!",
    incorrectUseText:
      "I need the right tool to use on these honeycombs to harvest the honey.",
  },
  {
    id: 1,
    itemName: "Beekeeper Outfit + Hat",
    pickUp: true,
    action: "Wear",
    inspectText: "Protect yourself while visiting the beehive.",
    cantPickUpText: null,
    incorrectUseText: null,
  },
  {
    id: 2,
    itemName: "Berries",
    pickUp: true,
    action: "Eat",
    inspectText:
      "While these particular berries aren't for eating, they add a pop of color and texture to the garden. Remember to only eat berries that you're certain are safe to consume!",
    cantPickUpText: null,
    incorrectUseText: null,
  },
  {
    id: 3,
    itemName: "Fully Grown Blueberries",
    pickUp: true,
    action: null,
    inspectText:
      "While these particular berries aren't for eating, they add a pop of color and texture to the garden. Remember to only eat berries that you're certain are safe to consume!",
    cantPickUpText: null,
    incorrectUseText: null,
  },
  {
    id: 4,
    itemName: "Branches",
    pickUp: true,
    action: "Use",
    inspectText:
      "With so many trees in the garden, there's never a shortage of branches to prop up plants.",
    cantPickUpText: null,
    incorrectUseText:
      "What am I trying to do with this? Branches are great as climbing poles for “vine crops” like tomatoes, cucumbers, beans, peas, melons, and squash.",
  },
];

export { InspectData };
