import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Scrollable from "../../Global/Scrollable";
import { GalleryItem } from "./item";

export function CDGalleryView({
  data,
  type,
  handleDelete,
}: {
  data: any;
  type: "images" | "video" | "documents" | "audio";
  handleDelete: (path: string) => void;
}) {
  const numberOfItems = 15;
  const [itemBatch, setItemBatch] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);
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

  console.log(displayedItems.length, data.length);

  return (
    <Style.Container thumbWidth="thin" id="scroll-target">
      <InfiniteScroll
        dataLength={displayedItems.length}
        next={getMoreItems}
        hasMore={displayedItems.length < data.length}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scroll-target"
      >
        {displayedItems.map((el: any, idx: number) => (
          <GalleryItem
            el={el}
            idx={idx}
            type={type}
            handleDelete={handleDelete}
          />
        ))}
      </InfiniteScroll>
    </Style.Container>
  );
}

const Style = {
  Container: styled(Scrollable)`
    .infinite-scroll-component__outerdiv {
      .infinite-scroll-component {
        height: calc(63vh - ${convertToRelativeUnit(48, "vh")});
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-auto-rows: 17.9vh;
        gap: 1.5vh;
        padding-bottom: 25px;
      }
    }
  `,
};
