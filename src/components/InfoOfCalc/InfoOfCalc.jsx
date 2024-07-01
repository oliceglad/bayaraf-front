import s from "./InfoOfCalc.module.scss";

export const InfoOfCalc = ({ infoList }) => {
  return (
    <div className={s.infoOfCalc}>
      <ul className={s.infoOfCalc__list}>
        {infoList.map((el, key) => (
          <li key={key} className={s.infoOfCalc__list__item}>
            <span>{el.title}</span>
          </li>
        ))}
      </ul>

      <ul className={s.infoOfCalc__list}>
        {infoList.map((el, key) => (
          <li key={key} className={s.infoOfCalc__list__item}>
            <span>{el.info}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
