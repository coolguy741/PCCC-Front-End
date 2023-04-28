import styled from "styled-components";

import React from "react";
import Button from "../../Button";
import { ContentList } from "../ContentList";
import { ContentListItemData } from "../ContentListItem";
import { Select } from "../Select";

type SelectOption = "Topic" | "Sort" | "Curriculum";
interface ContentListAdminPageTemplateProps {
  title: string;
  selectsGroup: SelectOption[];
  listData: ContentListItemData[];
  onSelectionChange: (id: number, isSelected: boolean) => void;
}

export const ContentListAdminPageTemplate: React.FC<ContentListAdminPageTemplateProps> =
  ({ title, selectsGroup, listData, onSelectionChange }) => {
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
        <Style.ScrollContainer>
          <ContentList
            listData={listData}
            selectable={true}
            onSelectionChange={onSelectionChange}
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
