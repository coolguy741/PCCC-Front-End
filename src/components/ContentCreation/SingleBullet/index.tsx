import _ from "lodash";
import styled from "styled-components";
import { DoubleClickToEditComponent } from "../DoubleClickToEdit";
import CCListAdd from "../Icons/list-add";
import CCListDelete from "../Icons/list-delete";
import CCListMinus from "../Icons/list-minus";
import { ComponentProps, withThemeStore } from "../withThemeStore";

const initialState = [
  {
    mode: "view",
    text: "Combine all the ingredients together in a large bowl, mix until well combined.",
  },
  {
    mode: "view",
    text: "Refrigerate for about 30 minutes",
  },
  {
    mode: "view",
    text: `Scoop out a tablespoon portion of mixture, roll each portion in the
    palm of your hands and place each ball into a resealable container for
    storage.`,
  },
];

export function SingleBulletComponent({
  state,
  changeListEditState,
  changeListText,
  addListItem,
  deleteListItem,
  viewMode,
}: ComponentProps) {
  const listLength = Object.keys(state).length;

  return (
    <Style.Container>
      <figcaption>
        <h2>Directions</h2>
        <div className="cc-sb-actions">
          <CCListAdd onClick={() => addListItem()} />
          <CCListMinus onClick={deleteListItem} />
          <CCListDelete />
        </div>
      </figcaption>
      <ol>
        {_.times(listLength, (listNameMinusOne) => (
          <li key={listNameMinusOne}>
            <span className="sb-list">{listNameMinusOne + 1}</span>
            <p>
              {" "}
              <DoubleClickToEditComponent
                mode={(state as any)[listNameMinusOne].mode}
                name={listNameMinusOne}
                text={(state as any)[listNameMinusOne].text}
                changeEditState={changeListEditState}
                setText={changeListText}
              />
            </p>
          </li>
        ))}
      </ol>
    </Style.Container>
  );
}

export const SingleBullet = withThemeStore(SingleBulletComponent, initialState);

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
      margin-bottom: 1.25vh;
      align-items: center;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #646464;
      width: 100%;
    }

    span.sb-list {
      background: linear-gradient(180deg, #f87c56 0%, #f65321 91.9%);
      border-radius: 80.1418px;
      font-size: 2vh;
      height: 25px;
      width: 25px;
      display: grid;
      place-items: center;
      font-weight: 600;
      font-size: 14.4255px;
      line-height: 19px;
      text-align: center;
      color: #ffffff;
      min-width: 25px;
      margin-right: 10px;
    }

    ol {
      list-style-type: none;
      flex-grow: 1;
      height: 80%;
    }
  `,
};
