import React from 'react';

import { useSignIn } from '../../hooks';
import { SignInFields } from '../../types';
import Loading from '../Loading';
import { StyledForm } from '../SignUp/styles';

function SignIn() {
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
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <input name="email" placeholder="E-mail" value={values.email} onChange={handleChange} />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{isLoading ? <Loading size="SMALL" /> : 'Войти'}</button>
      </StyledForm>
    </>
  );
}

export default SignIn;
