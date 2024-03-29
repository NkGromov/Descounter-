import vk from "../../../image/vk.png";
import google from "../../../image/google.png";
import faceBook from "../../../image/faceBook.png";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginLogValid, onePasswordVaild } from "../../Validation/Validations";
import { login, SetNullErrorLohReduserCreator } from "../../../redux/UserReduser";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  let error = useSelector((state) => state.UserReduser.errorLogLogin);
  const [errorLog, setErrorLog] = useState(null);

  useEffect(() => {
    if (error) {
      setErrorLog(error);
    }
  }, [error]);

  useEffect(() => {
    return () => {
      dispatch(SetNullErrorLohReduserCreator());
    };
  }, []);
  return (
    <>
      <Formik
        initialValues={{ login: "", password: "", checkBox: false }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login(values.login, values.password, values.checkBox));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className="container">
              <section className="loginOrReg">
                <div className="loginOrReg__wrapper">
                  <h2 className="loginOrReg__title">Авторизация</h2>
                  <div className="loginOrReg__item">
                    <span className="loginOrReg__upperText">Введите логин</span>
                    <Field
                      type="text"
                      name="login"
                      validate={loginLogValid}
                      className={
                        errors.login && touched.login ? "loginOrReg__inp loginOrReg__inp--error" : "loginOrReg__inp"
                      }
                    />
                    <ErrorMessage name="login" className="loginOrReg__error" component="div" />
                  </div>
                  <div className="loginOrReg__item">
                    <span className="loginOrReg__upperText">Введите пароль</span>
                    <Field
                      type="password"
                      name="password"
                      validate={onePasswordVaild}
                      className={
                        errors.password && touched.password
                          ? "loginOrReg__inp loginOrReg__inp--error"
                          : "loginOrReg__inp"
                      }
                    />
                    <ErrorMessage name="password" className="loginOrReg__error" component="div" />
                  </div>
                  <label className="loginOrReg__rememberInner">
                    <Field type="checkbox" name="checkBox" className="loginOrReg__rememberCheck" />
                    <span className="checkBox loginOrReg__rememberCheckBox"></span>
                    <span className="loginOrReg__rememberText">Запомнить меня</span>
                  </label>
                  <button
                    className={isSubmitting ? "loginOrReg__btn" : "loginOrReg__btn loginOrReg__btn--disable"}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Войти
                  </button>
                  <div className={`loginOrReg__error ${!errorLog ? `displayNone` : ""}`}>
                    {errorLog ? errorLog : ""}
                  </div>
                  <h2 className="loginOrReg__title loginOrReg__margin">Быстрый Вход</h2>
                  <div className="loginOrReg__quickWrapper">
                    <a href="#" className="loginOrReg__quickLink">
                      <img src={google} alt="Иконка" className="loginOrReg__quickImg" />
                    </a>
                    <a href="#" className="loginOrReg__quickLink">
                      <img src={vk} alt="Иконка" className="loginOrReg__quickImg" />
                    </a>
                    <a href="#" className="loginOrReg__quickLink">
                      <img src={faceBook} alt="Иконка" className="loginOrReg__quickImg" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
