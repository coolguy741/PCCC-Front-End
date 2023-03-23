import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import "../../../styles/index.css";
import { SignInForm } from "./index";

export default {
  component: SignInForm,
} as ComponentMeta<typeof SignInForm>;

const Template: ComponentStory<typeof SignInForm> = (args) => (
  <BrowserRouter>
    <SignInForm />
  </BrowserRouter>
);

export const Default = Template.bind({});
