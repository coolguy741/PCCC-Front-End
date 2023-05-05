import styled from "styled-components";

interface LogoProps {
  width?: number;
  type?: "colored" | "white";
}

export const PrintLogo = ({ width = 80, type = "colored" }: LogoProps) => {
  return (
    <>
      {" "}
      {type === "colored" ? (
        <Style.Img
          src="/images/logo-print.svg"
          alt="logo print"
          width={width}
        />
      ) : (
        <Style.Img src="/images/logo-en.svg" alt="logo print" width={width} />
      )}
    </>
  );
};

const Style = {
  Img: styled.img`
    @media print {
      width: 48px !important;
    }
  `,
};
