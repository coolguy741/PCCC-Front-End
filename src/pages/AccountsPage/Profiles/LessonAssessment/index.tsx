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

SwiperCore.use([Navigation, Pagination]);

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
      <Style.Topic>{"Topic : " + mockData.topic}</Style.Topic>
      <Style.Lesson>{mockData.lesson}</Style.Lesson>
      <Style.Questions>
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
          speed={600}
          slidesPerView={"auto"}
          spaceBetween={300}
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
  `,
  ButtonContainer: styled.div`
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
    padding: 10px 16px;
    gap: 10px;
    border: 2px solid var(--orange-600);
    border-radius: 50px;
    color: var(--orange-600);
    text-transform: uppercase;
    margin-top: 40px;
    margin-left: 8%;
  `,
  Lesson: styled.h2`
    margin-top: 20px;
    margin-bottom: 24px;
    margin-left: 8%;
    font-weight: 600;
    font-size: 33px;
    line-height: 40px;
    color: var(--neutral-800);
  `,
  Questions: styled.div`
    width: 100%;
    height: calc(100vh - 600px);
    .swiper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      width: 84%;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 77px;
      height: 77px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
    }
  `,
  PaginationContainer: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
  `,
};
