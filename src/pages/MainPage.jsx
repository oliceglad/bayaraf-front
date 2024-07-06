import { Title } from "../components/Title/Title";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { DownloadButton } from "../components/UI/downloadButton/downloadButton";
import { ListOfCalc } from "../components/ListOfCalc/ListOfCalc";
import { InfoOfCalc } from "../components/InfoOfCalc/InfoOfCalc";
import { calcList, ordererList } from "../data/data";
import { EditableInfo } from "../components/UI/editableInfo/EditableInfo";
import { useState } from "react";
import { TableOfCalc } from "../components/TableOfCalc/TableOfCalc";

export const MainPage = ({ theme }) => {
  const [price, setPrice] = useState("300 000 ₽");
  const [percentage, setPercentage] = useState("15 %");
  const [resultPriceBuy, setResultPriceBuy] = useState("1 484 000 ₽");
  const [resultPriceSell, setResultPriceSell] = useState("1 706 600 ₽");
  const [spend, setSpend] = useState("50 000 ₽");
  const [spendDelivery, setSpendDelivery] = useState("4 000 ₽");
  const [delta, setDelta] = useState("168 600 ₽");

  return (
    <main className={`main ${theme}`}>
      <section className="main__top">
        <div className="main__top__left">
          <Title theme={theme.theme}>Список тендерных расчетов</Title>
          <ListOfCalc theme={theme.theme} />
        </div>
        <div className="main__top__right">
          <Title theme={theme.theme}>
            Основная информация для расчетной таблицы
          </Title>
          <div className="main__top__right__flex">
            <InfoOfCalc infoList={calcList} theme={theme.theme} />
            <InfoOfCalc infoList={ordererList} theme={theme.theme} />
          </div>

          <ul className="main__top__right__list">
            <li className="main__top__right__list__item">
              <InfoCard
                head={
                  <div>
                    Начальная <br /> максимальная цена
                  </div>
                }
                theme={theme.theme}
                info={
                  <EditableInfo
                    info={price}
                    setInfo={setPrice}
                    theme={theme.theme}
                  />
                }
              />
            </li>
            <li className="main__top__right__list__item">
              <InfoCard
                head={
                  <div>
                    Наценочная <br /> ставка
                  </div>
                }
                theme={theme.theme}
                info={
                  <EditableInfo
                    info={percentage}
                    setInfo={setPercentage}
                    theme={theme.theme}
                  />
                }
              />
            </li>
            <li className="main__top__right__list__item">
              <InfoCard
                head={
                  <div>
                    Обеспечение <br /> заявки
                  </div>
                }
                theme={theme.theme}
                info={
                  <EditableInfo
                    info={spend}
                    setInfo={setSpend}
                    theme={theme.theme}
                  />
                }
              />
            </li>
            <li className="main__top__right__list__item">
              <InfoCard
                head={
                  <div>
                    Банковская <br /> гарантия
                  </div>
                }
                theme={theme.theme}
                info={
                  <EditableInfo
                    info={spend}
                    setInfo={setSpend}
                    theme={theme.theme}
                  />
                }
              />
            </li>
            <li className="main__top__right__list__item">
              {" "}
              <InfoCard
                head={
                  <div>
                    Обеспечение <br /> договора
                  </div>
                }
                theme={theme.theme}
                info={
                  <EditableInfo
                    info={spend}
                    setInfo={setSpend}
                    theme={theme.theme}
                  />
                }
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="main__middle">
        <Title theme={theme.theme}>Расчетная таблица тендерной сессии</Title>

        <TableOfCalc theme={theme.theme}/>
      </section>

      <section className="main__bottom">
        <Title theme={theme.theme}>
          Итоговая информация по расчетной таблице
        </Title>
        <ul className="main__bottom__list">
          <li className="main__bottom__list__item">
            <InfoCard head="Начальная максимальная цена" info={price} theme={theme.theme}/>
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Процентная наценочнная ставка" info={percentage} theme={theme.theme}/>
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Итоговая стоимость закупки" info={resultPriceBuy} theme={theme.theme}/>
          </li>
          <li className="main__bottom__list__item">
            <InfoCard
              head="Итоговая стоимость продажи"
              info={resultPriceSell}
              theme={theme.theme}
            />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Операционные расходы" info={spend} theme={theme.theme}/>
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Расходы на доставку" info={spendDelivery} theme={theme.theme}/>
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Дельта" info={delta} theme={theme.theme}/>
          </li>
          <li className="main__bottom__list__item">
            <DownloadButton theme={theme.theme}/>
          </li>
        </ul>
      </section>
    </main>
  );
};
