import { Title } from "../components/Title/Title";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { DownloadButton } from "../components/UI/downloadButton/downloadButton";
import { ListOfCalc } from "../components/ListOfCalc/ListOfCalc";
import { InfoOfCalc } from "../components/InfoOfCalc/InfoOfCalc";
import { calcList, ordererList } from "../data/data";

export const MainPage = () => {
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
        </div>
      </section>

      <section className="main__middle">
        <Title>Расчетная таблица тендерной сессии</Title>
      </section>

      <section className="main__bottom">
        <Title>Итоговая информация по расчетной таблице</Title>
        <ul className="main__bottom__list">
          <li className="main__bottom__list__item">
            <InfoCard head="Начальная максимальная цена" info="300 000 ₽" />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Начальная максимальная цена" info="300 000 ₽" />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Начальная максимальная цена" info="300 000 ₽" />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Начальная максимальная цена" info="300 000 ₽" />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Начальная максимальная цена" info="300 000 ₽" />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Начальная максимальная цена" info="300 000 ₽" />
          </li>
          <li className="main__bottom__list__item">
            <InfoCard head="Начальная максимальная цена" info="300 000 ₽" />
          </li>
          <li className="main__bottom__list__item">
            <DownloadButton />
          </li>
        </ul>
      </section>
    </main>
  );
};
