import styled from 'styled-components';

import { LinkButton } from '../../Global/Button/Link';

export const ReportImpact = () => {
  return (
    <Container>
      <div>
        <div>
          <div>
            <label>Time Period</label>
          </div>
          <select>
            <option>01/23/2023-01/30/2023</option>
          </select>
        </div>
        <div>
          <div>
            <label>Curriculum</label>
          </div>
          <select>
            <option>Curriculum a</option>
          </select>
        </div>
        <div>
          <div>
            <label>Province</label>
          </div>
          <select>
            <option>Toronto</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <label>Impact question</label>
        </div>
        <select>
          <option>Do participating children cook more often?</option>
          <option>All questions</option>
          <option>Did you like this activity/game/video?</option>
          <option>Do you like to grow food?</option>
          <option>Have you tried a new food lately?</option>
        </select>
        <div>
          <LinkButton to="/dashboard/reports/impact-qa/preview">
            Export
          </LinkButton>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  & div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    & div {
      width: 100%;
      display: flex;

      div {
        width: 50%;
      }
    }
    &:last-child {
      grid-template-columns: 1fr 3fr 2fr;
    }
  }
`;
