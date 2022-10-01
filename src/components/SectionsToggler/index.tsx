import React from 'react';

import { StyledToggler } from './styles';

interface SectionsTogglerProps {
  firstLabelName: string;
  secondLabelName: string;
  isFirstChecked: boolean;
  toggle: () => void;
}

function SectionsToggler({
  isFirstChecked,
  firstLabelName,
  secondLabelName,
  toggle,
}: SectionsTogglerProps) {
  const handleChange = () => {
    toggle();
  };

  return (
    <StyledToggler>
      <input
        type="radio"
        name="toggler"
        id="sign-up"
        onChange={handleChange}
        checked={isFirstChecked}
      />
      <label htmlFor="sign-up">{firstLabelName}</label>
      <input
        type="radio"
        name="toggler"
        id="sign-in"
        onChange={handleChange}
        checked={!isFirstChecked}
      />
      <label htmlFor="sign-in">{secondLabelName}</label>
    </StyledToggler>
  );
}

export default SectionsToggler;
