import styled from "styled-components";

import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../../../hooks/useAPI";
import { PccServer23FoodwaysFoodwayDto } from "../../../lib/api/api";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import Button from "../../Button";
import { Select } from "../../Global/Select";
import { FoodwaysList } from "../FoodwaysList";

type SelectOption = "Topic" | "Sort" | "Curriculum";
interface ContentListAdminPageTemplateProps {
  title: string;
  selectsGroup: SelectOption[];
  listData: PccServer23FoodwaysFoodwayDto[];
  onSelectionChange: (id: string, isSelected: boolean) => void;
  isSelected: boolean;
  setIsSelected: (isSelected: boolean) => void;
  selectedId: string;
}

export const FoodwaysListTemplate: React.FC<ContentListAdminPageTemplateProps> =
  ({
    title,
    selectsGroup,
    listData,
    onSelectionChange,
    isSelected,
    setIsSelected,
    selectedId,
  }) => {
    const { api } = useAPI();
    const navigate = useNavigate();

    const handleDelete = async () => {
      const response = await api.appFoodwaysDelete(selectedId, {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      });

      if (response.status === 204) {
        navigate("/dashboard/foodways");
      }
    };
    return (
      <>
        <Style.InputGroup>
          <Style.SelectGroup>
            {selectsGroup.map((select, index) => (
              <Style.SelectContainer key={index}>
                <p className="text">{select}</p>
                <Select
                  width="180px"
                  height="52px"
                  className="username-select"
                  required
                >
                  <option className="place-holder" selected disabled hidden>
                    {select + " name"}
                  </option>
                  <option value="Curriculum name1">{select + " name1"}</option>
                  <option value="Curriculum name2">{select + " name2"}</option>
                  <option value="Curriculum name3">{select + " name3"}</option>
                </Select>
              </Style.SelectContainer>
            ))}
          </Style.SelectGroup>
          <Style.ButtonGroup>
            <Button variant="yellow" size="large" onClick={handleDelete}>
              Delete
            </Button>
            <Button
              variant="orange"
              size="large"
              icon="add"
              iconPosition="right"
            >
              {title === "Mealtime Moments Editor"
                ? "Mealtime Moments"
                : "Create " + title}
            </Button>
          </Style.ButtonGroup>
        </Style.InputGroup>
        <Style.ScrollContainer>
          <FoodwaysList
            listData={listData}
            selectable={true}
            onSelectionChange={onSelectionChange}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        </Style.ScrollContainer>
      </>
    );
  };

const Style = {
  InputGroup: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 40px;
  `,
  SelectGroup: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 24px;
    width: 180px;
  `,
  SelectContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 180px;

    .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--neutral-600);
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
  `,
  ScrollContainer: styled.div`
    overflow-y: auto;
    height: 100%;
    padding-right: 16px;
    margin-right: -24px;
  `,
};
