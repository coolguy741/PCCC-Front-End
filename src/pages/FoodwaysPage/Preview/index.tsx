import styled from "styled-components";

import { useEffect } from "react";
import { PreviewAction } from "../../../components/ContentBuilder/Components/Actions/PreviewAction";
import { ContentNavigator } from "../../../components/ContentBuilder/Components/ContentNavigator";
import { useFoodwayStore } from "../../../stores/foodwaysStore";
import { ContentBuilderType } from "../../types";

export const FoodwaysPreviewPage = () => {
  const { setActiveSlide, title, description, activeSlide } = useFoodwayStore();

  useEffect(() => {
    setActiveSlide(0);
  }, []);

  return (
    <Style.Slide>
      <ContentNavigator type={ContentBuilderType.FOODWAYS} />
      <div className="content"></div>
      <PreviewAction />
    </Style.Slide>
  );
};

const Style = {
  Slide: styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 2%;
    height: 100%;

    .content {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 80%;
      overflow: hidden;

      .content-swiper-slide {
        width: 100%;
        margin: 0;
        overflow: hidden;
      }
    }
  `,
};
