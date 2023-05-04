import styled from "styled-components";

import { Grocery } from "../../../pages/types";
import { Checkbox } from "../../Global/Checkbox";
import { Icon } from "../../Global/Icon";
import { Input } from "../../Global/Input";
import { TrashButton } from "../../Global/TrashButton";

interface Props {
  grocery?: Grocery;
}

export const GroceryItem: React.FC<Props> = ({ grocery }) => {
  return (
    <Style.Container>
      <Style.Title>
        {grocery?.icon && (
          <Icon name={grocery.icon} width={"24px"} height={"24px"} />
        )}
        <span>{grocery?.name}</span>
      </Style.Title>
      <Style.MaterialList>
        {grocery?.materials.map((material) => (
          <Style.Material key={material.name}>
            <Checkbox sizeOption="small" />
            <Input
              type="text"
              id={material.name}
              value={material.amount + " " + material.unit}
            />
            <div className="material-name">
              <span>{material.name}</span>
            </div>
            <TrashButton />
          </Style.Material>
        ))}
      </Style.MaterialList>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 24px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
  `,
  Title: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    color: var(--neutral-800);
    padding: 0px;

    span {
      padding-left: 18px;
    }
  `,
  MaterialList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0px;
    width: 100%;
  `,
  Material: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;

    .material-name {
      font-weight: 500;
      font-size: 23px;
      line-height: 28px;
      color: var(--neutral-600);
      flex-grow: 1;
    }

    input {
      max-width: 128px;
      width: 30%;
      flex-shrink: 1;
      text-align: center;
      font-weight: 500;
      font-size: 19px;
      line-height: 24px;
      color: var(--neutral-600);
    }
  `,
};
