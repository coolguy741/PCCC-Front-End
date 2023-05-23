import styled from "styled-components";
import { trimStringByLength } from "../../../lib/util/trimStringByLength";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

interface AccountCardProps {
  img: { icon: any; bg: string };
  name: string;
  role: string;
  onClick: () => void;
}

export const AccountCard = ({ img, name, role, onClick }: AccountCardProps) => {
  return (
    <Style.Container>
      <figure className="avatar">{img.icon()}</figure>
      <div className="account-info">
        <div>
          <h3>{trimStringByLength(name, 15)}</h3>
          <p>{role} User</p>
        </div>
        <button onClick={onClick} className="avatar-delete">
          <img src="/images/icons/trash.svg" alt={`delete user ${name}`} />
        </button>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.article`
    height: 13.95vh;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    width: 100%;
    border-radius: 16px;
    padding: ${convertToRelativeUnit(24, "vh")};
    display: flex;
    align-items: center;
    position: relative;
    transition: background 0.3s ease-in, box-shadow 0.3s ease-out;

    .avatar {
      margin-right: ${convertToRelativeUnit(15, "vw")};
    }

    .account-info {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    h3 {
      font-weight: 600;
      font-size: ${convertToRelativeUnit(20, "vh")};
      color: var(--neutral-800);
    }

    p {
      color: var(--neutral-700);
      font-size: ${convertToRelativeUnit(15, "vh")};
    }

    .avatar-delete {
      position: absolute;
      bottom: 2.5%;
      right: 2.5%;
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }

    figure {
      height: 100%;
      min-width: 20%;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &:hover {
      background: linear-gradient(182.85deg, #ffeb99, #f3d03e);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);

      .avatar-delete {
        opacity: 1;
      }
    }
  `,
};
