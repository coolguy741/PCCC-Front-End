interface LogoProps {
  width?: number;
}

export const Logo = ({ width = 150 }: LogoProps) => {
  return <img src="/images/logo.svg" width={width} />;
};
