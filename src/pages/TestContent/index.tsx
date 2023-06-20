import _ from "lodash";
import { useState } from "react";
import styled from "styled-components";
import { DoubleBullet } from "../../components/ContentCreation/DoubleBullet";
import { DoubleImage } from "../../components/ContentCreation/DoubleImage";
import DB from "../../components/ContentCreation/Icons/db";
import DoubleImageIcon from "../../components/ContentCreation/Icons/doubleImage";
import IC from "../../components/ContentCreation/Icons/ic";
import IWC from "../../components/ContentCreation/Icons/iwc";
import PWH from "../../components/ContentCreation/Icons/pwh";
import PWN from "../../components/ContentCreation/Icons/pwn";
import SB from "../../components/ContentCreation/Icons/sb";
import SingleImageIcon from "../../components/ContentCreation/Icons/singleImage";
import TitleIcon from "../../components/ContentCreation/Icons/title";
import { ImageWithCaption } from "../../components/ContentCreation/ImageWithCaption";
import { IngredientCard } from "../../components/ContentCreation/IngredientCard";
import { NumberedParagraph } from "../../components/ContentCreation/NumberedParagraph";
import { ParagraphWithHeading } from "../../components/ContentCreation/ParagraphWithHeading";
import { SingleBullet } from "../../components/ContentCreation/SingleBullet";
import { SingleImage } from "../../components/ContentCreation/SingleImage";
import { Title } from "../../components/ContentCreation/Title";
import Scrollable from "../../components/Global/Scrollable";

const components = [
  {
    id: 1,
    title: "Title Card",
    preview: <TitleIcon />,
    component: <Title key="title" />,
  },
  {
    id: 2,
    title: "Paragraph",
    preview: <PWH />,
    component: <ParagraphWithHeading key="pwh" />,
  },
  {
    id: 3,
    title: "Paragraph with Number",
    preview: <PWN />,
    component: <NumberedParagraph key="np" />,
  },
  {
    id: 4,
    title: "1X1 Image",
    preview: <SingleImageIcon />,
    component: <SingleImage key="si" />,
  },
  {
    id: 5,
    title: "1x2 Image",
    preview: <DoubleImageIcon />,
    component: <DoubleImage key="di" />,
  },
  {
    id: 6,
    title: "Assessment - Multiple Choice",
    preview: <TitleIcon />,
    component: <Title key="title" />,
  },
  {
    id: 7,
    title: "Assessment - True & False",
    preview: <PWH />,
    component: <ParagraphWithHeading key="pwh" />,
  },
  {
    id: 8,
    title: "Assessment - Written",
    preview: <PWN />,
    component: <NumberedParagraph key="np" />,
  },
  {
    id: 9,
    title: "Image with Caption",
    preview: <IWC />,
    component: <ImageWithCaption key="iwc" />,
  },
  {
    id: 10,
    title: "Bullet 1",
    preview: <SB />,
    component: <SingleBullet />,
  },
  {
    id: 10,
    title: "Ingredient Card",
    preview: <IC />,
    component: <IngredientCard />,
  },
  {
    id: 11,
    title: "Bullet 2",
    preview: <DB />,
    component: <DoubleBullet />,
  },
];

export const TestContentPage = () => {
  const [comp, setComp] = useState<string>("Title Card");

  function changeComp(newState: string) {
    if (comp !== newState) setComp(newState);
  }

  function getComp(state: string) {
    const comp = _.find(components, { title: state });
    return comp?.component;
  }

  return (
    <Style.PageContainer>
      <Scrollable className="cc-components">
        {components.map(({ preview, title }) => (
          <button key={title} onClick={() => changeComp(title)}>
            <p>{title}</p>
            <div className="btn-icon">{preview}</div>
          </button>
        ))}
      </Scrollable>
      <div className="cc-preview">{getComp(comp)}</div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    .cc-components {
      height: 100%;
      width: 15%;
      border: 0.5px solid rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        display: flex;
        flex-direction: column;
        margin: 30px 0;
        width: 90%;

        p {
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          color: #3d3d3d;
          margin-bottom: 7.5px;
        }

        div {
          height: 100px;
          width: 100%;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(59.2764px);
          border-radius: 8px;
          display: grid;
          place-items: center;

          svg {
            height: 50%;
          }
        }
      }
    }

    .cc-preview {
      height: 100%;
      width: 85%;
      padding: 40px;
      display: grid;
      place-items: center;
    }
  `,
};
