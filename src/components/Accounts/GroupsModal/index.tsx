import styled from "styled-components";

import { PccServer23UsersUserInGroupDto } from "../../../lib/api/api";
import { Icon } from "../../Global/Icon";
import { Modal, ModalProps } from "../../Global/Modal";
import { Typography } from "../../Global/Typography";

interface GroupsModalProps extends ModalProps {
  groups: PccServer23UsersUserInGroupDto[];
}

export const GroupsModal: React.FC<GroupsModalProps> = ({
  groups,
  children,
  ...props
}) => {
  return (
    <Modal {...props}>
      <Style.GroupContainer>
        {!!groups && groups.length > 0 ? (
          groups.map((group, index) => (
            <Style.Group key={`group-${group.groupName}-${index}`}>
              <Icon name="group" />
              <Typography variant="h6" weight="medium" ml={3}>
                {`${group.groupName}'s (${group.memberCount})`}
              </Typography>
            </Style.Group>
          ))
        ) : (
          <div>There are no related groups.</div>
        )}
      </Style.GroupContainer>
    </Modal>
  );
};

const Style = {
  GroupContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.25rem;
  `,
  Group: styled.div`
    width: 50%;
    display: flex;
    padding-right: 10px;
  `,
};
