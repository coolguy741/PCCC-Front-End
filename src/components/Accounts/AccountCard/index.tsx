import styled from "styled-components";
import { Typography } from "../../Global/Typography";

interface AccountCardProps {
  img: string;
  name: string;
  role: string;
  onClick: () => void;
}

export const AccountCard = ({ img, name, role, onClick }: AccountCardProps) => {
  return (
    <Style.Container>
      <div className="avatar" />
      <div className="account-info">
        <div>
          <Typography variant="h5" weight="semi-bold" mb={2}>
            {name}
          </Typography>
          <Typography variant="paragraph3">{role} User</Typography>
        </div>
        <div className="button-layout">
          <button onClick={onClick}>
            <img src="/images/icons/trash.svg" alt={`delete user ${name}`} />
          </button>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    padding: 16px;
    border-radius: 16px;
    position: relative;
    background: #ffffff50;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
    backdrop-filter: blur(119px);
    display: flex;
    gap: 16px;

    .avatar {
      margin-top: 5px;
      width: 116px;
      height: 116px;
      min-width: 116px;
      border-radius: 100%;
    }

    .icon-container {
      position: absolute;
      left: 10px;
      top: 48px;
    }

    .account-info {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;

      .button-layout {
        visibility: hidden;
        text-align: right;
      }
    }

    &:hover {
      background: linear-gradient(182.85deg, #ffeb99, #f3d03e);

      .button-layout {
        visibility: visible;
      }
    }
  `,
};
