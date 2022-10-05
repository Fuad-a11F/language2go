import { FC } from "react";
import { FormElementTypes } from "../../shared/enum/ui/enum";
import styles from "./FormElement.module.scss";

interface FormElementProps {
  type: FormElementTypes;
  placeholder?: string;
  id?: string;
  label?: string;
  radioName?: string;
}

export const FormElement: FC<FormElementProps> = ({
  type,
  placeholder = "",
  label = "",
  id = "",
  radioName = "",
}) => {
  switch (type) {
    case FormElementTypes.checkbox:
      return (
        <div className={styles.formElement}>
          <input type={"checkbox"} id={id} />
          <label htmlFor={id}>{label}</label>
        </div>
      );

    case FormElementTypes.radioButton:
      return (
        <div className={styles.formElement}>
          <input type={"radio"} id={id} name={radioName} />
          <label htmlFor={id}>{label}</label>
        </div>
      );

    case FormElementTypes.input:
      return (
        <div className={styles.formElement}>
          <input type={"text"} placeholder={placeholder} />
        </div>
      );

    case FormElementTypes.textarea:
      return (
        <div className={styles.formElement}>
          <textarea placeholder={placeholder} />
        </div>
      );
  }
};
