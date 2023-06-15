import styled from "styled-components";
import { Typography } from "../../Typography";

export function NumberedParagraph() {
  return (
    <Style.Container>
      <Typography
        size="12.5vh"
        mt="-4vh"
        ml="2vw"
        mb="2vh"
        weight={700}
        color="orange-500"
      >
        2
      </Typography>
      <Style.Content>
        <Typography tag="h2" size="2.75vh" weight={600} color="neutral-800">
          Garden Guardian
        </Typography>
        <Typography color="neutral-600" size="1.65vh">
          Can you spot the difference between a shovel and a trowel, or tell
          which wild mushrooms are safe to eat? This lesson contains 3
          activities that give participants the foundational knowledge needed to
          understand the terminology, tools and safety considerations for
          growing at home or foraging for food in nature.
        </Typography>
      </Style.Content>
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    & > p {
      position: relative;
      z-index: 1;
    }

    & > div {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      padding: 5vh 2vw;
      backdrop-filter: blur(59.2764px);
      border-radius: 16px;
      flex: 1;
      margin-top: -10vh;
    }
  `,

  Content: styled.div`
    position: relative;
    z-index: 0;
  `,
};
