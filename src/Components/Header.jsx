import React, { Fragment, useRef, useEffect } from 'react';
import Checkbox from './Checkbox.jsx';

import style from './Header.module.css';

import downloadIcon from '../download.svg';

const Header = ({ selectedCount, onSelectAllData, selected, checked }) => {
  const checkboxRef = useRef();

  const handleDownload = () => {
    let alertStr = 'The following items will be downloaded\n'
    for(let item in selected) {
      const { path, device, status } = selected[item];
      if(status === 'available') {
        alertStr += `${device}\n${path}\n`;
      } else {
        alertStr = `The following items cannot be downloaded:\n${path} ${device}`
        break;
      }
    }
    Object.keys(selected).length > 0 ? alert(alertStr) : alert('No items selected')
  };

  useEffect(() => {
    const value = Object.keys(selected).length;
    checkboxRef.current.indeterminate = value > 0 && value < 5 ? true : false;
    checkboxRef.current.checked = value === 5;
  })

  return (
    <Fragment>
      <Checkbox
        onChange={onSelectAllData}
        checked={checked}
        checkboxref={checkboxRef}
      />
      <div> { selectedCount > 0 ? `Selected ${selectedCount}` : 'None Selected'} </div>
      <div onClick={handleDownload}>
        <img className={style.DownloadIcon} src={downloadIcon} alt='downloadicon'/>
        Download Selected
      </div>
    </Fragment>
  );
}

export default Header;
