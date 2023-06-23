const express = require("express");
const app = express();
const cors = require("cors");

var service = require('./service');
var bill = require('./bill')

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//SERVICES - Go service.js//
app.post("/services", service.post);
app.get("/services", service.list);
app.get("/services/:id", service.getbyid);
app.put("/services/:id", service.updateservice);
app.delete("/services/:id", service.deleteservice);

//BILLS - Go bill.js//
app.post("/bills", bill.post);
app.get("/bills", bill.list);

app.listen(5000, () => {
    console.log("\nServer has started on port 5000\n");
});