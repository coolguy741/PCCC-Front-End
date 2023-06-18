import { useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

export function DoubleClickToEditComponent({
  mode,
  name,
  setText,
  text,
  changeEditState,
}: any) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (mode === "edit" && ref.current) {
      const end = text.length;
      ref.current.setSelectionRange(end, end);
      ref.current.focus();
    }
  }, [mode, ref, text]);

  function switchOnDb() {
    changeEditState(name);
  }

  function handleKeyDown(e: { key: string }) {
    if (e.key === "Enter") {
      changeEditState(name);
    }
  }

  // trim white space in between.
  const regexPattern = /\s+/g;
  text = text.replace(regexPattern, " ");

  function showComponent() {
    if (mode === "view") {
      return <span onClick={switchOnDb}>{text}</span>;
    } else {
      return (
        <Style.Container
          onChange={(e) => setText(name, e.target.value)}
          ref={ref}
          defaultValue={text}
          onClick={switchOnDb}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      );
    }
  }

  return showComponent();
}

export const Style = {
  Container: styled(TextareaAutosize)`
    border: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: none;
    width: auto;
    resize: none;
    color: red;
    width: 100%;
    height: 200px;
  `,
};
