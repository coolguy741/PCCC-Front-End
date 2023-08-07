import {
  YogurtBerryParfaitGetCookinObjectType,
  YogurtBerryParfaitIngredientsObjectType,
  YogurtBerryParfaitPrepIngredientsObjectType,
  YogurtBerryParfaitTasksType,
  YogurtBerryParfaitUtensilsObjectType,
} from "./YogurtBerryParfaitTypes";

const YogurtBerryParfaitIngredientsObject: YogurtBerryParfaitIngredientsObjectType =
  {
    has_greek_yogurt: {
      frContent: "FR - 1/3 cup Greek vanillla yogurt",
      engContent: "1/3 cup Greek vanillla yogurt",
      completed: false,
    },
    has_mixed_berries: {
      frContent: "FR - 1/3 cup fresh or frozen mixed berries",
      engContent: "1/3 cup fresh or frozen mixed berries",
      completed: false,
    },
    has_honey: {
      frContent: "FR - 1 tablespoon honey",
      engContent: "1 tablespoon honey",
      completed: false,
    },
    has_granola: {
      frContent: "FR - 1 tablespoon nut-free granola-optional",
      engContent: "1 tablespoon nut-free granola-optional",
      completed: false,
    },
  };

const YogurtBerryParfaitUtensilsObject: YogurtBerryParfaitUtensilsObjectType = {
  has_small_bowl: {
    frContent: "FR - Small Bowl",
    engContent: "Small Bowl",
    completed: false,
  },
  has_measuring_cup: {
    frContent: "FR - Measuring Cup",
    engContent: "Measuring Cup",
    completed: false,
  },
  has_measuring_spoons: {
    frContent: "FR - Measuring Spoons",
    engContent: "Measuring Spoons",
    completed: false,
  },
};

const YogurtBerryParfaitPrepIngredientsObject: YogurtBerryParfaitPrepIngredientsObjectType =
  {
    has_measured_yogurt: {
      frContent: "FR - Measured Yogurt",
      engContent: "Measure Yogurt",
      completed: false,
    },
    has_measured_berries: {
      frContent: "FR - Measured Berries",
      engContent: "Measure Berries",
      completed: false,
    },
  };

const YogurtBerryParfaitGetCookinObject: YogurtBerryParfaitGetCookinObjectType =
  {
    action_fill_container: {
      frContent:
        "FR - Fill a small single-serving container with a third of the yogurt.",
      engContent:
        "Fill a small single-serving container with a third of the yogurt.",
      completed: false,
    },
    action_top_with_berries: {
      frContent: "FR - Top with a third of the berries",
      engContent: "Top with a third of the berries",
      completed: false,
    },
    action_drizzle_honey: {
      frContent: "FR - Drizzle 1 teaspoon of honey over the berries",
      engContent: "Drizzle 1 teaspoon of honey over the berries",
      completed: false,
    },
    action_repeat: {
      frContent:
        "FR - Reapeat two more times with the rest of the yogurt, berries, and honey",
      engContent:
        "Reapeat two more times with the rest of the yogurt, berries, and honey",
      completed: false,
    },
    action_top_with_granola: {
      frContent: "FR - Top with granola and serve",
      engContent: "Top with granola and serve",
      completed: false,
    },
  };

const YogurtBerryParfaitTasksObject: YogurtBerryParfaitTasksType = {
  ...YogurtBerryParfaitUtensilsObject,
  ...YogurtBerryParfaitGetCookinObject,
  ...YogurtBerryParfaitIngredientsObject,
  ...YogurtBerryParfaitPrepIngredientsObject,
};

export {
  YogurtBerryParfaitTasksObject,
  YogurtBerryParfaitUtensilsObject,
  YogurtBerryParfaitGetCookinObject,
  YogurtBerryParfaitIngredientsObject,
  YogurtBerryParfaitPrepIngredientsObject,
};
