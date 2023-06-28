import styled from "styled-components";
import { Typography } from "../../Typography";

type Props = {
  className?: string;
};

export function CloudStorage(props: Props) {
  return (
    <Style.Container {...props}>
      <Typography color="neutral-900" weight={600} size="2.5vh">
        Cloud Storage
      </Typography>
    </Style.Container>
  );
}

const Style = {
  Container: styled.section<Partial<Props>>``,
};
