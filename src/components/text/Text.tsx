import { FC } from "react";
import styles from "./Text.module.scss";

interface TextProps {
  content: string;
}

export const Text: FC<TextProps> = ({ content }) => {
  return <p>{content}</p>;
};
