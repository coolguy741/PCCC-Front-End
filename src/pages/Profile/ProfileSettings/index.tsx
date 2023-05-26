import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackButton } from "../../../components/Global/BackButton";
import { OrangeBG } from "../../../components/Icons";
import { AccountInfoSetting } from "./AccountInfoSetting";
import { PasswordSetting } from "./PasswordSetting";

export const ProfileSettingsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Style.PageContainer>
      <div className="accounts-bg">
        <OrangeBG width="41vh" height="40vh" />
      </div>
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>
      <h2>Profile Settings</h2>
      <Style.Content>
        <AccountInfoSetting />
        <PasswordSetting />
      </Style.Content>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;

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
  Content: styled.div`
    margin-top: 1.25vh;
    display: flex;
    gap: 2vh;
  `,
};
