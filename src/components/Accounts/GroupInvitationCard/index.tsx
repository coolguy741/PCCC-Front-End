import styled from "styled-components";
import { PccServer23GroupsCustomGroupUserJoinRequestDto } from "../../../lib/api/api";
import Button from "../../Button";

export const GroupInvitationCard = (
  group: PccServer23GroupsCustomGroupUserJoinRequestDto,
) => {
  console.log(group);

  return (
    <Style.Container>
      <div className="invitation-container">
        <div>
          <p className="bold-big-text">{group.groupName}</p>
          <p className="text">Creator: {group.userName}</p>
        </div>
        <div className="status-container">
          <Button size="small" variant="yellow">
            Accept
          </Button>
          <Button size="small">Deny</Button>
          {/* {group.status === "Accepted" && (
            <>
              <p className="bold-text">Accepted</p>
            </>
          )}
          {group.status === "Denied" && (
            <>
              <p className="bold-text">Denied</p>
            </>
          )} */}
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    .invitation-container {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: var(--neutral-600);

      .bold-big-text {
        padding: 0px;
        margin: 0px;
        font-size: 1.1rem;
        font-weight: 700;
      }

      .text {
        padding: 0px;
        margin: 0px;
        font-size: 1 rem;
        font-weight: 400;
      }

      .status-container {
        display: flex;
        color: var(--neutral-800);
        justify-content: space-between;

        .bold-text {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
        }

        p {
          padding: 0px;
          margin: 0px;
        }
      }
    }
  `,
};
