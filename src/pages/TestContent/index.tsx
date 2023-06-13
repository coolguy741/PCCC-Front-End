import { useState } from "react";
import styled from "styled-components";
import { DoubleImage } from "../../components/ContentCreation/DoubleImage";
import DoubleImageIcon from "../../components/ContentCreation/Icons/doubleImage";
import PWH from "../../components/ContentCreation/Icons/pwh";
import PWN from "../../components/ContentCreation/Icons/pwn";
import SingleImageIcon from "../../components/ContentCreation/Icons/singleImage";
import TitleIcon from "../../components/ContentCreation/Icons/title";
import { NumberedParagraph } from "../../components/ContentCreation/NumberedParagraph";
import { ParagraphWithHeading } from "../../components/ContentCreation/ParagraphWithHeading";
import { SingleImage } from "../../components/ContentCreation/SingleImage";
import { Title } from "../../components/ContentCreation/Title";

const contentComponents = {
  title: <Title key="title" />,
  pwh: <ParagraphWithHeading key="pwh" />,
  np: <NumberedParagraph key="np" />,
  si: <SingleImage key="si" />,
  di: <DoubleImage key="di" />,
};

type Comp = "pwh" | "title" | "np" | "si" | "di";

export const TestContentPage = () => {
  const [comp, setComp] = useState<Comp>("title");

  function changeComp(newState: Comp) {
    if (comp !== newState) setComp(newState);
  }

  return (
    <Style.PageContainer>
      <div className="cc-components">
        <button onClick={() => changeComp("title")}>
          <p>Title card</p>
          <TitleIcon />
        </button>
        <button onClick={() => changeComp("pwh")}>
          <p>Paragraph</p>
          <PWH />
        </button>
        <button onClick={() => changeComp("np")}>
          <p>
            Paragraph with
            <br /> Number
          </p>
          <PWN />
        </button>
        <button onClick={() => changeComp("si")}>
          <p>1x1 Image</p>
          <SingleImageIcon />
        </button>
        <button onClick={() => changeComp("di")}>
          <p>1x2 Image</p>
          <DoubleImageIcon />
        </button>
      </div>
      <div className="cc-preview">
        {contentComponents[comp]}
        {/* <ThemeComponent /> */}
        {/* <Title /> */}
        {/* <ParagraphWithHeading /> */}
        {/* <SingleImage /> */}
        {/* <DoubleImage /> */}
        {/* <NumberedParagraph /> */}
        {/* <ImageWithCaption /> */}
        {/* <SingleBullet /> */}
        {/* <IngredientCard /> */}
        {/* <DoubleBullet /> */}
      </div>
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
      width: 10%;
      border: 0.5px solid rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        width: 90%;
        padding: 1vh;
        margin: 0.5vh 0;

        p {
          width: max-content;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #3d3d3d;
          margin-bottom: 1vh;
        }
      }

      svg {
        width: 75%;
        margin-bottom: 2vh;
      }
    }

    .cc-preview {
      height: 100%;
      width: 90%;
      padding: 40px;
      display: grid;
      place-items: center;
    }
  `,
};
