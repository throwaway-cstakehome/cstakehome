import React, { Fragment } from 'react';
import Checkbox from './Checkbox.jsx';
import TableCell from './TableCell.jsx';

const TableRow = ({ data, onDataSelect, selected }) => {
  return (
    <Fragment>
      {
        data.map(({ name, device, path, status }, i) => {
          return (
            <tr key={i}>
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
              <td>
                <TableCell data={path} />
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
