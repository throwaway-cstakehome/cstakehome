import React, { useState } from 'react';
import TableHeader from './TableHeader.jsx';
import TableRow from './TableRow.jsx';
import Header from './Header.jsx';

import style from './Table.module.css';

const Table = ({ data }) => {
  const [selected, setSelected] = useState({});
  const [selectAllCheckBox, setSelectAllCheckBox] = useState(false);
  const columnNames = data.length > 1 ? Object.keys(data[0]) : [];

  const handleSelectData = (name) => {
    if(!(name in selected)) {
      const selectedData = data.find((d) => d.name === name);
      setSelected({
        ...selected,
        [name]: {
          name,
          isChecked: true,
          ...selectedData
        }
      })
    } else {
      delete selected[name];
      setSelected({
        ...selected
      });
    }
  }

  const handleSelectAllData = () => {
    const allSelectedData = {};
    const selectedLength = Object.keys(selected).length;
    data.forEach((d) => {
      const { name } = d;
      allSelectedData[name] = {
        ...d,
        isChecked: true
      }
    })

    // selects all check boxes
    if(selectedLength === 0) {
      setSelected(allSelectedData);
      setSelectAllCheckBox(!selectAllCheckBox);

      // deselects all checkboxes
    } else if (selectedLength === 5) {
      setSelected({})

      // corrects the value when clicking the select all checkbox 2 times.
      if(selectAllCheckBox) setSelectAllCheckBox(!selectAllCheckBox);
    } else {

      // partial cases
      // deselects data selectAllCheckBox was true
      if(selectAllCheckBox) {
        setSelected({})
      } else {

        // selects all data selectAllCheckBox was false
        setSelected({
          ...allSelectedData
        })
      }
      setSelectAllCheckBox(!selectAllCheckBox);
    }
  }

  return (
    <div className={style.Container}>
      <div className={style.HeaderRow}>
        <Header
          selectedCount={Object.keys(selected).length}
          onSelectAllData={handleSelectAllData}
          checked={selectAllCheckBox}
          selected={selected}
        />
      </div>
      <table className={style.Table}>
        <thead>
          <tr>
            <TableHeader names={columnNames} />
          </tr>
        </thead>
        <tbody>
          <TableRow data={data} onDataSelect={handleSelectData} selected={selected} />
        </tbody>
      </table>
    </div>
  )
};

export default Table;
