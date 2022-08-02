import { useNavigate } from 'react-router-dom';
import { removeUserData, useAppDispatch } from '../redux';

import { clearLocalStorage } from '../utils';
import { ROUTER_PATHS } from '../constants';

const useSignOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    clearLocalStorage();
    dispatch(removeUserData());
    navigate(ROUTER_PATHS.main);
  };

  return { signOut };
};

export default useSignOut;
