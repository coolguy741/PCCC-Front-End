import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { useAPI } from "../../../../hooks/useAPI";
import { useFetch } from "../../../../hooks/useFetch";
import {
  PccServer23ActivitiesActivityDto,
  PccServer23RecipesPublicRecipeDto,
} from "../../../../lib/api/api";
import { STORAGE_KEY_JWT } from "../../../../pages/consts";
import { useThemeBuilderStore } from "../../../../stores/themeBuilderStore";
import Button from "../../../Button";
import Scrollable from "../../../Global/Scrollable";
import { Spinner } from "../../../Global/Spinner";

export const ActivitiesAndRecipes = () => {
  const { api } = useAPI();
  const { activityIds, recipeIds, setItemIds, removeItemId, currentStep } =
    useThemeBuilderStore();
  const [items, setItems] = useState<
    PccServer23ActivitiesActivityDto[] | PccServer23RecipesPublicRecipeDto[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchData: attachActivity } = useFetch(
    "appThemesAttachActivityCreate",
    {},
  );
  const { fetchData: detachActivity } = useFetch(
    "appThemesDetachActivityCreate",
    {},
  );
  const { fetchData: attachRecipe } = useFetch(
    "appThemesAttachRecipeCreate",
    {},
  );
  const { fetchData: detachRecipe } = useFetch(
    "appThemesDetachRecipeCreate",
    {},
  );

  const { data: activities, fetchData: getActivitesList } = useFetch(
    "appActivitiesList",
    {},
    undefined,
    true,
  );
  const { data: recipes, fetchData: getRecipesList } = useFetch(
    "appRecipesList",
    {},
    undefined,
    true,
  );

  const getItems = useCallback(() => {
    (async () => {
      const params = {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      };

      setIsLoading(true);
      try {
        const response =
          currentStep === 4
            ? await api.appActivitiesList({}, params)
            : await api.appRecipesList({}, params);

        if (response.status === 200) {
          setItems(response.data.items ?? []);
        }
      } catch (error) {
        setItems([
          { id: "1", title: "Chocolate granola bites" },
          { id: "2", title: "Roasted red pepper hummus with raw vegetable" },
          { id: "3", title: "Corn & black bean salsa" },
          { id: "4", title: "Vegetable spring rolls" },
          { id: "5", title: "Lorem ipsum" },
          { id: "6", title: "Chocolate granola bites" },
          { id: "7", title: "Roasted red pepper hummus with raw vegetable" },
          { id: "8", title: "Corn & black bean salsa" },
          { id: "9", title: "Lorem ipsum" },
          { id: "10", title: "Chocolate granola bites" },
          { id: "11", title: "Roasted red pepper hummus with raw vegetable" },
          { id: "12", title: "Corn & black bean salsa" },
          { id: "13", title: "Lorem ipsum" },
          { id: "14", title: "Vegetable spring rolls" },
          { id: "15", title: "Chocolate granola bites" },
          { id: "16", title: "Roasted red pepper hummus with raw vegetable" },
          { id: "17", title: "Corn & black bean salsa" },
          { id: "18", title: "Lorem ipsum" },
          { id: "19", title: "Chocolate granola bites" },
          { id: "20", title: "Roasted red pepper hummus with raw vegetable" },
          { id: "21", title: "hello20" },
        ]);
      }
      setIsLoading(false);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <Style.Container>
      <p>Name</p>
      <Scrollable>
        {isLoading ? (
          <Spinner />
        ) : (
          <Style.ItemsContainer>
            {items.map((item) => (
              <Style.Item key={`item-${item.id}`}>
                {currentStep === 4
                  ? (item as PccServer23ActivitiesActivityDto).title
                  : (item as PccServer23RecipesPublicRecipeDto).name}
                {(currentStep === 3 ? activityIds : recipeIds).includes(
                  item.id as string,
                ) ? (
                  <Button
                    variant="yellow"
                    onClick={() => {
                      removeItemId(item.id as string);
                    }}
                  >
                    Remove
                  </Button>
                ) : (
                  <Button
                    variant="orange"
                    onClick={() => {
                      setItemIds(item.id as string);
                    }}
                  >
                    Add
                  </Button>
                )}
              </Style.Item>
            ))}
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
