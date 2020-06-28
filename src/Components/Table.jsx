import React, { Fragment, useState } from 'react';
import TableHeader from './TableHeader.jsx';
import TableRow from './TableRow.jsx';
import Header from './Header.jsx';

const Table = ({ data }) => {
  const [selected, setSelected] = useState({});
  const [selectAllCheckBox, setSelectAllCheckBox] = useState(false);
  const columnNames = data.length > 1 ? Object.keys(data[0]) : [];

  const handleSelectData = (name) => {
    if(!(name in selected)) {
      setSelected({
        ...selected,
        [name]: {
          name,
          isChecked: true
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
        name: name,
        isChecked: true
      }
    })

    if(selectedLength === 0) {
      setSelected(allSelectedData);
      setSelectAllCheckBox(!selectAllCheckBox);
    } else if (selectedLength === 5) {
      setSelected({})
      if(selectAllCheckBox) setSelectAllCheckBox(!selectAllCheckBox);
    } else {
      if(selectAllCheckBox) {
        setSelected({})
      } else {
        setSelected({
          ...allSelectedData
        })
      }
      setSelectAllCheckBox(!selectAllCheckBox);
    }
  }

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <Header
              selectedCount={Object.keys(selected).length}
              onSelectAllData={handleSelectAllData}
              checked={selectAllCheckBox}
              selected={selected}
            />
          </tr>
          <tr>
            <TableHeader names={columnNames} />
          </tr>
        </thead>
        <tbody>
          <TableRow data={data} onDataSelect={handleSelectData} selected={selected} />
        </tbody>
      </table>
    </Fragment>
  )
};

export default Table;
