import styled from "styled-components";
import { glassBackground } from "../../../styles/helpers/glassBackground";

export function UserAchievements({
  openAchievementsModal,
}: {
  openAchievementsModal: () => void;
}) {
  return (
    <Style.Container className="achievements">
      <hgroup className="header-view">
        <h3>Achievements</h3>
        <button onClick={openAchievementsModal}>View all</button>
      </hgroup>
      <div className="achievements-icons">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    grid-area: 1 / 2 / 3 / 3;
    display: flex;
    position: relative;
    flex-direction: column;
    ${glassBackground};

    .achievements-icons {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
    }

    figure {
      width: 12%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      border: 2px solid white;
    }
  `,
};
