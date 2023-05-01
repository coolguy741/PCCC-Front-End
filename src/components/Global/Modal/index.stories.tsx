import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Modal } from ".";

import "../../../styles/index.css";

export default {
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      <Modal {...args} isOpen={isOpen} close={close}>
        {args.children}
      </Modal>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  title: "Modal",
};
