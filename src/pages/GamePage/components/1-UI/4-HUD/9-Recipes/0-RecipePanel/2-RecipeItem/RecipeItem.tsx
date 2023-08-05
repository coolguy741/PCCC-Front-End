import { FC, memo } from "react";
import RecipeItemStyleContainer from "./RecipeItemStyleContainer";

const RecipeItem: FC = () => {
  return <RecipeItemStyleContainer>RecipeItem</RecipeItemStyleContainer>;
};

export default memo(RecipeItem);
