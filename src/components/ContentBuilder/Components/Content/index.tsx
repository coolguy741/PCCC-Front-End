import styled from "styled-components";

import { ContentBuilderType, ThemeComponent } from "../../../../pages/types";
import { PreviewAction } from "../Actions/PreviewAction";
import { ContentNavigator } from "../ContentNavigator";
import { ContentTemplate } from "../ContentTemplate";

interface ContentProps {
  slides: ThemeComponent[][];
  setSlideIndex: (index: number) => void;
  isEditable?: boolean;
  type: ContentBuilderType;
}

export const Content: React.FC<ContentProps> = ({
  type,
  slides,
  setSlideIndex,
  isEditable = true,
}) => {
  return (
    <Style.Slide>
      <ContentNavigator type={type} />
      <ContentTemplate
        isEditable={isEditable}
        setSlideIndex={setSlideIndex}
        slides={slides}
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
