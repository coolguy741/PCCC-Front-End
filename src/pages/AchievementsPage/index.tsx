import styled from 'styled-components';
import { Achievement } from '../../components/Achievement';
import mockData from '../../lib/mockData/achievements.json';

export const AchievementsPage = () => {
  return (
    <Style.PageContainer>
      <h1>Achievement</h1>
      <Style.SubContainer>
        <h3>Bagdes</h3>
        <Style.AchievementsContainer>
          {mockData.badges.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              content={achievement.content}
            />
          ))}
        </Style.AchievementsContainer>
      </Style.SubContainer>
      <Style.SubContainer>
        <h3>In progress</h3>
        <Style.AchievementsContainer>
          {mockData.inProgress.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              content={achievement.content}
              progressValue={achievement.progressValue}
            />
          ))}
        </Style.AchievementsContainer>
      </Style.SubContainer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  SubContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  AchievementsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `,
};
