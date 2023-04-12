interface LogoProps {
  height?: number;
}

export const Logo = ({ height = 61 }: LogoProps) => {
  return (
    <>
      {localStorage.getItem("lang") === "en" ? (
        <img src="/images/logo-en.svg" alt="logo" height={height} />
      ) : (
        <img src="/images/logo-fr.svg" alt="logo" height={height} />
      )}
    </>
  );
};
