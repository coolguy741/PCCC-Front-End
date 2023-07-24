import styled from "styled-components";

import { PreviewAction } from "../../../components/ContentBuilder/Components/Actions/PreviewAction";
import { ContentNavigator } from "../../../components/ContentBuilder/Components/ContentNavigator";
import { MealtimeMomentTitle } from "../../../components/ContentCreation/MealtimeMomentTitle";
import { useMealtimeMomentsStore } from "../../../stores/mealtimeMomentsStore";
import { useUIStore } from "../../../stores/uiStore";
import { ContentBuilderType } from "../../types";

export const MealtimeMomentsPreviewPage = () => {
  const { setDetail, ...state } = useMealtimeMomentsStore();
  const { lang } = useUIStore();

  return (
    <Style.Slide>
      <ContentNavigator type={ContentBuilderType.MEALTIME_MOMENTS} />
      <MealtimeMomentTitle
        state={state[lang].componentState}
        isEditable={false}
      />
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
