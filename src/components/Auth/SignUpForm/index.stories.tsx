import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import "../../styles/index.css";
import { SignUpForm } from "./index";

export default {
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => (
  <BrowserRouter>
    <SignUpForm />
  </BrowserRouter>
);

export const Default = Template.bind({});
