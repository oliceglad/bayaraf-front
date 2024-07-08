import React from "react";
import PropTypes from "prop-types";
import s from "./Input.module.scss";

export const Input = ({
  type,
  isSearch,
  placeholder,
  min,
  style = {},
  theme,
}) => {
  return (
    <div className={s.inputWrapper} style={{ ...style }}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${s.input} ${theme}`}
        {...(type === "number" ? { min } : {})}
      />
      {isSearch && (
        <button className={s.searchIcon}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 17L21 21M19.6667 10.3333C19.6667 15.488 15.488 19.6667 10.3333 19.6667C5.17868 19.6667 1 15.488 1 10.3333C1 5.17868 5.17868 1 10.3333 1C15.488 1 19.6667 5.17868 19.6667 10.3333Z"
              stroke={theme === "light" ? "black" : "white"}
            />
          </svg>
        </button>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  isSearch: PropTypes.bool,
  placeholder: PropTypes.string,
  min: PropTypes.number,
};

Input.defaultProps = {
  type: "text",
  isSearch: false,
  placeholder: "",
  min: 0,
};
