import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LinkButton } from '../../Global/Button/Link';
import { SmallButton } from '../../Global/SmallButton';
import { TopicSlider } from '../Slider';
import { ActivitiesForm } from './Activities';
import { AssessmentForm } from './Assessment';
import { EducatorNotesForm } from './EducatorNotes';
import { OverviewForm } from './Overview';
import { RecipesForm } from './Recipes';
import { TopicForm } from './Topic';

interface Props {
  tab: string;
  isEdit?: boolean;
  topicId: number | undefined;
}

const tabs = [
  'topic',
  'overview',
  'educator-notes',
  'assessment',
  'activities',
  'recipes',
];

const components = [
  <TopicForm />,
  <OverviewForm />,
  <EducatorNotesForm />,
  <AssessmentForm />,
  <ActivitiesForm />,
  <RecipesForm />,
];

const basePath = '/dashboard/topics';

export const TopicCreateForm: React.FC<Props> = ({
  tab,
  topicId,
  isEdit = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const tabIndex = useMemo(() => tabs.indexOf(tab), [tab]);
  const getPrevPath = useCallback(
    (index: number) =>
      index >= 0
        ? isEdit
          ? `/dashboard/topics/${topicId}/${tabs[index]}/edit`
          : `/dashboard/topics/create/${tabs[index]}`
        : basePath,
    [],
  );
  const handleNext = () => {
    if (tabIndex < tabs.length - 1) {
      navigate(
        isEdit
          ? `/dashboard/topics/${topicId}/${tabs[tabIndex + 1]}/edit`
          : `/dashboard/topics/create/${tabs[tabIndex + 1]}`,
      );
    } else {
      setIsOpen(true);
    }
  };

  if (tabIndex < 0) {
    throw Error;
  }

  return (
    <div>
      <div className="flex justify-between">
        <LinkButton to={getPrevPath(tabIndex - 1)}>
          &lt; {tabIndex ? 'Back' : 'Return to Topic List'}
        </LinkButton>
        <div className="flex space-x-6">
          <LinkButton to="#">Enlish</LinkButton>
          <LinkButton to="#">French</LinkButton>
        </div>
        <StyledLink
          href={`/dashboard/topics/preview/create/${tabs[tabIndex]}`}
          target="_blank"
        >
          Preview
        </StyledLink>
      </div>

      <div className="mt-4">{topicId ? 'Edit' : 'Create'} Topic</div>

      <TopicSlider tabs={tabs} tabIndex={tabIndex} />

      {components[tabIndex]}

      <div className="flex justify-end space-x-6 mt-4">
        <LinkButton to="#">Save changes, and Exit</LinkButton>
        <SmallButton onClick={handleNext}>
          Save changes, and Continue
        </SmallButton>
      </div>
    </div>
  );
};

const StyledLink = styled.a`
  background-color: var(--yellow);
  border: none;
  border-radius: 2rem;
  color: #3d3d3d;
  cursor: pointer;
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.75rem 1.125rem;
  vertical-align: top;
`;
