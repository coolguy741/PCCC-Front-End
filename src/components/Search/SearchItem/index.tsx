import styled from "styled-components";
import { trimStringByLength } from "../../../lib/util/trimStringByLength";
import { convertToRelativeUnit as conv } from "../../../styles/helpers/convertToRelativeUnits";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import { Typography } from "../../Typography";

export function SearchItem() {
  return (
    <Style.Container>
      <figure className="search-image"></figure>
      <div className="search-content">
        <hgroup>
          <Typography
            tag="h2"
            texttransform="uppercase"
            size="1.5vh"
            mb="1vh"
            weight={600}
            color="orange-600"
          >
            THEME: Pot it like it’s hot
          </Typography>
          <Typography
            tag="h3"
            color="neutral-800"
            size="2.5vh"
            mb="0.75vh"
            weight={600}
          >
            {trimStringByLength("Activity: Over the Grainbow", 27)}
          </Typography>
        </hgroup>
        <Typography color="neutral-600" size="1.6vh">
          {trimStringByLength(
            `Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent.`,
            190,
          )}
        </Typography>
      </div>
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    width: 49.5%;
    height: 25vh;
    ${glassBackground};
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 1.5vh;
    display: flex;
    padding: ${conv(20, "vh")};
    justify-content: space-between;

    h2 {
      border: 2px solid var(--orange-600);
      padding: ${conv(5, "vh")} ${conv(15, "vw")};
      border-radius: 20px;
      width: max-content;
    }

    figure {
      min-width: 30%;
      border: 1px solid red;
    }

    .search-image {
      border-radius: 6px;
    }

    .search-content {
      width: 65%;
      padding: ${conv(15, "vh")} 0;
    }

    &:hover {
      background: linear-gradient(
        182.85deg,
        rgba(255, 215, 96, 0.8) 2.47%,
        rgba(255, 191, 0, 0.8) 97.72%
      );
      cursor: pointer;
    }
  `,
};
