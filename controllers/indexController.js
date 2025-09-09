const { messages } = require("../models/messages.js");
const db = require("../db/queries");


async function getMessages(req, res) {
  const messages = await db.getMessagesFromDb();
  res.render("index", { messages: messages });
}

module.exports = { getMessages };
