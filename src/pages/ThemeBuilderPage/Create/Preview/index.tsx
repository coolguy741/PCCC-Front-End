import styled from "styled-components";
import { PreviewAction } from "../../../../components/ContentBuilder/Actions/PreviewAction";

import { ContentNavigator } from "../../../../components/ContentBuilder/ContentBuilderHeader/ContentNavigator";
import { ContentTemplate } from "../../../../components/ContentBuilder/ContentTemplate";

export const ThemeCreatePreviewPage = () => {
  return (
    <Style.Slide>
      <ContentNavigator />
      <ContentTemplate editable={false} />
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

    .theme-swiper-slide {
      flex: 1;
      margin: 0;
    }
  `,
};
