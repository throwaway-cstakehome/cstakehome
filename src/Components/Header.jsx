import React, { Fragment, useRef, useEffect } from 'react';
import Checkbox from './Checkbox.jsx';

const Header = ({ selectedCount, onSelectAllData, selected, checked }) => {
  const checkboxRef = useRef();

  useEffect(() => {
    const value = Object.keys(selected).length;
    checkboxRef.current.indeterminate = value > 0 && value < 5 ? true : false;
    checkboxRef.current.checked = value === 5;
  })

  return (
    <Fragment>
      <th>
        <Checkbox
          onChange={onSelectAllData}
          checked={checked}
          checkboxref={checkboxRef}
        />
        </th>
      <th> { selectedCount > 0 ? selectedCount+'Selected' : 'None Selected'} </th>
      <th>Download Selected</th>
    </Fragment>
  );
}

export default Header;
