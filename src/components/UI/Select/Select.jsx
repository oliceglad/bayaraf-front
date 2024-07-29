import { useState, useRef, useEffect } from "react";
import s from "./Select.module.scss";

export const Select = ({ options, selected, onChange }) => {
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
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <ul className={s.customSelect__list}>
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
