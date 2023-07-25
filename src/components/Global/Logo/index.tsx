import { Language } from "../../../pages/types";
import { PCCRed } from "../../Icons";

interface LogoProps {
  height?: number;
}

export const Logo = ({ height = 61 }: LogoProps) => {
  return (
    <>
      {localStorage.getItem("lang") === Language.EN ? (
        <PCCRed />
      ) : (
        <img src="/images/logo-fr.svg" alt="logo" height={height} />
      )}
    </>
  );
};
