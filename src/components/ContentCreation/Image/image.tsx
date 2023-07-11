import styled from "styled-components";
import useModal from "../../../hooks/useModal";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Patterns } from "../../Patterns";
import { Typography } from "../../Typography";
import { UploadModal } from "../../Upload/UploadModal";
import Add from "../Icons/add";
import Shuffle from "../Icons/shuffle";

export function Image({
  img,
  variant,
}: {
  img: string;
  variant?: "img-only" | "all";
}) {
  const { toggle, modal } = useModal();

  return (
    <>
      <Style.Container>
        <img src={img} alt="" />
        <figcaption></figcaption>
        {!img && (
          <Patterns className="empty-img" pattern={0}>
            <div className="img-btn-group">
              <button>
                <Add onClick={toggle} />
              </button>
              <button>
                <Shuffle />
              </button>
            </div>
            <Typography
              color="white"
              tag="h3"
              weight={600}
              size={convertToRelativeUnit(16, "vh")}
            >
              {variant === "img-only" ? "Add Image" : "Add Image or Video"}
            </Typography>
          </Patterns>
        )}
      </Style.Container>
      {modal && <UploadModal modal={modal} toggle={toggle} />}
    </>
  );
}

const Style = {
  Container: styled.figure`
    position: relative;
    width: 100%;
    height: 100%;

    .empty-img {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `,
};
