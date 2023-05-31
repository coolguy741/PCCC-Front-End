import { AnimatePresence } from "framer-motion";

import { useMealPlannerStore } from "../../../stores/mealPlannerStore";
import { ClosedPlateFullPlannerBook } from "./ClosedBook";
import { MealPlans } from "./MealPlans";
import { MealPlanGenerator } from "./MealPlans/generator";

interface Props {
  match?: string;
}

const COMPONENTS = [
  <ClosedPlateFullPlannerBook />,
  <MealPlanGenerator />,
  <MealPlans />,
];

// const weekDays = [
//   "",
//   "Sunday",
//   "Monday",
//   "TuesDay",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

export const MealPlan: React.FC<Props> = ({ match = "" }) => {
  // const isPrint = useMemo(() => match.includes("print"), [match]);
  const { currentStep } = useMealPlannerStore();

  return <AnimatePresence>{COMPONENTS[currentStep]}</AnimatePresence>;
};
