import styled from "styled-components";
import Button from "../../Button";

interface GroupInvitationCardProps {
  data: {
    groupName: string;
    creator: string;
    creatorRole: string;
    status: string;
  };
}

export const GroupInvitationCard = ({ data }: GroupInvitationCardProps) => {
  return (
    <Style.Container>
      <div className="invitation-container">
        <div>
          <p className="bold-big-text">{data.groupName}</p>
          <p className="text">Creator: {data.creator}</p>
        </div>
        <div className="status-container">
          {data.status === "free" && (
            <>
              <Button size="small" variant="yellow">
                Accept
              </Button>
              <Button size="small">Deny</Button>
            </>
          )}
          {data.status === "Accepted" && (
            <>
              <p className="bold-text">Accepted</p>
            </>
          )}
          {data.status === "Denied" && (
            <>
              <p className="bold-text">Denied</p>
            </>
          )}
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
