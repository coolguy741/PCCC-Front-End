import styled from 'styled-components';
import { SmallButton } from '../../Global/SmallButton';

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
    <Container>
      <div className="invitation-container">
        <p className="bold-big-text">{data.groupName}</p>
        <p className="text">Creator: {data.creator}</p>
        <p className="text">{'(' + data.creatorRole + ')'}</p>
        <div className="status-container">
          {data.status === 'free' && (
            <>
              <SmallButton>Accept</SmallButton>
              <SmallButton>Deny</SmallButton>
            </>
          )}
          {data.status === 'Accepted' && (
            <>
              <p className="bold-text">Accepted</p>
            </>
          )}
          {data.status === 'Denied' && (
            <>
              <p className="bold-text">Denied</p>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .invitation-container {
    margin: 20px 0px;
    color: #797979;

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
      color: black;
      justify-content: space-between;

      p {
        padding: 0px;
        margin: 0px;
      }
    }
  }
`;
