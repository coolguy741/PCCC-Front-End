/* eslint-disable quotes */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Question } from "../../../../components/Accounts/Question";
import Button from "../../../../components/Button";
import { BackButton } from "../../../../components/Global/BackButton";
import { PaginationTwo } from "../../../../components/PaginationTwo";
import mockData from "../../../../lib/mockData/accounts/profileLessonAccessment.json";
import { convertToRelativeUnit } from "../../../../styles/helpers/convertToRelativeUnits";

const patterns = ["lemon", "peach", "brokolli", "apple", "grape"];

export const AccountsUserLessonAssessmentPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const handleBack = () => {
    navigate(-1);
  };

  const handlePrint = () => {
    navigate("/dashboard/accounts/profiles/:user/:lessonAssessment/print");
  };

  return (
    <Style.PageContainer>
      <Style.ButtonContainer>
        <BackButton onClick={handleBack} />
        <Button onClick={handlePrint} size="large">
          Print
        </Button>
      </Style.ButtonContainer>
      <Style.Topic>{mockData.topic}</Style.Topic>
      <Style.Lesson>{mockData.lesson}</Style.Lesson>
      <Style.Questions>
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
          speed={600}
          slidesPerView={"auto"}
          spaceBetween={500}
          centeredSlides={true}
          pagination={{
            clickable: true,
            type: "custom",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {mockData.questions.map((question, index) => (
            <SwiperSlide>
              <Question
                content={question}
                pattern={patterns[index % patterns.length]}
                count={mockData.questions.length}
                order={index + 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Style.Questions>
      <Style.PaginationContainer>
        <PaginationTwo
          currentPage={currentPage}
          totalCount={mockData.questions.length}
          pageSize={1}
          siblingCount={0}
          onPageChange={async (page) => {
            setCurrentPage(page);
            swiperInstance?.slideTo(page - 1);
          }}
        />
      </Style.PaginationContainer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: "Noir Std";
    font-style: normal;
    overflow: visible;
  `,
  ButtonContainer: styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Topic: styled.p`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${convertToRelativeUnit(10, "vh")}
      ${convertToRelativeUnit(16, "vh")};
    border: ${convertToRelativeUnit(2, "vh")} solid var(--orange-600);
    border-radius: ${convertToRelativeUnit(50, "vh")};
    font-size: ${convertToRelativeUnit(14, "vh")};
    color: var(--orange-600);
    text-transform: uppercase;
    margin-left: 8%;
  `,
  Lesson: styled.h2`
    margin-top: ${convertToRelativeUnit(8, "vh")};
    margin-bottom: ${convertToRelativeUnit(16, "vh")};
    margin-left: 8%;
    font-weight: 600;
    font-size: ${convertToRelativeUnit(32, "vh")};
    line-height: 125%;
    color: var(--neutral-800);
  `,
  Questions: styled.div`
    width: 100%;
    height: ${convertToRelativeUnit(588, "vh")};
    .swiper {
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .swiper-slide {
      width: 84%;
    }
    .swiper-button-prev {
      position: absolute;
      left: 0px;
    }
    .swiper-button-next {
      position: absolute;
      right: 0px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: ${convertToRelativeUnit(77, "vh")};
      height: ${convertToRelativeUnit(77, "vh")};
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      transition: filter 0.3s ease-out 0s, color 0.3s ease-in 0s,
        background 0.3s linear 0s, transform 0.2s ease-in-out 0s;

      &:after {
        font-size: ${convertToRelativeUnit(33, "vh")};
      }
      &:hover {
        filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.2));
      }
    }
  `,
  PaginationContainer: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${convertToRelativeUnit(32, "vh")};
  `,
};
