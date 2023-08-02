import { motion } from "framer-motion";
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
  setMedia,
  selectedMedia,
}: {
  files: any;
  type: string;
  handleDelete: (path: string) => void;
  setMedia: (mediaUrl: string, mediaName: string) => void;
  selectedMedia: any;
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
    <Style.Div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
                key={el.url}
                type={type || "images"}
                handleDelete={handleDelete}
                setMedia={setMedia}
                selectedMedia={selectedMedia}
              />
            );
          })}
        </InfiniteScroll>
      </Style.Container>
    </Style.Div>
  );
}

const Style = {
  Div: styled(motion.div)`
    height: calc(50vh - ${convertToRelativeUnit(48, "vh")}) !important;
    width: 100%;
  `,
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
