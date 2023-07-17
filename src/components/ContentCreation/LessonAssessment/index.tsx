import styled from "styled-components";
import {
  convertToRelativeUnit as conv,
  convertToRelativeUnit,
} from "../../../styles/helpers/convertToRelativeUnits";
import { Typography } from "../../Typography";
import { Media } from "../Media/media";
import { MultipleSelection } from "./MultipleSelection";
import { LATextArea } from "./TextArea";
import { TrueOrFalse } from "./TrueFalse";

type LAVariant = "multiple" | "true-or-false" | "text-area";

function switchLAView(variant?: LAVariant) {
  switch (variant) {
    case "multiple":
      return <MultipleSelection />;
    case "true-or-false":
      return <TrueOrFalse />;
    case "text-area":
    default:
      return <LATextArea />;
  }
}

export const LessonAssessment = ({
  variant,
  media,
}: {
  variant?: LAVariant;
  media: any;
}) => {
  return (
    <Style.Container>
      <article className="la-image">
        <Media media={media} />
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
            Question 4 of 20
          </Typography>
          <Typography
            tag="h3"
            color="neutral-600"
            size={convertToRelativeUnit(19, "vh")}
            weight={600}
            mb="5vh"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor?
          </Typography>
        </hgroup>
        <div className="la-content-input">{switchLAView(variant)}</div>
      </article>
    </Style.Container>
  );
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
