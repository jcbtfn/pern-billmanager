const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//Create a servicetype

app.post("/services", async (req, res) => {
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
})

//Get all service types

app.get("/services", async (req, res) => {

    try{
        const allServices = await pool.query("SELECT * FROM servicetype");
        res.json(allServices.rows)
    } catch (err) {
        console.error(err.message)
    }

});

//Get a service

app.get("/services/:id", async (req, res) => {

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

});

//Update a service type

app.put("/services/:id", async (req, res) => {

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

});

// Delete a service type

app.delete("/services/:id", async (req, res) => {
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
});


app.listen(5000, () => {
    console.log("server has started on port 5000");
});