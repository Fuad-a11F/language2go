import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FormElement } from "./FormElement";
import { FormElementTypes } from "../../shared/enum/ui/enum";

export default {
  title: "Example/FormElement",
  component: FormElement,
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args) => (
  <FormElement {...args} />
);

export const radio = Template.bind({});
radio.args = {
  type: FormElementTypes.radioButton,
  radioName: "test",
  label: "Радио",
};

export const checkbox = Template.bind({});
checkbox.args = {
  type: FormElementTypes.checkbox,
  id: "test",
  label: "Чекбокс",
};

export const input = Template.bind({});
input.args = {
  type: FormElementTypes.input,
  placeholder: "Поле",
};

export const textarea = Template.bind({});
textarea.args = {
  type: FormElementTypes.textarea,
  placeholder: "Текстовое поле",
};
