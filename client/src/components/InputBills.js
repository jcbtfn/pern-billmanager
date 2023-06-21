import React, { Fragment, useState } from 'react';

const InputBill = () => {

    const [typeOfService, setTypeOfService] = useState("");
    const [provider, setProvider] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { typeOfService, provider };
            const response = await fetch("http://localhost:5000/services", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt5">PERN - Bill Calculator and Log</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type="text" className='form-control' value={typeOfService} onChange={e => setTypeOfService(e.target.value)} />
                <input type="text" className='form-control' value={provider} onChange={e => setProvider(e.target.value)} />
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    );
};



export default InputBill;