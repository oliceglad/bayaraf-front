import { useState } from "react";
import s from "./Navigate.module.scss";

export const NavigateButton = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const navItems = [
    "Основные",
    "Рейтинг и обзоры",
    "Общие параметры",
    "Спецификации Видеопроцессора",
    "Спецификации видеопамяти",
    "Вывод изображения",
    "Подключение",
    "Система охлаждения",
    "Дополнительно",
    "Габариты и вес",
  ];

  return (
    <nav className={s.navigate}>
      <ul className={s.navigate__list}>
        {navItems.map((item, index) => (
          <li key={index} className={s.navigate__list__item}>
            <a
              href="#"
              className={index === activeIndex ? s.active : ""}
              onClick={() => handleClick(index)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
