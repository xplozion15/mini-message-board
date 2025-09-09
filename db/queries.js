const pool = require("./pool");


async function  getMessagesFromDb() {
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}


module.exports = {getMessagesFromDb};