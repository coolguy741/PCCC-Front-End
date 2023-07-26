import styled from "styled-components";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import Button from "../../Button";
import { IconButton } from "../../Global/IconButton";
import { Input } from "../../Global/Input";
import { Typography } from "../../Typography";

interface JoinGroupModalProps {
  groupName: string;
  groupID: number;
  creator: string;
  role: string;
  onJoin: () => void;
  onClose: () => void;
}

export const JoinGroupModal = ({
  groupName,
  groupID,
  creator,
  role,
  onJoin,
  onClose,
}: JoinGroupModalProps) => {
  return (
    <Style.Modal>
      <Typography
        color="neutral-800"
        size="3.5vh"
        tag="h2"
        weight={600}
        mb="1vh"
      >
        Join Group
      </Typography>
      <Typography weight={500} color="neutral-600" size="2.25vh" mb="0.5vh">
        {groupName}
      </Typography>
      <Typography size="1.75vh" color="neutral-600" mb="4vh">
        {"Creator: " + creator + " (" + role + " User)"}
      </Typography>

      <fieldset>
        <Typography tag="label" color="neutral-600" size="1.75vh" mb="0.5vh">
          Group ID
        </Typography>
        <Input placeholder="0000" />
        <Button fullWidth onClick={onJoin}>
          Join Group
        </Button>
      </fieldset>
      <div className="button-container">
        <IconButton icon="close" onClick={onClose} width={25} height={25} />
      </div>
    </Style.Modal>
  );
};

const Style = {
  Modal: styled.div`
    background-color: white;
    padding: 20px;
    position: relative;
    z-index: 50;
    width: 27.5%;
    height: 40%;
    border-radius: 16px;
    border-radius: 16px;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.27639389038086px);
    ${() => animatedbackgroundGradient("#fee5dd", "#fff5cc")}

    .input-container {
      display: flex;
      justify-content: space-between;
    }

    input {
      margin-top: 0.5vh;
      margin-bottom: 4vh;
    }

    .button-container {
      position: absolute;
      top: 30px;
      right: 20px;
    }
  `,
};
