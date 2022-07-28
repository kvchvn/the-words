import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { useSignInUserMutation } from '../../redux';
import { MainSignInResponse, SignInFields } from '../../types';
import { setToLocalStorage } from '../../utils';
import { ROUTER_PATHS } from '../../constants';
import { useAppDispatch } from '../../redux/store';
import { setUserData } from '../../redux/slices/userSlice';

interface SignInProps {
  goToSignUp: () => void;
}

function SignIn({ goToSignUp }: SignInProps) {
  const [signIn, { data: userData }] = useSignInUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: SignInFields = {
    email: '',
    password: '',
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await signIn(values);
    },
  });

  useEffect(() => {
    if (userData) {
      const { message: _, ...mainUserData } = userData;
      setToLocalStorage<MainSignInResponse>('user', mainUserData);
      dispatch(setUserData(mainUserData));
      navigate(ROUTER_PATHS.main);
    }
  }, [userData, navigate, dispatch]);

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
