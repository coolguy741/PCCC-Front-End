import styled from "styled-components";
import { Group } from "../../../../../components/Icons";
import { trimStringByLength } from "../../../../../lib/util/trimStringByLength";

export function UserGroups({ openGroupsModal, userData }: any) {
  return (
    <Style.Container className="groups">
      <hgroup className="header-view">
        <h3>Groups</h3>
        <button onClick={openGroupsModal}>View all</button>
      </hgroup>
      <ul>
        {userData.groups.map((group: any, index: any) => (
          <li key={index}>
            <Group />
            {trimStringByLength(group.name, 15)}
            &nbsp;
            {"(" + group.number + ")"}
          </li>
        ))}
        {userData.groups.map((group: any, index: any) => (
          <li key={index}>
            <Group />
            {trimStringByLength(group.name, 15)}
            &nbsp;
            {"(" + group.number + ")"}
          </li>
        ))}
      </ul>
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    grid-area: 3 / 1 / 5 / 2;
    height: 100%;
    display: flex;
    flex-direction: column;

    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-grow: 1;

      li {
        display: flex;
        align-items: center;
        width: 32%;
        height: 40%;
        overflow: hidden;
        font-weight: 500;
        color: var(--neutral-600);
        font-size: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      svg {
        height: 100%;
        aspect-ratio: 1 / 1;
        margin-right: 2.5%;
      }
    }
  `,
};
