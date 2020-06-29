import React from 'react';

const Checkbox = (props) => {
  let { checked, checkboxref } = props;

  return (
    <input
      data-testid='checkbox'
      type="checkbox"
      checked={checked}
      ref={checkboxref}
      {...props}
    />
  );
}

export default Checkbox;
