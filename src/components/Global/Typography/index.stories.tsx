import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { Typography } from ".";
import "../../../styles/index.css";

export default {
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <BrowserRouter>
    <Typography>Hello World!</Typography>
  </BrowserRouter>
);

export const Default = Template.bind({});
