import styled from "styled-components";

import { convertToRelativeUnit as conv } from "../../../styles/helpers/convertToRelativeUnits";
import { DoubleClickToEditComponent } from "../DoubleClickToEdit";

import { Media } from "../Media/media";
import { CCFormat, ObjectState } from "../types";
import { ComponentProps, withThemeStore } from "../withThemeStore";

const initialState: any = {
  tag: { mode: "view", text: "Overview" },
  heading: {
    mode: "view",
    text: "With great power comes great responsibility",
  },
  desc: {
    mode: "view",
    text: `Providing food for your loved ones is powerful. Throughout nature and history, providers have helped their family groups and communities thrive and survive. But when you’re planting your own crops, or forging for food in nature, the real power is knowledge. There are
many things to know, and many ways to know them.`,
  },
  media: {
    src: "",
    name: "",
    type: "pattern",
    thumbnail: "",
    patternChoice: 0,
  },
};

function TitleComponent({
  state,
  isEditable,
  changeEditState,
  changeText,
  viewMode,
  changeMediaState,
  changeMediaPattern,
  addThumbnail,
}: ComponentProps) {
  const componentState = state as ObjectState;

  return (
    <Style.Container>
      <div className="tc-content">
        <h1>
          <span className="tc-overview">Overview</span>
          <br />
          <DoubleClickToEditComponent
            mode={viewMode(componentState.heading.mode)}
            setText={changeText}
            changeEditState={changeEditState}
            text={componentState.heading.text}
            name="heading"
          />
        </h1>
        <p>
          <DoubleClickToEditComponent
            mode={viewMode(componentState.desc.mode)}
            setText={changeText}
            changeEditState={changeEditState}
            text={componentState.desc.text}
            name="desc"
          />
        </p>
        {/* <h2>
          <DoubleClickToEditComponent
            mode={viewMode(state.subHeading.mode)}
            setText={changeText}
            changeEditState={changeEditState}
            text={state.subHeading.text}
            name="subHeading"
          />
        </h2>
        <p>
          <DoubleClickToEditComponent
            mode={viewMode(state.subDesc.mode)}
            setText={changeText}
            changeEditState={changeEditState}
            text={state.subDesc.text}
            name="subDesc"
          />
        </p> */}
      </div>
      <Media
        changePattern={changeMediaPattern}
        changeMediaState={changeMediaState}
        isEditable={isEditable}
        media={(componentState as Record<string, CCFormat>).media}
        addThumbnail={addThumbnail}
      />
    </Style.Container>
  );
}

export const Title = withThemeStore(TitleComponent, initialState);

const Style = {
  Container: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .tc-content {
      width: 40%;
      height: 90%;
      z-index: 2;

      span.tc-overview {
        font-weight: 600;
        font-size: ${conv(14, "vw")};
        text-transform: uppercase;
        color: var(--orange-600);
        border: 2px solid var(--orange-600);
        padding: ${conv(0, "vh")} ${conv(20, "vw")};
        border-radius: 24px;
        position: absolute;
        top: 2vh;
      }

      h1 {
        width: 120%;
        padding: 10px 1.5vw;
        font-weight: 600;
        font-size: 3.5vh;
        line-height: 125%;
        color: #3d3d3d;
        background: linear-gradient(
          182.85deg,
          rgba(255, 215, 96, 0.8) 2.47%,
          rgba(255, 191, 0, 0.8) 97.72%
        );
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(59.2764px);
        border-radius: 12px;
        z-index: 2;
        padding-top: 4vh;
        height: max-content;
      }
    }

    h2 {
      font-weight: 600;
      font-size: 2.2vh;
      padding: 0 20px;
      line-height: 32px;
      color: #3d3d3d;
      height: max-content;
    }

    p {
      margin: 1vh 0;
      padding: 0 20px;
      font-size: 1.5vh;
      color: #646464;
      height: max-content;
    }

    figure {
      width: 60%;
      height: 100%;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      border-radius: 16px;
      z-index: 0;
      position: relative;
      display: grid;
      place-items: center;
      overflow: hidden;

      img {
        position: absolute;
      }

      figcaption {
        position: absolute;
      }
    }
  `,
};
