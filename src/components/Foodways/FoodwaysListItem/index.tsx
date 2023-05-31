import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PccServer23FoodwaysFoodwayDto } from "../../../lib/api/api";
import { formatDate } from "../../../lib/util/formatDate";
import { Checkbox } from "../../Global/Checkbox";

interface FoodwaysListItemProps {
  data: PccServer23FoodwaysFoodwayDto;
  selectable?: boolean;
  onSelectedChange?: (id: string, isSelected: boolean) => void;
}

export const FoodwaysListItem: React.FC<FoodwaysListItemProps> = ({
  data,
  selectable = false,
  onSelectedChange,
}) => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(!isSelected);

    if (data.id) {
      onSelectedChange && onSelectedChange(data.id, event.target.checked);
    }
  };

  return (
    <Style.Container onClick={() => navigate(`${data.id}`)}>
      <div className="img-container">
        <img src={data.image!} alt={data.title!} />
      </div>
      <Style.Content>
        {data.featureDate && (
          <Style.Date>
            <div>{"Feature date: " + formatDate(data.featureDate)}</div>
          </Style.Date>
        )}
        <Style.Title>{data.title}</Style.Title>
        <Style.Description>{data.info}</Style.Description>
      </Style.Content>
      {selectable && (
        <Style.InputContainer>
          <Checkbox
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
    flex-direction: row;
    align-items: center;
    padding: 20px;
    gap: 24px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    position: relative;
    font-family: "Noir Std";
    font-style: normal;
    width: 100%;
    height: 17rem;

    &: hover {
      background: linear-gradient(182.85deg, #ffeb99 2.47%, #f3d03e 97.72%);
    }

    .img-container {
      width: 40%;

      img {
        width: 100%;
      }
    }
  `,
  Content: styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 2fr;
    padding: 0;
    gap: 20px;
    width: 60%;
    height: 100%;
    overflow: hidden;
  `,
  Topic: styled.p`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 10px;
    border: 2px solid var(--orange-600);
    border-radius: 50px;
    color: var(--orange-600);
    text-transform: uppercase;
  `,
  Date: styled.div`
    div {
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 16px;
      gap: 10px;
      border: 2px solid var(--orange-600);
      border-radius: 50px;
      color: var(--orange-600);
      text-transform: uppercase;
    }
  `,
  Title: styled.p`
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    color: var(--neutral-900);
    mix-blend-mode: normal;
  `,
  Description: styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-600);
    text-overflow: ellipsis;
  `,
  InputContainer: styled.div`
    z-index: 10;
    position: absolute;
    top: 23.33px;
    right: 23.33px;
  `,
};
