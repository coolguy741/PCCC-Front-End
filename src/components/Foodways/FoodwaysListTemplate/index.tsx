import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAPI } from "../../../hooks/useAPI";
import { PccServer23FoodwaysFoodwayDto } from "../../../lib/api/api";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Button from "../../Button";
import { DropdownSelect } from "../../Global/DropdownSelect";
import Scrollbar from "../../Global/Scrollable";
import { Spinner } from "../../Global/Spinner";
import { FoodwaysList } from "../FoodwaysList";

const OPTIONS = [
  { label: "Title", value: "title" },
  { label: "Date", value: "creationTime" },
];

type SelectOption = "Topic" | "Sort" | "Curriculum";
interface ContentListAdminPageTemplateProps {
  title: string;
  selectsGroup: SelectOption[];
  listData: PccServer23FoodwaysFoodwayDto[];
  onSelectionChange: (id: string, isSelected: boolean) => void;
  handleSortChange: (value: string) => void;
  setSelectedIds: (value: string[]) => void;
  selectedIds: string[];
}

export const FoodwaysListTemplate: React.FC<ContentListAdminPageTemplateProps> =
  ({
    title,
    selectsGroup,
    listData,
    onSelectionChange,
    selectedIds,
    setSelectedIds,
    handleSortChange,
  }) => {
    const { api } = useAPI();
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async () => {
      setIsDeleting(true);
      for (const id of selectedIds) {
        await api.appFoodwaysDelete(id, {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
        });
      }
      setIsDeleting(false);
      setSelectedIds([]);

      navigate("/dashboard/foodways");
    };

    return (
      <>
        <Style.InputGroup>
          <Style.SelectGroup>
            {selectsGroup.map((select, index) => (
              <Style.SelectContainer key={index}>
                <p className="text">{select}</p>
                <DropdownSelect
                  placeholder={select}
                  width={convertToRelativeUnit(180, "vw")}
                  height={convertToRelativeUnit(52, "vh")}
                  options={OPTIONS}
                  onChange={handleSortChange}
                />
              </Style.SelectContainer>
            ))}
          </Style.SelectGroup>
          <Style.ButtonGroup>
            <Button variant="yellow" size="large" onClick={handleDelete}>
              Delete
            </Button>
            <Link to="create">
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
            </Link>
          </Style.ButtonGroup>
        </Style.InputGroup>
        {isDeleting ? (
          <Spinner />
        ) : (
          <Scrollbar>
            <FoodwaysList
              listData={listData}
              selectable={true}
              onSelectionChange={onSelectionChange}
            />
          </Scrollbar>
        )}
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
};
