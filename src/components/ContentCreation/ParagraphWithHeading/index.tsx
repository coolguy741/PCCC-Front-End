import styled from "styled-components";
import { useContentCreation } from "../../../hooks/useContentCreation";
import { Typography } from "../../Typography";
import { DoubleClickToEditComponent } from "../DoubleClickToEdit";

const pWithPState: any = {
  heading: {
    mode: "view",
    text: "Return to nature",
  },
  desc: {
    mode: "view",
    text: "Lastly, throughout the summer, we’re going to explore the world of food all around us, like the fruit trees that grow on your street, or wild blueberries in the woods. Gathering food from the environment is called foraging. When you’re foraging, the most important thing to know is how to know.",
  },
};

export function ParagraphWithHeading() {
  const { state, changeEditState, changeText } =
    useContentCreation(pWithPState);
  return (
    <Style.Container>
      <Typography
        tag="h2"
        size="2vh"
        mb="1.5vh"
        weight={600}
        color="neutral-800"
      >
        <DoubleClickToEditComponent
          mode={state.heading.mode}
          setText={changeText}
          changeEditState={changeEditState}
          text={state.heading.text}
          name="heading"
        />
      </Typography>
      <Typography color="neutral-600" size="1.5vh">
        <DoubleClickToEditComponent
          mode={state.desc.mode}
          setText={changeText}
          changeEditState={changeEditState}
          text={state.desc.text}
          name="desc"
        />
      </Typography>
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding: 2.5vh 2vw;
  `,
};
