const { messages } = require("../models/messages.js");

function getMessages(req, res) {
  res.render("index", { messages: messages });
}

module.exports = { getMessages };
