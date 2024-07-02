import { Title } from "../components/Title/Title";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { DownloadButton } from "../components/UI/downloadButton/downloadButton";
import { ListOfCalc } from "../components/ListOfCalc/ListOfCalc";
import { InfoOfCalc } from "../components/InfoOfCalc/InfoOfCalc";
import { calcList, ordererList } from "../data/data";
import { EditableInfo } from "../components/UI/editableInfo/EditableInfo";
import { useState } from "react";

export const MainPage = () => {
  const [price, setPrice] = useState("300 000 ₽");
  const [percentage, setPercentage] = useState("15 %");
  const [resultPriceBuy, setResultPriceBuy] = useState("1 484 000 ₽");
  const [resultPriceSell, setResultPriceSell] = useState("1 706 600 ₽");
  const [spend, setSpend] = useState("50 000 ₽");
  const [spendDelivery, setSpendDelivery] = useState("4 000 ₽");
  const [delta, setDelta] = useState("168 600 ₽");

  return (
    <main className="main">
      <section className="main__top">
        <div className="main__top__left">
          <Title>Список тендерных расчетов</Title>
          <ListOfCalc />
        </div>
        <div className="main__top__right">
          <Title>Основная информация для расчетной таблицы</Title>
          <div className="main__top__right__flex">
            <InfoOfCalc infoList={calcList} />
            <InfoOfCalc infoList={ordererList} />
          </div>

          <ul className="main__top__right__list">
            <li className="main__top__right__list__item">
              <InfoCard
                head={"Начальная максимальная цена"}
                info={<EditableInfo info={price} setInfo={setPrice} />}
              />
            </li>
            <li className="main__top__right__list__item">
              <InfoCard
                head={"Наценочнная ставка"}
                info={
                  <EditableInfo info={percentage} setInfo={setPercentage} />
                }
              />
            </li>
            <li className="main__top__right__list__item">
              <InfoCard
                head={"Обеспечение заявки"}
                info={<EditableInfo info={spend} setInfo={setSpend} />}
              />
            </li>
            <li className="main__top__right__list__item">
              <InfoCard
                head={`Банковская гарантия`}
                info={<EditableInfo info={spend} setInfo={setSpend} />}
              />
            </li>
            <li className="main__top__right__list__item">
              {" "}
              <InfoCard
                head={"Обеспечение договора"}
                info={<EditableInfo info={spend} setInfo={setSpend} />}
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="main__middle">
        <Title>Расчетная таблица тендерной сессии</Title>
      </section>

      <section className="main__bottom">
        <Title>Итоговая информация по расчетной таблице</Title>
        <ul className="main__bottom__list">
          <li className="main__bottom__list__item">
            <InfoCard head="Начальная максимальная цена" info={price} />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Процентная наценочнная ставка" info={percentage} />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Итоговая стоимость закупки" info={resultPriceBuy} />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard
              head="Итоговая стоимость продажи"
              info={resultPriceSell}
            />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Операционные расходы" info={spend} />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Расходы на доставку" info={spendDelivery} />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Дельта" info={delta} />
          </li>
          <li className="main__bottom__list__item">
            <DownloadButton />
          </li>
        </ul>
      </section>
    </main>
  );
};
