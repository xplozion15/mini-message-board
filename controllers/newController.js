const db = require("../db/queries");

function renderForm(req, res) {
  res.render("form", {});
}

async function postMessage(req, res) {
  const message = req.body.message;
  const name = req.body.name;

  const messageObject = {
    text: message,
    username: name,
    added: new Date(),
  };

  await db.postMessageToDb(messageObject);

  res.redirect("/");
}

module.exports = { renderForm, postMessage };
