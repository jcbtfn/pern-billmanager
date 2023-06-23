import React, { Fragment, useEffect, useState } from "react";

import EditService from "./EditService";

const ListServices = () => {

    const [services, setServices] = useState([]);

    // delete a service

    const deleteService = async id => {
        try {
            const deleteService = await fetch(`http://localhost:5000/services/${id}`, {
                method: "DELETE"
            });
            
            setServices(services.filter(service => service.serviceid !== id));

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

    useEffect(() => {
        getServices();
    }, []);
    
    console.log(services);

    return <Fragment>
        {" "}
        <table class="table table-striped mt-5 text-center">
            <thead>
                <tr>
                    <th>Service</th>
                    <th>Provider</th>
                    <th>Fixed Direct Debit</th>
                    <th>Active</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}
                {services.map(service => (
                    <tr key={service.serviceid}>
                        <td>{service.typeofservice}</td>
                        <td>{service.provider}</td>
                        <td>Direct Debit</td>
                        <td>Active</td>
                        <th><EditService service={service} /></th>
                        <th>
                            <button className="btn btn-danger"
                                    onClick={() => deleteService(service.serviceid)}>
                                Delete
                            </button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default ListServices;