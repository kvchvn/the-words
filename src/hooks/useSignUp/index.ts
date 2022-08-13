import { useEffect } from 'react';
import { useFormik } from 'formik';

import { useCreateUserMutation } from '../../redux';
import { SignUpFields } from '../../types';
import signUpValidationSchema from './validationSchema';
import { getUserFriendlyErrorMessage } from '../../utils';

const useSignUp = (initialValues: SignUpFields) => {
  const [createUser, { data: userData, isLoading, isError, error }] = useCreateUserMutation();

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
  }, [isError, error, resetForm]);

  return { userData, isLoading, formik };
};

export default useSignUp;
