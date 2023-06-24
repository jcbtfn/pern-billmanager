import React, { Fragment, useEffect, useState } from "react";

//import EditService from "./EditService";
import ListServices from "../services/ListServices";
import EditBill from "./EditBill";

const ListBills = () => {

    const [services, setServices] = useState([]);
    const [bills, setBills] = useState([]);

    // delete a service

    const deleteBill = async id => {
        try {
            const deleteBill = await fetch(`http://localhost:5000/bills/${id}`, {
                method: "DELETE"
            });
            
            setBills(bills.filter(bill => bill.billid !== id));

        } catch (err) {
            console.error(err.message);
        }
    }

    // get all the saved services and providers

    const getServices = async() => {
        try {

            const response = await fetch("http://localhost:5000/services");
            const jsonData = await response.json();

            setServices(jsonData);
            
        } catch (err) {
            console.error(err.message);
        }
    };

    const getBills = async() => {
        try {

            const response = await fetch("http://localhost:5000/bills");
            const jsonData = await response.json();

            setBills(jsonData);
            
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getServices();
    }, []);

    useEffect(() => {
        getBills();
    }, []);
    
    console.log(services);

    return <Fragment>
        {" "}
        <table class="table table-striped mt-5 text-center">
            <thead>
                <tr>
                    <th>Service</th>
                    <th>Provider</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Paid</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>

                    <th><EditService service={service} /></th>
                                            <th>
                            <button className="btn btn-danger"
                                    onClick={() => deleteService(service.serviceid)}>
                                Delete
                            </button>
                        </th>

                </tr> */}
                {/*services.map(service => (
                    <tr key={service.serviceid}>
                        <td>{service.typeofservice}</td>
                        <td>{service.provider}</td>
                    </tr>
                ))*/}
                {bills.map(bill => (
                    <tr key={bill.billid}>
                        <td>{bill.typeofservice}</td>
                        <td>{bill.provider}</td>
                        <td>{bill.amount}</td>
                        <td>{bill.billdateformatted}</td>
                        <td>{bill.ispaid ? "IS PAID" : "NOT PAID"}</td>
                        <th><EditBill bill={bill} /></th>
                        <th>
                            <button className="btn btn-danger"
                                    onClick={() => deleteBill(bill.billid)}>
                                Delete
                            </button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default ListBills;