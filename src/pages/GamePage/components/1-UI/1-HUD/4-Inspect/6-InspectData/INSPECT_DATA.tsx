import { InteractiveGameEntityTypes } from "../../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";

export type InspectActionTypes = "Wear" | "Use" | "Eat" | "Plant";

interface InspectDataItem {
  id: number;
  pickup: boolean;
  action: InspectActionTypes;
  inspectText: string | null;
  cantpickupText: string | null;
  incorrectUseText: string | null;
  itemName: InteractiveGameEntityTypes;
}

// The InspectData map should have keys of type string (the item names) and values of type InspectDataItem
interface InspectDataTypes {
  [itemName: string]: InspectDataItem;
}

const InspectData: InspectDataTypes = {
  "Gardening Hat": {
    id: 0,
    itemName: "Gardening Hat",
    pickup: true,
    action: "Wear",
    inspectText: "Stay cool in the sun and protect your face from sunburn.",
    cantpickupText: null,
    incorrectUseText: null,
  },
  Shovel: {
    id: 1,
    itemName: "Shovel",
    pickup: true,
    action: "Use",
    inspectText: "Dig, scoop, and move dirt with this handy tool!",
    cantpickupText: null,
    incorrectUseText:
      "I shouldn’t use it here. It’s best use din the Plant box area.",
  },
  "Gardening Gloves": {
    id: 2,
    itemName: "Gardening Gloves",
    pickup: true,
    action: "Eat",
    inspectText: "Keep your hands clean and safe from thorns and prickles.",
    cantpickupText: null,
    incorrectUseText: null,
  },
};

export { InspectData };
