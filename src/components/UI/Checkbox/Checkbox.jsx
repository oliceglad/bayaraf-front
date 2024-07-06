import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./Checkbox.module.scss";

export const Checkbox = ({ label, checked: initialChecked, onChange, style={}}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <label className={s.customCheckbox} style={{...style}}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className={s.customCheckbox__box}></span>
      {label && <span className={s.customCheckbox__label}>{label}</span>}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  label: "",
  checked: false,
};
