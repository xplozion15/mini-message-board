const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = (await db.getMessagesFromDb()).reverse();

  res.render("index", { messages: messages });
}

module.exports = { getMessages };
