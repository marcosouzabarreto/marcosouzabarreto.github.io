import React from 'react';
import { CaretDown } from 'phosphor-react';

export const Arrow = () => {
  return (
    <button>
      <CaretDown className="m-auto" size={65} />
      <CaretDown className="m-auto mt-[-50px]" size={65} />
    </button>
  );
};
