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
  bluePill: {
    mode: "view",
    text: "False",
  },
  redPill: {
    mode: "view",
    text: "True",
  },
  media: {
    src: "",
    patternChoice: 0,
  },
};

export const LessonAssessmentTrueOrFalseComponent = ({
  state,
  changeEditState,
  changeText,
  changeMediaState,
  changeMediaPattern,
}: ComponentProps) => {
  const [tfState, setState] = useState<boolean>(true);

  function changeOption() {
    setState((prevState) => !prevState);
  }
  return (
    <Style.Container>
      <article className="latf-image">
        <Media
          changePattern={changeMediaPattern}
          changeMediaState={changeMediaState}
          media={state.media}
        />
      </article>
      <article className="latf-content">
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
        <div className="latf-content-input">
          <form className="latf-form">
            <div className="latf-field">
              <Checkbox onClick={changeOption} checked={tfState} />
              <Typography
                tag="p"
                weight={600}
                size={conv(16, "vh")}
                color="neutral-600"
                ml="2.5vw"
              >
                True
              </Typography>
            </div>
            <div className="latf-field">
              <Checkbox onClick={changeOption} checked={!tfState} />
              <Typography
                tag="p"
                weight={600}
                size={conv(16, "vh")}
                color="neutral-600"
                ml="2.5vw"
                onClick={() => console.log("clicked")}
              >
                False
              </Typography>
            </div>
          </form>
        </div>
      </article>
    </Style.Container>
  );
};

export const LessonAssessmentTrueOrFalse = withThemeStore(
  LessonAssessmentTrueOrFalseComponent,
  tfInitialState,
);

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

    article.latf-image {
      height: 100%;
      width: 40%;
    }

    article.latf-content {
      width: 60%;
      height: 100%;
      padding: 35px 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      hgroup {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h2,
        h3 {
          width: 100%;
        }
      }
    }

    form.latf-form {
      display: flex;
      flex-direction: column;

      div.latf-field {
        display: flex;
        align-items: center;
        margin-bottom: 2.5vh;
      }
    }
  `,
};
