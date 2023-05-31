import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Icon } from "../../Global/Icon";

interface GroupActivityProps {
  activities?: {
    type: string;
    date: string;
    userActivity?: {
      userName: string;
      action: string;
      activityName: string;
    };
    topicActivity?: {
      action: string;
      topicName: string;
    };
  }[];
}

export const GroupActivity = ({ activities }: GroupActivityProps) => {
  return (
    <Style.Container>
      <h3>Activity</h3>
      <ul className="activities-list">
        {activities &&
          activities.map((activity, index) => (
            <li className="activity-item" key={index}>
              <div className="left">
                {activity.type === "user" && (
                  <>
                    <span className="icon-container">
                      <Icon name="badge" />
                    </span>
                    {activity.userActivity && (
                      <>
                        <p className="bold-text">
                          {activity.userActivity.userName}
                        </p>
                        <p className="text">{activity.userActivity.action}</p>
                        <p className="text">
                          {": " + activity.userActivity.activityName}
                        </p>
                      </>
                    )}
                  </>
                )}
                {activity.type === "topic" && (
                  <>
                    <span className="icon-container">
                      <Icon name="message" />
                    </span>
                    {activity.topicActivity && (
                      <>
                        <p className="text">{activity.topicActivity.action}</p>
                        <p className="text">
                          {": " + activity.topicActivity.topicName}
                        </p>
                      </>
                    )}
                  </>
                )}
              </div>
              <p className="text-date">{activity.date}</p>
            </li>
          ))}
      </ul>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    padding: ${convertToRelativeUnit(20, "vw")};
    border-radius: 16px;
    width: calc(100% * (7 / 12));

    .activities-list {
      padding: 0;

      .activity-item {
        padding-bottom: ${convertToRelativeUnit(10, "vh")};
        display: flex;
        align-items: center;
        font-family: "Noir Std";
        font-style: normal;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #797979;
        justify-content: space-between;
        max-width: ${convertToRelativeUnit(700, "vw")};

        .left {
          display: flex;
        }

        .icon-container {
          width: ${convertToRelativeUnit(40, "vw")};
          height: ${convertToRelativeUnit(40, "vh")};
        }

        .bold-text {
          padding-left: ${convertToRelativeUnit(10, "vw")};
          font-weight: 700;
          font-size: ${convertToRelativeUnit(16, "vh")};
        }

        .text {
          padding-left: ${convertToRelativeUnit(10, "vw")};
        }
      }
    }
  `,
};
