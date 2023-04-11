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
    <Style.StyledAchievement>
      <Style.IconContainer>
        <Icon name="badge" />
      </Style.IconContainer>
      <div>
        <Style.Text>
          <Style.Bold>{title}</Style.Bold>
        </Style.Text>
        <Style.Text>{content}</Style.Text>
      </div>
      {progressValue !== -1 && (
        <Style.ProgressBar value={progressValue} max="1" />
      )}
    </Style.StyledAchievement>
  );
};

const Style = {
  StyledAchievement: styled.div`
    background-color: #d9d9d9;
    padding: 13px 74px 13px 20px;
    display: flex;
    align-items: center;
    gap: 30px;
  `,
  IconContainer: styled.div`
    width: 50px;
    height: 50px;
  `,
  Bold: styled.span`
    font-weight: 700;
    font-size: 1.2rem;
  `,
  Text: styled.p`
    font-size: 1rem;
    margin: 0px;
  `,
  ProgressBar: styled.progress`
    height: 20px;
    min-width: 300px;
    border-radius: 0px;
  `,
};
