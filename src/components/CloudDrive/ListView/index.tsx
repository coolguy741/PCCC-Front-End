import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { formatDate } from "../../../lib/util/formatDate";
import { roundToOneDecimal } from "../../../lib/util/roundToOneDecimal";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Scrollable from "../../Global/Scrollable";
import { Typography } from "../../Typography";
import CDAudio from "../Icons/cd-audio";
import CDDelete from "../Icons/cd-delete";
import CDDownload from "../Icons/cd-download";
import CDShare from "../Icons/cd-share";

const text_props = {
  size: "1.75vh",
  weight: 500,
  color: "neutral-400",
};

const table_text_props = {
  size: "1.5vh",
  weight: 500,
  color: "neutral-400",
};

export function CDListView({ data, search }: { data: any; search: string }) {
  const { api } = useAPI();
  const navigate = useNavigate();

  const handleDelete = async (path: string) => {
    const response = await api.appCloudDriveDriveFileDelete(
      {
        relativePath: path,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 204) {
      navigate("./");
    }
  };

  return (
    <Style.Container thumbWidth="thin">
      <figure className="cd-list-header">
        <Typography tag="label" {...text_props}>
          Name
        </Typography>
        <Typography tag="label" {...text_props}>
          Size
        </Typography>
        <Typography tag="label" {...text_props}>
          Date
        </Typography>
      </figure>
      <div className="cd-list-content">
        {data.files &&
          data.files
            .filter((e: any) => {
              if (search === "") return e;

              if (e.fileName.toLowerCase().includes(search.toLowerCase()))
                return e;
            })
            .map((el: any) => (
              <Style.Item>
                <figure>
                  <div className="cd-list-image">
                    <CDAudio />
                  </div>
                  <Typography tag="h4" size="1.75vh" weight={500}>
                    {el.fileName}
                  </Typography>
                </figure>
                <Typography {...table_text_props}>
                  {roundToOneDecimal(el.size)} MB
                </Typography>
                <Typography {...table_text_props}>
                  {formatDate(el.uploadedAt)}
                </Typography>
                <div className="cd-list-options">
                  <CDShare />
                  <CDDownload />
                  <CDDelete onClick={() => handleDelete(el.relativePath)} />
                </div>
              </Style.Item>
            ))}
      </div>
    </Style.Container>
  );
}

const Style = {
  Container: styled(Scrollable)`
    // height of container minus padding
    height: calc(63vh - ${convertToRelativeUnit(48, "vh")});
    position: relative;

    figure.cd-list-header {
      height: 5vh;
      border-bottom: 2px solid #eaeaea;
      width: 100%;
      display: flex;

      label {
        display: block;
      }

      label:first-of-type {
        width: 50%;
      }

      label:nth-of-type(2),
      label:nth-of-type(3) {
        width: 15%;
      }

      label:nth-of-type(4) {
        width: 20%;
      }
    }
  `,
  Item: styled.article`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #eaeaea;

    figure {
      width: 30%;
      display: flex;
      align-items: center;

      &:first-of-type {
        width: 50%;
      }

      div {
        height: ${convertToRelativeUnit(40, "vh")};
        display: grid;
        place-items: center;
        aspect-ratio: 1 / 1;
        border-radius: 4px;
        background: var(
          --gradient-ui-card,
          linear-gradient(
            180deg,
            rgba(255, 215, 96, 0.8) 0%,
            rgba(255, 191, 0, 0.8) 100%
          )
        );
        margin-right: 10px;
      }
    }

    p {
      &:first-of-type,
      &:nth-of-type(2) {
        width: 15%;
      }
      &:nth-of-type(3) {
        width: 20%;
      }
    }

    .cd-list-options {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 15%;
      gap: 2rem;

      svg {
        cursor: pointer;
      }
    }
  `,
};
