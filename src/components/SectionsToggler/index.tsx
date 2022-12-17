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
  return (
    <StyledToggler>
      <input
        type="radio"
        name="toggler"
        id="first-toggle"
        onChange={toggle}
        checked={isFirstChecked}
      />
      <label htmlFor="first-toggle">{firstLabelName}</label>
      <input
        type="radio"
        name="toggler"
        id="second-toggle"
        onChange={toggle}
        checked={!isFirstChecked}
      />
      <label htmlFor="second-toggle">{secondLabelName}</label>
    </StyledToggler>
  );
}

export default SectionsToggler;
