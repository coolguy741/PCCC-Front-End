import { Link } from "react-router-dom";
import styled from "styled-components";
import { Pagination } from "../../../../../components/Pagination/pagination";
import { trimStringByLength } from "../../../../../lib/util/trimStringByLength";

export function UserLessonAssesment({ userData }: any) {
  return (
    <Style.Container className="lesson-assesment">
      <hgroup>
        <h3>Lesson Assessment</h3>
      </hgroup>
      <table>
        <thead>
          <tr>
            <th>Lessons</th>
            <th>Groups</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userData.lessonAssessment.map((lesson: any, index: any) => (
            <tr key={index}>
              <td className="lesson-name">
                <span>GARDEN GUARDIAN</span>
                <Link to="/dashboard/accounts/profiles/Standard/lessonAccessment">
                  {trimStringByLength(lesson.lessons, 29)}
                </Link>
              </td>
              <td>{lesson.group}</td>
              <td>{lesson.date}</td>
              <td className="lesson-status">{lesson.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    grid-area: 3 / 2 / 8 / 3;
    display: flex;
    flex-direction: column;

    table {
      text-align: left;
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      thead {
        height: 15%;

        tr {
          height: 100%;
        }
      }

      tbody {
        flex-grow: 1;

        tr {
          height: 17.5%;
          margin-bottom: 2.5%;
        }
      }

      th {
        font-weight: 500;
        color: var(--neutral-600);
        font-size: 1.75vh;
      }

      td {
        font-weight: 400;
        color: #646464;
        transition: color 0.2s ease-out;
        display: flex;
        align-items: flex-end;
        color: var(--neutral-600);
        font-size: 1.75vh;
      }

      // TODO: Fix for complete and incomplete status hovers.
      tbody {
        tr:hover {
          td {
            color: var(--green-500);
          }
        }
      }

      .lesson-name {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        span {
          text-transform: uppercase;
          font-weight: 500;
          font-size: 1.25vh;
        }
      }

      .lesson-status {
        color: var(--red-500);
      }

      tr {
        display: flex;

        th:first-of-type,
        td:first-of-type {
          width: 40%;
        }

        th:nth-of-type(3),
        td:nth-of-type(3) {
          width: 30%;
        }

        th:nth-of-type(2),
        td:nth-of-type(2),
        th:last-of-type,
        td:last-of-type {
          width: 15%;
        }
      }
    }
  `,
};
