const db = require("../db/queries");

async function getMessageDetails(req, res) {
  const { messageId } = req.params;
  const messages = await db.getMessageById(messageId);

  res.render("messages", { messages: messages, messageId: messageId });
}

module.exports = { getMessageDetails };
