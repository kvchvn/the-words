import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { MIN_GROUP, ROUTER_PATHS } from '../constants';
import { removeUserData, useAppDispatch } from '../redux';
import { goToGroup } from '../redux/slices/wordsListSlice';
import { clearLocalStorage } from '../utils';

const useSignOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOut = useCallback(() => {
    clearLocalStorage();
    toast.error('Вас будет не хватать...');
    dispatch(removeUserData());
    dispatch(goToGroup(MIN_GROUP));
    navigate(ROUTER_PATHS.main);
  }, [dispatch, navigate]);

  return { signOut };
};

export default useSignOut;
