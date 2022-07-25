import React from 'react';
import { useFormik } from 'formik';

import { SignInFields } from 'types';

interface SignInProps {
  goToSignUp: () => void;
}

function SignIn({ goToSignUp }: SignInProps) {
  const initialValues: SignInFields = {
    email: '',
    password: '',
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="E-mail"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Пароль"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Войти</button>
      <p>
        Еще нет аккаунта? <span onClick={goToSignUp}>Зарегистрироваться</span>
      </p>
    </form>
  );
}

export default SignIn;
