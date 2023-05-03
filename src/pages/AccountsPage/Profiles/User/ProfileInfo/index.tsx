import styled from "styled-components";
import { OrangeBG } from "../../../../../components/Icons";
import { animatedbackgroundGradient } from "../../../../../styles/helpers/animatedBackgroundGradient";

export function UserProfileInfo({ userData }: any) {
  return (
    <Style.Container className="user-info">
      <div className="user-bg">
        <OrangeBG width="261" height="251" />
      </div>
      <figure></figure>
      {userData.role === "Standard" ? (
        <div className="user-content">
          <hgroup>
            <h3>{userData.userID}</h3>
          </hgroup>

          <div className="user-info-content">
            <p>Birth year: {userData.birthYear}</p>
            <p>Province: {userData.province}</p>
            <p>Created: {userData.createdDate}</p>
          </div>
        </div>
      ) : userData.role === "Professional" ? (
        <div className="user-content">
          <hgroup>
            <h3>{userData.userID}</h3>
            <h4>{userData.name}</h4>
          </hgroup>
          <h3>{userData.userID}</h3>
          <h4>{userData.name}</h4>
          <div className="user-info-content">
            <p>Birth year: {userData.birthYear}</p>
            <p>ID Code: {userData.idCode}</p>
            <p>School: {userData.school}</p>
            <p>Province: {userData.province}</p>
            <p>Email: {userData.email}</p>
            <p>Created: {userData.createdDate}</p>
          </div>
        </div>
      ) : (
        <div className="user-content">
          <hgroup>
            <h3>{userData.userID}</h3>
            <h4>{userData.name}</h4>
          </hgroup>
          <div className="user-info-content">
            <p>Birth year: {userData.birthYear}</p>
            <p>Province: {userData.province}</p>
            <p>Email: {userData.email}</p>
            <p>Created: {userData.createdDate}</p>
          </div>
        </div>
      )}
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    grid-area: 1 / 1 / 3 / 2;
    ${() => animatedbackgroundGradient("#C4E8FF", "#A6EFCB")};
    display: flex;
    position: relative;

    p {
      font-size: 1.75vh;
      margin-right: 1vw;
    }

    .user-bg {
      position: absolute;
      right: 0;
      top: 50%;
      z-index: 0;
    }

    .user-content {
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .user-info-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    figure {
      height: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      border: 2px solid white;
      margin-right: 5%;
    }
  `,
};
