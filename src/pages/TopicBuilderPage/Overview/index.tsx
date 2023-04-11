import { useCallback, useMemo, useRef, useState } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import styled from 'styled-components';

import { LinkButton } from '../../../components/Global/Button/Link';
import { CalendarModal } from '../../../components/TopicBuilder/CalendarModal';
import { TopicActivities } from '../../../components/TopicBuilder/Overview/Activities';
import { TopicAssessment } from '../../../components/TopicBuilder/Overview/Assessment';
import { TopicEducatorNotes } from '../../../components/TopicBuilder/Overview/EducatorNotes';
import { TopicOverview } from '../../../components/TopicBuilder/Overview/Overview';
import { TopicRecipes } from '../../../components/TopicBuilder/Overview/Recipes';
import { TopicIntro } from '../../../components/TopicBuilder/Overview/Topic';
import { PrintOptionsModal } from '../../../components/TopicBuilder/PrintOptionsModal';
import { TopicSlider } from '../../../components/TopicBuilder/Slider';

interface Props {
  isCreatePreview?: boolean;
}

export const TopicOverviewPage: React.FC<Props> = ({
  isCreatePreview = false,
}) => {
  const [isOpenPrintModal, setIsOpenPrintModal] = useState(false);
  const [isOpenCalendarModal, setIsOpenCalendarModal] = useState(false);
  const tabs = useRef([
    'topic',
    'overview',
    'educator-notes',
    'assessment',
    'activities?activity=1',
    'activities?activity=2',
    'recipes',
  ]);
  const basePath = useRef('/dashboard/topics');
  const components = useRef([
    <TopicIntro />,
    <TopicOverview />,
    <TopicEducatorNotes />,
    <TopicAssessment />,
    <TopicActivities activity={1} />,
    <TopicActivities activity={2} />,
    <TopicRecipes />,
  ]);
  const match = useMatch('/dashboard/topics/:id/:slug');
  const topicCreatePreview = useMatch('/dashboard/topics/preview/create/:slug');
  const { search } = useLocation();
  const id = match?.params.id;
  if (
    (!match && !topicCreatePreview) ||
    (match && !id) ||
    (topicCreatePreview && id)
  ) {
    throw Error;
  }
  const getPrevPath = useCallback(
    (index: number) =>
      index >= 0
        ? isCreatePreview
          ? `/dashboard/topics/preview/create/${tabs.current[index]}`
          : `../${id}/${tabs.current[index]}`
        : basePath.current,
    [id],
  );
  const tab = (topicCreatePreview ?? match)?.params.slug ?? 'topic';
  const tabIndex = useMemo(
    () => tabs.current.indexOf(`${tab}${search}`),
    [`${tab}${search}`],
  );
  const handlePrint = () => {
    setIsOpenPrintModal(true);
  };
  const handlePrintModalClose = () => {
    setIsOpenPrintModal(false);
  };
  const handleAddCalendar = () => {
    setIsOpenCalendarModal(true);
  };
  const handleAddCalendarClose = () => {
    setIsOpenCalendarModal(false);
  };

  return (
    <>
      <div className="flex justify-between">
        <LinkButton to={getPrevPath(tabIndex - 1)}>
          &lt; {tabIndex ? 'Back' : 'Return to Topic List'}
        </LinkButton>
        {!isCreatePreview && (
          <div className="flex space-x-6">
            <LinkButton to={`/dashboard/topics/${id}/${tab}/edit`}>
              Edit
            </LinkButton>
            <StyledButton onClick={handleAddCalendar}>
              Add to Calendar
            </StyledButton>
            <StyledButton onClick={handlePrint}>Print</StyledButton>
          </div>
        )}
      </div>
      <TopicSlider tabs={tabs.current} tabIndex={tabIndex} withLabel={false} />
      {components.current[tabIndex]}
      <div className="flex justify-end">
        {tabs.current.length > tabIndex + 1 && (
          <LinkButton
            to={
              isCreatePreview
                ? `/dashboard/topics/preview/create/${
                    tabs.current[tabIndex + 1]
                  }`
                : `../${id}/${tabs.current[tabIndex + 1]}`
            }
          >
            Next
          </LinkButton>
        )}
      </div>
      {!isCreatePreview && (
        <TopicInfo>
          <div className="topic-info-content">
            <div>
              It seems like you like this content. Learn more about gardening in
              ‘The places you will grow!’
            </div>
            <div>
              OR check out this fun activity ‘Plant a seed, feed yourself’ to do
              with your friends and family
            </div>
          </div>
          <img src="/images/bee.svg" alt="bee" />
        </TopicInfo>
      )}
      <PrintOptionsModal
        isOpen={isOpenPrintModal}
        close={handlePrintModalClose}
        id={id}
      />
      <CalendarModal
        isOpen={isOpenCalendarModal}
        close={handleAddCalendarClose}
      />
    </>
  );
};

const TopicInfo = styled.div`
  display: flex;
  align-items: center;

  & > .topic-info-content {
    padding: 10px 20px;
    border-radius: 10px;
    background: #d9d9d9;
    position: relative;

    &:after {
      position: absolute;
      width: 20px;
      height: 20px;
      right: 0;
      transform: rotate(45deg) translate(calc(50% - 5px), calc(-50%));
      top: 50%;
      clip-path: polygon(0% 30%, 100% 0%, 70% 100%, 0 30%);
      background: #d9d9d9;
      content: '';
    }
  }

  & > img {
    margin-left: -70px;
    margin-top: -70px;
  }
`;

const StyledButton = styled.button`
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
