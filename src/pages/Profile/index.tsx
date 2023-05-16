import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

//should be deleted after api implementation
import Cookies from "js-cookie";
import { AchievementsModal } from "../../components/Accounts/AchievementsModal";
import { GroupsModal } from "../../components/Accounts/GroupsModal";
import { OrangeBG } from "../../components/Icons";
import { UserAchievements } from "../../components/Profile/Achievements";
import { UserActivity } from "../../components/Profile/Activity";
import { UserGroups } from "../../components/Profile/Groups";
import { UserLessonAssesment } from "../../components/Profile/LessonAssesment";
import { UserProfileInfo } from "../../components/Profile/ProfileInfo";
import { useAPI } from "../../hooks/useAPI";
import MockData from "../../lib/mockData/profile/profile.json";
import { useUserStore } from "../../stores/userStore";
import { STORAGE_KEY_JWT } from "../consts";
import { achievements, groups } from "./dummy_data";

export type Achievement = {
  badge: string;
  description: string;
};

export const ProfilePage = () => {
  //should be deleted after api implementation
  const { pathname } = useLocation();
  const userData = pathname.includes("Standard")
    ? MockData[0]
    : pathname.includes("Professional")
    ? MockData[1]
    : MockData[2];
  const { api } = useAPI();
  const [isOpenGroupsModal, setIsOpenGroupsModal] = useState(false);
  const [isOpenAchievementsModal, setIsOpenAchievementsModal] = useState(false);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const getProfile = async () => {
    const response = await api.appUserUserProfileList({
      headers: {
        Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
      },
    });

    if (response.data) {
      setUser(response.data);
    }
  };

  const openGroupsModal = () => {
    setIsOpenGroupsModal(() => true);
  };

  const closeGroupsModal = () => {
    setIsOpenGroupsModal(() => false);
  };

  const openAchievementsModal = () => {
    setIsOpenAchievementsModal(() => true);
  };

  const closeAchievementsModal = () => {
    setIsOpenAchievementsModal(() => false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Style.Container>
      <section className="content-container">
        {true && (
          <>
            <UserProfileInfo userData={userData} settings={true} />
            <UserLessonAssesment userData={userData} />
            <UserGroups userData={userData} openGroupsModal={openGroupsModal} />
            <UserActivity userData={userData} />
            <UserAchievements openAchievementsModal={openAchievementsModal} />
          </>
        )}
      </section>
      <div className="accounts-bg">
        <OrangeBG width="41vh" height="40vh" />
      </div>
      {!!user && (
        <GroupsModal
          isOpen={isOpenGroupsModal}
          close={closeGroupsModal}
          title="Groups"
          groups={user.groups && user.groups.length > 0 ? user.groups : groups}
        >
          Modal
        </GroupsModal>
      )}
      {!!user && (
        <AchievementsModal
          isOpen={isOpenAchievementsModal}
          close={closeAchievementsModal}
          title="Achievements"
          achievements={achievements}
        >
          Modal
        </AchievementsModal>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-weight: 600;
      color: var(--neutral-900);
      font-size: 3vh;
      margin-bottom: 1vh;
    }

    h3 {
      font-weight: 600;
      color: var(--neutral-800);
      font-size: 2.5vh;
    }

    hgroup {
      margin-bottom: 1vh;
    }

    p {
      color: var(--neutral-800);
    }

    .account-content-header {
      height: 6%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    .header-view {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        font-weight: 500;
        color: var(--neutral-600);
        font-size: 1.5vh;
      }
    }

    .accounts-bg {
      position: fixed;
      z-index: 0;
      bottom: -10vh;
      right: -5vh;
    }

    .content-container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, 1fr);
      grid-column-gap: 1.5vh;
      grid-row-gap: 1.5vh;
      height: 100%;
    }

    .user-info,
    .achievements,
    .groups,
    .activity,
    .lesson-assesment {
      padding: 2vh 1.5vw;
      border-radius: 1rem;
      box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
  `,
};
