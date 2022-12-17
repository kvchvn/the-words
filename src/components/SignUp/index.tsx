import React, { useEffect } from 'react';

import { useSignUp } from '../../hooks';
import { SignUpFields } from '../../types';
import Loading from '../Loading';
import { StyledForm } from './styles';

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
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <input name="name" placeholder="Имя" value={values.name} onChange={handleChange} />
          {errors.name && touched.name ? <span>{errors.name}</span> : null}
        </div>
        <div>
          <input name="email" placeholder="E-mail" value={values.email} onChange={handleChange} />
          {errors.email && touched.email ? <span>{errors.email}</span> : null}
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password ? <span>{errors.password}</span> : null}
        </div>
        <button type="submit">{isLoading ? <Loading size="SMALL" /> : 'Зарегистрироваться'}</button>
      </StyledForm>
    </>
  );
}

export default SignUp;
