import { useMemo } from 'react';
import { useMatch } from 'react-router-dom';
import styled from 'styled-components';

import { TopicActivities } from '../../../../components/TopicBuilder/Overview/Activities';
import { TopicAssessment } from '../../../../components/TopicBuilder/Overview/Assessment';
import { TopicEducatorNotes } from '../../../../components/TopicBuilder/Overview/EducatorNotes';
import { TopicOverview } from '../../../../components/TopicBuilder/Overview/Overview';
import { TopicRecipes } from '../../../../components/TopicBuilder/Overview/Recipes';
import { TopicIntro } from '../../../../components/TopicBuilder/Overview/Topic';

const tabs = [
  'topic',
  'overview',
  'educator-notes',
  'assessment',
  'activities?activity=1',
  'activities?activity=2',
  'recipes',
];

const components = [
  <TopicIntro />,
  <TopicOverview />,
  <TopicEducatorNotes />,
  <TopicAssessment />,
  <TopicActivities />,
  <TopicRecipes />,
];
export const TopicPrintPage = () => {
  const match = useMatch('/dashboard/topics/:id/:slug/print');
  const id = match?.params.id;
  const tab = match?.params.slug ?? 'topic';
  const tabIndex = useMemo(() => tabs.indexOf(tab), [tab]);
  if (!match || !id) {
    throw Error;
  }
  return (
    <Container>{tabIndex >= 0 ? components[tabIndex] : components}</Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 4rem;

  .plan-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-weight: 700;
      font-size: 2rem;
      font-family: 'Noir Std';
      line-height: 3.125rem;
      margin: 0.25rem 0;
    }

    span {
      font-size: 1rem;
      margin-left: 3rem;
    }
  }
`;
