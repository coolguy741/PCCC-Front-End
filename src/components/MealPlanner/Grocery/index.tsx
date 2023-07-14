import styled from "styled-components";

import { Grocery } from "../../../pages/types";
import { Checkbox } from "../../Global/Checkbox";
import { Icon } from "../../Global/Icon";
import { Input } from "../../Global/Input";
import { TrashButton } from "../../Global/TrashButton";

type GroceryItemType = "print" | "view";

interface Props {
  grocery?: Grocery;
  type?: GroceryItemType;
}

export const GroceryItem: React.FC<Props> = ({ grocery, type = "view" }) => {
  return (
    <>
      {type === "print" ? (
        <GroceryItemPrint grocery={grocery} />
      ) : (
        <GroceryItemOne grocery={grocery} />
      )}
    </>
  );
};

const GroceryItemOne: React.FC<Props> = ({ grocery }) => {
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

const GroceryItemPrint: React.FC<Props> = ({ grocery }) => {
  return (
    <StylePrint.Container>
      <StylePrint.Title>
        {grocery?.icon && <Icon name={grocery.icon} />}
        <span>{grocery?.name}</span>
      </StylePrint.Title>
      <StylePrint.MaterialList>
        {grocery?.materials.map((material) => (
          <StylePrint.Material key={material.name}>
            <Checkbox sizeOption="small" />
            <Input
              type="text"
              id={material.name}
              value={material.amount + " " + material.unit}
            />
            <div className="material-name">
              <span>{material.name}</span>
            </div>
          </StylePrint.Material>
        ))}
      </StylePrint.MaterialList>
    </StylePrint.Container>
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
    font-size: 25px;
    line-height: 32px;
    color: var(--neutral-800);
    gap: 18px;
  `,
  MaterialList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
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
      font-size: 20px;
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
      font-size: 17px;
      line-height: 24px;
      color: var(--neutral-600);
    }
  `,
};

const StylePrint = {
  Container: styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #e1f4ff;
    box-shadow: 0px 1.60772px 6.4309px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(23.825px);
    @media print {
      gap: 8px;
      padding: 10px;
      border-radius: 6.4309px;
    }
    @media screen {
      gap: 20px;
      padding: 24px;
      border-radius: 16px;
    }
  `,
  Title: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    color: var(--neutral-800);

    @media print {
      font-size: 11px;
      line-height: 13px;
      gap: 6.54px;
    }
    @media screen {
      font-size: 28px;
      line-height: 32px;
      gap: 18px;
    }

    img {
      @media screen {
        width: 24px;
      }

      @media print {
        width: 8.5px;
      }
    }
  `,
  MaterialList: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 100%;
    @media print {
      gap: 8px;
    }
    @media screen {
      gap: 24px;
    }
  `,
  Material: styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    @media print {
      gap: 6.43px;
    }
    @media screen {
      gap: 16px;
    }

    .material-name {
      font-weight: 500;
      color: var(--neutral-600);
      flex-grow: 1;

      @media print {
        font-size: 9px;
        line-height: 11px;
      }
      @media screen {
        font-size: 23px;
        line-height: 28px;
      }
    }

    input {
      max-width: 128px;
      width: 30%;
      flex-shrink: 1;
      text-align: center;
      font-weight: 500;
      color: var(--neutral-600);
      @media print {
        font-size: 8px;
        line-height: 10px;
      }
      @media screen {
        font-size: 19px;
        line-height: 24px;
      }
    }
  `,
};
