import { useNavigate } from 'react-router-dom';
import { removeUserData, useAppDispatch } from '../redux';

import { clearLocalStorage } from '../utils';
import { ROUTER_PATHS } from '../constants';
import { useCallback } from 'react';

const useSignOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOut = useCallback(() => {
    clearLocalStorage();
    dispatch(removeUserData());
    navigate(ROUTER_PATHS.main);
  }, [dispatch, navigate]);

  return { signOut };
};

export default useSignOut;
