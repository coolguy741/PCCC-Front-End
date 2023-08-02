import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Typography } from "../../Typography";
import { DoubleClickToEditComponent } from "../DoubleClickToEdit";
import { Media } from "../Media/media";
import { ComponentProps, withThemeStore } from "../withThemeStore";

const iWithCState: any = {
  heading: {
    mode: "view",
    text: "Forging:",
  },
  desc: {
    mode: "view",
    text: "to find food in nature.",
  },
  img: {
    src: "",
    patternChoice: "",
  },
  media: {
    src: "",
    name: "",
    thumbnail: "",
    patternChoice: 0,
  },
};

export function ImageWithCaptionComponent({
  state,
  changeEditState,
  changeText,
  viewMode,
  changeMediaState,
  changeMediaPattern,
}: ComponentProps) {
  const componentState = state as any;

  return (
    <Style.Container>
      <div className="iwc-image">
        <Media
          changePattern={changeMediaPattern}
          changeMediaState={changeMediaState}
          media={componentState.media}
          variant="img-only"
        />
      </div>
      <Typography
        weight={400}
        size="1vh"
        line-height="105%"
        mt="8vh"
        color="neutral-600"
      >
        <b>
          <DoubleClickToEditComponent
            mode={viewMode(componentState.heading.mode)}
            setText={changeText}
            changeEditState={changeEditState}
            text={componentState.heading.text}
            name="heading"
          />
        </b>
        <DoubleClickToEditComponent
          mode={viewMode(componentState.desc.mode)}
          setText={changeText}
          changeEditState={changeEditState}
          text={componentState.desc.text}
          name="desc"
        />
      </Typography>
    </Style.Container>
  );
}

export const ImageWithCaption = withThemeStore(
  ImageWithCaptionComponent,
  iWithCState,
);

const Style = {
  Container: styled.figure`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding: 6px;

    .iwc-image {
      height: 75%;
      width: 100%;
      border-radius: 12px 12px 0px 0px;
      overflow: hidden;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      margin-top: ${convertToRelativeUnit(8, "vh")};
      color: var(--neutral-600);
    }
  `,
};
