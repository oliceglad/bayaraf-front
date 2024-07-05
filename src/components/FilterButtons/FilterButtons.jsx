import React, { useState } from "react";
import s from "./Filter.module.scss";

export const FilterButtons = () => {
  const [openSections, setOpenSections] = useState({
    availability: false,
    rating: false,
    reliableModels: false,
    hasReview: false,
    price: false,
    manufacturer: false,
    gpu: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className={s.filterButtons}>
      <div className={s.filterButtons__section}>
        <div
          className={s.filterButtons__section__header}
          onClick={() => toggleSection("availability")}
        >
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14.571"
                y="10.3284"
                width="2"
                height="10"
                rx="1"
                transform="rotate(135 14.571 10.3284)"
                fill="white"
              />
              <rect
                x="8.91431"
                y="4.67163"
                width="10"
                height="2"
                rx="1"
                transform="rotate(135 8.91431 4.67163)"
                fill="white"
              />
            </svg>
          </span>
          Наличие в магазинах
        </div>
        {openSections.availability && (
          <div className={s.filterButtons__section__content}>
            <label>
              <input type="checkbox" /> В наличии
            </label>
            <label>
              <input type="checkbox" /> Под заказ
            </label>
            <label>
              <input type="checkbox" /> Транзит
            </label>
          </div>
        )}
      </div>

      <div className={s.filterButtons__section}>
        <div className={s.filterButtons__section__content}>
          <label>
            <input type="checkbox" /> Рейтинг 4 и выше
          </label>
        </div>
      </div>

      <div className={s.filterButtons__section}>
        <div className={s.filterButtons__section__content}>
          <label>
            <input type="checkbox" /> Надежные модели
          </label>
        </div>
      </div>

      <div className={s.filterButtons__section}>
        <div className={s.filterButtons__section__content}>
          <label>
            <input type="checkbox" /> Есть обзор
          </label>
        </div>
      </div>

      <div className={s.filterButtons__section}>
        <div
          className={s.filterButtons__section__header}
          onClick={() => toggleSection("price")}
        >
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14.571"
                y="10.3284"
                width="2"
                height="10"
                rx="1"
                transform="rotate(135 14.571 10.3284)"
                fill="white"
              />
              <rect
                x="8.91431"
                y="4.67163"
                width="10"
                height="2"
                rx="1"
                transform="rotate(135 8.91431 4.67163)"
                fill="white"
              />
            </svg>
          </span>
          Цена
        </div>
        {openSections.price && (
          <div className={s.filterButtons__section__content}>
            <input type="number" placeholder="от" min="0" />
            <input type="number" placeholder="до" min="0" />
            <label>
              <input type="checkbox" /> Менее 7 000 ₽
            </label>
            <label>
              <input type="checkbox" /> 7 001 - 10 000 ₽
            </label>
            <label>
              <input type="checkbox" /> 10 001 - 16 000 ₽
            </label>
            <label>
              <input type="checkbox" /> 16 001 - 31 000 ₽
            </label>
            <label>
              <input type="checkbox" /> 31 001 - 49 000 ₽
            </label>
            <label>
              <input type="checkbox" /> 49 001 и более
            </label>
          </div>
        )}
      </div>

      <div className={s.filterButtons__section}>
        <div
          className={s.filterButtons__section__header}
          onClick={() => toggleSection("manufacturer")}
        >
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14.571"
                y="10.3284"
                width="2"
                height="10"
                rx="1"
                transform="rotate(135 14.571 10.3284)"
                fill="white"
              />
              <rect
                x="8.91431"
                y="4.67163"
                width="10"
                height="2"
                rx="1"
                transform="rotate(135 8.91431 4.67163)"
                fill="white"
              />
            </svg>
          </span>
          Производитель
        </div>
        {openSections.manufacturer && (
          <div className={s.filterButtons__section__content}>
            <input type="text" placeholder="Поиск" />
            <label>
              <input type="checkbox" /> Все производители
            </label>
            <label>
              <input type="checkbox" /> Asrock
            </label>
            <label>
              <input type="checkbox" /> ASUS
            </label>
            <label>
              <input type="checkbox" /> GIGABYTE
            </label>
          </div>
        )}
      </div>

      <div className={s.filterButtons__section}>
        <div
          className={s.filterButtons__section__header}
          onClick={() => toggleSection("gpu")}
        >
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14.571"
                y="10.3284"
                width="2"
                height="10"
                rx="1"
                transform="rotate(135 14.571 10.3284)"
                fill="white"
              />
              <rect
                x="8.91431"
                y="4.67163"
                width="10"
                height="2"
                rx="1"
                transform="rotate(135 8.91431 4.67163)"
                fill="white"
              />
            </svg>
          </span>
          Графический процессор
        </div>
        {openSections.gpu && (
          <div className={s.filterButtons__section__content}>
            <label>
              <input type="checkbox" /> Графический процессор
            </label>
          </div>
        )}
      </div>
    </div>
  );
};
