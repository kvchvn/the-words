import React, { useEffect } from 'react';

import { useSignUp } from '../../hooks';
import { SignUpFields } from '../../types';
import Loading from '../Loading';

interface SignUpProps {
  goToSignIn: () => void;
}

function SignUp({ goToSignIn }: SignUpProps) {
  const initialValues: SignUpFields = {
    name: '',
    email: '',
    password: '',
  };

  const {
    userData,
    isLoading,
    formik: { values, touched, errors, handleSubmit, handleChange },
  } = useSignUp(initialValues);

  useEffect(() => {
    if (userData) {
      goToSignIn();
    }
  }, [userData, goToSignIn]);

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Имя" value={values.name} onChange={handleChange} />
        {errors.name && touched.name ? <span>{errors.name}</span> : null}
        <input name="email" placeholder="E-mail" value={values.email} onChange={handleChange} />
        {errors.email && touched.email ? <span>{errors.email}</span> : null}
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password ? <span>{errors.password}</span> : null}
        <button type="submit">Зарегистрироваться</button>
        <p>
          Уже есть аккаунт? <span onClick={goToSignIn}>Войти</span>
        </p>
      </form>
    </>
  );
}

export default SignUp;
