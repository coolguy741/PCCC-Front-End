import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { SelectBox } from ".";

import "../../../styles/index.css";

const options = [
  { value: "hello", label: "Hello World!" },
  { value: "hi", label: "Hi, Everyone!" },
];

export default {
  component: SelectBox,
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args) => {
  const onClick = (): void => {
    alert("Hello World!");
  };

  return (
    <BrowserRouter>
      <SelectBox {...args} onChange={onClick} />
    </BrowserRouter>
  );
};

export const DefaultSelectBox = Template.bind({});

DefaultSelectBox.args = {
  options,
};
