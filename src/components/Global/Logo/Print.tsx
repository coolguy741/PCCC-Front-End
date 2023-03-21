interface LogoProps {
  width?: number;
}

export const PrintLogo = ({ width = 80 }: LogoProps) => {
  return <img src="/images/logo-print.svg" width={width} />;
};
