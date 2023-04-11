import { BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  tabIndex: number;
  tabs: string[];
  isPreview: boolean;
}

export const ReportsTabs: React.FC<Props> = ({
  tabIndex = 0,
  tabs,
  isPreview,
}) => {
  const navigate = useNavigate();
  const handleClick = (event: BaseSyntheticEvent) => {
    const {
      target: { id },
    } = event;
    navigate(`/dashboard/reports/${id}${isPreview ? '/preview' : ''}`);
  };

  return (
    <Style.Tabs>
      {tabs.map((tab, index) => (
        <div
          className={`${index === tabIndex ? 'active' : ''}`}
          key={tab}
          id={tab}
          onClick={handleClick}
        >
          {`${index === 0 ? 'Lesson Assessment' : 'Impact reporting'}`}
        </div>
      ))}
    </Style.Tabs>
  );
};

const Style = {
  Tabs: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin-right: 200px;
    padding: 20px 0;
    font-size: 2rem;
    div {
      border-right: 2px solid var(--black);
      color: #9d9d9d;
      border-bottom: 2px solid var(--black);
      cursor: pointer;

      &:last-child {
        border-right: none;
      }

      &.active {
        border-top: 2px solid var(--black);
        border-bottom: none;
        color: var(--black);
      }
    }
  `,
};
