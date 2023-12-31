import { useCallback, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Cookies from "js-cookie";
import { GroupsModal } from "../../../../components/Accounts/GroupsModal";
import { BackButton } from "../../../../components/Global/BackButton";
import { AltGrapeBG } from "../../../../components/Icons";
import { UserAchievements } from "../../../../components/Profile/Achievements";
import { UserActivity } from "../../../../components/Profile/Activity";
import { UserGroups } from "../../../../components/Profile/Groups";
import { UserLessonAssesment } from "../../../../components/Profile/LessonAssesment";
import { UserProfileInfo } from "../../../../components/Profile/ProfileInfo";
import { useAPI } from "../../../../hooks/useAPI";
import { Api, PccServer23UsersGetUsersDto } from "../../../../lib/api/api";
import { BASE_API_URL } from "../../../../lib/api/helpers/consts";
import MockData from "../../../../lib/mockData/accounts/userProfile.json";
import { useUserStore } from "../../../../stores/userStore";
import { MockUserType } from "../../../../types/user";
import { STORAGE_KEY_JWT } from "../../../consts";
import { achievements, groups } from "../../../Profile/dummy_data";

export type Achievement = {
  badge: string;
  name: string;
  description: string;
};

export const profilePageLoader = async (id: string) => {
  const { api } = new Api({
    baseURL: BASE_API_URL,
  });

  try {
    const response = await api.appUserUserByIdDetail(id, {
      headers: {
        Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: unknown) {
    console.warn(error);
  }

  return null;
};

export const AccountsUserProfilePage = () => {
  const { api } = useAPI();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [isOpenGroupsModal, setIsOpenGroupsModal] = useState(false);
  const data = useLoaderData() as PccServer23UsersGetUsersDto;
  const userData: MockUserType = pathname.includes("Standard")
    ? MockData[0]
    : pathname.includes("Professional")
    ? MockData[1]
    : MockData[2];

  const getProfile = useCallback(async () => {
    const response = await api.appUserUserProfileList({
      headers: {
        Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
      },
    });

    if (response.data) {
      setUser(response.data);
    }
  }, [api, setUser]);

  const openGroupsModal = () => {
    setIsOpenGroupsModal(() => true);
  };

  const closeGroupsModal = () => {
    setIsOpenGroupsModal(() => false);
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <Style.Container>
      <div className="manage-users-options">
        <BackButton onClick={() => navigate(-1)} />
      </div>
      <div className="manage-users-content">
        <h2>Standard Profile</h2>
        <section className="content-container">
          {true && (
            <>
              <UserProfileInfo userData={userData} />
              <UserLessonAssesment userData={userData} />
              <UserGroups
                userData={userData}
                openGroupsModal={openGroupsModal}
              />
              <UserActivity userData={userData} />
              <UserAchievements achievements={achievements} />
            </>
          )}
        </section>
        <div className="accounts-bg">
          <AltGrapeBG />
        </div>
        {!!user && (
          <GroupsModal
            isOpen={isOpenGroupsModal}
            close={closeGroupsModal}
            title="Groups"
            groups={
              user.groups && user.groups.length > 0 ? user.groups : groups
            }
          >
            Modal
          </GroupsModal>
        )}
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    /* classnames to target content for manage users layout */
    /* decreasing the options size & increasing content size */
    div.manage-users-options {
      height: 10vh;
    }

    div.manage-users-content {
      height: 68.5vh;
    }

    h2 {
      font-weight: 600;
      color: var(--neutral-900);
      font-size: 3vh;
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
      bottom: -10px;
      right: 0;
    }

    .manage-users-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }

    .content-container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, 1fr);
      grid-column-gap: 1.5vh;
      grid-row-gap: 1.5vh;
      height: 92%;
    }

    .user-info,
    .achievements,
    .groups,
    .activity,
    .lesson-assesment {
      padding: 1.25vh 1.5vw;
      border-radius: 1rem;
      box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
  `,
};
