import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { AchievementsModal } from ".";
import { Achievement } from "../../../pages/AccountsPage/Profiles/User";

import "../../../styles/index.css";

const achievements: Achievement[] = [
  {
    badge: "badge1",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge3",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge2",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge4",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge5",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge6",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge1",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge2",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge3",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge4",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge5",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge6",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge3",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge2",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge4",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge5",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    badge: "badge7",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

export default {
  component: AchievementsModal,
} as ComponentMeta<typeof AchievementsModal>;

const Template: ComponentStory<typeof AchievementsModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      <AchievementsModal
        {...args}
        isOpen={isOpen}
        close={close}
        achievements={achievements}
      >
        {args.children}
      </AchievementsModal>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  title: "AchievementsModal",
};
