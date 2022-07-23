import React from 'react';

interface InputBoxProps {
  name: string;
  type?: 'text' | 'password' | 'email';
}

function InputBox({ name, type }: InputBoxProps) {
  return (
    <div>
      <label htmlFor={name}>{name.toUpperCase()}</label>
      <input type={type || 'text'} id={name} name={name} />
    </div>
  );
}

export default InputBox;
