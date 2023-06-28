import { useState } from "react";
import styled from "styled-components";
import { convertToRelativeUnit } from "../../../../styles/helpers/convertToRelativeUnits";
import { Checkbox } from "../../../Global/Checkbox";
import { Typography } from "../../../Typography";

export function TrueOrFalse() {
  const [state, setState] = useState<boolean>(true);

  function changeOption() {
    setState((prevState) => !prevState);
  }
  return (
    <Style.Container>
      <fieldset>
        <Checkbox onClick={changeOption} checked={state} />
        <Typography
          tag="label"
          weight={600}
          size={convertToRelativeUnit(16, "vh")}
          color="neutral-600"
          ml="2.5vw"
        >
          True
        </Typography>
      </fieldset>
      <fieldset>
        <Checkbox onClick={changeOption} checked={!state} />
        <Typography
          tag="label"
          weight={600}
          size={convertToRelativeUnit(16, "vh")}
          color="neutral-600"
          ml="2.5vw"
        >
          False
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
