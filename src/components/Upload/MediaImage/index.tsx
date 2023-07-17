import { MediaType } from "../../../types/media";
import CDAudio from "../../CloudDrive/Icons/cd-audio";
import CDDocument from "../../CloudDrive/Icons/cd-document";
import CDImage from "../../CloudDrive/Icons/cd-image";
import CDVideo from "../../CloudDrive/Icons/cd-video";

export function MediaImage({ mediaType }: { mediaType: MediaType }) {
  function getMediaIcon(mediaType: MediaType) {
    switch (mediaType) {
      case "documents":
        return <CDDocument />;
      case "audio":
        return <CDAudio />;
      case "video":
        return <CDVideo />;
      case "images":
      default:
        return <CDImage />;
    }
  }

  return getMediaIcon(mediaType);
}
