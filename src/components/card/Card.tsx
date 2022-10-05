import styles from "./Card.module.scss";
import { FC } from "react";
import german from "../../assets/img/sprites/german.svg";
import china from "../../assets/img/sprites/china.svg";
import spain from "../../assets/img/sprites/spain.svg";
import { Title } from "../title/Title";
import { Languages, LanguagesLevel } from "../../shared/enum/ui/enum";
import classNames from "classnames";
import { levelCourse } from "../../shared/helper/levelCourse";
import { languageCourse } from "../../shared/helper/languageCourse";

interface CardProps {
  language: Languages;
  level: LanguagesLevel;
  hours: number;
  modules: number;
  price: string;
}

export const Card: FC<CardProps> = ({
  language,
  level,
  hours,
  modules,
  price,
}) => {
  const getCorrectFlag = () => {
    if (language === Languages.german) return german;
    else if (language === Languages.spain) return spain;
    else if (language === Languages.china) return china;
  };

  const getCorrectTitleContent = () => {
    return `${languageCourse(Languages[language])} для ${levelCourse(
      LanguagesLevel[level]
    )} уровня`;
  };

  return (
    <div
      className={classNames(styles.card, {
        [styles["card__german"]]: language === Languages.german,
        [styles["card__spain"]]: language === Languages.spain,
        [styles["card__china"]]: language === Languages.china,
      })}
    >
      <div className={styles.card__img}>
        <img src={getCorrectFlag()} alt="flag" />
      </div>

      <div className={styles.card__title}>
        <Title content={getCorrectTitleContent()} />
      </div>

      <div className={styles.card__period}>
        <span>Длительность: </span>
        <span>{hours} часов</span>
      </div>

      <div className={styles.card__module}>
        <span>Модулей: </span>
        <span>{modules}</span>
      </div>

      <div className={styles.card__row}>
        <div className={styles.card__link}>Узнать подробнее</div>

        <div className={styles.card__price}>{price}</div>
      </div>
    </div>
  );
};
