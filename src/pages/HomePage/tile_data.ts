export interface Tile {
  id: string;
  titleFirstLine: string;
  titleSecondLine: string;
  titleColor: string;
  titleSecondColor: string;
  subtitle: string;
  gradientStart: string;
  gradientEnd: string;
  image: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonAction: string;
  speechBubble: {
    variant: string;
    link: string;
    text: string;
  };
}

export const dashboard_tiles: Tile[] = [
  {
    id: "discover",
    titleFirstLine: "Discover",
    titleSecondLine: "Together",
    titleColor: "orange-600",
    titleSecondColor: "orange-900",
    subtitle: "",
    gradientStart: "#FEE5DD",
    gradientEnd: "#FFF5CC",
    image: "/images/homepage/discover-together.png",
    description:
      "When it comes to food, there's more than meats the pie. Think you know everything there is to know about mushrooms? Wondering who made the first wheel of cheese? We've cultivated a crop of Foodways, activities and recipes to help you learn more about our monthly feature food.",
    buttonText: "Let's go!",
    buttonLink: "/discover-together",
    buttonAction: "link",
    speechBubble: {
      variant: "orange",
      link: "discover-together",
      text: "Discover more",
    },
  },
  {
    id: "grow",
    titleFirstLine: "Grow",
    titleSecondLine: "Together",
    titleColor: "green-600",
    titleSecondColor: "green-900",
    subtitle: "",
    gradientStart: "#D2F7E5",
    gradientEnd: "#FFF5CC",
    image: "/images/homepage/grow-together.png",
    description:
      "When it comes to food, there's more than meats the pie. Think you know everything there is to know about mushrooms? Wondering who made the first wheel of cheese? We've cultivated a crop of Foodways, activities and recipes to help you learn more about our monthly feature food.",
    buttonText: "Let's go!",
    buttonLink: "/discover-together",
    buttonAction: "link",
    speechBubble: {
      variant: "orange",
      link: "grow-together",
      text: "Learn more about gardening",
    },
  },
  {
    id: "cook",
    titleFirstLine: "Cook",
    titleSecondLine: "Together",
    titleColor: "blue-600",
    titleSecondColor: "blue-900",
    subtitle: "",
    gradientStart: "#C4E8FF",
    gradientEnd: "#D2F7E5",
    image: "/images/homepage/cook-together.png",
    description:
      "The kitchen is calling! Develop your culinary skills and learn new techniques, cuisines and cultures. Why not whip up some food magic for your friends and family today?",
    buttonText: "Let's go!",
    buttonLink: "/cook-together",
    buttonAction: "link",
    speechBubble: {
      variant: "blue",
      link: "cook-together",
      text: "Learn more about cooking",
    },
  },
  {
    id: "games",
    titleFirstLine: "Games",
    titleSecondLine: "",
    titleColor: "orange-600",
    titleSecondColor: "orange-900",
    subtitle: "Sunny's Place: A Bee-utifull Food Adventure",
    gradientStart: "#FEE5DD",
    gradientEnd: "#FFF5CC",
    image: "/images/homepage/mad-kitchen.png",
    description:
      "Help Sunny, an ambitious Hairy-footed Flower Bee, grow and cook buzz-tastic dishes for the customers at their new restaurant. Complete different challenges using equipment from areas like the Big Tree and the Hydroponics LIbrary and learn to bee careful, clean and confident in the garden and kitchen! This game will make you hungry for knowledge and food!",
    buttonText: "Let's go!",
    buttonLink: "/mad-kitchen",
    buttonAction: "link",
    speechBubble: {
      variant: "orange",
      link: "games",
      text: "Explore more games",
    },
  },
  {
    id: "foodways",
    titleFirstLine: "Foodways",
    titleSecondLine: "",
    titleColor: "green-600",
    titleSecondColor: "green-900",
    subtitle: "A world of food",
    gradientStart: "#D2F7E5",
    gradientEnd: "#FFF5CC",
    image: "/images/homepage/foodways.png",
    description:
      "Let's take a trip using food as our guide! Learn about the culture, traditions, and history of food. Foodways can tell us a lot about the people who discovered the food we eat every day.",
    buttonText: "Let's go!",
    buttonLink: "/foodways",
    buttonAction: "link",
    speechBubble: {
      variant: "green",
      link: "foodways",
      text: "Explore more foodways",
    },
  },
  {
    id: "mealtime",
    titleFirstLine: "Mealtime",
    titleSecondLine: "Moments",
    titleColor: "blue-600",
    titleSecondColor: "blue-900",
    subtitle: "Food & friendship",
    gradientStart: "#C4E8FF",
    gradientEnd: "#D2F7E5",
    image: "/images/homepage/mealtime-moments.png",
    description:
      "Eating together is a great way to nourish your body and mind. We'll share a new moment every day to help you discover new flavours and new things about your friends and family with each bite.",
    buttonText: "Let's go!",
    buttonLink: "/mealtime-moments",
    buttonAction: "link",
    speechBubble: {
      variant: "blue",
      link: "mealtime-moments",
      text: "Explore more Mealtime Moments",
    },
  },
];

export const meal_planner_tile: Tile = {
  id: "meal-planner",
  titleFirstLine: "Plate full",
  titleSecondLine: "Planner",
  titleColor: "orange-600",
  titleSecondColor: "orange-900",
  subtitle: "Lettuce help you build a meal plan",
  gradientStart: "#FEE5DD",
  gradientEnd: "#FFF5CC",
  image: "/images/homepage/meal-planner.png",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  buttonText: "Let's go!",
  buttonLink: "/mealtime-moments",
  buttonAction: "link",
  speechBubble: {
    variant: "orange",
    link: "meal-planner",
    text: "Explore more Meal Planner",
  },
};
