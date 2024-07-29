import { useState, useRef } from "react";
import s from "./InfoOfCalc.module.scss";

export const InfoOfCalc = ({ infoList, theme }) => {
  const [infoOfCalc, setInfo] = useState(infoList);
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    handleInfoChange(index, event.target.value);
  };

  const handleInfoChange = (index, newInfo) => {
    const updatedInfoList = infoOfCalc.map((item, idx) =>
      idx === index ? { ...item, info: newInfo } : item
    );
    setInfo(updatedInfoList);
  };

  const focusInput = (index) => {
    inputRefs.current[index].focus();
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
              ref={(element) => (inputRefs.current[key] = element)}
            />
            <span
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={() => focusInput(key)}
            >
              <svg
                width="10px"
                height="10px"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9819 4.70291L16.237 4.44776C17.2543 3.43047 17.2543 1.78026 16.237 0.76297C15.2197 -0.254323 13.5695 -0.254323 12.5522 0.76297L12.2971 1.01812L15.9819 4.70291Z"
                  fill="#0075FF"
                />
                <path
                  d="M11.1604 2.15471L0.825101 12.49L0 16.9999L4.50989 16.1748L14.8452 5.83949L11.1604 2.15471Z"
                  fill="#0075FF"
                />
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
