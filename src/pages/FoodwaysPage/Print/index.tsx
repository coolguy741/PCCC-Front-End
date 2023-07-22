import { useParams } from "react-router-dom";
import styled from "styled-components";

import { FoodwayStop } from "../../../components/Foodways/FoodwayStop";
import { FoodwayTimeline } from "../../../components/Foodways/FoodwayTimeline";
import { FoodwayTitle } from "../../../components/Foodways/FoodwayTitle";
import { Spinner } from "../../../components/Global/Spinner";
import { useFetch } from "../../../hooks/useFetch";
import { PccServer23FoodwaysFoodwayDto } from "../../../lib/api/api";

export const FoodwaysPrintPage = () => {
  const { foodway, slide } = useParams();
  const { isLoading, data } = useFetch<PccServer23FoodwaysFoodwayDto>(
    "appFoodwaysDetail",
    foodway,
    undefined,
    true,
  );

  if (!data) {
    return null;
  }

  return (
    <Style.Container>
      {isLoading ? (
        <Spinner />
      ) : parseInt(slide ?? "0") === 0 ? (
        <FoodwayTitle foodway={data ?? {}} />
      ) : (
        <>
          <div className="content">
            <FoodwayStop
              stop={data?.foodwayStops?.[parseInt(slide ?? "1") - 1]}
            />
          </div>
          <div className="timeline">
            <FoodwayTimeline
              totalSlides={(data?.foodwayStops?.length ?? 0) + 1}
              activeSlide={parseInt(slide ?? "1")}
              foodway={data}
            />
          </div>
        </>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    overflow: hidden;
    height: calc(100vh - 300px);
    padding: 10px 86px 30px 86px;
    margin-top: 3%;

    .content {
      display: flex;
      height: 100%;
      width: 90%;
      width: 90%;
    }

    .timeline {
      width: 10%;
      height: 100%;
    }
  `,
};
