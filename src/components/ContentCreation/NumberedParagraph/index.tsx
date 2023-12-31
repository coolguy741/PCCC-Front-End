import styled from "styled-components";
import { Typography } from "../../Typography";
import { DoubleClickToEditComponent } from "../DoubleClickToEdit";
import { ObjectState } from "../types";
import { ComponentProps, withThemeStore } from "../withThemeStore";

const npState: any = {
  number: {
    mode: "view",
    text: "1",
  },
  heading: {
    mode: "view",
    text: "Garden Guardian",
  },
  desc: {
    mode: "view",
    text: `Can you spot the difference between a shovel and a trowel, or tell
    which wild mushrooms are safe to eat?`,
  },
};

function NumberedParagraphComponent({
  state,
  changeEditState,
  changeText,
  viewMode,
}: ComponentProps) {
  const componentState = state as ObjectState;

  return (
    <Style.Container>
      <Typography size="8vh" ml="2vw" weight={700} color="orange-500">
        <DoubleClickToEditComponent
          mode={viewMode(componentState.number.mode)}
          setText={changeText}
          changeEditState={changeEditState}
          text={componentState.number.text}
          name="number"
        />
      </Typography>
      <Style.Content>
        <Typography tag="h2" size="2.5vh" weight={600} color="neutral-800">
          <DoubleClickToEditComponent
            mode={viewMode(componentState.heading.mode)}
            setText={changeText}
            changeEditState={changeEditState}
            text={componentState.heading.text}
            name="heading"
          />
        </Typography>
        <Typography color="neutral-600" size="1.65vh">
          <DoubleClickToEditComponent
            mode={viewMode(componentState.desc.mode)}
            setText={changeText}
            changeEditState={changeEditState}
            text={componentState.desc.text}
            name="desc"
          />
        </Typography>
      </Style.Content>
    </Style.Container>
  );
}

export const NumberedParagraph = withThemeStore(
  NumberedParagraphComponent,
  npState,
);

const Style = {
  Container: styled.article`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -2.75vh;

    & > p {
      position: relative;
      z-index: 1;
      height: 8vh;
    }

    & > div {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      padding: 2.5vh 2vw;
      backdrop-filter: blur(59.2764px);
      border-radius: 16px;
      flex: 1;
      margin-top: -1.5vh;
    }
  `,

  Content: styled.div`
    position: relative;
    z-index: 0;
  `,
};
