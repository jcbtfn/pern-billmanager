import React, { Fragment, useState } from "react";

const EditService = ({ service }) => {

    const [typeOfService, setTypeOfService] = useState(service.typeofservice);
    const [provider, setProvider] = useState(service.provider);

    //Edit description

    const updateService = async e => {
        e.preventDefault();
        try {
            const body = { typeOfService, provider };
            const response = await fetch(`http://localhost:5000/services/${service.serviceid}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>

        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${service.serviceid}`}>
            Edit
        </button>

        <div 
            class="modal" 
            id={`id${service.serviceid}`} 
            onClick={() => (setTypeOfService(service.typeofservice), setProvider(service.provider))}
        >
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Edit Service</h4>
                        <button type="button" class="close" data-dismiss="modal"
                            onClick={() => (setTypeOfService(service.typeofservice), setProvider(service.provider))}>
                            &times;
                        </button>
                    </div>

                    <div class="modal-body">
                        Service -change this-: <input type='text' className="form-control" value={typeOfService} 
                            onChange={e => setTypeOfService(e.target.value)} />
                        Provider -change this-: <input type='text' className="form-control" value={provider}
                            onChange={e => setProvider(e.target.value)} />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-dismiss="modal"
                            onClick={e => updateService(e)}
                        >
                            Edit
                        </button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal"
                            onClick={() => (setTypeOfService(service.typeofservice), setProvider(service.provider))}>
                            Close
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </Fragment>

};

export default EditService;