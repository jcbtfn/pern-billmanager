import './App.css';
import React, { Fragment } from 'react';

//components

import InputService from './components/InputService';
import ListServices from './components/ListServices';

function App() {
  return (
    <Fragment>
        <div className="container">
          <InputService />
          <ListServices />
        </div> 
    </Fragment>
  );
}

export default App;
