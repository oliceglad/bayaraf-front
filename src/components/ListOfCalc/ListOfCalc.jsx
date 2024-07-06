import s from "./ListOfCalc.module.scss";

export const ListOfCalc = ({theme}) => {
  return (
    <div className={`${s.listOfCalc} ${theme}`}>
      <ol className={`${s.listOfCalc__list} ${theme}`}>
        <li className={s.listOfCalc__list__item}>1. Поставка системных блоков</li>
        <li className={s.listOfCalc__list__item}>2. Поставка сервера</li>
      </ol>

      <button className={s.listOfCalc__button}>
        + Добавить новый расчет
      </button>
    </div>
  );
};
