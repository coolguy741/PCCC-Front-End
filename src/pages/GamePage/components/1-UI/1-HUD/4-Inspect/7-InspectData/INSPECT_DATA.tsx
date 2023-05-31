import { InteractiveGameEntityTypes } from "../../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { InventoryItemAssetName } from "../../../../../globalState/modules/InventoryModule/InventoryModuleTypes";

export type InspectActionTypes =
  | "Wear"
  | "Use"
  | "Eat"
  | "Plant"
  | "Open"
  | "Close";

export type itemType = "tool" | "misc" | "ingredient";

interface InspectDataItem {
  id: number;
  type: itemType;
  pickup: boolean;
  assetName: InventoryItemAssetName;
  action: InspectActionTypes;
  inspectText: string | null;
  cantPickupText: string | null;
  incorrectUseText: string | null;
  itemName: InteractiveGameEntityTypes;
}

interface InspectDataTypes {
  [itemName: string]: InspectDataItem;
}

const InspectData: InspectDataTypes = {
  "Gardening Hat and Sunglasses": {
    id: 0,
    itemName: "Gardening Hat and Sunglasses",
    pickup: true,
    action: "Wear",
    inspectText: "Stay cool in the sun and protect your face from sunburn.",
    cantPickupText: null,
    incorrectUseText: null,
    assetName: "gardening_and_sunglasses",
    type: "tool",
  },
  Shovel: {
    id: 1,
    itemName: "Shovel",
    pickup: true,
    action: "Use",
    inspectText: "Dig, scoop, and move dirt with this handy tool!",
    cantPickupText: null,
    incorrectUseText:
      "I shouldn’t use it here. It’s best use din the Plant box area.",
    assetName: "shovel",
    type: "tool",
  },
  "Gardening Gloves": {
    id: 2,
    itemName: "Gardening Gloves",
    pickup: true,
    action: "Wear",
    inspectText: "Keep your hands clean and safe from thorns and prickles.",
    cantPickupText: null,
    incorrectUseText: null,
    assetName: "gardening_gloves",
    type: "tool",
  },
  Drawer: {
    id: 3,
    itemName: "Drawer",
    pickup: false,
    action: "Open",
    inspectText:
      "An old drawer, a bit rusty but it looks like it can still slide open…",
    cantPickupText: "Oh it’s too heavy, I can’t carry this.",
    incorrectUseText: null,
    assetName: "drawer",
    type: "misc",
  },
  Rake: {
    id: 4,
    itemName: "Rake",
    pickup: true,
    action: "Use",
    inspectText: "Gather leaves and debris to tidy up your garden with ease.",
    cantPickupText: null,
    incorrectUseText: null,
    assetName: "rake",
    type: "tool",
  },
  "Seed Packets": {
    id: 5,
    itemName: "Seed Packets",
    pickup: true,
    action: "Open",
    inspectText:
      "Explore new plants and create a colorful garden by planting new plant magic from tiny seeds.",
    cantPickupText: null,
    incorrectUseText:
      "I can’t plant it like here that! I need to open it first!",
    assetName: "seed_packets",
    type: "ingredient",
  },
  "Phillips Screwdriver": {
    id: 7,
    itemName: "Phillips Screwdriver",
    pickup: true,
    action: "Use",
    inspectText:
      "A tool used for screws with a cross-shaped indentation. Perfect for fixing garden tools!",
    cantPickupText: null,
    incorrectUseText: null,
    assetName: "phillips_screwdriver",
    type: "tool",
  },
  "Slotted Screwdriver": {
    id: 8,
    itemName: "Slotted Screwdriver",
    pickup: true,
    action: "Use",
    inspectText:
      "A tool used for screws with a single slot. Handy for fixing old garden furniture!",
    cantPickupText: null,
    incorrectUseText: null,
    assetName: "slotted_screwdriver",
    type: "tool",
  },
  Hoe: {
    id: 9,
    itemName: "Hoe",
    pickup: true,
    action: "Use",
    inspectText:
      "It helps dig, weed, and create the perfect soil for your plants to grow strong and happy.",
    cantPickupText: null,
    incorrectUseText: "I can't use this here, it's usually for the plant box.",
    assetName: "hoe",
    type: "tool",
  },
  "Wood Glue": {
    id: 10,
    itemName: "Wood Glue",
    pickup: true,
    action: "Use",
    inspectText:
      "The magical sticky potion for fixing and crafting with wood! It's like a hug for pieces of wood, making them stick together tight and strong.",
    cantPickupText: null,
    incorrectUseText: "What do I use this on?",
    assetName: "wood_glue",
    type: "misc",
  },
  "Wood Scraps": {
    id: 11,
    itemName: "Wood Scraps",
    pickup: true,
    action: "Use",
    inspectText:
      "These little pieces of wood are like treasure chests for creativity. They're perfect for crafting, building tiny forts, or fueling your imagination!",
    cantPickupText: null,
    incorrectUseText: "How am I supposed to use this?",
    assetName: "wood_scraps",
    type: "misc",
  },
  "Pitch Fork": {
    id: 12,
    itemName: "Pitch Fork",
    pickup: true,
    action: "Use",
    inspectText: "Temp Copy For Pitch Fork",
    cantPickupText: null,
    incorrectUseText: "I can’t use this here, it’s usually for the plant box.",
    assetName: "pitchfork",
    type: "tool",
  },
  "Paint Cans": {
    id: 13,
    itemName: "Paint Cans",
    pickup: true,
    action: "Use",
    inspectText:
      "Unleash your inner artist! This colorful can holds the magic of paint, ready to transform your ordinary objects into vibrant masterpieces.",
    cantPickupText: null,
    incorrectUseText: "I can't use this here",
    assetName: "paint_cans",
    type: "misc",
  },
  "Red Straw Hat": {
    id: 14,
    itemName: "Red Straw Hat",
    pickup: true,
    action: "Wear",
    inspectText: "This is an old straw hat. This yellow makes me happy!",
    cantPickupText: null,
    incorrectUseText: "This old hat is a bit too dirty, I shouldn’t wear it.",
    assetName: "red_hat",
    type: "tool",
  },
  "Green Straw Hat": {
    id: 15,
    itemName: "Green Straw Hat",
    pickup: true,
    action: "Wear",
    inspectText:
      "This is an old straw hat. This green blends quite nicely with the rest of the garden.",
    cantPickupText: null,
    incorrectUseText:
      "This old hat is a bit too dirty for me, I shouldn’t wear it.",
    assetName: "green_hat",
    type: "tool",
  },
  "Blue Straw Hat": {
    id: 16,
    itemName: "Blue Straw Hat",
    pickup: true,
    action: "Wear",
    inspectText: "This is an old straw hat. This blue is quite eye-catching.",
    cantPickupText: null,
    incorrectUseText:
      "This old hat is a bit too dirty for me, I shouldn’t wear it.",
    assetName: "blue_hat",
    type: "tool",
  },
  "Blue Overalls": {
    id: 17,
    itemName: "Blue Overalls",
    pickup: true,
    action: "Wear",
    inspectText: "This is an old straw hat. This blue is quite eye-catching.",
    cantPickupText: null,
    incorrectUseText:
      "This old hat is a bit too dirty for me, I shouldn’t wear it.",
    assetName: "blue_overalls",
    type: "misc",
  },
  "Orange Overalls": {
    id: 17,
    itemName: "Blue Overalls",
    pickup: true,
    action: "Wear",
    inspectText: "This is an old straw hat. This blue is quite eye-catching.",
    cantPickupText: null,
    incorrectUseText:
      "This old hat is a bit too dirty for me, I shouldn’t wear it.",
    assetName: "orange_overalls",
    type: "misc",
  },
};

export { InspectData };
