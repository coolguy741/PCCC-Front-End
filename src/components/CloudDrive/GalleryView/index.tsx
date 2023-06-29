import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Scrollable from "../../Global/Scrollable";
import { Typography } from "../../Typography";
import CDAudio from "../Icons/cd-audio";
import CDDelete from "../Icons/cd-delete";
import CDDownload from "../Icons/cd-download";
import CDShare from "../Icons/cd-share";

const table_text_props = {
  size: "1.5vh",
  weight: 500,
  color: "neutral-400",
};

export function CDGalleryView(props: any) {
  const { list_items } = props;
  return (
    <Style.Container thumbWidth="thin">
      <div className="cd-list-content">
        {list_items.map((el: any) => (
          <Style.Item>
            <figure>
              <div className="cd-list-image">
                <CDAudio />
              </div>
              <Typography size="1.75vh" weight={500}>
                {el.name}
              </Typography>
            </figure>
            <Typography {...table_text_props}>{el.sharing}</Typography>
            <Typography {...table_text_props}>{el.size}</Typography>
            <Typography {...table_text_props}>{el.date}</Typography>
            <div className="cd-list-options">
              <CDShare />
              <CDDownload />
              <CDDelete />
            </div>
          </Style.Item>
        ))}
      </div>
    </Style.Container>
  );
}

const Style = {
  Container: styled(Scrollable)`
    // height of container minus padding
    height: calc(63vh - ${convertToRelativeUnit(48, "vh")});
    position: relative;
  `,
  Item: styled.article`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #eaeaea;

    figure {
      width: 30%;
      display: flex;
      align-items: center;

      div {
        height: ${convertToRelativeUnit(40, "vh")};
        display: grid;
        place-items: center;
        aspect-ratio: 1 / 1;
        border-radius: 4px;
        background: var(
          --gradient-ui-card,
          linear-gradient(
            180deg,
            rgba(255, 215, 96, 0.8) 0%,
            rgba(255, 191, 0, 0.8) 100%
          )
        );
        margin-right: 10px;
      }
    }

    p {
      &:first-of-type,
      &:nth-of-type(2) {
        width: 15%;
      }
      &:nth-of-type(3) {
        width: 20%;
      }
    }

    .cd-list-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15%;
    }
  `,
};
