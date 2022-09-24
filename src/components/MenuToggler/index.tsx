import React from 'react';

import { StyledCheckbox, StyledLabel } from './styles';

interface MenuTogglerProps {
  forwardRef: React.RefObject<HTMLInputElement>;
}

function MenuToggler({ forwardRef }: MenuTogglerProps) {
  return (
    <>
      <StyledCheckbox ref={forwardRef} />
      <StyledLabel>
        <span className="burger-line burger-line_top" />
        <span className="burger-line burger-line_middle" />
        <span className="burger-line burger-line_bottom" />
      </StyledLabel>
    </>
  );
}

export default MenuToggler;
