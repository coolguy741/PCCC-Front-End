import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../../styles/helpers/convertToRelativeUnits";
import { Typography } from "../../../Typography";
import { DoubleClickToEditComponent } from "../../DoubleClickToEdit";
import { Media } from "../../Media/media";
import { ComponentProps, withThemeStore } from "../../withThemeStore";

const taInitialState = {
  variant: "text-area",
  img: {
    src: "",
    patternChoice: "",
  },
  overview: {
    mode: "view",
    text: "Garden Guardian",
  },
  lessonName: {
    mode: "view",
    text: "Tools of the Trade - Assessment",
  },
  number: {
    mode: "view",
    text: "Question 1 of 1",
  },
  question: {
    mode: "view",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
  },
  media: {
    src: "",
    name: "",
    thumbnail: "",
    patternChoice: 0,
  },
};

export const LessonAssessmentTextAreaComponent = ({
  state,
  changeEditState,
  changeText,
  changeMediaState,
  changeMediaPattern,
  addThumbnail,
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
        <Typography tag="h3" size="2.5vh" color="neutral-700">
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
        <article className="lata-image">
          <Media
            changePattern={changeMediaPattern}
            changeMediaState={changeMediaState}
            media={state.media}
            addThumbnail={addThumbnail}
          />
        </article>
        <article className="lata-content">
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
          <div className="lata-content-input">
            <textarea className="lata-textarea" />
          </div>
        </article>
      </div>
    </Style.Container>
  );
};

export const LessonAssessmentTextArea = withThemeStore(
  LessonAssessmentTextAreaComponent,
  taInitialState,
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

    article.lata-image {
      height: 100%;
      width: 40%;
    }

    article.lata-content {
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

    textarea.lata-textarea {
      width: 100%;
      height: ${conv(150, "vh")};
      resize: none;
      padding: ${conv(13, "vh")} ${conv(15, "vh")};
      font-size: ${conv(16, "vh")};
      line-height: ${conv(20, "vh")};
      color: var(--neutral-600);
      border-radius: 12px;
      background: #ffffff;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    }
  `,
};
