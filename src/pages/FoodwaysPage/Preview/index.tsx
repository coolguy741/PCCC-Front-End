import styled from "styled-components";

import { PreviewAction } from "../../../components/ContentBuilder/Components/Actions/PreviewAction";
import { ContentNavigator } from "../../../components/ContentBuilder/Components/ContentNavigator";
import { FoodwaysContentTemplate } from "../../../components/ContentBuilder/Components/FoodwaysContentTemplate";
import { useFoodwayStore } from "../../../stores/foodwaysStore";
import { ContentBuilderType } from "../../types";

export const FoodwaysPreviewPage = () => {
  const { contents, setActiveSlide, title, description } = useFoodwayStore();

  return (
    <Style.Slide>
      <ContentNavigator type={ContentBuilderType.FOODWAYS} />
      <FoodwaysContentTemplate
        isEditable={false}
        setSlideIndex={setActiveSlide}
        title={title}
        description={description}
        slides={contents.slides}
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
