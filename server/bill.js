const pool = require("./db");

//Create a Bill
exports.post = async function (req, res) {
    try{

        const {amount, serviceid, billdate} = req.body;
        const newBillAmount = await pool.query(
            "INSERT INTO bills (amount, serviceid, billdate) VALUES ($1, $2, $3) RETURNING *",
            [amount, serviceid, billdate]
            );

        res.json(newBillAmount.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
};

//Get all bills
exports.listbills = async function (req, res) {

    try{
        const allBills = await pool.query("SELECT *, TO_CHAR(billdate, 'DD/MM/YYYY') AS billdateformatted FROM bills JOIN services on bills.serviceid = services.serviceid ORDER BY billid");
        res.json(allBills.rows)
    } catch (err) {
        console.error(err.message)
    }

};

//Get one bill by ID
exports.getbillbyid = async function (req, res) {

    try{
        const { id } = req.params;
        const bill = await pool.query(
            "SELECT * FROM bills WHERE billid = $1",
            [id]
        );

        res.json(bill.rows[0]);

    } catch (err) {
        console.error(err.message)
    }

};

//Update a bill information
exports.updatebill = async function (req, res) {

    try{
        const { id } = req.params;
        const { amount } = req.body;
        const updateBill = await pool.query(
            //"UPDATE bills SET amount = $1, billdate = $2, ispaid = $3, serviceid = $4 WHERE billid = $5",
            //"UPDATE bills SET amount = $1, ispaid = $2, serviceid = $3 WHERE billid = $4",
            "UPDATE bills SET amount = $1 WHERE billid = $2",
            //[amount, billdate, ispaid, serviceid, id]
            //[amount, ispaid, serviceid, id]
            [amount, id]
        );

        res.json ("Bill was updated");

    } catch (err) {
        console.error(err.message);
    }

};


// Delete a bill
exports.deletebill = async function (req, res) {
    try {
        const { id } = req.params;
        const deleteBill = await pool.query (
            "DELETE from bills WHERE billid =$1",
            [id] 
        );

        res.json ("Bill was deleted!");
    } catch (error) {
        console.error(err.message);
    }
};