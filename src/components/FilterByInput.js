import React from 'react';
import Input from 'react-toolbox/lib/input/Input';

const FilterByInput = ({ value, action, label }) => {
  return (
    <Input
      type="text"
      label={label}
      value={value}
      onChange={input => action(input)}
    />
  );
};

export default FilterByInput;
