import { NavLink } from "react-router-dom";
import { CatalogData } from "../../data/data";
import s from "./Burger.module.scss";

export const Burger = ({isVisible, theme}) => {
  return (
    <div className={`${theme} ${s.burger}`} style={isVisible ? {display: "block"} : {display: "none"}}>
      <h2 className={s.burger__title}>Каталог товаров</h2>
        {/* TODO Сделать табы для бургера  */}
      <div className={s.burger__right}>
        <h3 className={s.burger__right__title}>
          Основные комплектующие для пк
        </h3>
        <ul className={s.burger__right__list}>
          {CatalogData.map((el, key) => (
            <NavLink to="/" key={key} className={s.burger__right__list__item}>
              {el.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};
