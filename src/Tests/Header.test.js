import React from 'react';
import { render, getByTestId, fireEvent, screen } from '@testing-library/react';
import Header from '../Components/Header';

const selected = {
  'smss.exe': {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled',
    isChecked: true
  }
};

const allSelected = {
  'smss.exe': {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled',
    isChecked: true
  },
  '1': {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled',
    isChecked: true
  },
  '2': {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled',
    isChecked: true
  },
  '3': {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled',
    isChecked: true
  },
  '4': {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled',
    isChecked: true
  }
};


const onSelectAllData = jest.fn();

test('if items can be downloaded', () => {
  global.alert = jest.fn();

  const { getByTestId } = render(
    <Header
      selectedCount={Object.keys(selected).length}
      onSelectAllData={onSelectAllData}
      checked={false}
      selected={selected}
    />
  )

  const downloadButton = getByTestId('download-button')
  fireEvent.click(downloadButton);
  expect(global.alert).toHaveBeenCalledTimes(1);
});

test('if headercheck indeterminate state is true', () => {
  const { getByTestId } = render(
    <Header
      selectedCount={Object.keys(selected).length}
      onSelectAllData={onSelectAllData}
      checked={false}
      selected={selected}
    />
  )

  const headerCheckbox = getByTestId('header-checkbox');
  expect(headerCheckbox.indeterminate).toBe(true);
})

test('if headercheck indeterminate state is false when nothing selected', () => {
  const { getByTestId } = render(
    <Header
      selectedCount={Object.keys(selected).length}
      onSelectAllData={onSelectAllData}
      checked={false}
      selected={{}}
    />
  )

  const headerCheckbox = getByTestId('header-checkbox');
  expect(headerCheckbox.indeterminate).toBe(false);
})

test('if headercheck indeterminate state is false when 5 items selected', () => {
  const { getByTestId } = render(
    <Header
      selectedCount={Object.keys(selected).length}
      onSelectAllData={onSelectAllData}
      checked={false}
      selected={allSelected}
    />
  )

  const headerCheckbox = getByTestId('header-checkbox');
  expect(headerCheckbox.indeterminate).toBe(false);
})
