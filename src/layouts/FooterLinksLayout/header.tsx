import styled from "styled-components";
import { footer_data } from "../../components/FooterLinks/content-data";
import { Typography } from "../../components/Typography";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";

export function FLHeader({
  page,
}: {
  page: "terms_and_conditions" | "privacy_policy" | "accessibility";
}) {
  const page_content = footer_data[page];
  return (
    <Style.Container>
      <Typography tag="h1" size="8vh" weight={600} color="neutral-800">
        {page_content.title}
      </Typography>
      <Typography tag="h2" size="2vh" weight={500} color="neutral-600">
        {page_content.subtitle}
      </Typography>
      <div className="fl-header-bg">{page_content.icon}</div>
    </Style.Container>
  );
}

const Style = {
  Container: styled.hgroup`
    border-radius: 16px;
    /* UI Card Shadow */
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    ${() => animatedbackgroundGradient("#c4e8ff", "#d2f7e5")}
    width: 100%;
    height: 42.5vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    .fl-header-bg {
      position: absolute;
      z-index: 0;
      bottom: -10px;
      right: 0;
      max-height: 75%;
    }
  `,
};
