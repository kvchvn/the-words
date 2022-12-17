import { useCallback, useState } from 'react';

const useToggle = () => {
  const [value, setValue] = useState(true);

  const toggleValue = () => setValue((prevValue) => !prevValue);

  const setValueToFalse = useCallback(() => setValue(false), []);

  const setValueToTrue = useCallback(() => setValue(true), []);

  return { setValueToFalse, setValueToTrue, toggleValue, value };
};

export default useToggle;
