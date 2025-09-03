const { messages } = require("../models/messages.js");

function renderForm(req, res) {
  res.render("form", { messages: messages });
}

function postMessage(req, res) {
  const message = req.body.message;
  const name = req.body.name;
  messages.push({
    text: message,
    user: name,
    added: new Date(),
    messageId: messages.length,
  });
  res.redirect("/");
}

module.exports = { renderForm, postMessage };
