import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  PccServer23ActivitiesActivityDto,
  PccServer23CurriculumRecipesCurriculumRecipeDto,
  PccServer23MealtimeMomentsMealtimeMomentDto,
  PccServer23ThemesThemeDto,
} from "../../../lib/api/api";
import { MockContentsDto } from "../../../pages/types";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Checkbox } from "../Checkbox";

export interface ContentListItemData {
  id: number;
  image: string;
  alt?: string;
  topic?: string;
  date?: string;
  title: string;
  description: string;
}

interface ContentListItemProps {
  data:
    | PccServer23ActivitiesActivityDto
    | PccServer23ThemesThemeDto
    | PccServer23CurriculumRecipesCurriculumRecipeDto
    | PccServer23MealtimeMomentsMealtimeMomentDto
    | MockContentsDto;
  selectable?: boolean;
  onSelectedChange?: (id: string, isSelected: boolean) => void;
}

export const ContentListItem: React.FC<ContentListItemProps> = ({
  data,
  selectable = false,
  onSelectedChange,
}) => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(!isSelected);
    data.id &&
      onSelectedChange &&
      onSelectedChange(data.id as string, event.target.checked);
  };

  return (
    <Style.Container onClick={() => navigate(`${data.id}`)}>
      <img
        src={data?.image ?? "/images/deleteLater/ContentSampleImage.png"}
        alt={data?.image ?? "/images/deleteLater/ContentSampleImage.png"}
      />
      <Style.Content>
        <Style.Topic>{data?.topic}</Style.Topic>
        <Style.Title>{data?.title}</Style.Title>
        <Style.Description>{data.description}</Style.Description>
      </Style.Content>
      {selectable && (
        <Style.InputContainer>
          <Checkbox
            sizeOption="large"
            checked={isSelected}
            onChange={handleCheckBoxChange}
            onClick={(event) => event.stopPropagation()}
          />
        </Style.InputContainer>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    align-items: center;
    padding: ${convertToRelativeUnit(20, "vh")};
    gap: ${convertToRelativeUnit(24, "vh")};
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    position: relative;
    font-family: "Noir Std";
    font-style: normal;
    width: 100%;

    &: hover {
      background: linear-gradient(182.85deg, #ffeb99 2.47%, #f3d03e 97.72%);
    }

    img {
      height: ${convertToRelativeUnit(180, "vh")};
    }
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    overflow: hidden;
    white-space: nowrap;
    gap: ${convertToRelativeUnit(20, "vh")};
  `,
  Topic: styled.p`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${convertToRelativeUnit(10, "vh")}
      ${convertToRelativeUnit(16, "vh")};
    gap: ${convertToRelativeUnit(10, "vh")};
    border: 2px solid var(--orange-600);
    border-radius: ${convertToRelativeUnit(50, "vh")};
    color: var(--orange-600);
    text-transform: uppercase;
    font-size: ${convertToRelativeUnit(14, "vh")};
    line-height: ${convertToRelativeUnit(16, "vh")};
  `,
  Date: styled.p`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${convertToRelativeUnit(10, "vh")}
      ${convertToRelativeUnit(16, "vh")};
    gap: ${convertToRelativeUnit(10, "vh")};
    border: 2px solid var(--orange-600);
    border-radius: ${convertToRelativeUnit(50, "vh")};
    color: var(--orange-600);
    text-transform: uppercase;
    font-size: ${convertToRelativeUnit(14, "vh")};
    line-height: ${convertToRelativeUnit(16, "vh")};
  `,
  Title: styled.p`
    font-weight: 600;
    font-size: ${convertToRelativeUnit(28, "vh")};
    line-height: ${convertToRelativeUnit(32, "vh")};
    color: var(--neutral-900);
    mix-blend-mode: normal;
  `,
  Description: styled.p`
    font-weight: 400;
    font-size: ${convertToRelativeUnit(16, "vh")};
    line-height: ${convertToRelativeUnit(20, "vh")};
    color: var(--neutral-600);
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
  `,
  InputContainer: styled.div`
    z-index: 10;
    position: absolute;
    top: ${convertToRelativeUnit(23.33, "vh")};
    right: ${convertToRelativeUnit(23.33, "vh")};
  `,
};
