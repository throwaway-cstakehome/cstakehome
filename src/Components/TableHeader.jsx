import React, { Fragment } from 'react';
import TableCell from './TableCell.jsx';

const TableHeader = ({ names }) => {
  names.unshift('');
  return (
    <Fragment>
      {
        names.map((name, i) => {
          return (
            <th
            key={name+i}
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
