import React, { useState } from "react";
import s from "./Filter.module.scss";
import { FilterInput } from "../UI/filterInput/filterInput";
import { Checkbox } from "../UI/Checkbox/Checkbox";
import { Input } from "../UI/Input/Input";

export const FilterButtons = ({ theme }) => {
  const [openSections, setOpenSections] = useState({
    availability: false,
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
    <div className={`${s.filterButtons} ${theme}`}>
      <div className={s.filterButtons__section}>
        <FilterInput theme={theme} />
        <div
          className={`${s.filterButtons__section__header} ${theme}`}
          onClick={() => toggleSection("availability")}
        >
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className={openSections.availability ? `${s.isOpened}` : ""}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14.571"
                y="10.3284"
                width="2"
                height="10"
                rx="1"
                transform="rotate(135 14.571 10.3284)"
                fill={theme === "light" ? "black" : "white"}
              />
              <rect
                x="8.91431"
                y="4.67163"
                width="10"
                height="2"
                rx="1"
                transform="rotate(135 8.91431 4.67163)"
                fill={theme === "light" ? "black" : "white"}
              />
            </svg>
          </span>
          Наличие в магазинах
        </div>
        {openSections.availability && (
          <div className={`${s.filterButtons__section__content} ${theme}`}>
            <Checkbox label="В наличии" theme={theme} />
            <Checkbox label="Под заказ" theme={theme} />
            <Checkbox label="Транзит" theme={theme} />
          </div>
        )}
      </div>

      <div className={s.filterButtons__section}>
        <div className={`${s.filterButtons__section__content} ${theme}`}>
          <div style={{ display: "flex" }}>
            <Checkbox
              label="Рейтинг 4 и выше"
              style={{ marginBottom: "0px" }}
              theme={theme}
            />
            <span className={s.filterButtons__section__content__info}>
              (313)
            </span>
          </div>
        </div>
      </div>

      <div className={s.filterButtons__section}>
        <div className={`${s.filterButtons__section__content} ${theme}`}>
          <label>
            <Checkbox
              label="Надежные модели"
              style={{ marginBottom: "0px" }}
              theme={theme}
            />
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
        <div className={`${s.filterButtons__section__content} ${theme}`}>
          <div style={{ display: "flex" }}>
            <Checkbox
              label="Есть обзор"
              style={{ marginBottom: "0px" }}
              theme={theme}
            />
            <span className={s.filterButtons__section__content__info}>
              (92)
            </span>
          </div>
        </div>
      </div>

      <div className={s.filterButtons__section}>
        <div
          className={`${s.filterButtons__section__header} ${theme}`}
          onClick={() => toggleSection("price")}
        >
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className={openSections.price ? `${s.isOpened}` : ""}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14.571"
                y="10.3284"
                width="2"
                height="10"
                rx="1"
                transform="rotate(135 14.571 10.3284)"
                fill={theme === "light" ? "black" : "white"}
              />
              <rect
                x="8.91431"
                y="4.67163"
                width="10"
                height="2"
                rx="1"
                transform="rotate(135 8.91431 4.67163)"
                fill={theme === "light" ? "black" : "white"}
              />
            </svg>
          </span>
          Цена
        </div>
        {openSections.price && (
          <div className={`${s.filterButtons__section__content} ${theme}`}>
            <div style={{ display: "flex" }}>
              <Input
                type="number"
                placeholder="от 2899"
                min="0"
                theme={theme}
              />
              <Input
                type="number"
                placeholder="до 300 000"
                min="0"
                theme={theme}
              />
            </div>
            <div style={{ display: "flex", marginTop: "15px" }}>
              <Checkbox label="Менее 7 000 ₽" theme={theme} />
              <span className={s.filterButtons__section__content__info}>
                (92)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="7 001 - 10 000 ₽" theme={theme} />
              <span className={s.filterButtons__section__content__info}>
                (17)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="10 001 - 16 000 ₽" theme={theme} />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="16 001 - 31 000 ₽" theme={theme} />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="31 001 - 49 000 ₽" theme={theme} />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="49 001 и более" theme={theme} />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
          </div>
        )}
      </div>

      <div className={s.filterButtons__section}>
        <div
          className={`${s.filterButtons__section__header} ${theme}`}
          onClick={() => toggleSection("manufacturer")}
        >
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className={openSections.manufacturer ? `${s.isOpened}` : ""}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14.571"
                y="10.3284"
                width="2"
                height="10"
                rx="1"
                transform="rotate(135 14.571 10.3284)"
                fill={theme === "light" ? "black" : "white"}
              />
              <rect
                x="8.91431"
                y="4.67163"
                width="10"
                height="2"
                rx="1"
                transform="rotate(135 8.91431 4.67163)"
                fill={theme === "light" ? "black" : "white"}
              />
            </svg>
          </span>
          Производитель
        </div>
        {openSections.manufacturer && (
          <div className={`${s.filterButtons__section__content} ${theme}`}>
            <Input
              isSearch={true}
              placeholder="Поиск"
              type="text"
              theme={theme}
            />
            <div
              style={{
                display: "flex",
                paddingBottom: "10px",
                borderBottom: "1px solid #6F7580",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <Checkbox label="Все производители" theme={theme} />
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="ASROCK" theme={theme} />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="ASUS" theme={theme} />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox label="GIGABYTE" theme={theme} />
              <span className={s.filterButtons__section__content__info}>
                (355)
              </span>
            </div>
          </div>
        )}
      </div>

      <div className={s.filterButtons__section}>
        <div
          className={`${s.filterButtons__section__header} ${theme}`}
          onClick={() => toggleSection("gpu")}
        >
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className={openSections.gpu ? `${s.isOpened}` : ""}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14.571"
                y="10.3284"
                width="2"
                height="10"
                rx="1"
                transform="rotate(135 14.571 10.3284)"
                fill={theme === "light" ? "black" : "white"}
              />
              <rect
                x="8.91431"
                y="4.67163"
                width="10"
                height="2"
                rx="1"
                transform="rotate(135 8.91431 4.67163)"
                fill={theme === "light" ? "black" : "white"}
              />
            </svg>
          </span>
          Графический процессор
        </div>
        {openSections.gpu && (
          <div className={`${s.filterButtons__section__content} ${theme}`}>
            <Checkbox label="Графический процессор" theme={theme} />
          </div>
        )}
      </div>
    </div>
  );
};
