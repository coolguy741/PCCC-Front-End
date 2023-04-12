import styled from "styled-components";

interface Props {
  activity?: number;
}

export const TopicActivities: React.FC<Props> = ({ activity }) => {
  return (
    <Style.Container activity={activity}>
      <div>
        <Style.Alert>
          ! This content is not currently available in French
        </Style.Alert>
        {activity === 1 ? (
          <h4>Activity 1: Tools of the trade</h4>
        ) : (
          <h4>Activity 2: Food is all around us!</h4>
        )}
        <p>
          Throughout the Power Full Kids program, you will use your growing tool
          kit to grow food. Looking at the items in your growing tool kit, use
          the information below to understand the purpose of each tool.
        </p>
        {activity === 1 ? (
          <h4>Activity</h4>
        ) : (
          <h4>Don’t put that in your mouth!</h4>
        )}
        <div className="activities-list">
          <div className="flex">
            <div className="image" />
            {activity === 1 ? (
              <div>
                You’re right, we didn’t provide plastic containers in your
                growing tool kit. Let’s reuse containers from home.
              </div>
            ) : (
              <div>Bark</div>
            )}
          </div>
          <div className="flex">
            <div className="image" />
            {activity === 1 ? (
              <div>
                You’re right, we didn’t provide plastic containers in your
                growing tool kit. Let’s reuse containers from home.
              </div>
            ) : (
              <div>Bark</div>
            )}
          </div>
          <div className="flex">
            <div className="image" />
            {activity === 1 ? (
              <div>
                You’re right, we didn’t provide plastic containers in your
                growing tool kit. Let’s reuse containers from home.
              </div>
            ) : (
              <div>Bark</div>
            )}
          </div>
          <div className="flex">
            <div className="image" />
            {activity === 1 ? (
              <div>
                You’re right, we didn’t provide plastic containers in your
                growing tool kit. Let’s reuse containers from home.
              </div>
            ) : (
              <div>Bark</div>
            )}
          </div>
          <div className="flex">
            <div className="image" />
            {activity === 1 ? (
              <div>
                You’re right, we didn’t provide plastic containers in your
                growing tool kit. Let’s reuse containers from home.
              </div>
            ) : (
              <div>Bark</div>
            )}
          </div>
        </div>
      </div>
      <div className="image-container">
        <p>What you'll need.</p>
        <ul>
          <li>A selection of different sized recycled plastic containers</li>
          <li>
            A set of gardening tools, including a trowel, small watering can,
            and gloves
          </li>
          <li>A variety of seeds Top soil</li>
        </ul>

        <div></div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div.attrs((props: { activity: number }) => ({
    activity: props.activity || 1,
  }))`
    display: flex;
    gap: 10px;

    & > .image-container {
      & > div {
        height: 200px;
        width: 300px;
        background: var(--black);
      }
    }

    & .activities-list {
      ${({ activity }) =>
        activity === 1
          ? `display: flex;
            flex-direction: column;
          `
          : `display: grid;
            grid-template-columns: 1fr 1fr;
          `}

      gap: 10px;
      & .image {
        width: 50px;
        height: 40px;
        background: var(--black);
      }
    }
  `,
  Alert: styled.div`
    padding: 20px;
    background: #d9d9d9;
  `,
};
