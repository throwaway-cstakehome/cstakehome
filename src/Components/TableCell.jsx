import React from 'react';

import style from './TableCell.module.css'

const TableCell = ({ data }) => {
  return (
    <div className={style.Cell}>
      { data }
    </div>
  );
}

export default TableCell;
