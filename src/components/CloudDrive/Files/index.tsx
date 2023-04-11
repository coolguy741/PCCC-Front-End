import styled from 'styled-components';

import { Button } from '../../Global/Button';
import { RecentFiles } from './Recents';

const files = [
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 100 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 100 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 0 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 0 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 100 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 100 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 100 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 100 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 100 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 100 },
  { filename: 'Activity Sheets', uploadDate: 'January 6, 2023', size: 100 },
];

export const Files = () => {
  return (
    <Container>
      <RecentFiles />
      <div className="flex items-center justify-between">
        <h4>Files</h4>
        <Button>Upload</Button>
      </div>
      <table className="files-table">
        <thead>
          <tr>
            <th></th>
            <th>File Name</th>
            <th>Upload Date</th>
            <th>File Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={`file-${index}`}>
              <td>
                <img src="/images/directory.svg" alt={file.filename} />
              </td>
              <td>{file.filename}</td>
              <td>{file.uploadDate}</td>
              <td>{file.size ? `${file.size}KB` : '---'}</td>
              <td width={100}>
                <Button>Share</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .files-table {
    width: 100%;
    tr {
      th {
        text-align: left;
      }

      td:last-child {
        text-align: right;
      }
    }
  }
`;
