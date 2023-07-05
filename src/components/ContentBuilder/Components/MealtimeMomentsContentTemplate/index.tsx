import { BaseSyntheticEvent } from "react";
import styled from "styled-components";
import { State } from "../../../ContentCreation/types";
import { FoodwayTitle } from "../../../Foodways/FoodwayTitle";

export const MealtimeMomentsContentTemplate: React.FC<{
  isEditable?: boolean;
  handleDelete?: (event: BaseSyntheticEvent) => void;
  updatePageState?: (slideIndex: number, index: number, state: State) => void;
  title: string;
  description: string;
}> = ({
  isEditable = true,
  handleDelete,
  updatePageState,
  title,
  description,
}) => {
  return (
    <>
      <Style.ContentWrapper>
        <Style.Content>
          <FoodwayTitle foodway={{ title: title, info: description }} />
        </Style.Content>
      </Style.ContentWrapper>
    </>
  );
};

const Style = {
  ContentWrapper: styled.section`
    display: flex;
    height: 100%;
  `,

  Content: styled.div`
    flex: 1;
    width: 100%;
    margin: 0.5vh 0;
    padding: 1.87vh 1vw;
    column-gap: 1.7%;
    row-gap: 3.2%;
    position: relative;
    border-radius: 0.5rem;
    .grid {
      height: 100%;
      background: gray;
    }
  `,
  Component: styled.div.attrs(
    (props: { width: number; height: number; x: number; y: number }) => ({
      width: props.width ?? 1,
      height: props.height ?? 1,
      x: props.x ?? 0,
      y: props.y ?? 0,
    }),
  )`
    position: absolute;
    left: ${(props) => props.x * 33 + 1.3}%;
    height: ${(props) => props.height * 46.2}%;
    top: ${(props) => props.y * 49 + 2.5}%;
    width: ${(props) => props.width * 31.5 + props.width - 1}%;
    border-radius: 1rem;

    .delete-button-container {
      position: relative;
    }
  `,
  DeleteButton: styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  `,
};
