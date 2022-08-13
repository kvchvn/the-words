import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { setUserData, useAppDispatch, useSignInUserMutation } from '../redux';
import { getUserFriendlyErrorMessage, setToLocalStorage } from '../utils';
import { ROUTER_PATHS } from '../constants';
import { MainSignInResponse, SignInFields } from '../types';

const useSignIn = (initialValues: SignInFields) => {
  const [signIn, { data: userData, isLoading, isError, error }] = useSignInUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await signIn(values);
    },
  });

  const { resetForm } = formik;

  useEffect(() => {
    if (userData) {
      const { message: _, ...mainUserData } = userData;
      setToLocalStorage<MainSignInResponse>('user', mainUserData);
      dispatch(setUserData(mainUserData));
      navigate(ROUTER_PATHS.main);
    }
    if (isError && error) {
      alert(getUserFriendlyErrorMessage(error, 'authorization'));
      resetForm();
    }
  }, [userData, isError, error, resetForm, navigate, dispatch]);

  return { isLoading, formik };
};

export default useSignIn;
