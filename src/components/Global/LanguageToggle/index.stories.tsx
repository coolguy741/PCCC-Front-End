import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import "../../../styles/index.css";
import { LanguageToggle } from "./index";

export default {
  component: LanguageToggle,
} as ComponentMeta<typeof LanguageToggle>;

const Template: ComponentStory<typeof LanguageToggle> = (args) => (
  <BrowserRouter>
    <LanguageToggle/>
  </BrowserRouter>
);

export const Default = Template.bind({});
