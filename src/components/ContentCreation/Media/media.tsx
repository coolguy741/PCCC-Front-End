import styled from "styled-components";
import useModal from "../../../hooks/useModal";
import { usePatterns } from "../../../hooks/usePatterns";
import { getMediaType } from "../../../lib/util/getMediaType";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Patterns } from "../../Patterns";
import { Typography } from "../../Typography";
import { UploadModal } from "../../Upload/UploadModal";
import Add from "../Icons/add";
import Shuffle from "../Icons/shuffle";
import { MediaPreview } from "./preview";

export function Media({
  media,
  variant,
  changeMediaState,
  changePattern,
}: {
  media: any;
  variant?: "img-only" | "all";
  changeMediaState: (name: string) => void;
  changePattern: (pattern: number) => void;
}) {
  const { toggle, modal } = useModal();
  const { shufflePattern, currentPattern } = usePatterns(
    media?.patternChoice,
    changePattern,
  );

  function showMedia() {
    let type;
    if (media?.src) {
      type = getMediaType(media.src);
    }

    if (type === "images") return <img src={media?.src} alt="" />;
    else if (type === "video" || type === "audio")
      return <MediaPreview src={media?.src} type={type} />;
  }

  return (
    <>
      <Style.Container>
        <div className="media-container">{showMedia()}</div>
        {!media?.src && (
          <Patterns className="empty-img" pattern={currentPattern}>
            <div className="img-btn-group">
              <button>
                <Add onClick={toggle} />
              </button>
              <button>
                <Shuffle onClick={shufflePattern} />
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
      {modal && (
        <UploadModal
          setMedia={changeMediaState}
          modal={modal}
          toggle={toggle}
        />
      )}
    </>
  );
}

const Style = {
  Container: styled.figure`
    position: relative;
    width: 100%;
    height: 100%;

    .media-container {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: relative;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
      object-position: center;
    }

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
