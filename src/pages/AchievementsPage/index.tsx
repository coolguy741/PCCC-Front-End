import styled from 'styled-components';
import { Achievement } from '../../components/Achievement';
import mockData from '../../lib/mockData/achievements.json';

export const AchievementsPage = () => {
  return (
    <PageContainer>
      <h1>Achievement</h1>
      <SubContainer>
        <h3>Bagdes</h3>
        <AchievementsContainer>
          {mockData.badges.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              content={achievement.content}
            />
          ))}
        </AchievementsContainer>
      </SubContainer>
      <SubContainer>
        <h3>In progress</h3>
        <AchievementsContainer>
          {mockData.inProgress.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              content={achievement.content}
              progressValue={achievement.progressValue}
            />
          ))}
        </AchievementsContainer>
      </SubContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const AchievementsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
