import styled from "styled-components";

export function ParagraphWithHeading() {
  return (
    <Style.Container>
      <h2>Garden Guardian</h2>
      <p>
        Can you spot the difference between a shovel and a trowel, or tell which
        wild mushrooms are safe to eat? This lesson contains 3 activities that
        give participants the foundational knowledge needed to understand the
        terminology, tools and safety considerations for growing at home or
        foraging for food in nature.
      </p>
    </Style.Container>
  );
}

const Style = {
  Container: styled.main``,
};
