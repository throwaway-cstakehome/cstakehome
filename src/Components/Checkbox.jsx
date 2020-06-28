import React from 'react';

const Checkbox = (props) => {
  let { checked, onChange, checkboxref } = props;

  return (
    <input
      type="checkbox"
      onChange={onChange}
      checked={checked}
      ref={checkboxref}
      {...props}
    />
  );
}

export default Checkbox;
