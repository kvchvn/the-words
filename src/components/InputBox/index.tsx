import React from 'react';

import { toUpperCaseFirstLetter } from '../../utils';

interface InputBoxProps {
  name: string;
  type?: 'text' | 'password' | 'email';
}

function InputBox({ name, type }: InputBoxProps) {
  return (
    <div>
      <label htmlFor={name}>{toUpperCaseFirstLetter(name)}</label>
      <input type={type || 'text'} id={name} name={name} />
    </div>
  );
}

export default InputBox;
