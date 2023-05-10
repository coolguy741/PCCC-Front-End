import styled from "styled-components";

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
          <h5>{name}</h5>
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
    height: 13vh;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    width: 100%;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    align-items: center;
    position: relative;
    transition: background 0.3s ease-in, box-shadow 0.3s ease-out;

    .avatar {
      margin-right: 15px;
    }

    .account-info {
      display: flex;
      flex-direction: column;
    }

    .avatar-delete {
      position: absolute;
      bottom: 2.5%;
      right: 2.5%;
      opacity: 0;
      transition: opacity 0.3s ease-out;
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
