import styled from "styled-components";

import Button from "../../Button";

export const ContentNavigator = () => {
  return (
    <Style.Container>
      <Button
        to="/dashboard/themes"
        icon="dark-prev"
        iconPosition="left"
        variant="ghost"
      >
        Back to themes
      </Button>
      <Button>Preview</Button>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    padding: 0 0 1vh 0;
    display: flex;
    justify-content: space-between;
  `,
};
