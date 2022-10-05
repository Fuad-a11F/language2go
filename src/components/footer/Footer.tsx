import styles from "./Footer.module.scss";
import { Title } from "../title/Title";
import logo from "../../assets/img/logo_white.svg";
import mastercard from "../../assets/img/sprites/mastercard.svg";
import visa from "../../assets/img/sprites/visa.svg";
import mir from "../../assets/img/sprites/mir.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__grid}>
          <div className={styles.footer__column}>
            <img src={logo} alt="logo" />

            <ul className={styles.footer__list}>
              <li className={styles["footer__list-item"]}>
                Language2Go — интерактивная платформа для легкого, удобного и
                быстрого изучения иностранных языков.
              </li>
            </ul>

            <ul className={styles.footer__cards}>
              <li>
                <img src={visa} alt="visa" />
              </li>
              <li>
                <img src={mastercard} alt="mastercard" />
              </li>
              <li>
                <img src={mir} alt="mir" />
              </li>
            </ul>
          </div>

          <div className={styles.footer__column}>
            <Title content={"Обучение"} tag={"h3"} />

            <ul>
              <li>Все языки</li>
              <li>Взрослым</li>
              <li>Детям и подросткам</li>
              <li>Мини-курсы</li>
              <li>Тренажеры</li>
              <li>Индивидуальные занятия</li>
            </ul>
          </div>

          <div className={styles.footer__column}>
            <Title content={"Информация"} tag={"h3"} />

            <ul>
              <li>О нас</li>
              <li>Отзывы</li>
              <li>Новости</li>
              <li>Частые вопросы</li>
              <li>Условия оплаты</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div className={styles.footer__column}>
            <Title content={"Контакты"} tag={"h3"} />
            <Title content={"+7 (495) 156-35-50"} tag={"h3"} />

            <ul>
              <li>
                info@language2go.ru <br /> support@language2go.ru
              </li>
              <li>101000, Москва, Россия</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
