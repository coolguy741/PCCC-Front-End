import styled from "styled-components";
import { CloudStorage } from "../../components/CloudDrive/CloudStorage";
import { CDHeader } from "../../components/CloudDrive/Header";
import CDAdd from "../../components/CloudDrive/Icons/cd-add";
import CDGallery from "../../components/CloudDrive/Icons/cd-gallery";
import CDList from "../../components/CloudDrive/Icons/cd-list";
import { Typography } from "../../components/Typography";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";
import { glassBackground } from "../../styles/helpers/glassBackground";

export const CloudDrivePage = () => {
  return (
    <Style.Container>
      <section className="cloud-drive-folders">
        <div className="cd-folders-menu">
          <Typography
            tag="h2"
            size="2.5vh"
            color="neutral-800"
            weight={600}
            mb="1vh"
          >
            Folders
          </Typography>
          <CDHeader />
        </div>
        <div className="cd-files-menu">
          <div className="cdf-menu-options">
            <Typography
              tag="h2"
              size="2.5vh"
              color="neutral-800"
              weight={600}
              mb="1vh"
            >
              Files
            </Typography>
            <div>
              <button className="cdf-view-option active">
                <CDGallery />
              </button>
              <button className="cdf-view-option">
                <CDList />
              </button>
              <button className="cdf-upload">
                <CDAdd />
                <Typography
                  color="white"
                  weight={600}
                  size={convertToRelativeUnit(15, "vh")}
                >
                  Upload
                </Typography>
              </button>
            </div>
          </div>
          <article className="cd-content"></article>
        </div>
      </section>
      <CloudStorage className="cloud-drive-storage" />
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .cloud-drive-folders {
      width: 76%;
      display: flex;
      flex-direction: column;

      .cd-folders-menu {
        width: 100%;
        height: 18%;
      }
    }

    .cloud-drive-storage {
      width: 22.5%;
      margin-top: 4.5vh;
      ${glassBackground};
      padding: 15px 20px;
    }

    .cd-files-menu {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .cdf-menu-options {
        height: 5vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5vh;

        div {
          display: flex;
          height: 100%;
          width: 27.5%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          button.cdf-view-option {
            border-radius: 50%;
            aspect-ratio: 1 / 1;
            height: 100%;
            display: grid;
            place-items: center;
          }

          button.active {
            background: #fff;
            box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
          }

          button.cdf-upload {
            display: flex;
            padding: 10px 25px;
            justify-content: center;
            align-items: center;
            background: var(
              --gradient-orange,
              linear-gradient(180deg, #f87c56 0%, #f65321 100%)
            );
            box-shadow: 0px 4px 5px 0px rgba(248, 124, 86, 0.4);
            border-radius: 80px;

            svg {
              margin-right: 9px;
            }
          }
        }
      }

      article.cd-content {
        flex-grow: 1;
        border-radius: 16px;
        ${glassBackground};
        padding: ${convertToRelativeUnit(24, "vh")};
      }
    }
  `,
};
