import React, { useState } from "react";
import s from "./UltimateFilter.module.scss";
import { FilterInput } from "../UI/filterInput/filterInput";
import { Checkbox } from "../UI/Checkbox/Checkbox";
import { Input } from "../UI/Input/Input";

export const UltimateFilter = () => {
  const [openSections, setOpenSections] = useState({
    availability: false,
    price: false,
    manufacturer: false,
    gpu: false,
    effectGpu: false,
    itemsGpu: false,
    factory: false,
    assign: false,
    lhr: false,
    color: false,
    tech: false,
    type: false,
    archi: false,
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
        <h3 id="main">Основные</h3>
        <Input
          isSearch={true}
          type="text"
          placeholder="Поиск по категориям"
          style={{ maxWidth: "300px" }}
        />
        <div style={{ display: "flex" }}>
          <ul className={s.filterButtons__section__list__left}>
            <li>
              {" "}
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
                {openSections.availability ? (
                  <span style={{ fontWeight: "bold" }}>
                    Наличие в магазинах
                  </span>
                ) : (
                  "Наличие в магазинах"
                )}
              </div>
              {openSections.availability && (
                <div className={s.filterButtons__section__content}>
                  <Checkbox label="В наличии" />
                  <Checkbox label="Под заказ" />
                  <Checkbox label="Транзит" />
                </div>
              )}
            </li>
            <li>
              {" "}
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
                {openSections.price ? (
                  <span style={{ fontWeight: "bold" }}>Цена</span>
                ) : (
                  "Цена"
                )}
              </div>
              {openSections.price && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex" }}>
                    <Input type="number" placeholder="от 2899" min="0" />
                    <Input type="number" placeholder="до 300 000" min="0" />
                  </div>
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
            </li>
          </ul>
          <ul className={s.filterButtons__section__list__right}>
            <li>
              {" "}
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
                {openSections.manufacturer ? (
                  <span style={{ fontWeight: "bold" }}>Производитель</span>
                ) : (
                  "Производитель"
                )}
              </div>
              {openSections.manufacturer && (
                <div className={s.filterButtons__section__content}>
                  <Input isSearch={true} placeholder="Поиск" type="text" />
                  <div
                    style={{
                      display: "flex",
                      paddingBottom: "10px",
                      borderBottom: "1px solid #6F7580",
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <Checkbox label="Все производители" />
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="ASROCK" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="ASUS" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="GIGABYTE" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                </div>
              )}
            </li>
            <li>
              {" "}
              <div
                className={s.filterButtons__section__header}
                onClick={() => toggleSection("factory")}
              >
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={openSections.factory ? `${s.isOpened}` : ""}
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
                {openSections.factory ? (
                  <span style={{ fontWeight: "bold" }}>Гарантия</span>
                ) : (
                  "Гарантия"
                )}
              </div>
              {openSections.factory && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="1 год" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="2 года" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="3 года" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={s.filterButtons__section}>
        <h3 id="info">Общие параметры</h3>
        <div style={{ display: "flex" }}>
          <ul className={s.filterButtons__section__list__left}>
            <li>
              {" "}
              <div
                className={s.filterButtons__section__header}
                onClick={() => toggleSection("assign")}
              >
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={openSections.assign ? `${s.isOpened}` : ""}
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
                {openSections.assign ? (
                  <span style={{ fontWeight: "bold" }}>Назначение</span>
                ) : (
                  "Назначение"
                )}
              </div>
              {openSections.assign && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="игровая видеокарта" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="видеокарта для дома и офиса" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="профессиональная видеокарта" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                </div>
              )}
            </li>
            <li>
              {" "}
              <div
                className={s.filterButtons__section__header}
                onClick={() => toggleSection("color")}
              >
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={openSections.color ? `${s.isOpened}` : ""}
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
                {openSections.color ? (
                  <span style={{ fontWeight: "bold" }}>Цвет</span>
                ) : (
                  "Цвет"
                )}
              </div>
              {openSections.color && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <Checkbox label="белый" />
                    <span className={s.filterButtons__section__content__info}>
                      (92)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="золотой" />
                    <span className={s.filterButtons__section__content__info}>
                      (17)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="красный" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="розовый" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="серебристый" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="серый" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <ul className={s.filterButtons__section__list__right}>
            <li>
              {" "}
              <div
                className={s.filterButtons__section__header}
                onClick={() => toggleSection("lhr")}
              >
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={openSections.lhr ? `${s.isOpened}` : ""}
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
                {openSections.lhr ? (
                  <span style={{ fontWeight: "bold" }}>LHR</span>
                ) : (
                  "LHR"
                )}
              </div>
              {openSections.lhr && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="есть" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="нет" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                </div>
              )}
            </li>
            <li>
              {" "}
              <div
                className={s.filterButtons__section__header}
                onClick={() => toggleSection("type")}
              >
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={openSections.type ? `${s.isOpened}` : ""}
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
                {openSections.type ? (
                  <span style={{ fontWeight: "bold" }}>Тип</span>
                ) : (
                  "Тип"
                )}
              </div>
              {openSections.type && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="видеокарта" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={s.filterButtons__section}>
        <h3 id="spec">Спецификации видеопроцессора</h3>
        <div style={{ display: "flex" }}>
          <ul className={s.filterButtons__section__list__left}>
            <li>
              {" "}
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
                {openSections.gpu ? (
                  <span style={{ fontWeight: "bold" }}>
                    Графический процессор
                  </span>
                ) : (
                  "Графический процессор"
                )}
              </div>
              {openSections.gpu && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="игровая видеокарта" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                </div>
              )}
            </li>
            <li>
              {" "}
              <div
                className={s.filterButtons__section__header}
                onClick={() => toggleSection("effectGpu")}
              >
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={openSections.effectGpu ? `${s.isOpened}` : ""}
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
                {openSections.effectGpu ? (
                  <span style={{ fontWeight: "bold" }}>
                    Производительность графического <br /> процессора
                  </span>
                ) : (
                  <span>
                    Производительность графического <br /> процессора
                  </span>
                )}
              </div>
              {openSections.effectGpu && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <Checkbox label="белый" />
                    <span className={s.filterButtons__section__content__info}>
                      (92)
                    </span>
                  </div>
                </div>
              )}
            </li>
            <li>
              {" "}
              <div
                className={s.filterButtons__section__header}
                onClick={() => toggleSection("itemsGpu")}
              >
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={openSections.itemsGpu ? `${s.isOpened}` : ""}
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
                {openSections.itemsGpu ? (
                  <span style={{ fontWeight: "bold" }}>
                    Линейка графических процессоров
                  </span>
                ) : (
                  "Линейка графических процессоров"
                )}
              </div>
              {openSections.itemsGpu && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <Checkbox label="белый" />
                    <span className={s.filterButtons__section__content__info}>
                      (92)
                    </span>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <ul className={s.filterButtons__section__list__right}>
            <li>
              {" "}
              <div
                className={s.filterButtons__section__header}
                onClick={() => toggleSection("tech")}
              >
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={openSections.tech ? `${s.isOpened}` : ""}
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
                {openSections.tech ? (
                  <span style={{ fontWeight: "bold" }}>Техпроцессор (нм)</span>
                ) : (
                  "Техпроцессор (нм)"
                )}
              </div>
              {openSections.tech && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="есть" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="нет" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                </div>
              )}
            </li>
            <li>
              {" "}
              <div
                className={s.filterButtons__section__header}
                onClick={() => toggleSection("archi")}
              >
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={openSections.archi ? `${s.isOpened}` : ""}
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
                {openSections.archi ? (
                  <span style={{ fontWeight: "bold" }}>Микроархитектура</span>
                ) : (
                  "Микроархитектура"
                )}
              </div>
              {openSections.archi && (
                <div className={s.filterButtons__section__content}>
                  <div style={{ display: "flex" }}>
                    <Checkbox label="1 год" />
                    <span className={s.filterButtons__section__content__info}>
                      (355)
                    </span>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
