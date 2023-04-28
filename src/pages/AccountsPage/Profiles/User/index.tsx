import { Link } from "react-router-dom";
import styled from "styled-components";
import MockData from "../../../../lib/mockData/accounts/userProfile.json";
//should be deleted after api implementation
import { useLocation } from "react-router-dom";
import { ArrowLeft, Group } from "../../../../components/Icons";
import { Pagination } from "../../../../components/Pagination/pagination";
import { trimStringByLength } from "../../../../lib/util/trimStringByLength";
import { animatedbackgroundGradient } from "../../../../styles/helpers/animatedBackgroundGradient";
import { glassBackground } from "../../../../styles/helpers/glassBackground";

export const AccountsUserProfilePage = () => {
  //should be deleted after api implementation
  const { pathname } = useLocation();
  const userData = pathname.includes("Standard")
    ? MockData[0]
    : pathname.includes("Professional")
    ? MockData[1]
    : MockData[2];

  const handleBack = () => {
    return "handle back";
  };

  const handleEdit = () => {
    return "handle edit";
  };

  return (
    <Style.Container>
      <span className="breadcrumb">
        <ArrowLeft />
        Back
      </span>
      <h2>Standard Profile</h2>
      <section className="content-container">
        <article className="user-info">
          <figure></figure>
          {userData.role === "Standard" ? (
            <div className="user-info-content">
              <h3>{userData.userID}</h3>
              <p>Birth year: {userData.birthYear}</p>
              <p>Province: {userData.province}</p>
              <p>Created: {userData.createdDate}</p>
            </div>
          ) : userData.role === "Professional" ? (
            <div className="user-info-content">
              <h3>{userData.userID}</h3>
              <h4>{userData.name}</h4>
              <p>Birth year: {userData.birthYear}</p>
              <p>ID Code: {userData.idCode}</p>
              <p>School: {userData.school}</p>
              <p>Province: {userData.province}</p>
              <p>{userData.email}</p>
              <p>Created: {userData.createdDate}</p>
            </div>
          ) : (
            <div className="user-info-content">
              <h3>{userData.userID}</h3>
              <h4>{userData.name}</h4>
              <p>Birth year: {userData.birthYear}</p>
              <p>Province: {userData.province}</p>
              <p>{userData.email}</p>
              <p>Created: {userData.createdDate}</p>
            </div>
          )}
        </article>
        <article className="badges">
          <div className="header-view">
            <h3>Badges</h3>
            <button>View all</button>
          </div>
          <div className="bagdes-icons">
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
          </div>
        </article>
        <article className="groups">
          <div className="header-view">
            <h3>Groups</h3>
            <button>View all</button>
          </div>
          <ul>
            {userData.groups.map((group, index) => (
              <li key={index}>
                <Group />
                <span>
                  {trimStringByLength(group.name, 15)}
                  &nbsp;
                </span>
                <span>{"(" + group.number + ")"}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="activity">
          <h3>Activity</h3>
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
        </article>
        <article className="lesson-assesment">
          <h3>Lesson Assessment</h3>
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
              {userData.lessonAssessment.map((lesson, index) => (
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
        </article>
      </section>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    padding-bottom: 50px;

    .breadcrumb {
      font-family: "Noir Std";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: var(--neutral-500);
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-bottom: 40px;

      svg {
        margin-right: 15px;
      }
    }

    h2 {
      font-weight: 600;
      font-size: 33px;
      line-height: 40px;
      color: var(--neutral-900);
      margin-bottom: 16px;
    }

    h3 {
      font-weight: 600;
      font-size: 28px;
      line-height: 32px;
      color: var(--neutral-800);
      margin-bottom: 15px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
      color: var(--neutral-800);
    }

    .content-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, 90px);
      grid-column-gap: 24px;
      grid-row-gap: 24px;
    }

    .user-info,
    .badges,
    .groups,
    .activity,
    .lesson-assesment {
      ${glassBackground};
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    }

    .header-view {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;

      h3 {
        margin-bottom: 0;
      }

      button {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--neutral-600);
      }
    }

    .user-info {
      grid-area: 1 / 1 / 3 / 2;
      ${() => animatedbackgroundGradient("#C4E8FF", "#A6EFCB")};
      display: flex;

      figure {
        height: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        margin-right: 20px;
      }
    }

    .badges {
      grid-area: 1 / 2 / 3 / 3;

      .bagdes-icons {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-top: 25px;
      }

      figure {
        width: 12%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    .groups {
      grid-area: 3 / 1 / 5 / 2;

      ul {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          display: flex;
          align-items: center;
          min-width: 30%;
          margin-bottom: 20px;
        }

        svg {
          margin-right: 10px;
        }
      }
    }

    .activity {
      grid-area: 5 / 1 / 8 / 2;

      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding: 7.5px 0;
          border-bottom: 1px solid var(--neutral-300);

          p {
            display: flex;
            font-size: 16px;
            line-height: 20px;
            color: var(--neutral-600);
          }

          span {
            font-size: 15.568px;
            line-height: 19px;
            text-align: right;
            letter-spacing: 0.02em;
            color: var(--neutral-600);
          }

          &:last-of-type {
            border-bottom: 1px solid transparent;
          }
        }

        svg {
          margin-right: 10px;
        }
      }
    }

    .lesson-assesment {
      grid-area: 3 / 2 / 8 / 3;
      display: flex;
      flex-direction: column;

      table {
        text-align: left;
        width: 100%;

        th {
          font-weight: 500;
          font-size: 19px;
          line-height: 24px;
          color: var(--neutral-600);
          margin-bottom: 15px;
        }

        td {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #646464;
          margin-top: 0px;
          margin-bottom: 25px;
          height: 38px;
          transition: color 0.2s ease-out;
          display: flex;
          align-items: flex-end;
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
            font-size: 11px;
            line-height: 13px;
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
    }
  `,
};
