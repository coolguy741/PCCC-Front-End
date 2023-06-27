import styled from "styled-components";

type Props = {
  className?: string;
};

export function CloudStorage(props: Props) {
  return <Style.Container {...props}></Style.Container>;
}

const Style = {
  Container: styled.section<Partial<Props>>``,
};
