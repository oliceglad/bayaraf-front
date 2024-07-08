import { useState } from "react";
import s from "./Navigate.module.scss";
import { navItems } from "../../data/data";

export const NavigateButton = ({theme}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };


  return (
    <nav className={`${s.navigate} ${theme}`}>
      <ul className={s.navigate__list}>
        {navItems.map((item, index) => (
          <li key={index} className={s.navigate__list__item}>
            <a
              href={item.nav}
              className={index === activeIndex ? s.active : ""}
              onClick={() => handleClick(index)}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
