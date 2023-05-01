import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GroupCard } from "../../../components/Accounts/GroupCard";
import { GroupInvitationCard } from "../../../components/Accounts/GroupInvitationCard";
import { JoinGroupModal } from "../../../components/Accounts/JoinGroupModal";
import Button from "../../../components/Button";
import { Input } from "../../../components/Global/Input";
import { ModalContainer } from "../../../components/Global/ModalContainer";
import { useAPI } from "../../../hooks/useAPI";
import mockData from "../../../lib/mockData/accounts/groups.json";
import { STORAGE_KEY_JWT } from "../../consts";

export const AccountsGroupsPage = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [groups, setGroups] = useState<any[]>([]);
  const navigate = useNavigate();
  const { api } = useAPI();
  const [cookies] = useCookies([STORAGE_KEY_JWT]);

  const handleCreate = () => {
    navigate("/dashboard/accounts/groups/create");
  };

  const handleJoinGroup = () => {
    setVisibleModal(false);
  };

  const handleClose = () => {
    setVisibleModal(false);
  };

  const getGroups = async () => {
    const response = await api.appCustomGroupsMyCreatedGroupsList(
      {},
      {
        headers: {
          Authorization: `Bearer ${cookies.PCCC_TOKEN}`,
        },
      },
    );

    if (response.data.items) {
      setGroups(response.data.items);
    }
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <Style.PageContainer>
      <div className="header-container">
        <div className="group-container">
          <div className="label">
            <p>Group</p>
            <Input type="text" height="3rem" />
          </div>
          <div className="label">
            <p>Group ID</p>
            <Input type="text" height="3rem" />
          </div>
          <div className="label">
            <p>School</p>
            <Input type="text" height="3rem" />
          </div>
        </div>
        <div className="button-container">
          <Button variant="yellow" onClick={handleCreate}>
            Create Group
          </Button>
          <Button onClick={() => setVisibleModal(true)}>Join Group</Button>
        </div>
      </div>
      <div className="row">
        <div className="groups-container">
          {groups.map((group, index) => (
            <div className="group-card-container" key={index}>
              <GroupCard data={group} />
            </div>
          ))}
        </div>
        <div className="group-invitations-container">
          <p className="title-text">
            {`Group Invitations (${mockData.groupInvitations.length})`}
          </p>
          <div className="group-invitations">
            {mockData.groupInvitations.map((group, index) => (
              <GroupInvitationCard data={group} key={index} />
            ))}
          </div>
        </div>
      </div>
      {visibleModal && (
        <ModalContainer>
          <JoinGroupModal
            role="Standard"
            groupID={2334}
            groupName="Group A"
            creator="Vane Jones"
            onJoin={handleJoinGroup}
            onClose={handleClose}
          />
        </ModalContainer>
      )}
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .header-container {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .group-container {
        display: flex;

        .label {
          margin-right: 10px;
        }
      }

      .button-container {
        display: flex;
        align-items: center;

        Button {
          margin-right: 10px;
        }
      }
    }

    .row {
      display: flex;

      .groups-container {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 0px;
        padding: 0px;

        .group-card-container {
          width: 45%;

          a {
            &:hover,
            &:visited {
              text-decoration: none;
            }
          }
        }
      }

      .group-invitations-container {
        display: flex;
        flex-direction: column;
        width: 20%;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        padding: 1.4rem;
        border-radius: 16px;

        .title-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--neutral-800);
        }

        .group-invitations {
          .bold-big-text {
            font-size: 1.1 rem;
            font-weight: 700;
          }
        }
      }
    }
  `,
};
