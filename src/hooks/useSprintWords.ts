import { useLocation } from 'react-router-dom';

const useSprintWords = () => {
  const { state } = useLocation();
  return { state };
};

export default useSprintWords;
