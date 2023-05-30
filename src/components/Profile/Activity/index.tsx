import styled from "styled-components";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import { MockUserType } from "../../../types/user";
import { Group } from "../../Icons";

export function UserActivity({ userData }: { userData: MockUserType }) {
  return (
    <Style.Container className="activity">
      <hgroup>
        <h3>Activity</h3>
      </hgroup>

      <ul>
        {userData.activities.map((activity, index) => (
          <li key={index}>
            <p>
              <Group /> User {activity.name} {activity.content}
            </p>
            <span>{activity.date}</span>
          </li>
        ))}
      </ul>
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    grid-area: 5 / 1 / 8 / 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    ${glassBackground};

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 100%;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--neutral-300);
        height: 25%;
        width: 100%;

        p {
          display: flex;
          color: var(--neutral-600);
          align-items: center;
          font-size: 1.75vh;
          min-width: 80%;
        }

        span {
          text-align: right;
          letter-spacing: 0.02em;
          color: var(--neutral-600);
          font-size: 1.4vh;
        }

        &:last-of-type {
          border-bottom: 1px solid transparent;
        }
      }

      svg {
        margin-right: 2.5%;
        height: 3vh;
      }
    }
  `,
};
