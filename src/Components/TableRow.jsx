import React, { Fragment } from 'react';

import Checkbox from './Checkbox.jsx';
import TableCell from './TableCell.jsx';

import style from './TableRow.module.css';

const TableRow = ({ data, onDataSelect, selected }) => {
  return (
    <Fragment>
      {
        data.map(({ name, device, path, status }, i) => {
          return (
            <tr
              className={`${style.Data} ${!!selected[name] ? style.Checked : ''}`}
              key={i}
            >
              <td>
                { <Checkbox
                    name={name}
                    onChange={() => onDataSelect(name)}
                    checked={(selected[name] && selected[name].isChecked) || false}
                  /> }
              </td>
              <td>
                <TableCell data={name} />
              </td>
              <td>
                <TableCell data={device} />
              </td>
              <td className={style.Status}>
                <TableCell data={path} />
                { status === 'available' ? <div className={style.AvailableStatus}/> : ''}
              </td>
              <td>
                <TableCell data={status} />
              </td>
            </tr>
          );
        })
      }
    </Fragment>
  );
}

export default TableRow;
