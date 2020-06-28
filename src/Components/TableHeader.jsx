import React, { Fragment } from 'react';
import TableCell from './TableCell.jsx';

import style from './TableHeader.module.css';

const TableHeader = ({ names }) => {
  names.unshift('');
  return (
    <Fragment>
      {
        names.map((name, i) => {
          return (
            <th
              key={name+i}
              className={style.ColumnNames}
            >
              <TableCell data={name} />
            </th>
          )
        })
      }
    </Fragment>
  )
}

export default TableHeader;
