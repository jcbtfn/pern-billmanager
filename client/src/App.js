import './App.css';
import React, { Fragment } from 'react';

//components

import InputBills from './components/InputBills';
import ListServices from './components/ListServices';

function App() {
  return (
    <Fragment>
        <div className="container">
          <InputBills />
          <ListServices />
        </div> 
    </Fragment>
  );
}

export default App;
