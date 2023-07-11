import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import { ContentBuilderType } from "../../../../pages/types";
import Button from "../../../Button";
import { ContentSlider } from "../Slider";

interface Props {
  type: ContentBuilderType;
}

export const ContentNavigator: React.FC<Props> = ({ type }) => {
  const { pathname } = useLocation();
  const { item } = useParams();

  return (
    <Style.Container>
      <Button
        to={`/dashboard/${type}`}
        icon="dark-prev"
        iconPosition="left"
        variant="ghost"
      >
        Back to {type}
      </Button>
      {type === ContentBuilderType.THEMES && <ContentSlider />}
      {pathname.endsWith("preview") ? (
        <Button
          variant="yellow"
          to={`/dashboard/${type}/create`}
          className="mr-4"
        >
          Edit
        </Button>
      ) : item && !pathname.endsWith("edit") ? (
        <div className="flex">
          <Button
            variant="yellow"
            to={`/dashboard/${type}/${item}/edit`}
            className="mr-4"
          >
            Edit
          </Button>
          {/* <a href={`/dashboard/${type}/print`} target="_blank" rel="noreferrer">
            <Button variant="yellow">Print</Button>
          </a> */}
          <Button variant="yellow" to={`/dashboard/${type}/slug/print`}>
            Print
          </Button>
        </div>
      ) : (
        <Button to={`/dashboard/${type}/preview`}>Preview</Button>
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
