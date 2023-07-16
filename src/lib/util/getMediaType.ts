import { MediaType } from "../../types/media";

export function getMediaType(str: string): MediaType {
  const mediaExtension = str.split(".")[1];
  switch (mediaExtension.toLowerCase()) {
    case "pdf":
    case "doc":
    case "docx":
    case "xls":
    case "xlsx":
    case "ppt":
    case "pptx":
    case "txt":
    case "csv":
    case "rtf":
      return "documents";
    case "mp3":
    case "wav":
    case "aac":
    case "ogg":
    case "flac":
    case "m4a":
    case "wma":
      return "audio";
    case "mp4":
    case "avi":
    case "mov":
    case "wmv":
    case "flv":
    case "webm":
    case "3gp":
      return "video";
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "bmp":
    case "tiff":
    case "webp":
      return "images";
  }

  return undefined;
}
