import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { SmallButton } from ".";
import { Color } from "../../../pages/types";

import "../../../styles/index.css";

const colors = [
  "neutral-500",
  "blue-500",
  "green-500",
  "red-500",
  "orange-500",
  "white",
];

export default {
  component: SmallButton,
} as ComponentMeta<typeof SmallButton>;

const Template: ComponentStory<typeof SmallButton> = (args) => {
  const onClick = (): void => {
    alert("Hello World!");
  };

  return (
    <BrowserRouter>
      <SmallButton {...args} onClick={onClick}>
        {args.children}
      </SmallButton>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});

Default.args = {
  bgColor: "red-500",
  children: "Hell World",
};

export const SmallButtons = Template.bind({});

SmallButtons.args = {
  ...Default.args,
};

SmallButtons.decorators = [
  () => (
    <BrowserRouter>
      {colors.map((color) => (
        <div key={`small-button-color-${color}`}>
          <SmallButton
            {...SmallButtons.args}
            bgColor={color as Color}
            onClick={(): void => {
              alert("Hello World!");
            }}
          >
            {SmallButtons.args?.children ?? "Hello World"}
          </SmallButton>
        </div>
      ))}
    </BrowserRouter>
  ),
];
