import styled from 'styled-components';
import { Icon } from '../Global/Icon';

interface AchievementProps {
  title: string;
  content: string;
  progressValue?: number;
}

export const Achievement = ({
  title,
  content,
  progressValue = -1,
}: AchievementProps) => {
  return (
    <StyledAchievement>
      <IconContainer>
        <Icon name="badge" />
      </IconContainer>
      <div>
        <Text>
          <Bold>{title}</Bold>
        </Text>
        <Text>{content}</Text>
      </div>
      {progressValue !== -1 && <ProgressBar value={progressValue} max="1" />}
    </StyledAchievement>
  );
};

const StyledAchievement = styled.div`
  background-color: #d9d9d9;
  padding: 13px 74px 13px 20px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
`;
const Bold = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0px;
`;

const ProgressBar = styled.progress`
  height: 20px;
  min-width: 300px;
  border-radius: 0px;
`;
