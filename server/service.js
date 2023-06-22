const pool = require("./db");


//Create a Service
exports.post = async function (req, res) {
    try{

        const {typeOfService, provider} = req.body;
        const newServiceType = await pool.query(
            "INSERT INTO servicetype (typeofservice, provider) VALUES($1, $2) RETURNING *",
            [typeOfService, provider]
            );

        res.json(newServiceType.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
};


//Get all service types
exports.list = async function (req, res) {

    try{
        const allServices = await pool.query("SELECT * FROM servicetype ORDER BY serviceid");
        res.json(allServices.rows)
    } catch (err) {
        console.error(err.message)
    }

};


//Get a service
exports.getbyid = async function (req, res) {

    try{
        const { id } = req.params;
        const service = await pool.query(
            "SELECT * FROM servicetype WHERE serviceid = $1",
            [id]
        );

        res.json(service.rows[0]);

    } catch (err) {
        console.error(err.message)
    }

};


//Update a service type
exports.updateservice = async function (req, res) {

    try{
        const { id } = req.params;
        const { typeOfService, provider } = req.body;
        const updateService = await pool.query(
            "UPDATE servicetype SET typeofservice = $1, provider = $2 WHERE serviceid = $3",
            [typeOfService, provider, id]
        );

        res.json ("Service was updated");

    } catch (err) {
        console.error(err.message);
    }

};


// Delete a service type
exports.deleteservice = async function (req, res) {
    try {
        const { id } = req.params;
        const deleteService = await pool.query (
            "DELETE from servicetype WHERE serviceid =$1",
            [id] 
        );

        res.json ("Service was deleted!");
    } catch (error) {
        console.error(err.message);
    }
};