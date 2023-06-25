import React, { Fragment, useState } from "react";
//import { updatebill } from "../../../../server/bill";

const EditBill = ({ bill }) => {

    //const [typeOfService, setTypeOfService] = useState(service.typeofservice);
    //const [provider, setProvider] = useState(service.provider);

    const [billAmount, setAmount] = useState(bill.amount);
    const [billDate, setBillDate] = useState(bill.billdateformatted);
    const [isPaid, setIsPaid] = useState(bill.ispaid);
    const [billServiceId, setBillServiceId] = useState(bill.serviceid);

    //Edit Bill

    const updateBill = async e => {
        e.preventDefault();
        try {
            const body = { billAmount, billDate, isPaid, billServiceId };
            const response = await fetch(`http://localhost:5000/bills/${bill.billid}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);

            //window.location = "/";

            console.log(response);

        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>

        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#billid${bill.billid}`}>
            Edit
        </button>

        <div 
            class="modal" 
            id={`billid${bill.billid}`} 
            onClick={() => (setAmount(bill.amount), setBillDate(bill.billdateformatted), setIsPaid(bill.ispaid), setBillServiceId(bill.billServiceId))}
        >
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Edit Bill</h4>
                        <button type="button" class="close" data-dismiss="modal"
                            onClick={() => (setAmount(bill.amount), setBillDate(bill.billdateformatted), setIsPaid(bill.ispaid), setBillServiceId(bill.billServiceId))}>
                            &times;
                        </button>
                    </div>

                    <div class="modal-body">
                        Amount -change this-: <input type='text' className="form-control" value={billAmount} 
                            onChange={e => setAmount(e.target.value)} />
                        Bill Date -change this-: <input type='text' className="form-control" value={billDate}
                            onChange={e => setBillDate(e.target.value)} />
                        Is Paid -change this-: <input type='text' className="form-control" value={isPaid} 
                            onChange={e => setIsPaid(e.target.value)} />
                        billServiceId -change this-: <input type='text' className="form-control" value={billServiceId}
                            onChange={e => setBillServiceId(e.target.value)} />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-dismiss="modal"
                            onClick={e => updateBill(e)}
                        >
                            Edit
                        </button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal"
                            onClick={() => (setAmount(bill.amount), setBillDate(bill.billdateformatted), setIsPaid(bill.ispaid), setBillServiceId(bill.billServiceId))}>
                            Close
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </Fragment>

};

export default EditBill;