import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Typography } from "../../Typography";
import Add from "../Icons/add";
import Delete from "../Icons/delete";
import Shuffle from "../Icons/shuffle";

export function Image({ img }: { img: string }) {
  return (
    <Style.Container>
      <img src={img} alt="" />
      <figcaption></figcaption>
      {!img && (
        <div className="empty-img">
          <div className="img-btn-group">
            <button>
              <Add />
            </button>
            <button>
              <Shuffle />
            </button>
            <button className="img-delete">
              <Delete />
            </button>
          </div>
          <Typography
            color="white"
            tag="h3"
            weight={600}
            size={convertToRelativeUnit(16, "vh")}
          >
            Add Image or Video
          </Typography>
        </div>
      )}
    </Style.Container>
  );
}

const Style = {
  Container: styled.figure`
    background-color: rgba(0, 0, 0, 0.1);
    position: relative;
    width: 100%;
    height: 100%;

    .empty-img {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .img-delete {
        position: absolute;
        top: 2.5%;
        right: 2.5%;
      }
    }
  `,
};
