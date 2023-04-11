import styled from 'styled-components';
import mockData from '../../../lib/mockData/activities/activity.json';
import { Text } from '../../Global/Text';

export const ActivityContent = () => {
  return (
    <Style.PageContainer>
      <Style.CenterAlignedContainer>
        <h5>{mockData.topic}</h5>
      </Style.CenterAlignedContainer>
      <Style.CenterAlignedContainer>
        <h2>{mockData.title}</h2>
      </Style.CenterAlignedContainer>
      <Style.ContentContainer>
        <Style.OverviewActivityContainer>
          <Style.OverviewContainer>
            <h3>Overview</h3>
            <Text>{mockData.overview}</Text>
          </Style.OverviewContainer>
          <Style.ActivityContainer>
            <h3>Activity</h3>
            <ul>
              {mockData.tools.map((tool, index) => (
                <li key={index}>
                  <img src={tool.image} alt={tool.alt} />
                  <Text>{tool.description}</Text>
                </li>
              ))}
            </ul>
          </Style.ActivityContainer>
        </Style.OverviewActivityContainer>
        <Style.RequirementsImageContainer>
          <h3>What you'll need</h3>
          <ul>
            {mockData.requirements.map((requirement, index) => (
              <li key={index}>
                <Text>{requirement}</Text>
              </li>
            ))}
          </ul>
          <img src={mockData.image} alt={mockData.alt} />
        </Style.RequirementsImageContainer>
      </Style.ContentContainer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  CenterAlignedContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
  ContentContainer: styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
  `,
  OverviewActivityContainer: styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  OverviewContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ActivityContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 0px;
      padding: 0px;

      li {
        display: flex;
        gap: 45px;

        img {
          height: 30px;
          width: auto;
        }
      }
    }
  `,
  RequirementsImageContainer: styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    ul {
      padding: 0px;
    }

    img {
      margin-top: 100px;
    }
  `,
};
