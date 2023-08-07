import { AnimatePresence, motion } from "framer-motion";
import { FC, memo } from "react";
import RecipeCheckMarkSVG from "./RecipeCheckMarkSVG";
import RecipeItemCheckBoxSVG from "./RecipeItemCheckBoxSVG";
import RecipeItemStyleContainer from "./RecipeItemStyleContainer";

interface RecipeItemPropTypes {
  completed: boolean;
  recipeContent: string;
}

const RecipeItem: FC<RecipeItemPropTypes> = ({ recipeContent, completed }) => {
  return (
    <RecipeItemStyleContainer>
      <div className="check-container">
        <div className="check-box">
          <RecipeItemCheckBoxSVG />
        </div>
        <AnimatePresence>
          {completed && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="check-mark"
            >
              <RecipeCheckMarkSVG />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="recipe-item-content">{recipeContent}</p>
    </RecipeItemStyleContainer>
  );
};

export default memo(RecipeItem);
