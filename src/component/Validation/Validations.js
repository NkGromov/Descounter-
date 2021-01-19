import React from "react";

export const passwordVaild = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Введите пароль";
  } else if (values.password.length < 10) {
    errors.password = "Пароль должен иметь не мнее 10 символов";
  }
  if (!values.passwordTwo) {
    errors.passwordTwo = "Введите пароль";
  } else if (values.passwordTwo !== values.password) {
    errors.passwordTwo = "Пароль не совпадает";
  }

  return errors;
};

export const emailValid = (value) => {
  let error;
  if (!value) {
    error = "Введите почту";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = "Вы ввели не правильную почту";
  }
  return error;
};

export const loginRegValid = (value) => {
  let error;
  if (!value) {
    error = "Введите логин";
  } else if (!/^[a-z0-9]+$/i.test(value)) {
    error = "Ник должен состоять из латиницы";
  } else if (value.length < 4) {
    error = "Ник должен иметь не мнее 4 символов";
  }
  return error;
};

export const termValid = (value) => {
  let error;
  if (!value) {
    error = "Введите поиск";
  }
  return error;
};

export const onePasswordVaild = (value) => {
  let error;
  if (!value) {
    error = "Введите пароль";
    return error;
  }
};

export const loginLogValid = (value) => {
  let error;
  if (!value) {
    error = "Введите логин";
    return error;
  }
};
