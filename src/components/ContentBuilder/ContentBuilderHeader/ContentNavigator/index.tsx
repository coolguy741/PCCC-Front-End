import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Button from "../../../Button";
import { ContentSlider } from "../../Slider";

export const ContentNavigator = () => {
  const { pathname } = useLocation();

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
      <ContentSlider />
      {pathname.endsWith("preview") ? (
        <div className="flex">
          <Button
            variant="yellow"
            to="/dashboard/themes/create"
            className="mr-4"
          >
            Edit
          </Button>
          <Button variant="yellow" to="/dashboard/themes/print">
            Print
          </Button>
        </div>
      ) : (
        <Button to="/dashboard/themes/preview">Preview</Button>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    padding: 0.5vh 0 1vh 0;
    display: flex;
    justify-content: space-between;
  `,
};
