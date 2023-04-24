import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { Typography, TypographyVariant, TypographyWeight } from ".";

import "../../../styles/index.css";

const colors = [
  "neutral-500",
  "yellow-500",
  "green-500",
  "blue-500",
  "orange-500",
];

const weights: TypographyWeight[] = [
  "regular",
  "medium",
  "semi-bold",
  "bold",
  "heavy",
];

const variants: TypographyVariant[] = [
  "paragraph1",
  "paragraph2",
  "paragraph3",
  "paragraph4",
  "h6",
  "h5",
  "h4",
  "h3",
  "h2",
  "h1",
  "display3",
  "display2",
  "display1",
];

export default {
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <BrowserRouter>
    <Typography {...args}>{args.children}</Typography>
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  children: "Hell World",
};

export const Typo = Template.bind({});

Typo.args = {
  children: "Hell World",
};

Typo.decorators = [
  () => (
    <>
      {variants.map((variant) => (
        <>
          <div
            style={{
              textTransform: "capitalize",
              margin: "30px 0",
              borderBottom: "2px solid black",
            }}
          >
            {variant}
          </div>
          <div
            key={`typo-variant-${variant}`}
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              rowGap: "100px",
            }}
          >
            {weights.map((weight) => {
              return (
                <div key={`Typo-weight-${weight}`}>
                  {colors.map((color) => {
                    return (
                      <Typography
                        key={`Typo-color-${color}`}
                        {...Typo.args}
                        weight={weight}
                        variant={variant}
                        color={color}
                      >
                        {Typo.args?.children}
                      </Typography>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      ))}
    </>
  ),
];
