import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Scrollable from "../../Global/Scrollable";
import { GalleryItem } from "./item";

export function UploadGallery({
  files,
  type,
  handleDelete,
}: {
  files: any;
  type: string;
  handleDelete: (path: string) => void;
}) {
  const numberOfItems = 8;
  const [itemBatch, setItemBatch] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [initialized, setInitialized] = useState(false);

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
    <Style.Container thumbWidth="thin" id="scroll-target">
      <InfiniteScroll
        dataLength={displayedItems.length}
        next={getMoreItems}
        hasMore={displayedItems.length < files.length}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scroll-target"
      >
        {displayedItems.map((el: any, idx: number) => {
          return (
            <GalleryItem
              el={el}
              idx={idx}
              type={type || "images"}
              handleDelete={handleDelete}
            />
          );
        })}
      </InfiniteScroll>
    </Style.Container>
  );
}

const Style = {
  Container: styled(Scrollable)`
    height: calc(50vh - ${convertToRelativeUnit(48, "vh")}) !important;
    .infinite-scroll-component__outerdiv {
      .infinite-scroll-component {
        // height of container minus padding
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: 21vh;
        gap: 1.5vh;
        padding-bottom: 25px;
        width: 100%;
      }
    }
  `,
};
