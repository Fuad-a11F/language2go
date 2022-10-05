import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Title } from "./Title";
import { FormElementTypes } from "../../shared/enum/ui/enum";

export default {
  title: "Example/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const h1 = Template.bind({});
h1.args = {
  content: "sdsdf",
  tag: "h1",
};

export const h2 = Template.bind({});
h2.args = {
  content: "sdsdf",
};

export const h3 = Template.bind({});
h3.args = {
  content: "sdsdf",
  tag: "h3",
};

export const h4 = Template.bind({});
h4.args = {
  content: "sdsdf",
  tag: "h4",
};

export const h5 = Template.bind({});
h5.args = {
  content: "sdsdf",
  tag: "h5",
};

export const h6 = Template.bind({});
h6.args = {
  content: "sdsdf",
  tag: "h6",
};
