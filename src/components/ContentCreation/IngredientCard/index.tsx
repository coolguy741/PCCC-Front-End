import _ from "lodash";
import styled from "styled-components";
import { useContentCreation } from "../../../hooks/useContentCreation";
import { DoubleClickToEditComponent } from "../DoubleClickToEdit";

const initialState = [
  {
    mode: "view",
    amt: "2 cups",
    ingdt: "Quick oats",
  },
  {
    mode: "view",
    amt: "11/3 cup",
    ingdt: "Coconut flakes",
  },
  {
    mode: "view",
    amt: "1 cup",
    ingdt: "Creamy nut butter of your choice",
  },
  {
    mode: "view",
    amt: "1 cup",
    ingdt: "Ground flaxseed",
  },
  {
    mode: "view",
    amt: "1 cup",
    ingdt: "Chocolate chips",
  },
];

export function IngredientCard() {
  const { state, changeEditState, changeText } = useContentCreation(
    initialState as any,
  );
  const listLength = Object.keys(state).length;

  return (
    <Style.Container>
      <figcaption>Ingredients</figcaption>
      <ol>
        {_.times(listLength, (listNameMinusOne) => (
          <li>
            <span className="ic-span">
              <DoubleClickToEditComponent
                mode={(state as any)[listNameMinusOne].mode}
                name={listNameMinusOne}
                text={(state as any)[listNameMinusOne].amt}
                changeEditState={changeEditState}
                setText={changeText}
                amtOrIngdt="amt"
              />
            </span>
            <DoubleClickToEditComponent
              mode={(state as any)[listNameMinusOne].mode}
              name={listNameMinusOne}
              text={(state as any)[listNameMinusOne].ingdt}
              changeEditState={changeEditState}
              setText={changeText}
              amtOrIngdt="ingdt"
            />
          </li>
        ))}
      </ol>
    </Style.Container>
  );
}

const Style = {
  Container: styled.figure`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding: 2.5vh 2vw;

    figcaption {
      font-weight: 600;
      font-size: 23px;
      line-height: 28px;
      color: #3d3d3d;
      margin-bottom: 1.5vh;
    }

    li {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #646464;
      margin-bottom: 1.25vh;
    }

    span.ic-span {
      width: 27.5%;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #646464;
    }

    ol {
      list-style-type: none;
    }
  `,
};
