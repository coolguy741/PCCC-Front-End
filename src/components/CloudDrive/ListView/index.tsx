import Cookies from "js-cookie";
import { useState } from "react";
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
  const [sortBy, setSortBy] = useState<"name" | "size" | "date">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

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
        <Typography
          tag="label"
          {...text_props}
          onClick={() => {
            setSortBy("name");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          Name
          {sortBy === "name" && (
            <img
              src="/images/dropdown-arrow.svg"
              className={sortOrder}
              width="25"
            />
          )}
        </Typography>
        <Typography
          tag="label"
          {...text_props}
          onClick={() => {
            setSortBy("size");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          Size
          {sortBy === "size" && (
            <img
              src="/images/dropdown-arrow.svg"
              className={sortOrder}
              width="25"
            />
          )}
        </Typography>
        <Typography
          tag="label"
          {...text_props}
          onClick={() => {
            setSortBy("date");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          Date
          {sortBy === "date" && (
            <img
              src="/images/dropdown-arrow.svg"
              className={sortOrder}
              width="25"
            />
          )}
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
            .sort((a: any, b: any) => {
              if (sortBy === "name") {
                if (sortOrder === "asc") {
                  return a.fileName.localeCompare(b.fileName);
                } else {
                  return b.fileName.localeCompare(a.fileName);
                }
              } else if (sortBy === "size") {
                if (sortOrder === "asc") {
                  return a.size - b.size;
                } else {
                  return b.size - a.size;
                }
              } else if (sortBy === "date") {
                if (sortOrder === "asc") {
                  return new Date(a.uploadedAt) > new Date(b.uploadedAt)
                    ? 1
                    : -1;
                } else {
                  return new Date(a.uploadedAt) < new Date(b.uploadedAt)
                    ? 1
                    : -1;
                }
              }
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
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        user-select: none;

        .desc {
          transform: rotate(180deg);
        }
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
