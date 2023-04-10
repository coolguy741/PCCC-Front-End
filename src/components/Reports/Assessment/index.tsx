import styled from "styled-components";

import { LinkButton } from "../../Global/Button/Link";

export const ReportAssessment = () => {
  return (
    <Container>
      <div className="assessment-form">
        <div>
          <div>
            <label>Topic</label>
          </div>
          <select>
            <option>Topic A</option>
          </select>
        </div>
        <div>
          <div>
            <label>Time period</label>
          </div>
          <select>
            <option>01/23/2023-01/30/2023</option>
          </select>
        </div>
        <div>
          <div>
            <label>Curriculum ID</label>
          </div>
          <select>
            <option>Toronto</option>
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
      <div>
        <h4>Topic A. Assessment</h4>
        <div>
          <p>
            Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor?
          </p>
          <p>
            A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur
          </p>
        </div>
        <div>
          <p>
            Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor?
          </p>
          <p>
            A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <LinkButton to="/dashboard/reports/assessment/preview">
          Export
        </LinkButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .assessment-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    & div {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
