import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../../components/Button";
import { BackButton } from "../../../../components/Global/BackButton";
import mockData from "../../../../lib/mockData/accounts/profileLessonAccessment.json";

import "swiper/css";
import "swiper/css/navigation";
import { Question } from "../../../../components/Accounts/Question";

export const AccountsUserLessonAssessmentPage = () => {
  const navigate = useNavigate();

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
          speed={600}
          slidesPerView={"auto"}
          spaceBetween={300}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {mockData.questions.map((question, index) => (
            <SwiperSlide>
              <Question
                content={question}
                pattern={"apple"}
                count={mockData.questions.length}
                order={index + 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Style.Questions>
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
};
