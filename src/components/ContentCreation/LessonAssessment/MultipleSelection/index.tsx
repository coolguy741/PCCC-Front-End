import { ChangeEvent } from "react";
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
  overview: {
    mode: "view",
    text: "Garden Guardian",
  },
  lessonName: {
    mode: "view",
    text: "Tools of the Trade - Assessment",
  },
  question: {
    mode: "view",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
  },
  option1: {
    mode: "view",
    text: "Lorem",
    valid: false,
  },
  option2: {
    mode: "view",
    text: "Lorem",
    valid: false,
  },
  option3: {
    mode: "view",
    text: "Lorem",
    valid: false,
  },
  option4: {
    mode: "view",
    text: "Lorem",
    valid: false,
  },
  media: {
    src: "",
    name: "",
    thumbnail: "",
    type: "pattern",
    patternChoice: 0,
  },
};

export const LessonAssessmentMultipleComponent = ({
  state,
  isEditable,
  changeEditState,
  changeText,
  changeValid,
  changeMediaState,
  changeMediaPattern,
}: ComponentProps) => {
  return (
    <Style.Container>
      <hgroup className="la-top">
        <h2>
          <DoubleClickToEditComponent
            mode={state.overview.mode}
            setText={changeText}
            changeEditState={changeEditState}
            text={state.overview.text}
            name="overview"
          />
        </h2>
        <Typography tag="h3" size="3.5vh" color="neutral-700">
          <DoubleClickToEditComponent
            mode={state.lessonName.mode}
            setText={changeText}
            changeEditState={changeEditState}
            text={state.lessonName.text}
            name="lessonName"
          />
        </Typography>
      </hgroup>
      <div className="la-bottom">
        <article className="lam-image">
          <Media
            changePattern={changeMediaPattern}
            changeMediaState={changeMediaState}
            isEditable={isEditable}
            media={state.media}
          />
        </article>
        <article className="lam-content">
          <hgroup>
            <Typography
              tag="h4"
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
              tag="h5"
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
          <div className="lam-content-input">
            <form className="lam-form">
              <div>
                <Checkbox
                  value={state.option1.valid}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    changeValid("option1", event.target.checked);
                  }}
                />
                <Typography
                  tag="p"
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
              </div>
              <div>
                <Checkbox
                  value={state.option2.valid}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    changeValid("option2", event.target.checked);
                  }}
                />
                <Typography
                  tag="p"
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
              </div>
              <div>
                <Checkbox
                  value={state.option3.valid}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    changeValid("option3", event.target.checked);
                  }}
                />
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
              </div>
              <div>
                <Checkbox
                  value={state.option4.valid ?? false}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    changeValid("option4", event.target.checked);
                  }}
                />
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
              </div>
            </form>
          </div>
        </article>
      </div>
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
    display: flex;
    flex-direction: column;

    .la-top {
      width: 100%;
      height: 17.5%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h2 {
        font-weight: 600;
        font-size: ${conv(12, "vh")};
        text-transform: uppercase;
        color: var(--orange-600);
        border: 2px solid var(--orange-600);
        padding: 5px 15px;
        border-radius: 24px;
        width: max-content;
      }
    }

    .la-bottom {
      width: 100%;
      height: 82.5%;
      display: flex;
      background: rgba(255, 255, 255, 0.5);
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      backdrop-filter: blur(59.2764px);
      border-radius: ${conv(32, "vh")};
      overflow: hidden;
    }

    article.lam-image {
      height: 100%;
      width: 40%;
    }

    article.lam-content {
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

        h4,
        h5 {
          width: 100%;
        }
      }
    }

    form.lam-form {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
        margin-bottom: 2.5vh;
      }
    }
  `,
};
