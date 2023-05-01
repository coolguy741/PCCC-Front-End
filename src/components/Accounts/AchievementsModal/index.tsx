import styled from "styled-components";

import { Achievement } from "../../../pages/AccountsPage/Profiles/User";
import { Modal, ModalProps } from "../../Global/Modal";
import { Typography } from "../../Global/Typography";

interface AchievementsModalProps extends ModalProps {
  achievements: Achievement[];
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  achievements,
  children,
  ...props
}) => {
  return (
    <Modal {...props} size="lg">
      <Style.AchievementContainer>
        {!!achievements && achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <Style.Achievement key={`achievement-${index}`}>
              <img
                src={`/images/achievements/${achievement.badge}.svg`}
                alt={`achievement-${achievement.badge}`}
              />
              <Typography variant="paragraph2" ml={3}>
                {achievement.description}
              </Typography>
            </Style.Achievement>
          ))
        ) : (
          <div>There are no achievements.</div>
        )}
      </Style.AchievementContainer>
    </Modal>
  );
};

const Style = {
  AchievementContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 2rem;
  `,
  Achievement: styled.div`
    width: 32%;
    display: flex;
    align-items: center;
    padding-right: 56px;
  `,
};
