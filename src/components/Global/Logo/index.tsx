import { PCCRed } from "../../Icons";

interface LogoProps {
  height?: number;
}

export const Logo = ({ height = 61 }: LogoProps) => {
  return (
    <>
      {localStorage.getItem("lang") === "en" ? (
        <PCCRed />
      ) : (
        <img src="/images/logo-fr.svg" alt="logo" height={height} />
      )}
    </>
  );
};
