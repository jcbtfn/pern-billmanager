import './App.css';
import React, { Fragment } from 'react';

//components

import InputService from './components/services/InputService';
import ListServices from './components/services/ListServices';
import InputBill from './components/bills/InputBill';
import ListBills from './components/bills/ListBills';

function App() {
  return (
    <Fragment>
        <div className="container">
          <InputBill />
          <ListBills />

        </div> 
    </Fragment>
  );
}

export default App;


// <InputService />
// <ListServices />