import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text } from "./Text";
import { FormElementTypes } from "../../shared/enum/ui/enum";

export default {
  title: "Example/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: "sdsdf",
};
