import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Обычная кнопка",
};

export const Outline = Template.bind({});
Outline.args = {
  content: "Кнопка в рамке",
  outline: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: "Не работающая кнопка",
  disabled: true,
};
