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
import { YellowFruitBG } from "../../../../components/Icons";
import { PaginationTwo } from "../../../../components/PaginationTwo";
import { Typography } from "../../../../components/Typography";
import mockData from "../../../../lib/mockData/accounts/profileLessonAccessment.json";
import {
  convertToRelativeUnit as conv,
  convertToRelativeUnit,
} from "../../../../styles/helpers/convertToRelativeUnits";

const patterns = ["lemon", "peach", "brokolli", "apple", "grape"];

export const AccountsUserLessonAssessmentPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const handleBack = () => {
    navigate(-1);
  };

  const handlePrint = () => {
    navigate("/accounts/profiles/:user/:lessonAssessment/print");
  };

  return (
    <Style.Container>
      <section className="manage-users-options">
        <BackButton onClick={handleBack} />
        <Button onClick={handlePrint}>Print</Button>
      </section>

      <div className="accounts-bg">
        <YellowFruitBG />
      </div>

      <section className="manage-users-content">
        <hgroup>
          <h2>{mockData.topic}</h2>
          <Typography
            tag="h3"
            color="neutral-800"
            weight={600}
            size={convertToRelativeUnit(33, "vh")}
            mb="1vh"
          >
            {mockData.lesson}
          </Typography>
        </hgroup>

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
        <Style.Pagination>
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
        </Style.Pagination>
      </section>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    section.manage-users-options {
      height: 10vh;
      justify-content: space-between;
    }

    section.manage-users-content {
      height: 68.5vh;
    }

    .accounts-bg {
      position: fixed;
      z-index: 0;
      bottom: -10px;
      right: 0;
    }

    hgroup {
      width: 85%;
      margin: auto;

      h2 {
        font-weight: 500;
        font-size: ${conv(14, "vw")};
        text-transform: uppercase;
        color: var(--orange-600);
        border: 2px solid var(--orange-600);
        width: max-content;
        padding: ${conv(5, "vh")} ${conv(10, "vw")};
        border-radius: 24px;
      }
    }
  `,
  Questions: styled.div`
    width: 100%;
    height: 75%;

    .swiper {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .swiper-slide {
      width: 85%;
    }

    .swiper-button-prev {
      position: absolute;
      left: 0;
    }

    .swiper-button-next {
      position: absolute;
      right: 0;
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: ${conv(50, "vw")};
      height: ${conv(50, "vh")};
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      transition: filter 0.3s ease-out 0s, color 0.3s ease-in 0s,
        background 0.3s linear 0s, transform 0.2s ease-in-out 0s;

      &:after {
        font-size: ${conv(15, "vh")};
      }

      &:hover {
        filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.2));
      }
    }
  `,
  Pagination: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${conv(20, "vh")};

    li {
      font-size: ${conv(10, "vh")};
    }
  `,
};
