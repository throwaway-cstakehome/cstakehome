import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from '../Components/Checkbox';

const data = [
  {name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'}
];

const name = 'smss.exe';

const selected = {
  'smss.exe': {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled',
    isChecked: true
  }
};

test('if the checkbox is checked', () => {
  const onDataSelect = jest.fn();

  const { getByTestId } = render(
    <Checkbox
      name={name}
      onChange={onDataSelect}
      checked={selected[name]}
    />
    );
  const checkbox = getByTestId('checkbox');
  expect(checkbox.checked).toBe(true);
})

test('if the checkbox is unchecked', () => {
  const onDataSelect = jest.fn();

  const { getByTestId } = render(
    <Checkbox
      name={name}
      onChange={onDataSelect}
      checked={false}
    />
    );
  const checkbox = getByTestId('checkbox');
  expect(checkbox.checked).toBe(false);
})
