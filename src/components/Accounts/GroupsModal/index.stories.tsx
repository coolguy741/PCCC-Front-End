import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { GroupsModal } from ".";
import { PccServer23UsersUserInGroupDto } from "../../../lib/api/api";

import "../../../styles/index.css";

const groups: PccServer23UsersUserInGroupDto[] = [
  { groupName: "Cool Broccoli", memberCount: 9 },
  { groupName: "Cool Broccoli", memberCount: 6 },
  { groupName: "Science Group", memberCount: 3 },
  { groupName: "Cool Broccoli", memberCount: 8 },
  { groupName: "Science Group", memberCount: 3 },
  { groupName: "Science Group", memberCount: 3 },
  { groupName: "Cool Broccoli", memberCount: 9 },
  { groupName: "Cool Broccoli", memberCount: 9 },
  { groupName: "Science Group", memberCount: 3 },
  { groupName: "Cool Broccoli", memberCount: 9 },
  { groupName: "Cool Broccoli", memberCount: 9 },
  { groupName: "Science Group", memberCount: 3 },
  { groupName: "Cool Broccoli", memberCount: 9 },
  { groupName: "Cool Broccoli", memberCount: 9 },
  { groupName: "Cool Broccoli", memberCount: 9 },
  { groupName: "Cool Broccoli", memberCount: 9 },
  { groupName: "Cool Broccoli", memberCount: 9 },
];

export default {
  component: GroupsModal,
} as ComponentMeta<typeof GroupsModal>;

const Template: ComponentStory<typeof GroupsModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      <GroupsModal {...args} isOpen={isOpen} close={close} groups={groups}>
        {args.children}
      </GroupsModal>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  title: "GroupsModal",
};
