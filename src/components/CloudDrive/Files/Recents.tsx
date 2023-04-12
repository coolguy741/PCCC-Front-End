import styled from "styled-components";

const recentFiles = [
  "To bee or not to bee.pdf",
  "Garden Guardian.pdf",
  "Over the Grainbow.pdf",
  "Garden Guardian1.pdf ",
  "Garden Guardian2.pdf ",
  "Garden Guardian2.pdf ",
  "Garden Guardian2.pdf ",
  "Garden Guardian2.pdf ",
  "Garden Guardian2.pdf ",
  "Garden Guardian2.pdf ",
];

export const RecentFiles = () => {
  return (
    <Style.Container>
      <h4>Recents</h4>
      <div className="recent-files-list">
        {recentFiles.map((file, index) => (
          <div key={`file-${index}`}>
            <img src="/images/file.svg" alt={file} />
            <div>{file}</div>
          </div>
        ))}
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    & {
      .recent-files-list {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 2rem;

        & > div {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          background: #d9d9d9;
          padding: 2rem;

          img {
            margin: auto;
          }
        }
      }

      @media only screen and (max-width: 1600px) {
        .recent-files-list {
          grid-template-columns: repeat(5, 1fr);
        }
      }

      @media only screen and (max-width: 1400px) {
        .recent-files-list {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      @media only screen and (max-width: 1200px) {
        .recent-files-list {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media only screen and (max-width: 1000px) {
        .recent-files-list {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      h4 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
    }
  `,
};
