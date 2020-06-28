import React from 'react';

import Table from './Components/Table.jsx';

import { data } from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Table
        data={data}
      />
    </div>
  );
}

export default App;
