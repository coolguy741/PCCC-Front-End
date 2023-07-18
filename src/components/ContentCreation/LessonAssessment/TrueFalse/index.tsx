import { useState } from "react";
import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../../styles/helpers/convertToRelativeUnits";
import { Checkbox } from "../../../Global/Checkbox";
import { Typography } from "../../../Typography";
import { DoubleClickToEditComponent } from "../../DoubleClickToEdit";
import { Media } from "../../Media/media";
import { ComponentProps, withThemeStore } from "../../withThemeStore";

const tfInitialState = {
  variant: "multiple",
  img: {
    src: "",
    patternChoice: "",
  },
  number: {
    mode: "view",
    text: "Question 1 of 1",
  },
  question: {
    mode: "view",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
  },
  redPill: {
    mode: "view",
    text: "True",
  },
  bluePill: {
    mode: "view",
    text: "False",
  },
};

export const LessonAssessmentTrueOrFalseComponent = ({
  state,
  changeEditState,
  changeText,
}: ComponentProps) => {
  const [tfState, setState] = useState<boolean>(true);

  function changeOption() {
    setState((prevState) => !prevState);
  }
  return (
    <Style.Container>
      <article className="la-image">
        <Media media={{}} />
      </article>
      <article className="la-content">
        <hgroup>
          <Typography
            tag="h2"
            color="blue-500"
            size={conv(18, "vh")}
            weight={500}
            mb="1.5vh"
          >
            <DoubleClickToEditComponent
              mode={state.number.mode}
              setText={changeText}
              changeEditState={changeEditState}
              text={state.number.text}
              name="number"
            />
          </Typography>
          <Typography
            tag="h3"
            color="neutral-600"
            size={conv(19, "vh")}
            weight={600}
            mb="5vh"
          >
            <DoubleClickToEditComponent
              mode={state.question.mode}
              setText={changeText}
              changeEditState={changeEditState}
              text={state.question.text}
              name="question"
            />
          </Typography>
        </hgroup>
        <div className="la-content-input">
          <TFStyle.Container>
            <fieldset>
              <Checkbox onClick={changeOption} checked={tfState} />
              <Typography
                tag="label"
                weight={600}
                size={conv(16, "vh")}
                color="neutral-600"
                ml="2.5vw"
              >
                <DoubleClickToEditComponent
                  mode={state.redPill.mode}
                  setText={changeText}
                  changeEditState={changeEditState}
                  text={state.redPill.text}
                  name="redPill"
                />
              </Typography>
            </fieldset>
            <fieldset>
              <Checkbox onClick={changeOption} checked={!tfState} />
              <Typography
                tag="label"
                weight={600}
                size={conv(16, "vh")}
                color="neutral-600"
                ml="2.5vw"
              >
                <DoubleClickToEditComponent
                  mode={state.bluePill.mode}
                  setText={changeText}
                  changeEditState={changeEditState}
                  text={state.bluePill.text}
                  name="bluePill"
                />
              </Typography>
            </fieldset>
          </TFStyle.Container>
        </div>
      </article>
    </Style.Container>
  );
};

export const LessonAssessmentTrueOrFalse = withThemeStore(
  LessonAssessmentTrueOrFalseComponent,
  tfInitialState,
);

const TFStyle = {
  Container: styled.form`
    display: flex;
    flex-direction: column;

    fieldset {
      display: flex;
      align-items: center;
      margin-bottom: 2.5vh;
    }
  `,
};

const Style = {
  Container: styled.section`
    width: 100%;
    height: 100%;
    border-radius: ${conv(32, "vh")};
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
    backdrop-filter: blur(59.2764px);
    display: flex;
    background: rgba(255, 255, 255, 0.5);
    overflow: hidden;

    article.la-image {
      height: 100%;
      width: 40%;
    }

    article.la-content {
      width: 60%;
      height: 100%;
      padding: 35px 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `,
};
