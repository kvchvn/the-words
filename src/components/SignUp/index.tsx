import React from 'react';
import { useFormik } from 'formik';

import { useCreateUserMutation } from '../../redux';

import signUpValidationSchema from './validationSchema';
import { SignUpFields } from '../../types';

interface SignUpProps {
  goToSignIn: () => void;
}

function SignUp({ goToSignIn }: SignUpProps) {
  const [createUser, { data: userData }] = useCreateUserMutation();

  const initialValues: SignUpFields = {
    name: '',
    email: '',
    password: '',
  };

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues,
    validationSchema: signUpValidationSchema,
    onSubmit: async (values) => {
      await createUser(values);
      if (userData) {
        goToSignIn();
      }
      // TO-DO: error handling
    },
  });

  return (
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
  );
}

export default SignUp;
