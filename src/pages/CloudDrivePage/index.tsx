import styled from "styled-components";
import Button from "../../components/Button";

export const CloudDrivePage = () => {
  return (
    <Style.Container>
      <div className="folders-files-container">
        <Style.Folders>
          <h3>Folders</h3>
          <div className="content"></div>
        </Style.Folders>
        <Style.Files>
          <div className="title-container">
            <h3>Files</h3>
            <Button
              variant="orange"
              size="large"
              icon="add"
              iconPosition="left"
            >
              Upload
            </Button>
          </div>
          <div className="content"></div>
        </Style.Files>
      </div>
      <Style.CloudStorage>
        <h3>Cloud Storage</h3>
        <div className="content"></div>
      </Style.CloudStorage>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: 100%;
    display: flex;
    gap: 2vh;

    .folders-files-container {
      width: 75%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.66vh;
    }
  `,
  Folders: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.33vh;

    .content {
      width: 100%;
      height: 7vh;
      display: flex;
      justify-content: space-between;
    }
  `,
  Files: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.33vh;

    .title-container {
      display: flex;
      justify-content: space-between;
    }

    .content {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.2764px);
      padding: 2vh;
    }
  `,
  CloudStorage: styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.66vh;

    .content {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.2764px);
      border-radius: 16px;
      padding: 2vh;
      display: flex;
      gap: 2vh;
    }
  `,
};
