import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { useAPI } from "../../../hooks/useAPI";
import {
  PccServer23ActivitiesActivityDto,
  PccServer23RecipesPublicRecipeDto,
} from "../../../lib/api/api";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useThemeStore } from "../../../stores/themeStore";
import Button from "../../Button";
import Scrollable from "../../Global/Scrollable";
import { Spinner } from "../../Global/Spinner";

export const ActivitiesAndRecipes = () => {
  const { api } = useAPI();
  const { activityIds, recipeIds, setItemIds, removeItemId, currentStep } =
    useThemeStore();
  const [items, setItems] = useState<
    PccServer23ActivitiesActivityDto[] | PccServer23RecipesPublicRecipeDto[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

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
          { id: "1", name: "Chocolate granola bites" },
          { id: "2", name: "Roasted red pepper hummus with raw vegetable" },
          { id: "3", name: "Corn & black bean salsa" },
          { id: "4", name: "Vegetable spring rolls" },
          { id: "5", name: "Lorem ipsum" },
          { id: "6", name: "Chocolate granola bites" },
          { id: "7", name: "Roasted red pepper hummus with raw vegetable" },
          { id: "8", name: "Corn & black bean salsa" },
          { id: "9", name: "Lorem ipsum" },
          { id: "10", name: "Chocolate granola bites" },
          { id: "11", name: "Roasted red pepper hummus with raw vegetable" },
          { id: "12", name: "Corn & black bean salsa" },
          { id: "13", name: "Lorem ipsum" },
          { id: "14", name: "Vegetable spring rolls" },
          { id: "15", name: "Chocolate granola bites" },
          { id: "16", name: "Roasted red pepper hummus with raw vegetable" },
          { id: "17", name: "Corn & black bean salsa" },
          { id: "18", name: "Lorem ipsum" },
          { id: "19", name: "Chocolate granola bites" },
          { id: "20", name: "Roasted red pepper hummus with raw vegetable" },
          { id: "21", name: "hello20" },
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
                {item.name}
                {(currentStep === 4 ? activityIds : recipeIds).includes(
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
