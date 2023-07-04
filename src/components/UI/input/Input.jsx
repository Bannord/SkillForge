import React from "react";

import './Input.scss'

const Input = ({ value, onChange, placeholder }) => {
  return (
    <div className="input_wrapper">
      <h3>Введите логин пользователя Github, которого хотите найти</h3>
      <input
        type="text"
        className="input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
