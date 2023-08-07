import {
  RoastedTomatoSoupGetCookinObjectType,
  RoastedTomatoSoupIngredientsObjectType,
  RoastedTomatoSoupPrepIngredientsObjectType,
  RoastedTomatoSoupTasksType,
  RoastedTomatoSoupUtensilsObjectType,
} from "./RoastedTomatoSoupTypes";

const RoastedTomatoSoupIngredientsObject: RoastedTomatoSoupIngredientsObjectType =
  {
    has_ripe_tomatoes: {
      frContent: "FR - 8 medium fully ripe tomatoes, halved",
      engContent: "8 medium fully ripe tomatoes, halved",
      completed: false,
    },
    has_sweet_onion: {
      frContent: "FR - 1 medium sweet onion (like Vidalia), quartered",
      engContent: "1 medium sweet onion (like Vidalia), quartered",
      completed: false,
    },
    has_head_of_garlic: {
      frContent:
        "FR - 1 whole head of garlic, with the cloves separated and peeled",
      engContent:
        "1 whole head of garlic, with the cloves separated and peeled",
      completed: false,
    },
    has_fresh_thyme: {
      frContent: "FR - 10 sprigs of fresh thyme",
      engContent: "10 sprigs of fresh thyme",
      completed: false,
    },
    has_olive_oil: {
      frContent: "FR - 1/4 cup of olive oil",
      engContent: "1/4 cup of olive oil",
      completed: false,
    },
    has_salt_and_pepper: {
      frContent: "FR - Salt and pepper to taste",
      engContent: "Salt and pepper to taste",
      completed: false,
    },
  };

const RoastedTomatoSoupUtensilsObject: RoastedTomatoSoupUtensilsObjectType = {
  has_large_baking_dish: {
    frContent: "FR - a large deep baking dish",
    engContent: "a large deep baking dish",
    completed: false,
  },
  has_cutting_board: {
    frContent: "FR - cutting board",
    engContent: "cutting board",
    completed: false,
  },
  has_blender: {
    frContent: "FR - blender",
    engContent: "blender",
    completed: false,
  },
  has_chef_knife: {
    frContent: "FR - chef knife",
    engContent: "chef knife",
    completed: false,
  },
};

const RoastedTomatoSoupPrepIngredientsObject: RoastedTomatoSoupPrepIngredientsObjectType =
  {
    has_preheat_oven: {
      frContent: "FR - Pre-heat the oven to 350 degrees F.",
      engContent: "Pre-heat the oven to 350 degrees F.",
      completed: false,
    },
    has_cut_tomatoes: {
      frContent: "FR - Cut the tomatoes in half.",
      engContent: "Cut the tomatoes in half.",
      completed: false,
    },
    has_quartered_onion: {
      frContent:
        "FR - Quarter the sweet onion : cut the sweet onion in half, cut the halves in half again.",
      engContent:
        "Quarter the sweet onion : cut the sweet onion in half, cut the halves in half again.",
      completed: false,
    },
    has_separated_garlic: {
      frContent: "FR - Separate the head of garlic and peel each clove.",
      engContent: "Separate the head of garlic and peel each clove.",
      completed: false,
    },
    has_washed_thyme: {
      frContent: "FR - Wash thyme.",
      engContent: "Wash thyme.",
      completed: false,
    },
  };

const RoastedTomatoSoupGetCookinObject: RoastedTomatoSoupGetCookinObjectType = {
  action_arrange_tomatoes: {
    stepStatus: "step_1",
    frContent:
      "FR - Arrange the tomatoes, cut side up in a large deep baking dish, they can  overlap if needed.",
    engContent:
      "Arrange the tomatoes, cut side up in a large deep baking dish, they can  overlap if needed.",
    completed: false,
  },
  action_wedge_onions_add_garlic: {
    frContent:
      "FR - Wedge the onion quarters between the tomato halves and add the garlic cloves.",
    engContent:
      "Wedge the onion quarters between the tomato halves and add the garlic cloves.",
    completed: false,
  },
  action_strip_thyme: {
    frContent:
      "FR - Strip the leaves off the sprigs of thyme by holding the sprig of thyme at its tip, and sliding your fingers down to strip off the leaves.",
    engContent:
      "Strip the leaves off the sprigs of thyme by holding the sprig of thyme at its tip, and sliding your fingers down to strip off the leaves.",
    completed: false,
  },
  action_sprinkle_in_dish: {
    frContent: "FR - Sprinkle them over the ingredients in the dish.",
    engContent: "Sprinkle them over the ingredients in the dish.",
    completed: false,
  },
  action_drizzle_olive_oil: {
    stepStatus: "step_2",
    frContent:
      "FR - Generously drizzle olive oil over the ingredients in the dish.",
    engContent:
      "Generously drizzle olive oil over the ingredients in the dish.",
    completed: false,
  },
  action_salt_and_pepper: {
    frContent: "FR - Generously salt and pepper.",
    engContent: "Generously salt and pepper.",
    completed: false,
  },
  action_roast: {
    frContent: "FR - Roast for 60 minutes.",
    engContent: "Roast for 60 minutes.",
    completed: false,
  },
  action_transfer_to_blender: {
    stepStatus: "step_3",
    frContent:
      "FR - Once roasting is complete, carefully transfer the ingredients to a blender, including the juice at the bottom of the dish.",
    engContent:
      "Once roasting is complete, carefully transfer the ingredients to a blender, including the juice at the bottom of the dish.",
    completed: false,
  },
  action_puree: {
    frContent: "FR - Purée the contents until very smooth.",
    engContent: "Purée the contents until very smooth.",
    completed: false,
  },
  action_add_salt_pepper: {
    frContent: "FR - Salt and pepper if needed.",
    engContent: "Salt and pepper if needed.",
    completed: false,
  },
};

const RoastedTomatoSoupTasksObject: RoastedTomatoSoupTasksType = {
  ...RoastedTomatoSoupUtensilsObject,
  ...RoastedTomatoSoupGetCookinObject,
  ...RoastedTomatoSoupIngredientsObject,
  ...RoastedTomatoSoupPrepIngredientsObject,
};

export {
  RoastedTomatoSoupTasksObject,
  RoastedTomatoSoupUtensilsObject,
  RoastedTomatoSoupGetCookinObject,
  RoastedTomatoSoupIngredientsObject,
  RoastedTomatoSoupPrepIngredientsObject,
};
