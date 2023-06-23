const pool = require("./db");

//Create a Bill
exports.post = async function (req, res) {
    try{

        const {amount, billdate} = req.body;
        const newBillAmount = await pool.query(
            "INSERT INTO bills (amount, billdate) VALUES ($1, $2) RETURNING *",
            [amount, billdate]
            );

        res.json(newBillAmount.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
};