import styled from "styled-components";

import React from "react";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Button from "../../Button";
import { ContentList } from "../ContentList";
import { ContentListItemData } from "../ContentListItem";
import { DropdownSelect } from "../DropdownSelect";
import Scrollbar from "../Scrollbar";

type SelectOption = "Topic" | "Sort" | "Curriculum";
interface ContentListAdminPageTemplateProps {
  title: string;
  selectsGroup: SelectOption[];
  listData: ContentListItemData[];
  onSelectionChange: (id: number, isSelected: boolean) => void;
}

const OPTIONS = ["name1", "name2", "name3"];

export const ContentListAdminPageTemplate: React.FC<ContentListAdminPageTemplateProps> =
  ({ title, selectsGroup, listData, onSelectionChange }) => {
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
                  onChange={() => alert("option changed")}
                />
              </Style.SelectContainer>
            ))}
          </Style.SelectGroup>
          <Style.ButtonGroup>
            <Button variant="yellow" size="large">
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
        <Scrollbar thumbWidth="thick">
          <ContentList
            listData={listData}
            selectable={true}
            onSelectionChange={onSelectionChange}
          />
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
