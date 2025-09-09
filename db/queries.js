const pool = require("./pool");

async function getMessagesFromDb() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(messageId) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE messageid = $1",
    [messageId],
  );

  return rows;
}

async function postMessageToDb(messageObject) {
  const text = messageObject.text;
  const username = messageObject.username;
  const added = messageObject.added;

  await pool.query(
    "INSERT INTO messages (username, added, text) VALUES ($1, $2, $3)",
    [username, added, text],
  );
}

module.exports = { getMessagesFromDb, getMessageById, postMessageToDb };
