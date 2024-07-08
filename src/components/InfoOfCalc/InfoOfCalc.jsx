import { useState } from "react";
import s from "./InfoOfCalc.module.scss";

export const InfoOfCalc = ({ infoList, theme }) => {
  const [infoOfCalc, setInfo] = useState(infoList);

  const handleInputChange = (index, event) => {
    handleInfoChange(index, event.target.value);
  };

  const handleInfoChange = (index, newInfo) => {
    const updatedInfoList = infoOfCalc.map((item, idx) =>
      idx === index ? { ...item, info: newInfo } : item
    );
    setInfo(updatedInfoList);
  };


  return (
    <div className={`${s.infoOfCalc} ${theme}`}>
      <ul className={s.infoOfCalc__list}>
        {infoList.map((el, key) => (
          <li key={key} className={s.infoOfCalc__list__item}>
            <span>{el.title}</span>
          </li>
        ))}
      </ul>

      <ul className={s.infoOfCalc__list}>
        {infoOfCalc.map((el, key) => (
          <li key={key} className={s.infoOfCalc__list__item}>
            <input
              type="text"
              value={el.info}
              onChange={(e) => handleInputChange(key, e)}
              className={`${s.infoOfCalc__list__item__input} ${theme}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
