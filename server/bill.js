const pool = require("./db");

//Create a Bill
exports.post = async function (req, res) {
    try{

        const {amount} = req.body;
        const newBillAmount = await pool.query(
            "INSERT INTO billamount (amount) VALUES($1) RETURNING *",
            [amount]
            );

        res.json(newBillAmount.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
};