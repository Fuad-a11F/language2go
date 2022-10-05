import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Card } from "./Card";
import { Languages, LanguagesLevel } from "../../shared/enum/ui/enum";

export default {
  title: "Example/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const German = Template.bind({});
German.args = {
  language: Languages.german,
  level: LanguagesLevel.beginner,
  price: "от 6 549 Р",
  modules: 3,
  hours: 45,
};
