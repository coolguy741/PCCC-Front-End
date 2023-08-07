import { ChangeEvent } from "react";
import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../../styles/helpers/convertToRelativeUnits";
import { Checkbox } from "../../../Global/Checkbox";
import { Typography } from "../../../Typography";
import { DoubleClickToEditComponent } from "../../DoubleClickToEdit";
import { Media } from "../../Media/media";
import { ComponentProps, withThemeStore } from "../../withThemeStore";

const tfInitialState = {
  variant: "optional",
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
  option: {
    value: true,
  },
  media: {
    src: "",
    name: "",
    type: "pattern",
    thumbnail: "",
    patternChoice: 0,
  },
};

export const LessonAssessmentTrueOrFalseComponent = ({
  state,
  isEditable,
  changeEditState,
  changeText,
  changeOption,
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
        <article className="latf-image">
          <Media
            changePattern={changeMediaPattern}
            changeMediaState={changeMediaState}
            isEditable={isEditable}
            media={state.media}
          />
        </article>
        <article className="latf-content">
          <hgroup>
            <Typography
              tag="h4"
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
              tag="h5"
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
                <Checkbox
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    changeOption(event.target.checked);
                  }}
                  checked={state.option.value}
                />
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
                <Checkbox
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    changeOption(!event.target.checked);
                  }}
                  checked={!state.option.value}
                />
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
      </div>
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
    display: flex;
    flex-direction: column;

    .la-top {
      width: 100%;
      height: 15%;

      h2 {
        font-weight: 600;
        font-size: ${conv(14, "vh")};
        text-transform: uppercase;
        color: var(--orange-600);
        border: 2px solid var(--orange-600);
        padding: ${conv(10, "vh")} ${conv(30, "vw")};
        border-radius: 24px;
        width: max-content;
        margin-bottom: 10px;
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

        h4,
        h5 {
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
