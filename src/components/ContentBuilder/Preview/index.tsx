import styled from "styled-components";

import { ContentBuilderProps } from "..";
import { PreviewAction } from "../Components/Actions/PreviewAction";
import { ContentNavigator } from "../Components/ContentNavigator";
import { ContentTemplate } from "../Components/ContentTemplate";

export const ContentBuilderPreview: React.FC<ContentBuilderProps> = ({
  type,
  store,
}) => {
  const { contents, currentStep, setSlideIndex } = store;

  return (
    <Style.Slide>
      <ContentNavigator type={type} />
      <ContentTemplate
        isEditable={false}
        setSlideIndex={setSlideIndex}
        slides={contents[currentStep].slides}
      />
      <PreviewAction />
    </Style.Slide>
  );
};

const Style = {
  Slide: styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 2%;

    .content-swiper-slide {
      flex: 1;
      margin: 0;
    }
  `,
};
