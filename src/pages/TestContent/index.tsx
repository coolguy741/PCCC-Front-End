import styled from "styled-components";
import { DoubleBullet } from "../../components/ContentCreation/DoubleBullet";
import DoubleImageIcon from "../../components/ContentCreation/Icons/doubleImage";
import PWH from "../../components/ContentCreation/Icons/pwh";
import PWN from "../../components/ContentCreation/Icons/pwn";
import SingleImageIcon from "../../components/ContentCreation/Icons/singleImage";
import TitleIcon from "../../components/ContentCreation/Icons/title";

export const TestContentPage = () => {
  return (
    <Style.PageContainer>
      <div className="cc-components">
        <button>
          <p>Title card</p>
          <TitleIcon />
        </button>
        <button>
          <p>Paragraph</p>
          <PWH />
        </button>
        <button>
          <p>
            Paragraph with
            <br /> Number
          </p>
          <PWN />
        </button>
        <button>
          <p>1x1 Image</p>
          <SingleImageIcon />
        </button>
        <button>
          <p>1x2 Image</p>
          <DoubleImageIcon />
        </button>
      </div>
      <div className="cc-preview">
        {/* <ThemeComponent /> */}
        {/* <Title /> */}
        {/* <ParagraphWithHeading /> */}
        {/* <SingleImage /> */}
        {/* <DoubleImage /> */}
        {/* <NumberedParagraph /> */}
        {/* <ImageWithCaption /> */}
        {/* <SingleBullet /> */}
        {/* <IngredientCard /> */}
        <DoubleBullet />
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
