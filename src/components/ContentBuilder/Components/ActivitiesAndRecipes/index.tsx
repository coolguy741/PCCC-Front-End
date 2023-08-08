import { useEffect, useMemo } from "react";
import styled from "styled-components";

import { useAPI } from "../../../../hooks/useAPI";
import { useFetch } from "../../../../hooks/useFetch";
import {
  VoloAbpApplicationDtosListResultDto1PccServer23ActivitiesActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosListResultDto1PccServer23CurriculumRecipesCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1PccServer23ActivitiesActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1PccServer23CurriculumRecipesCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "../../../../lib/api/api";
import { useThemeStore } from "../../../../stores/contentBuilderStore";
import { useThemeBuilderStore } from "../../../../stores/themeBuilderStore";
import Button from "../../../Button";
import Scrollable from "../../../Global/Scrollable";
import { Spinner } from "../../../Global/Spinner";

export const ActivitiesAndRecipes = () => {
  const { api } = useAPI();
  const { activityIds, recipeIds, setItemIds, removeItemId, currentStep } =
    useThemeBuilderStore();
  const { id: themeId } = useThemeStore();
  const { isLoading: attaching, fetchData: attachActivity } = useFetch(
    "appThemesAttachActivityCreate",
    {},
  );
  const { isLoading: detaching, fetchData: detachActivity } = useFetch(
    "appThemesDetachActivityCreate",
    {},
  );
  const { isLoading: attachingRecipe, fetchData: attachRecipe } = useFetch(
    "appThemesAttachRecipeCreate",
    {},
  );
  const { isLoading: detachingRecipe, fetchData: detachRecipe } = useFetch(
    "appThemesDetachRecipeCreate",
    {},
  );

  const { isLoading: isActivitiesLoading, data: activities } =
    useFetch<VoloAbpApplicationDtosPagedResultDto1PccServer23ActivitiesActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appActivitiesList",
      {},
      undefined,
      true,
    );

  const {
    isLoading: isAttachedActivitiesLoading,
    data: attachedActivities,
    fetchData: getAttachedActivitiesList,
  } = useFetch<VoloAbpApplicationDtosListResultDto1PccServer23ActivitiesActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
    "appThemesAttachedActivitiesDetail",
    {},
    undefined,
    true,
    themeId,
  );

  const {
    isLoading: isAttachedRecipesLoading,
    data: attachedRecipes,
    fetchData: getAttachedRecipesList,
  } = useFetch<VoloAbpApplicationDtosListResultDto1PccServer23CurriculumRecipesCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
    "appThemesAttachedRecipesDetail",
    {},
    undefined,
    true,
    themeId,
  );

  const { isLoading: isRecipesLoading, data: recipes } =
    useFetch<VoloAbpApplicationDtosPagedResultDto1PccServer23CurriculumRecipesCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appCurriculumRecipesList",
      {},
      undefined,
      true,
    );

  const isLoading = useMemo(
    () =>
      isActivitiesLoading ||
      isAttachedActivitiesLoading ||
      isAttachedRecipesLoading ||
      isRecipesLoading,
    [
      isActivitiesLoading,
      isAttachedActivitiesLoading,
      isAttachedRecipesLoading,
      isRecipesLoading,
    ],
  );

  useEffect(() => {
    !attaching &&
      !detaching &&
      currentStep === 3 &&
      getAttachedActivitiesList?.(undefined, undefined, true, themeId);
    !attachingRecipe &&
      !detachingRecipe &&
      currentStep === 4 &&
      getAttachedRecipesList?.(undefined, undefined, true, themeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detaching, attaching, currentStep, attachingRecipe, detachingRecipe]);

  const handleAdd = (id: string) => {
    currentStep === 3
      ? attachActivity?.({ themeId, activityId: id })
      : attachRecipe?.({ themeId, curriculumRecipeId: id });
    setItemIds(id);
  };

  const handleRemove = (id: string) => {
    currentStep === 3
      ? detachActivity?.({ themeId, activityId: id })
      : detachRecipe?.({ themeId, curriculumRecipeId: id });
    setItemIds(id);
    removeItemId(id);
  };

  return (
    <Style.Container>
      <p>Name</p>
      <Scrollable>
        {isLoading ? (
          <Spinner />
        ) : (
          <Style.ItemsContainer>
            {(currentStep === 3 ? activities?.items : recipes?.items)?.map(
              (item) => (
                <Style.Item key={`item-${item.id}`}>
                  {item.title}
                  {(currentStep === 3
                    ? attachedActivities?.items
                    : attachedRecipes?.items
                  )?.find((attachedItem) => attachedItem.id === item.id) ? (
                    <Button
                      variant="yellow"
                      id={item.id}
                      onClick={() => {
                        handleRemove(item.id as string);
                      }}
                    >
                      Remove
                    </Button>
                  ) : (
                    <Button
                      variant="orange"
                      onClick={() => handleAdd(item.id as string)}
                    >
                      Add
                    </Button>
                  )}
                </Style.Item>
              ),
            )}
          </Style.ItemsContainer>
        )}
      </Scrollable>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    background: #ffffff50;
    backdrop-filter: blur(118px);
    padding: 1vh 0 1vh 1vw;
    border-radius: 1rem;
  `,
  ItemsContainer: styled.div`
    width: 100%;
    padding-bottom: 20px;
  `,
  Item: styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--neutral-400);
    padding: 1vh 0;
    display: flex;
    &:last-child {
      border-bottom: none;
    }
  `,
};
