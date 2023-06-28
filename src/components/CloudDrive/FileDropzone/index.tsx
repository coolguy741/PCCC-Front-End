import React from "react";
import styled from "styled-components";

const FileDropzone: React.FC = () => {
  return <Style.Container></Style.Container>;
};

const Style = {
  Container: styled.input`
    border-radius: 12px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%2326D07CFF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 12px;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.27639389038086px);
    height: 20vh;
    width: 100%;
  `,
};

export default FileDropzone;

// custom border styling generated with tool.
// https://kovart.github.io/dashed-border-generator/
