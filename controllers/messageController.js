const { messages } = require("../models/messages.js");

function getMessageDetails(req, res) {
  const { messageId } = req.params;
  res.render("messages", { messages: messages, messageId: messageId });
}

module.exports = { getMessageDetails };
