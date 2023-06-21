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

  // take focus to the end of text.
  useEffect(() => {
    if (mode === "edit" && ref.current) {
      const end = text.length;
      ref.current.setSelectionRange(end, end);
      ref.current.focus();
    }
  }, [mode, ref, text]);

  // change edit / view state
  function clickHandler() {
    changeEditState(name);
  }

  // change edit / view on enter press
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
      return <Style.Span onClick={clickHandler}>{text}</Style.Span>;
    } else {
      return (
        <Style.Container
          onChange={(e) => setText(name, e.target.value)}
          ref={ref}
          defaultValue={text}
          onClick={clickHandler}
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
    background: inherit;
    padding: none;
    width: auto;
    resize: none;
    color: red;
    width: 100%;
    cursor: pointer;
  `,
  Span: styled.span`
    cursor: pointer;
  `,
};
