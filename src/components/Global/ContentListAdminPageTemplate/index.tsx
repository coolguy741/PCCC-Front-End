import styled from "styled-components";

import React from "react";
import {
  PccServer23ActivitiesActivityDto,
  PccServer23CurriculumRecipesCurriculumRecipeDto,
  PccServer23MealtimeMomentsMealtimeMomentDto,
  PccServer23ThemesThemeDto,
} from "../../../lib/api/api";
import { MockContentsDto } from "../../../pages/types";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Button from "../../Button";
import { ContentList } from "../ContentList";
import { DropdownSelect } from "../DropdownSelect";
import Scrollbar from "../Scrollable";
import { Spinner } from "../Spinner";

type SelectOption = "Topic" | "Sort" | "Curriculum" | "Theme";
interface ContentListAdminPageTemplateProps {
  title: string;
  selectsGroup: SelectOption[];
  listData:
    | PccServer23ActivitiesActivityDto[]
    | PccServer23ThemesThemeDto[]
    | PccServer23CurriculumRecipesCurriculumRecipeDto[]
    | PccServer23MealtimeMomentsMealtimeMomentDto[]
    | MockContentsDto[];
  onSelectionChange: (id: string, isSelected: boolean) => void;
  handleSortChange: (value: string) => void;
  handleDelete: () => void;
  isLoading?: boolean;
}

const OPTIONS = [
  { label: "Title", value: "title" },
  { label: "Date", value: "creationTime" },
];

export const ContentListAdminPageTemplate: React.FC<ContentListAdminPageTemplateProps> =
  ({
    title,
    selectsGroup,
    listData,
    onSelectionChange,
    handleSortChange,
    handleDelete,
    isLoading,
  }) => {
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
            <Button
              variant="yellow"
              disabled={isLoading}
              size="large"
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="orange"
              size="large"
              icon="add"
              to="create"
              disabled={isLoading}
              iconPosition="right"
            >
              {title === "Mealtime Moments Editor"
                ? "Mealtime Moments"
                : "Create " + title}
            </Button>
          </Style.ButtonGroup>
        </Style.InputGroup>
        <Scrollbar thumbWidth="thick">
          {isLoading ? (
            <Spinner />
          ) : (
            <ContentList
              listData={listData}
              selectable={true}
              onSelectionChange={onSelectionChange}
            />
          )}
        </Scrollbar>
      </>
    );
  };

const Style = {
  InputGroup: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: ${convertToRelativeUnit(40, "vh")};
  `,
  SelectGroup: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: ${convertToRelativeUnit(24, "vh")};
    width: ${convertToRelativeUnit(180, "vw")};
  `,
  SelectContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: ${convertToRelativeUnit(8, "vh")};
    width: ${convertToRelativeUnit(180, "vw")};

    .text {
      font-weight: 400;
      font-size: ${convertToRelativeUnit(16, "vh")};
      line-height: ${convertToRelativeUnit(24, "vh")};
      color: var(--neutral-600);
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: ${convertToRelativeUnit(24, "vh")};
  `,
};
