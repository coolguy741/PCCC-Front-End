import styled from "styled-components";
import { IconButton } from "../../Global/IconButton";
import { SmallButton } from "../../Global/SmallButton";

interface JoinGroupModalProps {
  groupName: string,
  groupID: number,
  creator: string,
  role: string,
  onJoin: () => void;
  onClose: () => void;
}

export const JoinGroupModal = ({ groupName, groupID, creator, role, onJoin, onClose}: JoinGroupModalProps) => {
  return (
    <Modal>
      <h3>Join Group</h3>
      <p className="bold-text">{groupName}</p>
      <p className="text">{"Creator: " + creator + " (" + role + " User)"}</p>
      <br/>
      <br/>
      <p className="small-text">Enter Group ID</p>
      <div className="input-container">
        <div className="group-id-container">{groupID}</div>
        <SmallButton onClick={onJoin}>Join Group</SmallButton>
      </div>
      <div className="button-container">
        <IconButton icon="close" onClick={onClose} width={25} height={25}/>
      </div>
    </Modal>
  );
};

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  position: relative;

  .input-container {
    display: flex;
    justify-content: space-between;
  }
  
  .button-container{
    position: absolute;
    top: 30px;
    right: 20px;
  }
`;

