import React, { Fragment, useState } from 'react';

const InputBill = () => {

    const [amount, setAmount] = useState("");
    const [serviceid, setServiceId] = useState("");
    const [billdate, setBillDate] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { amount, serviceid, billdate };
            const response = await fetch("http://localhost:5000/bills", {
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
            <h1 className="text-center mt5">Billing period: XXXX-XX</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type="text" className='form-control' value={amount} onChange={e => setAmount(e.target.value)} />
                <input type="number" className='form-control' value={serviceid} onChange={e => setServiceId(e.target.value)} />
                <input type="date" className='form-control' value={billdate} onChange={e => setBillDate(e.target.value)} />
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    );
};



export default InputBill;