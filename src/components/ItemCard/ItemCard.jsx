import s from "./ItemCard.module.scss";
import item from "../../assets/img/item.png";
import { Button } from "../UI/Button/Button";

export const ItemCard = ({ title, price }) => {
  return (
    <div className={s.itemCard}>
      <img src={item} className={s.itemCard__img} />

      <div className={s.itemCard__main}>
        <h3 className={s.itemCard__main__top}>{title}</h3>

        <div className={s.itemCard__main__bottom}>
          <span className={s.itemCard__main__bottom__price}>{price} ₽</span>

          <div className={s.itemCard__main__bottom__buttons}>
            <Button>
              Добавить в расчет
            </Button>

            <a href="#" className={s.itemCard__main__bottom__buttons__like}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 7.30276L11.9153 6.09926C11.0666 4.35211 9.27596 3.15 7.20585 3.15C4.31612 3.15 1.97353 5.49256 1.97349 8.38228L12.5 7.30276ZM12.5 7.30276L13.0846 6.09926M12.5 7.30276L13.0846 6.09926M13.0846 6.09926C13.9334 4.35211 15.724 3.15 17.7941 3.15C20.6839 3.15 23.0265 5.49261 23.0265 8.38236L23.0262 8.43236L23.0262 8.43269M13.0846 6.09926L23.0262 8.43269M23.0262 8.43269C23.0072 10.581 21.7731 13.3727 19.7572 15.955M23.0262 8.43269L19.7572 15.955M19.7572 15.955C17.8099 18.4493 15.2104 20.6475 12.5 21.797M19.7572 15.955L12.5 21.797M12.5 21.797C9.7784 20.6428 7.16865 18.4312 5.21892 15.9244C3.20028 13.329 1.97349 10.5277 1.97349 8.38229L12.5 21.797Z"
                  stroke="white"
                  stroke-width="1.3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
