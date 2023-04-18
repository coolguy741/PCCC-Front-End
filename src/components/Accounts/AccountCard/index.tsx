import styled from "styled-components";
import { Icon } from "../../Global/Icon";

interface AccountCardProps {
  img: string;
  name: string;
  role: string;
  onClick: () => void;
}

export const AccountCard = ({ img, name, role, onClick }: AccountCardProps) => {
  return (
    <Style.Container>
      <img src={img} alt="avatar" className="avatar" />
      {role === "Professional" && (
        <div className="icon-container">
          <Icon name="professional" />
        </div>
      )}
      <div className="account-info">
        <div className="text">{name}</div>
        <div className="text">{role} User</div>
        <div className="button-layout">
          <button onClick={onClick}>Delete</button>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    margin: 5px;
    padding: 10px;
    width: 180px;
    height: 80px;
    position: relative;
    background-color: #d9d9d9;
    display: flex;

    .avatar {
      margin-top: 5px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    .icon-container {
      position: absolute;
      left: 10px;
      top: 48px;
    }

    .account-info {
      padding-left: 8px;
      padding-top: 6px;
      flex-grow: 1;

      .text {
        font-family: "Noir Std";
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        line-height: 143.18%;
        letter-spacing: 0.02em;
        color: #797979;
        padding-bottom: 5px;
      }

      .button-layout {
        width: 51px;
        height: 21px;
        display: flex;
        float: right;

        button {
          border: none;
          border-radius: 10px;
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 700;
          font-size: 11px;
          line-height: 143.18%;
          text-align: center;
          letter-spacing: 0.02em;
          color: #3d3d3d;
          background-color: #8d8d8d;
        }
      }
    }
  `,
};
