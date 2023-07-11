import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { GalleryItem } from "../../CloudDrive/GalleryView/item";
import Scrollable from "../../Global/Scrollable";

export function UploadGallery(props: any) {
  const { list_items } = props;

  return (
    <Style.Container thumbWidth="thin">
      {list_items.map((el: any, idx: number) => (
        <GalleryItem el={el} idx={idx} />
      ))}
    </Style.Container>
  );
}

const Style = {
  Container: styled(Scrollable)`
    // height of container minus padding
    height: calc(50vh - ${convertToRelativeUnit(48, "vh")});
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 17.9vh;
    gap: 1.5vh;
    padding-bottom: 25px;
  `,
};
