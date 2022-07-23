import React from 'react';

interface InputTextProps {
  name: string;
}

function InputText({ name }: InputTextProps) {
  return (
    <div>
      <label htmlFor={name}>{name.toUpperCase()}</label>
      <input type="text" id={name} name={name} />
    </div>
  );
}

export default InputText;
