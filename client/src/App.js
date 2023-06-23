import './App.css';
import React, { Fragment } from 'react';

//components

import InputService from './components/services/InputService';
import ListServices from './components/services/ListServices';
import InputBill from './components/bills/InputBill';

function App() {
  return (
    <Fragment>
        <div className="container">
          <InputBill />

        </div> 
    </Fragment>
  );
}

export default App;


// <InputService />
// <ListServices />