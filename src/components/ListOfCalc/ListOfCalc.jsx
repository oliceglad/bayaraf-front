import s from "./ListOfCalc.module.scss";

export const ListOfCalc = () => {
  return (
    <div className={s.listOfCalc}>
      <ol className={s.listOfCalc__list}>
        <li className={s.listOfCalc__list__item}>1. Поставка системных блоков</li>
        <li className={s.listOfCalc__list__item}>2. Поставка сервера</li>
      </ol>

      <button className={s.listOfCalc__button}>
        + Добавить новый расчет
      </button>
    </div>
  );
};
