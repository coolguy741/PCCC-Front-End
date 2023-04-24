import { InventoryObjectType } from "./InventoryModuleTypes";

const InitInventory: InventoryObjectType = {
  GardenTools: {
    Hat: false,
    Rake: false,
    Gloves: false,
    Shovel: false,
    TopSoil: false,
    SunGlasses: false,
    Wheelbarrow: false,
    WateringCan: false,
    BookWithAnswer: false,
  },
  KitchenTools: {
    Apron: false,
    Plate: false,
    Knife: false,
    HairTie: false,
    TeaTowel: false,
    LargeBowl: false,
    ServingBowl: false,
    MeasuringCup: false,
    CuttingBoard: false,
    EmptyTeaKettle: false,
    MeasuringSpoons: false,
  },
  Ingredients: {
    Fruit: {
      Berry: false,
    },
    Vegetables: {
      Carrots: false,
      ChoppedCarrots: false,
    },
    Fungi: {
      Mushrooms: false,
      ChoppedMushrooms: false,
    },
    Herbs: {
      MintLeaves: false,
      CilantroLeaves: false,
    },
    Miscellaneous: {
      Crumbs: false,
    },
  },
};

export { InitInventory };
