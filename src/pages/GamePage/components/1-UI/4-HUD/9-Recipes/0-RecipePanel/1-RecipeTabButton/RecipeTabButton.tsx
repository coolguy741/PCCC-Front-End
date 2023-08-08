import { gsap } from "gsap";
import { FC, memo, useCallback, useEffect, useMemo, useRef } from "react";
import { shallow } from "zustand/shallow";
import { RecipeTabTypes } from "../../../../../../globalState/modules/RecipeModule/RecipeModuleTypes";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../../shared/Types/DefineTypes";
import { RefImageType } from "../../../../../../shared/Types/RefTypes";
import RecipeActiveTab from "../0-RecipePanel/assets/recipe_active_tab.webp";
import RecipeInActiveTab from "../0-RecipePanel/assets/recipe_inactive_tab.webp";
import RecipeTabButtonStyleContainer from "./RecipeTabButtonStyleContainer";

interface RecipeTabButtonPropTypes {
  title: RecipeTabTypes;
}

const RecipeTabButton: FC<RecipeTabButtonPropTypes> = ({ title }) => {
  // Refs
  const activeTabRef: RefImageType = useRef(null);

  // Global State
  const { activeLanguage, activeRecipeTab, setActiveRecipeTab } =
    useGlobalState(
      (state) => ({
        activeLanguage: state.activeLanguage,
        activeRecipeTab: state.activeRecipeTab,
        setActiveRecipeTab: state.setActiveRecipeTab,
      }),
      shallow,
    );

  // Defines
  const translatedTitle = useMemo((): string => {
    const frenchTitle = title === "Ingredients" ? "Ingrédients" : "Préparation";
    return activeLanguage === "eng" ? title : frenchTitle;
  }, [activeLanguage, title]);

  // Handlers
  const handleRecipeTabClick: ConstantVoidFunctionType =
    useCallback((): void => {
      setActiveRecipeTab(title);
    }, [setActiveRecipeTab, title]);

  const handleButtonStatus: ConstantVoidFunctionType = useCallback((): void => {
    if (!activeTabRef.current) return;
    if (activeRecipeTab === title) {
      gsap.to(activeTabRef.current, {
        opacity: 1,
        overwrite: true,
        duration: 0.35,
        ease: BACK_1_OUT,
      });
    } else {
      gsap.to(activeTabRef.current, {
        opacity: 0,
        overwrite: true,
        duration: 0.35,
        ease: BACK_1_OUT,
      });
    }
  }, [activeRecipeTab, title]);

  // Listeners
  useEffect(handleButtonStatus, [handleButtonStatus, activeRecipeTab]);

  return (
    <RecipeTabButtonStyleContainer onClick={handleRecipeTabClick}>
      <img
        alt={title}
        draggable={false}
        src={RecipeInActiveTab}
        className="recipe-inactive-tab"
      />
      <img
        alt={title}
        draggable={false}
        ref={activeTabRef}
        src={RecipeActiveTab}
        className="recipe-active-tab"
      />
      <h1 className="recipe-tab-title">{translatedTitle}</h1>
    </RecipeTabButtonStyleContainer>
  );
};

export default memo(RecipeTabButton);
