import styled from "styled-components";

export const ReportImpactPreview = () => {
  return (
    <Style.Container>
      <h4>Impact Reporting</h4>
      <table>
        <thead>
          <tr>
            <th colSpan={4}>Do participating children cook more ofter?</th>
          </tr>
          <tr>
            <th colSpan={4}>Period: 01/23/2023-01/30/2023</th>
          </tr>
          <tr>
            <th colSpan={4}>
              <div className="flex justify-between">
                <div>Curriculum: Age 8-11</div>
                <div>Province: Toronto</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Age</td>
            <td width={200}></td>
            <td>Completed lesson assessment</td>
            <td width={200}></td>
          </tr>
          <tr>
            <td>Location</td>
            <td></td>
            <td>Completed games</td>
            <td></td>
          </tr>
          <tr>
            <td>Enrollment Date</td>
            <td></td>
            <td>Impact question bench mark</td>
            <td></td>
          </tr>
          <tr>
            <td>Date of last visit</td>
            <td></td>
            <td>Impact question most recent response</td>
            <td></td>
          </tr>
          <tr>
            <td>Total minutes spent</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Average minutes per visit</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Completed Lesson Assessment</td>
            <td></td>
            <td></td>
            <td></td>
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
      text-align: left;
      padding: 10px;
      border-collapse: collapse;
      border: 1px solid var(--black);
    }
  `,
};
