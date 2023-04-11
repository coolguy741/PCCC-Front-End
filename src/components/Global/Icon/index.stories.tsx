import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Icon } from './index';

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <BrowserRouter>
    <Icon name="group" />
  </BrowserRouter>
);

export const Default = Template.bind({});
