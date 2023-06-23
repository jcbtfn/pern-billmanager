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
exports.list = async function (req, res) {

    try{
        const allBills = await pool.query("SELECT * FROM bills JOIN services on bills.serviceid = services.serviceid ORDER BY billid");
        res.json(allBills.rows)
    } catch (err) {
        console.error(err.message)
    }

};