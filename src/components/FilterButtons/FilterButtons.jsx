import React, { useState } from "react";
import s from "./Filter.module.scss";
import { FilterInput } from "../UI/filterInput/filterInput";
import { Checkbox } from "../UI/Checkbox/Checkbox";

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
        <FilterInput />
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
            <Checkbox label="В наличии" />
            <Checkbox label="Под заказ" />
            <Checkbox label="Транзит" />
          </div>
        )}
      </div>

      <div className={s.filterButtons__section}>
        <div className={s.filterButtons__section__content}>
          <div style={{ display: "flex" }}>
            <Checkbox
              label="Рейтинг 4 и выше"
              style={{ marginBottom: "0px" }}
            />
            <span className={s.filterButtons__section__content__info}>
              (313)
            </span>
          </div>
        </div>
      </div>

      <div className={s.filterButtons__section}>
        <div className={s.filterButtons__section__content}>
          <label>
            <Checkbox label="Надежные модели" style={{ marginBottom: "0px" }} />
            <div
              className={s.filterButtons__section__content__info}
              style={{ marginLeft: "25px", fontSize: "12px" }}
            >
              минимум обращений в сервис
            </div>
          </label>
        </div>
      </div>

      <div className={s.filterButtons__section}>
        <div className={s.filterButtons__section__content}>
          <div style={{ display: "flex" }}>
            <Checkbox label="Есть обзор" style={{ marginBottom: "0px" }} />
            <span className={s.filterButtons__section__content__info}>
              (92)
            </span>
          </div>
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
            <div style={{ display: "flex", marginTop: "15px" }}>
              <Checkbox label="Менее 7 000 ₽" />
              <span className={s.filterButtons__section__content__info}>
                (92)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="7 001 - 10 000 ₽" />
              <span className={s.filterButtons__section__content__info}>
                (17)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="10 001 - 16 000 ₽" />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="16 001 - 31 000 ₽" />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="31 001 - 49 000 ₽" />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="49 001 и более" />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
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
            <Checkbox label="Графический процессор" />
          </div>
        )}
      </div>
    </div>
  );
};
