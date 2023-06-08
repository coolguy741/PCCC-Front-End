import styled from "styled-components";
import { Typography } from "../../Typography";

export function ParagraphWithHeading() {
  return (
    <Style.Container>
      <Typography
        tag="h2"
        size="2vh"
        mb="1.5vh"
        weight={600}
        color="neutral-800"
      >
        Garden Guardian
      </Typography>
      <Typography color="neutral-600" size="1.5vh">
        Can you spot the difference between a shovel and a trowel, or tell which
        wild mushrooms are safe to eat? This lesson contains 3 activities that
        give participants the foundational knowledge needed to understand the
        terminology, tools and safety considerations for growing at home or
        foraging for food in nature.
      </Typography>
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 30%;
    padding: 2.5vh 2vw;
  `,
};
