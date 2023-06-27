import styled from "styled-components";

const folder_options = [
  {
    title: "Documents",
    description: "",
    icon: "",
  },
  {
    title: "Documents",
    description: "",
    icon: "",
  },
  {
    title: "Documents",
    description: "",
    icon: "",
  },
  {
    title: "Documents",
    description: "",
    icon: "",
  },
  {
    title: "Documents",
    description: "",
    icon: "",
  },
];

export function CDHeader() {
  return (
    <Style.Container>
      {folder_options.map(() => (
        <button></button>
      ))}
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;

    button {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      height: 100%;
      width: 18.5%;
    }
  `,
};
