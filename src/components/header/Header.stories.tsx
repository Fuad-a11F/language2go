import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header } from "./Header";
import { FormElementTypes } from "../../shared/enum/ui/enum";

export default {
  title: "Example/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  login: true,
};
