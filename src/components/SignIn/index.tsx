import React from 'react';

import Loading from '../Loading';

import { useSignIn } from '../../hooks';
import { SignInFields } from '../../types';

interface SignInProps {
  goToSignUp: () => void;
}

function SignIn({ goToSignUp }: SignInProps) {
  const initialValues: SignInFields = {
    email: '',
    password: '',
  };

  const {
    isLoading,
    formik: { values, handleSubmit, handleChange },
  } = useSignIn(initialValues);

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="E-mail" value={values.email} onChange={handleChange} />
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
    </>
  );
}

export default SignIn;
