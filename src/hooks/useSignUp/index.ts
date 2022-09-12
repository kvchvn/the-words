import { useEffect } from 'react';

import { useFormik } from 'formik';

import { useCreateUserMutation } from '../../redux';
import { SignUpFields } from '../../types';
import { getUserFriendlyErrorMessage } from '../../utils';
import signUpValidationSchema from './validationSchema';

const useSignUp = (initialValues: SignUpFields) => {
  const [createUser, { data: userData, isLoading, isError, error, isSuccess }] =
    useCreateUserMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      createUser(values);
    },
  });

  const { resetForm } = formik;

  useEffect(() => {
    if (isError && error) {
      alert(getUserFriendlyErrorMessage(error, 'authorization'));
      resetForm();
    }
    if (isSuccess) {
      alert(`Регистрация прошла успешно`);
    }
  }, [isError, isSuccess, error, resetForm]);

  return { userData, isLoading, formik };
};

export default useSignUp;
