import { ComponentMeta, ComponentStory } from "@storybook/react";

import { MessageBox } from ".";

import "../../../styles/index.css";

export default {
  component: MessageBox,
} as ComponentMeta<typeof MessageBox>;

const Template: ComponentStory<typeof MessageBox> = (args) => {
  return <MessageBox {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  text: "MessageBox",
  variant: "error",
};
