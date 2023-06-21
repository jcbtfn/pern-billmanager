import React, { Fragment, useState } from "react";

const EditService = ({ service }) => {

    const [typeofservice, setService] = useState(service.typeofservice);
    const [provider, setProvider] = useState(service.provider);

    return <Fragment>

        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${service.serviceid}`}>
            Edit
        </button>

        <div class="modal" id={`id${service.serviceid}`}>
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Edit Service</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        Service -change this-: <input type='text' className="form-control" value={typeofservice} 
                            onChange={e => setService(e.target.value)} />
                        Provider -change this-: <input type='text' className="form-control" value={provider}
                            onChange={e => setService(e.target.value)} />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-dismiss="modal">Edit</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </Fragment>

};

export default EditService;