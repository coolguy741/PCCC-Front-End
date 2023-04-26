import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BaseSyntheticEvent } from "react";
import { BrowserRouter } from "react-router-dom";

import { SpeechBubble } from ".";
import { Color } from "../../../pages/types";

import "../../../styles/index.css";

const variants = ["neutral", "blue", "green", "red", "orange"];

export default {
  component: SpeechBubble,
} as ComponentMeta<typeof SpeechBubble>;

const Template: ComponentStory<typeof SpeechBubble> = (args) => {
  const onClick = (event: BaseSyntheticEvent): void => {
    alert("Hello World!");
  };

  return (
    <BrowserRouter>
      <SpeechBubble {...args} onClick={onClick}>
        {args.children}
      </SpeechBubble>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});

Default.args = {
  left: 100,
  unit: "px",
  top: 20,
  variant: "green",
  children: "Hell World",
};

export const Bubbles = Template.bind({});

Bubbles.args = {
  ...Default.args,
};

Bubbles.decorators = [
  () => (
    <BrowserRouter>
      {variants.map((variant, index) => (
        <div key={`speech-bubble-variant-${variant}`}>
          <SpeechBubble
            {...Bubbles.args}
            variant={variant as Color}
            top={100 * index}
            onClick={(event: BaseSyntheticEvent): void => {
              alert("Hello World!");
            }}
          >
            {Bubbles.args?.children}
          </SpeechBubble>
        </div>
      ))}
    </BrowserRouter>
  ),
];
