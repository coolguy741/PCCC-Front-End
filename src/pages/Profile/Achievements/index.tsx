import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { BackButton } from "../../../components/Global/BackButton";
import Scrollable from "../../../components/Global/Scrollable";
import { Typography } from "../../../components/Global/Typography";
import { OrangeBG } from "../../../components/Icons";
import { AchievementModal } from "../../../components/Profile/AchievementModal";
import { Achievement } from "../../AccountsPage/Profiles/User";
import { achievements } from "../dummy_data";

export const ProfileAchievementsPage = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleOpenAchievementModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
  };

  const handleClose = () => {
    setSelectedAchievement(undefined);
  };

  return (
    <Style.PageContainer>
      <div className="accounts-bg">
        <OrangeBG width="41vh" height="40vh" />
      </div>
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>
      <h2>Achievements</h2>
      <Scrollable>
        <Style.AchievementContainer>
          {!!achievements && achievements.length > 0 ? (
            achievements.map((achievement, index) => (
              <div
                key={`achievement-${index}`}
                onClick={() => handleOpenAchievementModal(achievement)}
              >
                <Style.Achievement>
                  <img
                    src={`/images/achievements/achievement${achievement.badge}.png`}
                    alt={`achievement-${achievement.badge}`}
                    width="240px"
                  />
                  <Typography variant="paragraph2" as="p">
                    {achievement.name}
                  </Typography>
                </Style.Achievement>
              </div>
            ))
          ) : (
            <div>There are no achievements.</div>
          )}
        </Style.AchievementContainer>
      </Scrollable>
      <AchievementModal
        isOpen={!!selectedAchievement}
        close={handleClose}
        achievement={selectedAchievement}
      ></AchievementModal>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    h2 {
      padding-top: 2.5vh;
      font-weight: 600;
      color: var(--neutral-800);
    }

    h3 {
      font-weight: 600;
      color: var(--neutral-800);
    }

    .back-button-container {
      height: 4.33vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .accounts-bg {
      position: fixed;
      z-index: 0;
      bottom: -10vh;
      right: -5vh;
    }
  `,
  AchievementContainer: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    row-gap: 2rem;
    padding: 20px 0;
  `,
  Achievement: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin: 0 10px;

    img {
      position: relative;
      z-index: 2;
    }

    p {
      background: #ffffff80;
      width: 100%;
      margin-top: -100px;
      text-align: center;
      border-radius: 1rem;
      padding: 100px 0 20px 0;
    }
  `,
};
