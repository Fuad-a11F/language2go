import { FC } from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  content: string;
  tag?: any;
}

export const Title: FC<TitleProps> = ({ content, tag: Tag = "h2" }) => {
  return <Tag>{content}</Tag>;
};
