import { trimStringByLength } from "../../../lib/util/trimStringByLength";
import { Typography } from "../../Typography";

export function TitleStyle({ el, length }: { el: any; length: number }) {
  const { fileName: title } = el;
  function styleTitle() {
    if (title.length < length) {
      const name = title.split(".")[0];
      const ext: string = title.split(".")[1].toLowerCase();

      return (
        <>
          {name}
          <Typography color="neutral-400" tag="span">
            {"." + ext}
          </Typography>
        </>
      );
    } else {
      return <>{trimStringByLength(el.fileName, 15)}</>;
    }
  }
  return styleTitle();
}
