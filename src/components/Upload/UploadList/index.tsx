import { formatDate } from "@fullcalendar/core";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { getMediaType } from "../../../lib/util/getMediaType";
import { roundToOneDecimal } from "../../../lib/util/roundToOneDecimal";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import CDDelete from "../../CloudDrive/Icons/cd-delete";
import CDDownload from "../../CloudDrive/Icons/cd-download";
import CDShare from "../../CloudDrive/Icons/cd-share";
import Scrollable from "../../Global/Scrollable";
import { Typography } from "../../Typography";
import { MediaImage } from "../MediaImage";
import { TitleStyle } from "../TitleStyle";

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

export function UploadList({ files, setImage, selectedImage }: any) {
  const { api } = useAPI();
  const navigate = useNavigate();
  const numberOfItems = 10;
  const [itemBatch, setItemBatch] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"name" | "size" | "date">("name");
  const [initialized, setInitialized] = useState(false);

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

  const getMoreItems = () => {
    setDisplayedItems(
      displayedItems.concat(
        files.slice(
          numberOfItems * itemBatch,
          numberOfItems + numberOfItems * itemBatch,
        ),
      ),
    );

    setItemBatch(itemBatch + 1);
  };

  useEffect(() => {
    if (files && !initialized) {
      setDisplayedItems(files.slice(0, numberOfItems));

      setInitialized(true);
    } else if (files && initialized) {
      setDisplayedItems(files.slice(0, numberOfItems * itemBatch));
    }
  }, [files]);

  return (
    <Style.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
              alt="sort"
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
              alt="sort"
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
              alt="sort"
            />
          )}
        </Typography>
      </figure>
      <Style.Scroll thumbWidth="thin" id="scroll-target">
        <div className="cd-list-content">
          <InfiniteScroll
            dataLength={displayedItems.length}
            next={getMoreItems}
            hasMore={displayedItems.length < files.length}
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
                    <div className="cd-list-image">
                      <MediaImage mediaType={getMediaType(el.fileName)} />
                    </div>
                    <Typography
                      tag="h4"
                      onClick={() => setImage(el.url)}
                      size="1.75vh"
                      weight={500}
                      color={
                        selectedImage === el.url ? "orange-500" : "neutral-800"
                      }
                    >
                      <TitleStyle
                        selected={selectedImage === el.url}
                        el={el}
                        length={25}
                      />
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
          </InfiniteScroll>
        </div>
      </Style.Scroll>
    </Style.Container>
  );
}

const Style = {
  Container: styled(motion.div)`
    figure.cd-list-header {
      height: 4vh;
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
        width: 40%;
      }

      label:nth-of-type(2),
      label:nth-of-type(3) {
        width: 20%;
      }

      label:nth-of-type(4) {
        width: 20%;
      }
    }
  `,
  Scroll: styled(Scrollable)`
    // height of container minus padding
    height: calc(46vh - ${convertToRelativeUnit(48, "vh")});
    position: relative;
  `,
  Item: styled.article`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #eaeaea;

    h4 {
      cursor: pointer;
      transition: color 0.2s ease-out;

      span {
        cursor: pointer;
        transition: color 0.2s ease-out;
      }
    }

    figure {
      width: 40%;
      display: flex;
      align-items: center;

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
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      }
    }

    p {
      &:first-of-type,
      &:nth-of-type(2) {
        width: 20%;
      }
      &:nth-of-type(3) {
        width: 20%;
      }
    }

    .cd-list-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15%;
    }
  `,
};
