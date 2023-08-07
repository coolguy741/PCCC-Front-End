import {
  VegetableSpringRollsGetCookinObjectType,
  VegetableSpringRollsIngredientsObjectType,
  VegetableSpringRollsPrepIngredientsObjectType,
  VegetableSpringRollsTasksType,
  VegetableSpringRollsUtensilsObjectType,
} from "./VegetableSpringRollsTypes";

const VegetableSpringRollsIngredientsObject: VegetableSpringRollsIngredientsObjectType =
  {
    has_noodles: {
      frContent: "FR - 2 ounces or 57 grams of vermicelli noodles",
      engContent: "2 ounces or 57 grams of vermicelli noodles",
      completed: false,
    },
    has_rice_paper: {
      frContent: "FR - 6 rice paper spring roll wraps",
      engContent: "6 rice paper spring roll wraps",
      completed: false,
    },
    has_carrots: {
      frContent: "FR - 2 carrots, thinly sliced",
      engContent: "2 carrots, thinly sliced",
      completed: false,
    },
    has_red_pepper: {
      frContent: "FR - 1 red pepper, thinly sliced",
      engContent: "1 red pepper, thinly sliced",
      completed: false,
    },
    has_yellow_pepper: {
      frContent: "FR - 1 yellow bell pepper, thinly sliced",
      engContent: "1 yellow bell pepper, thinly sliced",
      completed: false,
    },
    has_mint_leaves: {
      frContent: "FR - 12 mint leaves",
      engContent: "12 mint leaves",
      completed: false,
    },
    has_cilantro_leaves: {
      frContent: "FR - 18 cilantro leaves",
      engContent: "18 cilantro leaves",
      completed: false,
    },
    has_red_cabbage: {
      frContent: "FR - 1⁄4 red cabbage, thinly sliced",
      engContent: "1⁄4 red cabbage, thinly sliced",
      completed: false,
    },
    has_hoisin_sauce: {
      frContent: "FR - Hoisin dipping sauce",
      engContent: "Hoisin dipping sauce",
      completed: false,
    },
  };

const VegetableSpringRollsUtensilsObject: VegetableSpringRollsUtensilsObjectType =
  {
    has_large_bowl: {
      frContent: "FR - a large bowl",
      engContent: "a large bowl",
      completed: false,
    },
    has_tea_kettle: {
      frContent: "FR - a tea kettle + water",
      engContent: "a tea kettle + water",
      completed: false,
    },
    has_plastic_wrap: {
      frContent: "FR - plastic wrap",
      engContent: "plastic wrap",
      completed: false,
    },
    has_strainer: {
      frContent: "FR - strainer",
      engContent: "strainer",
      completed: false,
    },
    has_warm_water: {
      frContent: "FR - warm water + bowl",
      engContent: "warm water + bowl",
      completed: false,
    },
    has_tea_towel: {
      frContent: "FR - a tea towel",
      engContent: "a tea towel",
      completed: false,
    },
  };

const VegetableSpringRollsPrepIngredientsObject: VegetableSpringRollsPrepIngredientsObjectType =
  {
    has_sliced_carrots: {
      frContent: "FR - Thinly slice the carrots",
      engContent: "Thinly slice the carrots",
      completed: false,
    },
    has_sliced_red_pepper: {
      frContent: "FR - Thinly slice the red pepper",
      engContent: "Thinly slice the red pepper",
      completed: false,
    },
    has_sliced_yellow_peppers: {
      frContent: "FR - Thinly slice the yellow bell peppers",
      engContent: "Thinly slice the yellow bell peppers",
      completed: false,
    },
    has_sliced_cabbage: {
      frContent: "FR - Thinly slice the cabbage",
      engContent: "Thinly slice the cabbage",
      completed: false,
    },
  };

const VegetableSpringRollsGetCookinObject: VegetableSpringRollsGetCookinObjectType =
  {
    action_noodles_in_bowl: {
      stepStatus: "step_1",
      frContent: "FR - Place the vermicelli noodles in a large bowl",
      engContent: "Place the vermicelli noodles in a large bowl",
      completed: false,
    },
    action_pour_boiling_water: {
      frContent:
        "FR - Use a tea kettle, pour boiling hot water over noodles ensuring they are fully covered",
      engContent:
        "Use a tea kettle, pour boiling hot water over noodles ensuring they are fully covered",
      completed: false,
    },
    action_plastic_wrap: {
      frContent:
        "FR - Place plastic wrap over bowl ensuring it's tightly sealed",
      engContent: "Place plastic wrap over bowl ensuring it's tightly sealed",
      completed: false,
    },
    action_let_stand: {
      frContent:
        "FR - Let stand for 5-10 minutes until noodles are soft, strain, and set aside",
      engContent:
        "Let stand for 5-10 minutes until noodles are soft, strain, and set aside",
      completed: false,
    },
    action_dip_rice_paper: {
      stepStatus: "step_2",
      frContent:
        "FR - Dip rice paper wraps into warm water for roughly 8-10 seconds, until they are fully flexible",
      engContent:
        "Dip rice paper wraps into warm water for roughly 8-10 seconds, until they are fully flexible",
      completed: false,
    },
    action_arrange_rice_paper: {
      frContent:
        "FR - Arrange in a single layer onto a tea towel. Place each wrapper onto clean work surface",
      engContent:
        "Arrange in a single layer onto a tea towel. Place each wrapper onto clean work surface",
      completed: false,
    },
    action_lay_out_veggies: {
      stepStatus: "step_3",
      frContent:
        "FR - Near the bottom of the spring roll in the center, lay out the vegetables, ffresh mint and cilantro",
      engContent:
        "Near the bottom of the spring roll in the center, lay out the vegetables, ffresh mint and cilantro",
      completed: false,
    },
    action_fold_up_wrapper: {
      frContent:
        "FR - Fold up wrapper halfway into a cylinder. Fold sides in an envelope pattern",
      engContent:
        "Fold up wrapper halfway into a cylinder. Fold sides in an envelope pattern",
      completed: false,
    },
    action_fold_sides: {
      frContent:
        "FR - Continue rolling the paper into a tight cylinder to seal",
      engContent: "Continue rolling the paper into a tight cylinder to seal",
      completed: false,
    },
    action_roll_paper: {
      frContent:
        "FR - Continue rolling the paper into a tight cylinder to seal",
      engContent: "Continue rolling the paper into a tight cylinder to seal",
      completed: false,
    },
  };

const VegetableSpringRollsTasksObject: VegetableSpringRollsTasksType = {
  ...VegetableSpringRollsIngredientsObject,
  ...VegetableSpringRollsUtensilsObject,
  ...VegetableSpringRollsPrepIngredientsObject,
  ...VegetableSpringRollsGetCookinObject,
};

export {
  VegetableSpringRollsTasksObject,
  VegetableSpringRollsUtensilsObject,
  VegetableSpringRollsGetCookinObject,
  VegetableSpringRollsIngredientsObject,
  VegetableSpringRollsPrepIngredientsObject,
};
