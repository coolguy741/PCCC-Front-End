import styled from "styled-components";

export const ReportAssessmentPreview = () => {
  return (
    <Style.Container>
      <h4>Lesson Assessment</h4>
      <table>
        <thead>
          <tr>
            <th>Topic: Garden Guardian</th>
            <th>Period: 01/23/2023-01/30/2023</th>
          </tr>
          <tr>
            <th>Curriculum: Age 8-11</th>
            <th>Province: Toronto</th>
          </tr>
          <tr>
            <th>Questions</th>
            <th>Answers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </td>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </td>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    table {
      width: 100%;
    }
    table,
    th,
    td {
      padding: 10px;
      text-align: left;
      border-collapse: collapse;
      border: 1px solid var(--black);
    }
  `,
};
