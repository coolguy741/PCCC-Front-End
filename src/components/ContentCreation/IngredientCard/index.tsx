import _ from "lodash";
import styled from "styled-components";
import { useContentCreation } from "../../../hooks/useContentCreation";
import { DoubleClickToEditComponent } from "../DoubleClickToEdit";
import CCListAdd from "../Icons/list-add";
import CCListDelete from "../Icons/list-delete";
import CCListMinus from "../Icons/list-minus";

const initialState = [
  {
    aMode: "view",
    iMode: "view",
    amt: "2 cups",
    ingdt: "Quick oats",
  },
  {
    aMode: "view",
    iMode: "view",
    amt: "11/3 cup",
    ingdt: "Coconut flakes",
  },
  {
    aMode: "view",
    iMode: "view",
    amt: "1 cup",
    ingdt: "Creamy nut butter of your choice",
  },
  {
    aMode: "view",
    iMode: "view",
    amt: "1 cup",
    ingdt: "Ground flaxseed",
  },
  {
    aMode: "view",
    iMode: "view",
    amt: "1 cup",
    ingdt: "Chocolate chips",
  },
];

export function IngredientCard() {
  const { state, changeEditState, changeText, addListItem, deleteListItem } =
    useContentCreation(initialState as any);
  const listLength = Object.keys(state).length;

  return (
    <Style.Container>
      <figcaption>
        <h2>Ingredients</h2>
        <div className="cc-sb-actions">
          <CCListAdd onClick={() => addListItem(true)} />
          <CCListMinus onClick={deleteListItem} />
          <CCListDelete />
        </div>
      </figcaption>
      <ol>
        {_.times(listLength, (listNameMinusOne) => (
          <li key={listNameMinusOne}>
            <span className="ic-span">
              <DoubleClickToEditComponent
                mode={(state as any)[listNameMinusOne].aMode}
                name={listNameMinusOne}
                text={(state as any)[listNameMinusOne].amt}
                changeEditState={changeEditState}
                setText={changeText}
                amtOrIngdt="amt"
              />
            </span>
            <p>
              <DoubleClickToEditComponent
                mode={(state as any)[listNameMinusOne].iMode}
                name={listNameMinusOne}
                text={(state as any)[listNameMinusOne].ingdt}
                changeEditState={changeEditState}
                setText={changeText}
                amtOrIngdt="ingdt"
              />
            </p>
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
    min-height: 100%;
    padding: 2.5vh 2vw;

    figcaption {
      margin-bottom: 1.5vh;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-weight: 600;
        font-size: 23px;
        line-height: 28px;
        color: #3d3d3d;
      }

      div {
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
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

    p {
      width: 70%;
    }

    ol {
      list-style-type: none;
    }
  `,
};
