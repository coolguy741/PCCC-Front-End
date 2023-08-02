import { Link } from "react-router-dom";
import styled from "styled-components";

import { Achievement } from "../../../pages/Profile";
import { glassBackground } from "../../../styles/helpers/glassBackground";

export function UserAchievements({
  achievements,
}: {
  achievements: Achievement[];
}) {
  return (
    <Style.Container className="achievements">
      <hgroup className="header-view">
        <h3>Achievements</h3>
        <Link to="achievements">View all</Link>
      </hgroup>
      <div className="achievements-icons">
        {!!achievements && achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <Style.Achievement key={`achievement-${index}`}>
              <img
                src={`/images/achievements/achievement${achievement.badge}.png`}
                alt={`achievement-${achievement.badge}`}
                width="120px"
              />
            </Style.Achievement>
          ))
        ) : (
          <div>There are no achievements.</div>
        )}
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
      width: min(12%, 9.6vh);
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      border: 2px solid white;
    }
  `,
  Achievement: styled.div``,
};
