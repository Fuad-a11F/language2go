import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Footer } from "./Footer";
import { FormElementTypes } from "../../shared/enum/ui/enum";

export default {
  title: "Example/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});
Primary.args = {};
