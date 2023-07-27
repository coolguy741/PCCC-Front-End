import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { formatDate } from "../../../lib/util/formatDate";
import { roundToOneDecimal } from "../../../lib/util/roundToOneDecimal";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Scrollable from "../../Global/Scrollable";
import { Typography } from "../../Typography";
import CDAudio from "../Icons/cd-audio";
import CDDelete from "../Icons/cd-delete";
import CDDocument from "../Icons/cd-document";
import CDDownload from "../Icons/cd-download";
import CDImage from "../Icons/cd-image";
import CDShare from "../Icons/cd-share";
import CDThumbnail from "../Icons/cd-thumbnail";
import CDVideo from "../Icons/cd-video";

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

export const ICONS = {
  images: <CDImage />,
  documents: <CDDocument />,
  video: <CDVideo />,
  audio: <CDAudio />,
};

export function CDListView({
  data,
  type,
  handleDelete,
  setPreviewUrl,
  setShowPreviewModal,
  setFileType,
  setFileName,
}: {
  data: any;
  type: "images" | "video" | "documents" | "audio";
  handleDelete: (path: string) => void;
  setPreviewUrl: (url: string) => void;
  setShowPreviewModal: (show: boolean) => void;
  setFileType: (type: "images" | "video" | "audio" | "documents") => void;
  setFileName: (name: string) => void;
}) {
  const numberOfItems = 10;
  const [itemBatch, setItemBatch] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"name" | "size" | "date">("name");
  const [initialized, setInitialized] = useState(false);

  const getMoreItems = () => {
    setDisplayedItems(
      displayedItems.concat(
        data.slice(
          numberOfItems * itemBatch,
          numberOfItems + numberOfItems * itemBatch,
        ),
      ),
    );

    setItemBatch(itemBatch + 1);
  };

  useEffect(() => {
    if (data && !initialized) {
      setDisplayedItems(data.slice(0, numberOfItems));

      setInitialized(true);
    } else if (data && initialized) {
      setDisplayedItems(data.slice(0, numberOfItems * itemBatch));
    }
  }, [data]);

  const playHandler = (
    url: string,
    type: "audio" | "video" | "documents" | "images",
    fileName: string,
  ) => {
    if (type !== "documents") {
      if (type && url) {
        setPreviewUrl(url);
        setFileType(type);
        setFileName(fileName);
      }

      setShowPreviewModal(true);
    }
  };

  return (
    <Style.Container>
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
              alt="sort by name"
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
              alt="sort by size"
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
              alt="sort by date"
            />
          )}
        </Typography>
      </figure>
      <Scrollable thumbWidth="thin" id="scroll-target">
        <div id="cd-list-content">
          <InfiniteScroll
            dataLength={displayedItems.length}
            next={getMoreItems}
            hasMore={displayedItems.length < data.length}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scroll-target"
          >
            {displayedItems
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
                    <div className="cd-list-image file-name">{ICONS[type]}</div>
                    <Typography
                      tag="h4"
                      size="1.75vh"
                      weight={500}
                      onClick={() =>
                        playHandler(el.url, el.folder, el.fileName)
                      }
                      className="file-name"
                    >
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
                    <CDThumbnail />
                    <CDShare />
                    <CDDownload />
                    <CDDelete onClick={() => handleDelete(el.relativePath)} />
                  </div>
                </Style.Item>
              ))}
          </InfiniteScroll>
        </div>
      </Scrollable>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    height: calc(60vh - ${convertToRelativeUnit(48, "vh")});
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
        width: 45%;
      }

      label:nth-of-type(2),
      label:nth-of-type(3) {
        width: 15%;
      }

      label:nth-of-type(4) {
        width: 25%;
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
      display: flex;
      align-items: center;
      width: 45%;

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
    }

    .file-name {
      cursor: pointer;
    }

    .cd-list-options {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 20%;

      svg {
        cursor: pointer;
        height: 2.25vh;
      }
    }
  `,
};
