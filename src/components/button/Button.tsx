import styles from "./Button.module.scss";
import classNames from "classnames";
import { FC } from "react";

interface ButtonProps {
  outline?: boolean;
  content: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  outline,
  content,
  disabled = false,
}) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles["button--outline"]]: outline,
      })}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
