import './App.css';
import React, { Fragment, useState } from 'react';

//components

function App() {

  const [typeOfService, setDescription] = useState("");

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      const body = { typeOfService };
      const response = await fetch("http://localhost:5000/services", {
        method: "POST",
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(body)
      });

      console.log(response);
    } catch (err) {
      
    }
  }

  return (
    <Fragment>
        <h1 className="text-center mt5">PERN - Bill Calculator and Log</h1>
        <form className='d-flex mt-5' onSubmit={onSubmitForm}>
          <input type="text" className='form-control' value={typeOfService} onChange={e => setDescription(e.target.value)} />
          <button className='btn btn-success'>Add</button>
        </form>
    </Fragment>
  );
}

export default App;
