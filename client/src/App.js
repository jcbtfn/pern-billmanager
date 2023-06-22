import './App.css';
import React, { Fragment } from 'react';

//components

import InputService from './components/services/InputService';
import ListServices from './components/services/ListServices';

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
