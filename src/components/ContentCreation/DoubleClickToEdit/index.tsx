import { useRef } from "react";
import styled from "styled-components";

export function DoubleClickToEditComponent({
  mode,
  name,
  setText,
  text,
  changeEditState,
}: any) {
  const ref = useRef<HTMLTextAreaElement>(null);

  // useEffect(() => {
  //   if (mode === "edit" && ref.current) {
  //     const end = text.length;
  //     text.current.setSelectionRange(end, end);
  //     text.current.focus();
  //   }
  // }, [mode, ref, text]);

  function switchOnDb() {
    changeEditState(name);
  }

  function showComponent() {
    if (mode === "view") {
      return <span onDoubleClick={switchOnDb}>{text}</span>;
    } else {
      return (
        <Style.Container
          onChange={(e) => setText(name, e.target.value)}
          ref={ref}
          defaultValue={text}
          onDoubleClick={switchOnDb}
        />
      );
    }
  }

  return showComponent();
}

export const Style = {
  Container: styled.textarea`
    border: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    background-color: unset;
    padding: none;
    width: auto;
    resize: none;
    color: green;
    width: 100%;
    height: max-content;
    border: 1px solid red;
  `,
};
