import styled from "styled-components";
import { convertToRelativeUnit } from "../../../../styles/helpers/convertToRelativeUnits";
import { Checkbox } from "../../../Global/Checkbox";
import { Typography } from "../../../Typography";

export function MultipleSelection() {
  return (
    <Style.Container>
      <fieldset>
        <Checkbox />
        <Typography
          tag="label"
          weight={600}
          size={convertToRelativeUnit(16, "vh")}
          color="neutral-600"
          ml="2.5vw"
        >
          Lorem
        </Typography>
      </fieldset>
      <fieldset>
        <Checkbox />
        <Typography
          tag="label"
          weight={600}
          size={convertToRelativeUnit(16, "vh")}
          color="neutral-600"
          ml="2.5vw"
        >
          Lorem
        </Typography>
      </fieldset>
      <fieldset>
        <Checkbox />
        <Typography
          tag="label"
          weight={600}
          size={convertToRelativeUnit(16, "vh")}
          color="neutral-600"
          ml="2.5vw"
        >
          Lorem
        </Typography>
      </fieldset>
      <fieldset>
        <Checkbox />
        <Typography
          tag="label"
          weight={600}
          size={convertToRelativeUnit(16, "vh")}
          color="neutral-600"
          ml="2.5vw"
        >
          Lorem
        </Typography>
      </fieldset>
    </Style.Container>
  );
}

const Style = {
  Container: styled.form`
    display: flex;
    flex-direction: column;

    fieldset {
      display: flex;
      align-items: center;
      margin-bottom: 2.5vh;
    }
  `,
};
