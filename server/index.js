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
app.get("/services", service.listservices);
app.get("/services/:id", service.getservicebyid);
app.put("/services/:id", service.updateservice);
app.delete("/services/:id", service.deleteservice);

//BILLS - Go bill.js//
app.post("/bills", bill.post);
app.get("/bills", bill.listbills);
app.get("bills/:id", bill.getbillbyid)
app.delete("/bills/:id", bill.deletebill)

app.listen(5000, () => {
    console.log("\nServer has started on port 5000\n");
});