import { useEffect, useRef } from "react";
import styled from "styled-components";

export function DoubleClickToEditComponent({ mode, setText, text }: any) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (mode === "edit" && ref.current) {
      const end = text.length;
      text.current.setSelectionRange(end, end);
      text.current.focus();
    }
  }, [mode, ref, text]);

  if (mode === "view") {
    return text;
  } else {
    return (
      <Style.Container
        onChange={(e) => setText(e.target.value)}
        ref={ref}
        defaultValue={text}
      />
    );
  }
}

export const Style = {
  Container: styled.textarea`
    border: none;
    display: inline;
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
    border: 1px solid red;
  `,
};
