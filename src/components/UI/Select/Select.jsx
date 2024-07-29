import { useState, useRef, useEffect } from "react";
import s from "./Select.module.scss";

export const Select = ({ options, selected, onChange, theme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected);
  const selectRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={s.customSelect} ref={selectRef}>
      <div className={s.customSelect__header} onClick={handleToggle}>
        {selectedOption}
        <span className={s.customSelect__arrow}>
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className={isOpen ? `${s.isOpened}` : ""}
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
        </span>
      </div>
      {isOpen && (
        <ul className={`${s.customSelect__list} ${theme}`} style={theme === "light" ? {border: "1px solid #6F7580", borderRadius: "4px"} : {}}>
          {options.map((option, index) => (
            <li
              key={index}
              className={s.customSelect__list__item}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
