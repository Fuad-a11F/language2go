import { FC } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import { Button } from "../button/Button";
import arrowDown from "../../assets/img/sprites/arrowdown.svg";
import classNames from "classnames";

interface HeaderProps {
  login: boolean;
}

export const Header: FC<HeaderProps> = ({ login }) => {
  const handleOpenDropdown = (e: any) => {
    e.target
      .closest("." + styles["header__links-dropdown"])
      .classList.toggle(styles.active);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__row}>
        <div className={styles.header__logo}>
          {/*<Link to={"/"}>*/}
          <img src={logo} alt="" width={120} height={40} />
          {/*</Link>*/}
        </div>

        <div className={styles.header__links}>
          <ul>
            <li>Курсы</li>
            <li>О нас</li>
            <li>Блог</li>
            <li
              className={classNames(styles["header__links-dropdown"], {
                [styles.active]: false,
              })}
              onClick={handleOpenDropdown}
            >
              Еще
              <img src={arrowDown} alt="arrow down" width={12} height={6} />
              <div onClick={(e) => e.stopPropagation()}>
                <ul>
                  <li>FAQ</li>
                  <li>Контакты</li>
                  <li>Условия оплаты</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.header__login}>
          <Button content={"Войти"} />
        </div>
      </div>
    </header>
  );
};
