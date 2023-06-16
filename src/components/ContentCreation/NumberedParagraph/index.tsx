import styled from "styled-components";
import { Typography } from "../../Typography";
import { DoubleClickToEditComponent } from "../DoubleClickToEdit";
import { useContentCreation } from "../hooks/useContentCreation";

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
    which wild mushrooms are safe to eat? This lesson contains 3
    activities that give participants the foundational knowledge needed to
    understand the terminology, tools and safety considerations for
    growing at home or foraging for food in nature.`,
  },
};

export function NumberedParagraph() {
  const { state, changeEditState, changeText } = useContentCreation(npState);
  return (
    <Style.Container>
      <Typography
        size="12.5vh"
        mt="-4vh"
        ml="2vw"
        mb="2vh"
        weight={700}
        color="orange-500"
      >
        <DoubleClickToEditComponent
          mode={state.number.mode}
          setText={changeText}
          changeEditState={changeEditState}
          text={state.number.text}
          name="number"
        />
      </Typography>
      <Style.Content>
        <Typography tag="h2" size="2.75vh" weight={600} color="neutral-800">
          <DoubleClickToEditComponent
            mode={state.heading.mode}
            setText={changeText}
            changeEditState={changeEditState}
            text={state.heading.text}
            name="heading"
          />
        </Typography>
        <Typography color="neutral-600" size="1.65vh">
          <DoubleClickToEditComponent
            mode={state.desc.mode}
            setText={changeText}
            changeEditState={changeEditState}
            text={state.desc.text}
            name="desc"
          />
        </Typography>
      </Style.Content>
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    & > p {
      position: relative;
      z-index: 1;
    }

    & > div {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      padding: 5vh 2vw;
      backdrop-filter: blur(59.2764px);
      border-radius: 16px;
      flex: 1;
      margin-top: -10vh;
    }
  `,

  Content: styled.div`
    position: relative;
    z-index: 0;
  `,
};
