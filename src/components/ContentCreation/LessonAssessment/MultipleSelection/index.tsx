import styled from "styled-components";
import {
  convertToRelativeUnit as conv,
  convertToRelativeUnit,
} from "../../../../styles/helpers/convertToRelativeUnits";
import { Checkbox } from "../../../Global/Checkbox";
import { Typography } from "../../../Typography";
import { DoubleClickToEditComponent } from "../../DoubleClickToEdit";
import { Media } from "../../Media/media";
import { ComponentProps, withThemeStore } from "../../withThemeStore";

type LAVariant = "multiple" | "true-or-false" | "text-area";

const MStyle = {
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

const mInitialState = {
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
  option1: {
    mode: "view",
    text: "Lorem",
  },
  option2: {
    mode: "view",
    text: "Lorem",
  },
  option3: {
    mode: "view",
    text: "Lorem",
  },
  option4: {
    mode: "view",
    text: "Lorem",
  },
};

export const LessonAssessmentMultipleComponent = ({
  state,
  changeEditState,
  changeText,
}: ComponentProps) => {
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
            size={convertToRelativeUnit(18, "vh")}
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
            size={convertToRelativeUnit(19, "vh")}
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
          <MStyle.Container>
            <fieldset>
              <Checkbox />
              <Typography
                tag="label"
                weight={600}
                size={convertToRelativeUnit(16, "vh")}
                color="neutral-600"
                ml="2.5vw"
              >
                <DoubleClickToEditComponent
                  mode={state.option1.mode}
                  setText={changeText}
                  changeEditState={changeEditState}
                  text={state.option1.text}
                  name="option1"
                />
              </Typography>
            </fieldset>
            <fieldset>
              <Checkbox />
              <Typography
                tag="label"
                weight={600}
                size={convertToRelativeUnit(16, "vh")}
                color="neutral-600"
                ml="2.5vw"
              >
                <DoubleClickToEditComponent
                  mode={state.option2.mode}
                  setText={changeText}
                  changeEditState={changeEditState}
                  text={state.option2.text}
                  name="option2"
                />
              </Typography>
            </fieldset>
            <fieldset>
              <Checkbox />
              <Typography
                tag="p"
                weight={600}
                size={convertToRelativeUnit(16, "vh")}
                color="neutral-600"
                ml="2.5vw"
              >
                <DoubleClickToEditComponent
                  mode={state.option3.mode}
                  setText={changeText}
                  changeEditState={changeEditState}
                  text={state.option3.text}
                  name="option3"
                />
              </Typography>
            </fieldset>
            <fieldset>
              <Checkbox />
              <Typography
                tag="p"
                weight={600}
                size={convertToRelativeUnit(16, "vh")}
                color="neutral-600"
                ml="2.5vw"
              >
                <DoubleClickToEditComponent
                  mode={state.option4.mode}
                  setText={changeText}
                  changeEditState={changeEditState}
                  text={state.option4.text}
                  name="option4"
                />
              </Typography>
            </fieldset>
          </MStyle.Container>
        </div>
      </article>
    </Style.Container>
  );
};

export const LessonAssessmentMultiple = withThemeStore(
  LessonAssessmentMultipleComponent,
  mInitialState,
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
  `,
};
